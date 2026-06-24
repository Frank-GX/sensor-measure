import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react'

const productGroups = [
  {
    group: 'Level Measurement',
    items: [
      { to: '/products/radar-level-transmitters', label: 'Radar Level Transmitters' },
      { to: '/products/ultrasonic-level-sensors', label: 'Ultrasonic Transducer Sensors' },
      { to: '/products/fluid-level-meters', label: 'Fluid Level Meters' },
    ]
  },
  {
    group: 'Flow Measurement',
    items: [
      { to: '/products/ultrasonic-flow-meters', label: 'Ultrasonic Flow Meters' },
      { to: '/products/electromagnetic-flow-meters', label: 'Electromagnetic Flow Meters' },
      { to: '/products/turbine-flow-meters', label: 'Turbine Flow Meters' },
      { to: '/products/vortex-flow-meters', label: 'Vortex Flow Meters' },
      { to: '/products/coriolis-mass-flow-meters', label: 'Coriolis Mass Flow Meters' },
      { to: '/products/ultrasonic-water-meters', label: 'Ultrasonic Water Meters' },
    ]
  },
  {
    group: 'Pressure & Gauge',
    items: [
      { to: '/products/pressure-sensors', label: 'Precision Pressure Sensors' },
      { to: '/products/wireless-pressure-transmitters', label: 'Wireless Pressure Transmitters' },
      { to: '/products/digital-pressure-gauges', label: 'Digital Pressure Gauges' },
    ]
  },
  {
    group: 'Water Quality',
    items: [
      { to: '/products/water-quality-sensors', label: 'Water Quality Sensors' },
    ]
  },
  {
    group: 'Motion & Force Sensors',
    items: [
      { to: '/products/electronic-gyroscope-sensors', label: 'Electronic Gyroscope Sensors' },
      { to: '/products/inclinometer-sensors', label: 'Inclinometer Sensors' },
      { to: '/products/accelerometer-sensors', label: 'Accelerometer Sensors' },
      { to: '/products/load-cell-sensors', label: 'Load Cell Sensors' },
    ]
  },
  {
    group: 'Environmental & Other',
    items: [
      { to: '/products/gas-detector-sensors', label: 'Gas Detector Sensors' },
      { to: '/products/laser-sensors', label: 'Laser Sensors' },
      { to: '/products/temperature-sensors', label: 'Temperature Sensors' },
      { to: '/products/oxygen-concentrators', label: 'Oxygen Concentrators' },
    ]
  },
]

const navLinks = [
  { to: '/', label: 'Home' },
  {
    label: 'Products',
    to: '/products',
    megaMenu: true,
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
              link.megaMenu ? (
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-4 w-[640px]">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1 px-4">
                        {productGroups.map((pg) => (
                          <div key={pg.group} className="mb-2">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5 px-2">{pg.group}</div>
                            {pg.items.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-2 pt-2 px-4 text-center">
                        <Link to="/products" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                          View All Products →
                        </Link>
                      </div>
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
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.megaMenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productsOpen && (
                    <div className="ml-2 space-y-2">
                      {productGroups.map((pg) => (
                        <div key={pg.group}>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wide px-3 py-1">{pg.group}</div>
                          {pg.items.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => { setMenuOpen(false); setProductsOpen(false) }}
                              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-primary-600"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
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
