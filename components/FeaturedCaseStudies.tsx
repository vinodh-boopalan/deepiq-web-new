import Link from 'next/link'
import { getFeaturedCaseStudies } from '@/lib/case-studies-data'

export default function FeaturedCaseStudies() {
  const featuredStudies = getFeaturedCaseStudies()

  return (
    <section className="bg-white dark:bg-gray-900 section-padding transition-colors">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-deepiq-dark dark:text-white mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-lg text-deepiq-gray dark:text-gray-400 max-w-3xl mx-auto">
            See how leading companies are transforming their operations with DeepIQ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredStudies.map(study => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl dark:hover:shadow-gray-900 transition-all group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-deepiq-blue dark:bg-blue-600 text-white text-xs font-light rounded-full">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-3 group-hover:text-deepiq-blue dark:group-hover:text-blue-400 transition-colors">
                {study.client}
              </h3>
              
              <p className="text-deepiq-gray dark:text-gray-400 mb-4 line-clamp-2">
                {study.description}
              </p>

              <div className="space-y-2 mb-4">
                {study.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-deepiq-gray dark:text-gray-400">{result}</span>
                  </div>
                ))}
              </div>

              <div className="text-deepiq-blue dark:text-blue-400 font-light group-hover:underline">
                Read Case Study →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="btn-primary inline-block"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}