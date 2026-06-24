import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import { ArrowRight, Search, Package, SlidersHorizontal, X, ChevronDown, Filter, Check } from 'lucide-react'

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedOutputSignals, setSelectedOutputSignals] = useState([])
  const [selectedProtectionGrades, setSelectedProtectionGrades] = useState([])
  const [selectedApplications, setSelectedApplications] = useState([])

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

  // Dynamically extract all unique filter options from product data
  const filterOptions = useMemo(() => {
    const outputSignals = new Set()
    const protectionGrades = new Set()
    const applications = new Set()

    allProducts.forEach((p) => {
      if (p.filterTags) {
        p.filterTags.outputSignal?.forEach((s) => outputSignals.add(s))
        if (p.filterTags.protectionGrade) protectionGrades.add(p.filterTags.protectionGrade)
        p.filterTags.applicationAreas?.forEach((a) => applications.add(a))
      }
    })

    return {
      outputSignals: Array.from(outputSignals).sort(),
      protectionGrades: Array.from(protectionGrades).sort(),
      applications: Array.from(applications).sort(),
    }
  }, [allProducts])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = allProducts

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categoryKey === selectedCategory)
    }

    // Output signal filter
    if (selectedOutputSignals.length > 0) {
      result = result.filter((p) => {
        if (!p.filterTags?.outputSignal) return false
        return selectedOutputSignals.some((s) => p.filterTags.outputSignal.includes(s))
      })
    }

    // Protection grade filter
    if (selectedProtectionGrades.length > 0) {
      result = result.filter((p) => {
        if (!p.filterTags?.protectionGrade) return false
        return selectedProtectionGrades.includes(p.filterTags.protectionGrade)
      })
    }

    // Application filter
    if (selectedApplications.length > 0) {
      result = result.filter((p) => {
        if (!p.filterTags?.applicationAreas) return false
        return selectedApplications.some((a) => p.filterTags.applicationAreas.includes(a))
      })
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
  }, [allProducts, selectedCategory, searchQuery, sortBy, selectedOutputSignals, selectedProtectionGrades, selectedApplications])

  const activeFilterCount = selectedOutputSignals.length + selectedProtectionGrades.length + selectedApplications.length

  const clearAllFilters = () => {
    setSelectedOutputSignals([])
    setSelectedProtectionGrades([])
    setSelectedApplications([])
  }

  const toggleArrayFilter = (value, setter, currentArray) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter((v) => v !== value))
    } else {
      setter([...currentArray, value])
    }
  }

  // Filter checkbox group component
  const FilterGroup = ({ title, options, selected, setter }) => {
    if (!options || options.length === 0) return null
    return (
      <div className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">{title}</h4>
        <div className="space-y-2">
          {options.map((option) => {
            const isSelected = selected.includes(option)
            const count = allProducts.filter((p) => {
              if (title === 'Output Signal') return p.filterTags?.outputSignal?.includes(option)
              if (title === 'Protection Grade') return p.filterTags?.protectionGrade === option
              if (title === 'Application') return p.filterTags?.applicationAreas?.includes(option)
              return false
            }).length
            return (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <button
                  onClick={() => toggleArrayFilter(option, setter, selected)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-primary-600 border-primary-600'
                      : 'border-gray-300 group-hover:border-primary-400'
                  }`}
                >
                  {isSelected && <Check size={12} className="text-white" />}
                </button>
                <span className="text-sm text-gray-600 group-hover:text-gray-900 flex-1">
                  {option}
                </span>
                <span className="text-xs text-gray-400">({count})</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">All Products</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Industrial-grade measurement sensors and transmitters for level, pressure, flow, water quality, and environmental monitoring. Engineered for accuracy, built for reliability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:border-primary-400 transition-colors"
            >
              <Filter size={18} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
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
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Filter size={18} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <FilterGroup
                title="Output Signal"
                options={filterOptions.outputSignals}
                selected={selectedOutputSignals}
                setter={setSelectedOutputSignals}
              />
              <FilterGroup
                title="Protection Grade"
                options={filterOptions.protectionGrades}
                selected={selectedProtectionGrades}
                setter={setSelectedProtectionGrades}
              />
              <FilterGroup
                title="Application"
                options={filterOptions.applications}
                selected={selectedApplications}
                setter={setSelectedApplications}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Active Filter Tags */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedOutputSignals.map((s) => (
                  <span key={`os-${s}`} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200">
                    {s}
                    <button onClick={() => toggleArrayFilter(s, setSelectedOutputSignals, selectedOutputSignals)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {selectedProtectionGrades.map((g) => (
                  <span key={`pg-${g}`} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200">
                    {g}
                    <button onClick={() => toggleArrayFilter(g, setSelectedProtectionGrades, selectedProtectionGrades)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {selectedApplications.map((a) => (
                  <span key={`app-${a}`} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200">
                    {a}
                    <button onClick={() => toggleArrayFilter(a, setSelectedApplications, selectedApplications)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span> in {products[selectedCategory]?.title}</span>
              )}
              {activeFilterCount > 0 && (
                <button onClick={clearAllFilters} className="ml-2 text-primary-600 hover:text-primary-700 font-medium">
                  Clear filters
                </button>
              )}
            </p>

            {/* Product Cards */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); clearAllFilters() }}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {product.description.split('\n')[0].substring(0, 120)}...
                      </p>
                      {/* Key spec badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {product.filterTags?.protectionGrade && (
                          <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded font-medium">
                            {product.filterTags.protectionGrade}
                          </span>
                        )}
                        {product.filterTags?.outputSignal?.slice(0, 2).map((sig) => (
                          <span key={sig} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            {sig}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-1.5 mb-4">
                        {product.specs.slice(0, 2).map((spec) => (
                          <div key={spec.label} className="flex justify-between text-xs">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="text-gray-600 font-medium text-right">{spec.value}</span>
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
            {selectedCategory === 'all' && !searchQuery && activeFilterCount === 0 && (
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
      </div>
    </div>
  )
}
