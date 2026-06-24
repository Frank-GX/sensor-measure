import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Factory, FlaskConical, Wheat, Zap, Ship } from 'lucide-react'

const solutions = [
  {
    icon: <Droplets size={28} />,
    title: 'Water & Wastewater Treatment',
    desc: 'Level measurement and pressure monitoring solutions for water treatment plants, reservoirs, pumping stations, and distribution networks. Our ultrasonic level sensors, radar level transmitters, and submersible pressure sensors provide reliable measurement for clean water, wastewater, and sludge applications.',
    products: ['Ultrasonic Level Sensors', 'Submersible Level Transmitters', 'Pressure Transmitters'],
    links: ['radar-level-transmitters', 'ultrasonic-level-sensors', 'pressure-sensors'],
  },
  {
    icon: <Factory size={28} />,
    title: 'Oil & Gas',
    desc: 'Hazardous area certified level and pressure measurement for upstream, midstream, and downstream operations. Guided wave radar for interface measurement, 80GHz radar for storage tanks, and explosion-proof pressure transmitters for pipeline monitoring.',
    products: ['Guided Wave Radar', '80GHz FMCW Radar', 'Explosion-Proof Pressure Transmitters'],
    links: ['radar-level-transmitters', 'pressure-sensors'],
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'Chemical Processing',
    desc: 'Corrosion-resistant sensors for aggressive chemical environments. PTFE and 316L SS wetted parts, non-contact radar measurement for hazardous chemicals, and ceramic diaphragm pressure sensors for strong acids and bases.',
    products: ['Non-Contact Radar Level', 'Ceramic Pressure Sensors', 'Corrosion-Resistant Ultrasonic'],
    links: ['radar-level-transmitters', 'pressure-sensors', 'ultrasonic-level-sensors'],
  },
  {
    icon: <Wheat size={28} />,
    title: 'Agriculture & Food Processing',
    desc: 'Hygienic and reliable sensors for food safety and agricultural applications. 120GHz radar for small process vessels, food-grade pressure sensors with flush diaphragms, and environmental sensors for greenhouse and storage monitoring.',
    products: ['120GHz FMCW Radar', 'Food-Grade Pressure Sensors', 'Temperature & Humidity Sensors'],
    links: ['radar-level-transmitters', 'pressure-sensors', 'environmental-sensors'],
  },
  {
    icon: <Zap size={28} />,
    title: 'Power Generation',
    desc: 'High-temperature and high-pressure rated sensors for power plant applications. Guided wave radar for boiler drums, differential pressure transmitters for flow measurement, and CO₂ sensors for indoor air quality in control rooms.',
    products: ['Guided Wave Radar', 'Differential Pressure Transmitters', 'CO₂ Gas Sensors'],
    links: ['radar-level-transmitters', 'pressure-sensors', 'environmental-sensors'],
  },
  {
    icon: <Ship size={28} />,
    title: 'Marine & Offshore',
    desc: 'Rugged and reliable sensors designed for the demanding marine environment. IP68 rated submersible sensors for ballast tank level, corrosion-resistant pressure transmitters for hydraulic systems, and radar sensors for cargo tank monitoring.',
    products: ['Submersible Level Transmitters', 'Pressure Transmitters', '80GHz Radar Sensors'],
    links: ['radar-level-transmitters', 'pressure-sensors'],
  },
]

export default function Solutions() {
  useEffect(() => {
    document.title = 'Industry Solutions — Sensor Measure | Industrial Sensor Applications'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Tailored sensor solutions for diverse industrial applications. From water treatment to oil and gas, we provide reliable measurement instruments for every industry.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((sol, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}>
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-6">
                    {sol.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{sol.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{sol.desc}</p>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Recommended Products</h3>
                    <div className="flex flex-wrap gap-2">
                      {sol.products.map((p, j) => (
                        <span key={j} className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/products" className="btn-primary">
                    View All Products <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
                    <span className="text-6xl">{sol.icon ? 
                      i === 0 ? '💧' : i === 1 ? '🛢️' : i === 2 ? '🧪' : i === 3 ? '🌾' : i === 4 ? '⚡' : '🚢'
                    : '🔧'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your specific application and our engineering team will recommend the optimal sensor configuration for your needs.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 border-0 text-lg px-8 py-4">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
