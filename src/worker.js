/**
 * Cloudflare Worker — sensor-measure.com
 * Handles API routes (/api/*) and passes everything else to static assets.
 * Email sending via Tencent Enterprise Email SMTP (smtp.exmail.qq.com).
 *
 * On contact form submission, sends TWO emails:
 *   1. Inquiry notification to Freya@sensor-measure.com (company inbox)
 *   2. Auto-confirmation to the customer's email address
 */

import { connect } from 'cloudflare:sockets'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    // ── API Routes ──────────────────────────────────────────────
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContactForm(request, env)
    }

    // ── Static Assets (SPA) ─────────────────────────────────────
    return env.ASSETS.fetch(request)
  },
}

// ── Contact Form Handler ────────────────────────────────────────
async function handleContactForm(request, env) {
  const jsonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  try {
    const data = await request.json()

    // Honeypot check (spam bot protection)
    if (data.website) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders })
    }

    // Validate required fields
    const required = ['name', 'email', 'message']
    for (const field of required) {
      if (!data[field] || !String(data[field]).trim()) {
        return new Response(
          JSON.stringify({ success: false, message: `Missing required field: ${field}` }),
          { status: 400, headers: jsonHeaders }
        )
      }
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address' }),
        { status: 400, headers: jsonHeaders }
      )
    }

    // SMTP credentials
    const SMTP_USER = env.SMTP_USER || 'Freya@sensor-measure.com'
    const SMTP_PASS = env.SMTP_PASS

    if (!SMTP_PASS) {
      console.error('SMTP_PASS secret not configured')
      return new Response(
        JSON.stringify({ success: false, message: 'Email service not configured. Please contact us directly at Freya@sensor-measure.com' }),
        { status: 500, headers: jsonHeaders }
      )
    }

    // ── Email 1: Send inquiry notification to company inbox ──
    const inquiryMail = {
      from: SMTP_USER,
      to: SMTP_USER,
      replyTo: data.email,
      subject: `New Inquiry from ${data.name} — ${data.product || 'General Inquiry'}`,
      html: formatInquiryEmail(data),
    }

    // ── Email 2: Send auto-confirmation to customer ──
    const customerMail = {
      from: SMTP_USER,
      to: data.email,
      replyTo: SMTP_USER,
      subject: `Thank you for contacting Sensor-Measure — We've received your inquiry`,
      html: formatCustomerConfirmationEmail(data),
    }

    // Send both emails (sequentially to avoid SMTP connection issues)
    await sendEmailViaSMTP(inquiryMail, SMTP_USER, SMTP_PASS)
    await sendEmailViaSMTP(customerMail, SMTP_USER, SMTP_PASS)

    return new Response(
      JSON.stringify({ success: true, message: 'Your inquiry has been sent. A confirmation email has been sent to your inbox.' }),
      { status: 200, headers: jsonHeaders }
    )
  } catch (err) {
    console.error('Contact form error:', err.message || err)
    return new Response(
      JSON.stringify({ success: false, message: 'Server error. Please email us directly at Freya@sensor-measure.com' }),
      { status: 500, headers: jsonHeaders }
    )
  }
}

