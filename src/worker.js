/**
 * Cloudflare Worker — sensor-measure.com
 * Handles API routes (/api/*) and passes everything else to static assets.
 * Email sending via Tencent Enterprise Email SMTP (smtp.exmail.qq.com).
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

    // Send email via Tencent Enterprise Email SMTP
    await sendEmailViaSMTP(data, SMTP_USER, SMTP_PASS)

    return new Response(
      JSON.stringify({ success: true, message: 'Your inquiry has been sent. We will reply within 24 hours.' }),
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
async function sendEmailViaSMTP(data, smtpUser, smtpPass) {
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
      // Check if buffer already has a complete response
      const lines = readBuffer.split('\r\n')
      const completeLines = lines.slice(0, -1) // last element may be partial

      if (completeLines.length > 0) {
        const lastLine = completeLines[completeLines.length - 1]
        // A line like "250 OK" has space at index 3; "250-PIPELINING" has dash
        if (lastLine.length >= 4 && lastLine[3] === ' ') {
          const response = completeLines.join('\r\n')
          readBuffer = lines[lines.length - 1]
          return response
        }
      }

      // Need more data from socket
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
    // 1. Read server greeting (220 ...)
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

    // 4. Send username (base64 encoded)
    const userB64 = utf8ToBase64(smtpUser)
    const userRes = await sendCommand(userB64)
    if (!userRes.startsWith('334')) {
      throw new Error(`SMTP username rejected: ${userRes.substring(0, 100)}`)
    }

    // 5. Send password (base64 encoded)
    const passB64 = utf8ToBase64(smtpPass)
    const passRes = await sendCommand(passB64)
    if (!passRes.startsWith('235')) {
      throw new Error(`SMTP authentication failed (check email password): ${passRes.substring(0, 100)}`)
    }

    // 6. MAIL FROM
    const mailFromRes = await sendCommand(`MAIL FROM:<${smtpUser}>`)
    if (!mailFromRes.startsWith('250')) {
      throw new Error(`MAIL FROM failed: ${mailFromRes.substring(0, 100)}`)
    }

    // 7. RCPT TO (send to ourselves — Freya@sensor-measure.com)
    const rcptRes = await sendCommand(`RCPT TO:<${smtpUser}>`)
    if (!rcptRes.startsWith('250')) {
      throw new Error(`RCPT TO failed: ${rcptRes.substring(0, 100)}`)
    }

    // 8. DATA command
    const dataRes = await sendCommand('DATA')
    if (!dataRes.startsWith('354')) {
      throw new Error(`DATA command failed: ${dataRes.substring(0, 100)}`)
    }

    // 9. Build MIME message and send
    const mimeMessage = buildMimeMessage(data, smtpUser)
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
function buildMimeMessage(d, fromEmail) {
  const subject = `New Inquiry from ${d.name} — ${d.product || 'General Inquiry'}`
  const subjectB64 = utf8ToBase64(subject)
  const html = formatInquiryEmail(d)
  const bodyB64 = utf8ToBase64(html)

  // Split base64 into 76-char lines per RFC 2045
  const bodyLines = bodyB64.match(/.{1,76}/g).join('\r\n')

  return [
    `From: Sensor-Measure Website <${fromEmail}>`,
    `To: ${fromEmail}`,
    `Reply-To: ${d.name} <${d.email}>`,
    `Subject: =?UTF-8?B?${subjectB64}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${Date.now()}.${Math.random().toString(36).substring(2)}@sensor-measure.com>`,
    ``,
    bodyLines,
  ].join('\r\n')
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

// ── HTML Email Template ─────────────────────────────────────────
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
