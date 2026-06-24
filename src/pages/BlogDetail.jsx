import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowRight, ChevronRight, Mail, ArrowLeft } from 'lucide-react'
import blogPosts from '../data/blog'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = post.seo?.title || `${post.title} | Sensor Measure Blog`
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight size={14} />
              <Link to="/blog" className="hover:text-white">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-white">{post.category}</span>
            </nav>
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {post.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'list') {
              return (
                <ul key={idx} className="space-y-2 my-4">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {block.text}
              </p>
            )
          })}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
          {post.tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Need Help Choosing the Right Sensor?</h3>
          <p className="text-blue-100 mb-6">
            Our engineering team is ready to provide expert guidance and competitive pricing for your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              <Mail size={18} /> Contact Us
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-colors">
              View Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group">
                  <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 mb-4">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs text-primary-600 font-medium">{rp.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-primary-600 transition-colors leading-snug">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
