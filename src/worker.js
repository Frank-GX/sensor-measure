/**
 * Cloudflare Worker — sensor-measure.com
 * Handles API routes (/api/*) and passes everything else to static assets.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

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
  // CORS + JSON headers
  const jsonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  try {
    const data = await request.json()

    // Basic honeypot check (spam bot protection)
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

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address' }),
        { status: 400, headers: jsonHeaders }
      )
    }

    // Send email via Resend API
    const RESEND_KEY = env.RESEND_API_KEY
    if (!RESEND_KEY) {
      console.error('RESEND_API_KEY not configured')
      return new Response(
        JSON.stringify({ success: false, message: 'Email service not configured. Please contact us directly at Freya@sensor-measure.com' }),
        { status: 500, headers: jsonHeaders }
      )
    }

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sensor-Measure Website <onboarding@resend.dev>',
        to: ['Freya@sensor-measure.com'],
        reply_to: data.email,
        subject: `New Inquiry from ${data.name} — ${data.product || 'General Inquiry'}`,
        html: formatInquiryEmail(data),
      }),
    })

    if (!emailRes.ok) {
      const errText = await emailRes.text()
      console.error('Resend API error:', emailRes.status, errText)
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to send email. Please try again or contact us at Freya@sensor-measure.com' }),
        { status: 502, headers: jsonHeaders }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Your inquiry has been sent. We will reply within 24 hours.' }),
      { status: 200, headers: jsonHeaders }
    )
  } catch (err) {
    console.error('Contact form error:', err)
    return new Response(
      JSON.stringify({ success: false, message: 'Server error. Please email us directly at Freya@sensor-measure.com' }),
      { status: 500, headers: jsonHeaders }
    )
  }
}

// ── Email Template ──────────────────────────────────────────────
function formatInquiryEmail(d) {
  const row = (label, val) =>
    `<tr><td style="padding:8px 16px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;width:160px;">${label}</td><td style="padding:8px 16px;border:1px solid #e5e7eb;">${val || 'N/A'}</td></tr>`

  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#1e3a8a;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0;">
      <h2 style="margin:0;font-size:20px;">New Customer Inquiry — sensor-measure.com</h2>
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      ${row('Name', d.name)}
      ${row('Email', `<a href="mailto:${d.email}" style="color:#2563eb;">${d.email}</a>`)}
      ${row('Company', d.company)}
      ${row('Country', d.country)}
      ${row('Phone', d.phone)}
      ${row('Product Interest', d.product)}
    </table>
    <div style="margin-top:20px;">
      <h3 style="font-size:15px;color:#374151;">Message:</h3>
      <div style="padding:16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;white-space:pre-wrap;line-height:1.6;">${d.message}</div>
    </div>
    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">
      This inquiry was submitted from the contact form on https://sensor-measure.com<br>
      Reply directly to this email or use Reply-To to respond to the customer.
    </div>
  </div>`
}
