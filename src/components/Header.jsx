import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { to: '/products/radar-level-transmitters', label: 'Radar Level Transmitters' },
      { to: '/products/ultrasonic-level-sensors', label: 'Ultrasonic Level Sensors' },
      { to: '/products/pressure-sensors', label: 'Pressure Sensors' },
      { to: '/products/distance-sensors', label: 'Distance Sensors' },
      { to: '/products/environmental-sensors', label: 'Environmental Sensors' },
    ]
  },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-primary-500 text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <span>Professional Industrial Sensor Manufacturer — CE & RoHS Certified</span>
          <div className="flex items-center gap-5">
            <a href="mailto:Freya@sensor-measure.com" className="flex items-center gap-1 hover:text-yellow-200 transition-colors">
              <Mail size={14} />
              Freya@sensor-measure.com
            </a>
            <a href="https://wa.me/8613572285750" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-yellow-200 transition-colors">
              <MessageCircle size={14} />
              WhatsApp: +86-135-7228-5750
            </a>
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +86-135-7228-5750
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary-700">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#1e40af"/>
              <path d="M16 6 L24 16 L16 26 L8 16 Z" fill="white" opacity="0.3"/>
              <circle cx="16" cy="16" r="5" fill="white"/>
              <circle cx="16" cy="16" r="2" fill="#1e40af"/>
            </svg>
            <span>Sensor<span className="text-accent-500">Measure</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-64">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/contact" className="btn-primary text-sm ml-3">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => { setMenuOpen(false); setProductsOpen(false) }}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium rounded-md ${
                      isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center btn-primary text-sm mt-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
