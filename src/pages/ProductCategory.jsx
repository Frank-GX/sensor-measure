import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { ArrowRight, Package, AlertCircle } from 'lucide-react'

export default function ProductCategory() {
  const { category } = useParams()
  const categoryData = products[category]

  useEffect(() => {
    if (categoryData?.seo?.title) {
      document.title = categoryData.seo.title
    } else if (categoryData?.title) {
      document.title = `${categoryData.title} | SensorMeasure`
    }
  }, [category, categoryData])

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product category you are looking for does not exist.
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{categoryData.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryData.icon}</span>
            <h1 className="text-4xl font-bold text-gray-900">{categoryData.title}</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            {categoryData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.items.map((product) => (
            <div
              key={product.slug}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-mono text-blue-600">{product.model}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="space-y-2 mb-6">
                  {product.specs.slice(0, 3).map((spec) => (
                    <div key={spec.label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/products/${category}/${product.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