// ── SMTP Client (Tencent Enterprise Email) ────────────────────
// Connects to smtp.exmail.qq.com:465 via TLS using Cloudflare Worker TCP sockets
// mail object: { from, to, replyTo, subject, html }
async function sendEmailViaSMTP(mail, smtpUser, smtpPass) {
  const SMTP_HOST = 'smtp.exmail.qq.com'
  const SMTP_PORT = 465

  const socket = connect(`${SMTP_HOST}:${SMTP_PORT}`, {
    secureTransport: 'on',
  })

  const writer = socket.writable.getWriter()
  const reader = socket.readable.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  let readBuffer = ''

  /**
   * Read a complete SMTP response.
   * Multi-line responses end with a line where the 4th char is a space (not dash).
   */
  async function readResponse() {
    while (true) {
      const lines = readBuffer.split('\r\n')
      const completeLines = lines.slice(0, -1)

      if (completeLines.length > 0) {
        const lastLine = completeLines[completeLines.length - 1]
        if (lastLine.length >= 4 && lastLine[3] === ' ') {
          const response = completeLines.join('\r\n')
          readBuffer = lines[lines.length - 1]
          return response
        }
      }

      const { done, value } = await reader.read()
      if (done) throw new Error('SMTP connection closed unexpectedly')
      readBuffer += decoder.decode(value, { stream: true })
    }
  }

  /** Send a single SMTP command and return the response */
  async function sendCommand(cmd) {
    await writer.write(encoder.encode(cmd + '\r\n'))
    return readResponse()
  }

  try {
    // 1. Read server greeting
    const greeting = await readResponse()
    if (!greeting.startsWith('220')) {
      throw new Error(`SMTP greeting failed: ${greeting.substring(0, 100)}`)
    }

    // 2. EHLO
    const ehloRes = await sendCommand('EHLO sensor-measure.com')
    if (!ehloRes.includes('250')) {
      throw new Error(`EHLO failed: ${ehloRes.substring(0, 100)}`)
    }

    // 3. AUTH LOGIN
    const authRes = await sendCommand('AUTH LOGIN')
    if (!authRes.startsWith('334')) {
      throw new Error(`AUTH LOGIN not supported: ${authRes.substring(0, 100)}`)
    }

    // 4. Send username (base64)
    const userB64 = utf8ToBase64(smtpUser)
    const userRes = await sendCommand(userB64)
    if (!userRes.startsWith('334')) {
      throw new Error(`SMTP username rejected: ${userRes.substring(0, 100)}`)
    }

    // 5. Send password (base64)
    const passB64 = utf8ToBase64(smtpPass)
    const passRes = await sendCommand(passB64)
    if (!passRes.startsWith('235')) {
      throw new Error(`SMTP authentication failed: ${passRes.substring(0, 100)}`)
    }

    // 6. MAIL FROM
    const mailFromRes = await sendCommand(`MAIL FROM:<${mail.from}>`)
    if (!mailFromRes.startsWith('250')) {
      throw new Error(`MAIL FROM failed: ${mailFromRes.substring(0, 100)}`)
    }

    // 7. RCPT TO
    const rcptRes = await sendCommand(`RCPT TO:<${mail.to}>`)
    if (!rcptRes.startsWith('250')) {
      throw new Error(`RCPT TO failed: ${rcptRes.substring(0, 100)}`)
    }

    // 8. DATA command
    const dataRes = await sendCommand('DATA')
    if (!dataRes.startsWith('354')) {
      throw new Error(`DATA command failed: ${dataRes.substring(0, 100)}`)
    }

    // 9. Build MIME message and send
    const mimeMessage = buildMimeMessage(mail)
    await writer.write(encoder.encode(mimeMessage + '\r\n.\r\n'))
    const endRes = await readResponse()
    if (!endRes.startsWith('250')) {
      throw new Error(`Email send failed: ${endRes.substring(0, 100)}`)
    }

    // 10. QUIT
    await sendCommand('QUIT')

  } finally {
    try {
      writer.close()
    } catch (e) {
      // Ignore close errors
    }
  }
}

// ── MIME Message Builder ────────────────────────────────────────
function buildMimeMessage(mail) {
  const subjectB64 = utf8ToBase64(mail.subject)
  const bodyB64 = utf8ToBase64(mail.html)
  const bodyLines = bodyB64.match(/.{1,76}/g).join('\r\n')

  const headers = [
    `From: Sensor-Measure <${mail.from}>`,
    `To: <${mail.to}>`,
    mail.replyTo ? `Reply-To: <${mail.replyTo}>` : null,
    `Subject: =?UTF-8?B?${subjectB64}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${Date.now()}.${Math.random().toString(36).substring(2)}@sensor-measure.com>`,
    ``,
    bodyLines,
  ].filter(Boolean)

  return headers.join('\r\n')
}

// ── UTF-8 safe Base64 encoding ──────────────────────────────────
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }
  return btoa(binary)
}

