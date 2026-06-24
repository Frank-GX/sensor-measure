import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Smartphone } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', phone: '', product: '', message: '', website: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Contact Us — Sensor Measure | Get a Quote for Industrial Sensors'
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(data.message || 'Failed to send inquiry. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please email us directly at Freya@sensor-measure.com')
    } finally {
      setSending(false)
    }
  }

  const productOptions = [
    'Radar Level Transmitter',
    'Ultrasonic Level Sensor',
    'Pressure Sensor / Transmitter',
    'Distance Sensor',
    'Environmental Sensor',
    'Custom / OEM Solution',
    'Other / Not Sure',
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Tell us about your sensor requirements and we'll get back to you within 24 hours with a detailed quotation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:Freya@sensor-measure.com" className="text-primary-600 hover:text-primary-700">
                        Freya@sensor-measure.com
                      </a>
                      <p className="text-sm text-gray-500 mt-0.5">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:+8613572285750" className="text-gray-600 hover:text-primary-600 transition-colors">
                        +86-135-7228-5750
                      </a>
                      <p className="text-sm text-gray-500 mt-0.5">Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">WhatsApp</h3>
                      <a href="https://wa.me/8613572285750" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                        +86-135-7228-5750
                      </a>
                      <p className="text-sm text-gray-500 mt-0.5">Click to chat on WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Smartphone size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">WeChat</h3>
                      <p className="text-gray-600">WeChat ID: 13572285750</p>
                      <p className="text-sm text-gray-500 mt-0.5">Scan or search to add</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">China</p>
                      <p className="text-sm text-gray-500 mt-0.5">Factory visits welcome by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                      <p className="text-sm text-gray-500 mt-0.5">Weekend inquiries replied on Monday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle size={20} className="text-green-600" />
                  <h3 className="font-semibold text-gray-900">Quick Response via WhatsApp</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For the fastest response, send us a WhatsApp message. We typically reply within 2-4 hours during business days.
                </p>
                <a
                  href="https://wa.me/8613572285750?text=Hello%2C%20I%27m%20interested%20in%20your%20industrial%20sensors.%20Could%20you%20please%20provide%20more%20information%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send an Inquiry</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and our team will send you a detailed quotation</p>

                {sent ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Inquiry Sent Successfully!</h3>
                    <p className="text-green-600 mb-6">
                      Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', country: '', phone: '', product: '', message: '', website: '' }) }}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                        <input
                          type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                          type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                          type="text" name="company"
                          value={form.company} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text" name="country"
                          value={form.country} onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                          placeholder="Your country"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel" name="phone"
                        value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                        placeholder="+1 234 567 890 (including country code)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest <span className="text-red-500">*</span></label>
                      <select
                        name="product" required
                        value={form.product} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white"
                      >
                        <option value="">Select a product category...</option>
                        {productOptions.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message" required
                        value={form.message} onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-y"
                        placeholder="Please describe your application, required specifications (range, accuracy, temperature, output signal), quantity, and any special requirements..."
                      />
                    </div>

                    <button type="submit" disabled={sending} className="btn-primary text-lg px-8 py-4 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                      <Send size={20} /> {sending ? 'Sending...' : 'Send Inquiry'}
                    </button>
                    {error && (
                      <p className="text-sm text-red-600 mt-3 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                        {error}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                    </p>
                    {/* Honeypot field — hidden from humans, catches bots */}
                    <input
                      type="text" name="website"
                      value={form.website} onChange={handleChange}
                      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                      tabIndex={-1} autoComplete="off"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
