import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Tag,
  Mail,
  ChevronRight,
  FileText,
  Gauge,
  List,
  MapPin,
} from 'lucide-react'

export default function ProductDetail() {
  const { category, slug } = useParams()
  const categoryData = products[category]
  const product = categoryData?.items.find((item) => item.slug === slug)

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | ${product.model} | SensorMeasure`
    }
  }, [product])

  if (!categoryData || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to All Products
          </Link>
        </div>
      </div>
    )
  }

  const paragraphs = product.description.split('\n\n').filter((p) => p.trim())

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/products/${category}`} className="hover:text-blue-600 transition-colors">
            {categoryData.title}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-sm font-mono font-medium text-blue-700 bg-blue-50 rounded-full">
                    {product.model}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h1>

                <div className="prose prose-gray max-w-none">
                  {paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Gauge className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Specifications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-4 py-3 font-medium text-gray-700 w-1/3 border border-gray-100">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-gray-900 border border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <List className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Request a Quote</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Need pricing, customization, or bulk order information? Our team is ready to assist with your specific requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Model</span>
                    <span className="font-mono font-medium text-gray-900">{product.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="text-gray-900">{categoryData.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Specs</span>
                    <span className="text-gray-900">{product.specs.length} parameters</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/products/${category}`}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to {categoryData.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