// ── HTML Email: Inquiry Notification (to company) ───────────────
function formatInquiryEmail(d) {
  const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]))

  const row = (label, val) =>
    `<tr><td style="padding:8px 16px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:160px;">${label}</td><td style="padding:8px 16px;border:1px solid #e5e7eb;">${val || 'N/A'}</td></tr>`

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#1e3a8a;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0;">
      <h2 style="margin:0;font-size:20px;">New Customer Inquiry — sensor-measure.com</h2>
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      ${row('Name', esc(d.name))}
      ${row('Email', `<a href="mailto:${esc(d.email)}" style="color:#2563eb;">${esc(d.email)}</a>`)}
      ${row('Company', esc(d.company))}
      ${row('Country', esc(d.country))}
      ${row('Phone', esc(d.phone))}
      ${row('Product Interest', esc(d.product))}
    </table>
    <div style="margin-top:20px;">
      <h3 style="font-size:15px;color:#374151;">Message:</h3>
      <div style="padding:16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;white-space:pre-wrap;line-height:1.6;">${esc(d.message)}</div>
    </div>
    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">
      This inquiry was submitted from the contact form on https://sensor-measure.com<br>
      Reply directly to this email to respond to the customer.
    </div>
  </div>`
}

// ── HTML Email: Auto-Confirmation (to customer) ─────────────────
function formatCustomerConfirmationEmail(d) {
  const esc = (s) => String(s || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]))

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;background:#f8fafc;">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;padding:32px 24px;border-radius:8px 8px 0 0;text-align:center;">
      <h1 style="margin:0;font-size:24px;font-weight:700;">Thank You for Your Inquiry!</h1>
      <p style="margin:8px 0 0;font-size:15px;opacity:0.9;">We've received your message and will get back to you shortly.</p>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:32px 24px;border:1px solid #e5e7eb;border-top:none;">
      <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">
        Dear ${esc(d.name)},
      </p>
      <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">
        Thank you for contacting <strong>Sensor-Measure</strong>. This email is to confirm that we have received your inquiry regarding
        ${d.product ? `<strong>${esc(d.product)}</strong>` : 'our products'}.
        Our team will review your message and respond within <strong>24 hours</strong> during business days.
      </p>

      <!-- Inquiry summary box -->
      <div style="background:#f1f5f9;border-left:4px solid #2563eb;border-radius:4px;padding:16px 20px;margin:20px 0;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Your Inquiry Summary</p>
        <table style="width:100%;font-size:14px;color:#374151;">
          <tr><td style="padding:4px 0;color:#64748b;width:120px;">Name:</td><td style="padding:4px 0;">${esc(d.name)}</td></tr>
          ${d.company ? `<tr><td style="padding:4px 0;color:#64748b;">Company:</td><td style="padding:4px 0;">${esc(d.company)}</td></tr>` : ''}
          ${d.country ? `<tr><td style="padding:4px 0;color:#64748b;">Country:</td><td style="padding:4px 0;">${esc(d.country)}</td></tr>` : ''}
          ${d.product ? `<tr><td style="padding:4px 0;color:#64748b;">Product:</td><td style="padding:4px 0;">${esc(d.product)}</td></tr>` : ''}
        </table>
        ${d.message ? `
        <p style="margin:12px 0 4px;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Your Message</p>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;white-space:pre-wrap;">${esc(d.message)}</p>
        ` : ''}
      </div>

      <p style="margin:20px 0 16px;font-size:15px;color:#374151;line-height:1.6;">
        If you have any urgent questions in the meantime, feel free to reach us directly:
      </p>

      <!-- Contact info -->
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin:16px 0;">
        <table style="font-size:14px;color:#374151;">
          <tr><td style="padding:4px 0;color:#64748b;width:100px;">Email:</td><td style="padding:4px 0;"><a href="mailto:Freya@sensor-measure.com" style="color:#2563eb;text-decoration:none;">Freya@sensor-measure.com</a></td></tr>
          <tr><td style="padding:4px 0;color:#64748b;">Phone:</td><td style="padding:4px 0;">+86-135-7228-5750</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;">WhatsApp:</td><td style="padding:4px 0;">+86-135-7228-5750</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;">Website:</td><td style="padding:4px 0;"><a href="https://sensor-measure.com" style="color:#2563eb;text-decoration:none;">www.sensor-measure.com</a></td></tr>
        </table>
      </div>

      <p style="margin:24px 0 0;font-size:14px;color:#64748b;line-height:1.6;">
        Please do not reply to this automated email. If you need to add more details to your inquiry,
        simply reply to this email and our team will receive your update.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#1e293b;color:#94a3b8;padding:20px 24px;border-radius:0 0 8px 8px;text-align:center;font-size:12px;line-height:1.6;">
      <p style="margin:0;">&copy; ${new Date().getFullYear()} Sensor-Measure. All rights reserved.</p>
      <p style="margin:4px 0 0;">Industrial Sensors &amp; Measurement Solutions | <a href="https://sensor-measure.com" style="color:#64748b;text-decoration:none;">sensor-measure.com</a></p>
    </div>
  </div>`
}
