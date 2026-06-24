import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Factory, Users, Globe, Target, TrendingUp } from 'lucide-react'

const stats = [
  { icon: <Factory size={24} />, value: '10+', label: 'Years Experience' },
  { icon: <Globe size={24} />, value: '50+', label: 'Export Countries' },
  { icon: <Users size={24} />, value: '200+', label: 'Happy Clients' },
  { icon: <Target size={24} />, value: '99.5%', label: 'Quality Rate' },
]

const values = [
  { icon: <Target size={24} />, title: 'Quality First', desc: 'Every sensor undergoes rigorous testing and calibration before shipment. We maintain a 99.5% product quality pass rate through our ISO-certified quality management system.' },
  { icon: <TrendingUp size={24} />, title: 'Continuous Innovation', desc: 'We invest in R&D to stay at the forefront of sensor technology. Our FMCW 80GHz and 120GHz radar sensors represent the latest advances in industrial level measurement.' },
  { icon: <Shield size={24} />, title: 'Integrity & Trust', desc: 'We build long-term partnerships based on transparency, honest communication, and reliable delivery. Our clients trust us as their strategic sensor supply partner.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us — Sensor Measure | Industrial Sensor Manufacturer'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sensor Measure</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A dedicated industrial sensor manufacturer committed to providing reliable measurement solutions to global customers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sensor Measure was founded with a clear mission: to provide industrial customers worldwide with high-quality, reliable, and cost-effective sensor solutions. With over a decade of experience in industrial instrumentation, we have grown from a small sensor workshop into a recognized manufacturer serving clients across more than 50 countries.
                </p>
                <p>
                  Our core expertise lies in radar level measurement, ultrasonic sensing, pressure measurement, and distance sensing technologies. We combine deep technical knowledge with modern manufacturing capabilities to produce sensors that meet the demanding requirements of industrial applications.
                </p>
                <p>
                  As a factory-direct manufacturer, we offer competitive pricing without compromising on quality. Our products carry CE and RoHS certifications, and we maintain rigorous quality control throughout the production process — from component sourcing to final calibration and testing.
                </p>
                <p>
                  We believe in building lasting partnerships with our clients. Whether you need standard products or custom OEM/ODM solutions, our engineering team works closely with you to deliver the right sensor for your specific application.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop"
                alt="Sensor manufacturing"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-primary-600 mb-1 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Our products meet international standards for quality and safety
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'CE Marking', desc: 'European conformity for safety, health, and environmental protection requirements' },
              { name: 'RoHS Compliance', desc: 'Restriction of Hazardous Substances for environmental safety in electronic products' },
              { name: 'ISO 9001', desc: 'Quality management system ensuring consistent product quality and customer satisfaction' },
            ].map((cert, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <Shield size={36} className="text-primary-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 200+ global clients who trust Sensor Measure for their industrial measurement needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 border-0 text-lg px-8 py-4">
              Get in Touch
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
