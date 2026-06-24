import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Globe, Settings, HeadphonesIcon, Award, Factory, Calendar, Clock } from 'lucide-react'
import blogPosts from '../data/blog'

const categories = [
  {
    slug: 'radar-level-transmitters',
    title: 'Radar Level Transmitters',
    description: 'FMCW 80GHz & 120GHz radar sensors for precise non-contact level measurement in harsh industrial environments.',
    icon: '📡',
    items: ['80GHz FMCW Radar', '120GHz FMCW Radar', 'Guided Wave Radar', '80GHz High-Temp Gauge'],
  },
  {
    slug: 'ultrasonic-level-sensors',
    title: 'Ultrasonic Transducer Sensors',
    description: 'Cost-effective non-contact ultrasonic level measurement for water, wastewater, chemicals, and bulk solids.',
    icon: '🔊',
    items: ['Level Transmitter 20m', 'Water Tank Sensor', 'Long-Range 30m', 'Compact Sensor'],
  },
  {
    slug: 'fluid-level-meters',
    title: 'Fluid Level Meters',
    description: 'Capacitive, hydrostatic, and magnetic float level sensors for liquids and solids in tanks and silos.',
    icon: '🛢️',
    items: ['Capacitive Level Sensor', 'Hydrostatic Transmitter', 'Magnetic Float Indicator'],
  },
  {
    slug: 'pressure-sensors',
    title: 'Precision Pressure Sensors',
    description: 'High-precision pressure transmitters, differential pressure sensors, and submersible level transmitters.',
    icon: '⚡',
    items: ['Pressure Transmitter 4-20mA', 'Differential Pressure', 'Submersible Level'],
  },
  {
    slug: 'wireless-pressure-transmitters',
    title: 'Wireless Pressure Transmitters',
    description: 'Battery-powered IoT pressure transmitters with LoRa and NB-IoT connectivity for remote monitoring.',
    icon: '📶',
    items: ['LoRa Pressure Transmitter', 'NB-IoT Pressure Transmitter'],
  },
  {
    slug: 'digital-pressure-gauges',
    title: 'Digital Pressure Gauges',
    description: 'High-accuracy digital pressure gauges with LCD display, data logging, and field-adjustable settings.',
    icon: '📟',
    items: ['Digital Pressure Gauge', 'Smart Differential Pressure Gauge'],
  },
  {
    slug: 'water-quality-sensors',
    title: 'Water Quality Sensors',
    description: 'pH/ORP, dissolved oxygen, turbidity, COD, and multi-parameter water quality monitors for environmental compliance.',
    icon: '💧',
    items: ['pH/ORP Sensor', 'Dissolved Oxygen', 'Turbidity Sensor', 'COD Sensor', 'Multi-Parameter Monitor'],
  },
  {
    slug: 'ultrasonic-flow-meters',
    title: 'Ultrasonic Flow Meters',
    description: 'Non-invasive clamp-on and inline ultrasonic flow meters for liquid measurement with no pressure loss.',
    icon: '🔊',
    items: ['Handheld Ultrasonic Flow Meter', 'Fixed Ultrasonic Flow Meter', 'Ultrasonic Heat Flow Meter'],
  },
  {
    slug: 'electromagnetic-flow-meters',
    title: 'Electromagnetic Flow Meters',
    description: 'High-accuracy inline mag meters for conductive liquids. No moving parts, no pressure loss, ±0.5% accuracy.',
    icon: '⚡',
    items: ['Inline Mag Flow Meter', 'Battery-Powered Mag Meter'],
  },
  {
    slug: 'turbine-flow-meters',
    title: 'Turbine Flow Meters',
    description: 'Precision turbine flow meters for clean liquid and gas measurement. ±0.5% accuracy, 15:1 turndown ratio.',
    icon: '🌀',
    items: ['Liquid Turbine Flow Meter', 'Gas Turbine Flow Meter'],
  },
  {
    slug: 'vortex-flow-meters',
    title: 'Vortex Flow Meters',
    description: 'Versatile vortex shedding flow meters for steam, gas, and liquid. No moving parts, up to 350°C.',
    icon: '🌊',
    items: ['Vortex Flow Meter for Steam', 'Insertion Vortex Flow Meter'],
  },
  {
    slug: 'coriolis-mass-flow-meters',
    title: 'Coriolis Mass Flow Meters',
    description: 'Direct mass flow, density, and temperature measurement. ±0.1% accuracy, 500:1 turndown ratio.',
    icon: '⚖️',
    items: ['Coriolis Mass Flow Meter', 'Micro-Batch Coriolis Meter'],
  },
  {
    slug: 'ultrasonic-water-meters',
    title: 'Ultrasonic Water Meters',
    description: 'Smart ultrasonic water meters for residential and industrial water measurement with IoT connectivity.',
    icon: '💧',
    items: ['Smart Ultrasonic Water Meter', 'Industrial Ultrasonic Water Meter'],
  },
  {
    slug: 'electronic-gyroscope-sensors',
    title: 'Electronic Gyroscope Sensors',
    description: 'MEMS and fiber optic gyroscope sensors for angular velocity measurement in navigation and stabilization.',
    icon: '🧭',
    items: ['MEMS Gyroscope Sensor', 'Fiber Optic Gyroscope (FOG)'],
  },
  {
    slug: 'inclinometer-sensors',
    title: 'Inclinometer Sensors',
    description: 'High-accuracy single-axis and dual-axis inclinometer sensors for tilt angle measurement.',
    icon: '📐',
    items: ['Dual-Axis MEMS Inclinometer', 'Geotechnical Inclinometer Probe'],
  },
  {
    slug: 'accelerometer-sensors',
    title: 'Accelerometer Sensors',
    description: 'Industrial accelerometer sensors for vibration monitoring and predictive maintenance.',
    icon: '📳',
    items: ['Industrial Vibration Accelerometer', 'Triaxial MEMS Accelerometer'],
  },
  {
    slug: 'load-cell-sensors',
    title: 'Load Cell Sensors',
    description: 'Strain gauge load cells for force and weight measurement. Compression, tension, and S-type configurations.',
    icon: '⚖️',
    items: ['Compression Load Cell', 'S-Type Load Cell'],
  },
  {
    slug: 'gas-detector-sensors',
    title: 'Gas Detector Sensors',
    description: 'Fixed and portable gas detectors for toxic, combustible, and asphyxiant gas monitoring.',
    icon: '☣️',
    items: ['Fixed Gas Detector', 'Portable Multi-Gas Detector'],
  },
  {
    slug: 'laser-sensors',
    title: 'Laser Sensors',
    description: 'Laser distance and displacement sensors for non-contact precision measurement in automation.',
    icon: '🔬',
    items: ['Laser Distance Sensor', 'Laser Displacement Sensor'],
  },
  {
    slug: 'temperature-sensors',
    title: 'Temperature Sensors',
    description: 'RTD (PT100/PT1000) and thermocouple temperature sensors for industrial process control.',
    icon: '🌡️',
    items: ['RTD Temperature Sensor (PT100)', 'Thermocouple Temperature Sensor'],
  },
  {
    slug: 'oxygen-concentrators',
    title: 'Oxygen Concentrators',
    description: 'PSA oxygen concentrators and generators for medical and industrial oxygen supply.',
    icon: '🫁',
    items: ['Medical Oxygen Concentrator', 'Industrial Oxygen Generator'],
  },
]

