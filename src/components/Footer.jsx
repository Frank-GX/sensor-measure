import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#1e40af"/>
                <circle cx="16" cy="16" r="5" fill="white"/>
                <circle cx="16" cy="16" r="2" fill="#1e40af"/>
              </svg>
              Sensor<span className="text-yellow-400">Measure</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional manufacturer of industrial sensors and measurement instruments. 
              CE and RoHS certified products with global shipping.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Radar Level Transmitters', '/products/radar-level-transmitters'],
                ['Ultrasonic Level Sensors', '/products/ultrasonic-level-sensors'],
                ['Pressure Sensors', '/products/pressure-sensors'],
                ['Distance Sensors', '/products/distance-sensors'],
                ['Environmental Sensors', '/products/environmental-sensors'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-1 hover:text-white transition-colors">
                    <ChevronRight size={12} />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Blog', '/blog'],
                ['About Us', '/about'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-1 hover:text-white transition-colors">
                    <ChevronRight size={12} />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                <a href="mailto:Freya@sensor-measure.com" className="hover:text-white transition-colors">
                  Freya@sensor-measure.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                <a href="tel:+8613572285750" className="hover:text-white transition-colors">
                  +86-135-7228-5750
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                <a href="https://wa.me/8613572285750" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp / WeChat: 13572285750
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                <span>China</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Sensor Measure. All rights reserved.</span>
          <div className="flex gap-4">
            <span>CE Certified</span>
            <span>RoHS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
