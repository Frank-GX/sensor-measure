import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import { ArrowRight, Search, Package, SlidersHorizontal, X } from 'lucide-react'

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    document.title = 'All Products | Sensor Measure — Industrial Sensor Manufacturer'
  }, [])

  // Build flat list of all products with their category info
  const allProducts = useMemo(() => {
    const list = []
    Object.entries(products).forEach(([catKey, catData]) => {
      catData.items.forEach((item) => {
        list.push({
          ...item,
          categoryKey: catKey,
          categoryTitle: catData.title,
          categoryIcon: catData.icon,
        })
      })
    })
    return list
  }, [])

  const categories = Object.entries(products).map(([key, data]) => ({
    key,
    title: data.title,
    icon: data.icon,
    count: data.items.length,
  }))

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = allProducts

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categoryKey === selectedCategory)
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryTitle.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q)) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      )
    }

    // Sort
    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'model') {
      result = [...result].sort((a, b) => a.model.localeCompare(b.model))
    } else if (sortBy === 'category') {
      result = [...result].sort((a, b) => a.categoryTitle.localeCompare(b.categoryTitle))
    }

    return result
  }, [allProducts, selectedCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">All Products</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Industrial-grade measurement sensors and transmitters for level, pressure, distance, and environmental monitoring. Engineered for accuracy, built for reliability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, model, application, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white text-gray-700"
            >
              <option value="default">Sort: Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="model">Model (A-Z)</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-primary-400 hover:text-primary-600'
            }`}
          >
            All Products ({allProducts.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.title} ({cat.count})
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && (
            <span>
              {' '}in {products[selectedCategory]?.title}
            </span>
          )}
        </p>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try a different search term or category filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
              className="text-primary-600 font-medium hover:text-primary-700"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.categoryKey}/${product.slug}`}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[3/2] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-sm font-mono text-primary-600">
                      <Package size={14} />
                      {product.model}
                    </span>
                    <span className="text-xs text-gray-400">{product.categoryIcon} {product.categoryTitle}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {product.description.split('\n')[0].substring(0, 120)}...
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {product.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label} className="flex justify-between text-xs">
                        <span className="text-gray-400">{spec.label}</span>
                        <span className="text-gray-600 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Category Browse Section */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.key}
                  to={`/products/${cat.key}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {cat.count} product{cat.count !== 1 ? 's' : ''}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    View Category <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