const advantages = [
  { icon: <Factory size={28} />, title: 'Direct Factory', desc: 'As a manufacturer, we offer competitive factory-direct pricing with full quality control.' },
  { icon: <Award size={28} />, title: 'CE & RoHS Certified', desc: 'All products meet international certification standards for global market compliance.' },
  { icon: <Settings size={28} />, title: 'OEM & ODM Service', desc: 'Custom design, private labeling, and parameter configuration to match your exact requirements.' },
  { icon: <Globe size={28} />, title: 'Global Shipping', desc: 'Reliable worldwide delivery with professional export packaging and documentation.' },
  { icon: <HeadphonesIcon size={28} />, title: 'Technical Support', desc: 'Expert pre-sales consultation and after-sales technical assistance from our engineering team.' },
  { icon: <Shield size={28} />, title: 'Quality Warranty', desc: '12-24 month warranty on all products with responsive after-sales service.' },
]

const applications = [
  { name: 'Oil & Gas', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=250&fit=crop' },
  { name: 'Water Treatment', img: 'https://images.unsplash.com/photo-1581092921461-7d7c4a1e14e3?w=400&h=250&fit=crop' },
  { name: 'Chemical Processing', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop' },
  { name: 'Water Quality Monitoring', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=250&fit=crop' },
  { name: 'Flow Measurement', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=250&fit=crop' },
  { name: 'Food & Beverage', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=250&fit=crop' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Sensor Measure — Industrial Sensor Manufacturer | Radar Level, Pressure, Flow & Water Quality Sensors'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision Industrial Sensors
              <span className="block text-accent-500">for Global Measurement Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              One-stop manufacturer of 21 product categories — radar level transmitters, flow meters, pressure sensors, water quality monitors, gyroscopes, gas detectors, and more. CE & RoHS certified with factory-direct pricing and global shipping.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-0 text-lg px-8 py-4">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4">
                Get a Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><Shield size={16} /> CE Certified</span>
              <span className="flex items-center gap-1.5"><Shield size={16} /> RoHS Compliant</span>
              <span className="flex items-center gap-1.5"><Globe size={16} /> Worldwide Shipping</span>
              <span className="flex items-center gap-1.5"><Factory size={16} /> Factory Direct</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">Comprehensive sensor solutions for industrial measurement, automation, and process control</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{cat.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cat.items.map((item, i) => (
                      <span key={i} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    View Products <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose Sensor Measure</h2>
          <p className="section-subtitle">Six reasons why global buyers trust us as their sensor manufacturing partner</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-4">
                  {adv.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Industry Applications</h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Our sensors are deployed across diverse industries worldwide
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div key={app.name} className="group relative rounded-xl overflow-hidden">
                <img src={app.img} alt={app.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold">{app.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest from Our Blog</h2>
              <p className="text-lg text-gray-500 mt-2">Expert guides and technology insights for industrial sensor applications</p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all">
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-1 text-primary-600 font-medium">
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Sensor Requirements?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your application and we'll recommend the best sensor solution. Fast response, competitive pricing, and expert technical support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 border-0 text-lg px-8 py-4">
              Send Inquiry Now
            </Link>
            <a href="mailto:Freya@sensor-measure.com" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4">
              Freya@sensor-measure.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
