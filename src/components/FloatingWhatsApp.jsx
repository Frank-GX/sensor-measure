import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/8613572285750?text=Hello%2C%20I%27m%20interested%20in%20your%20industrial%20sensors.%20Could%20you%20please%20provide%20more%20information%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
        Chat with us
      </span>
    </a>
  )
}
