import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSolutionBySlug, getSolutionsByCategory } from '@/lib/solutions-data'
import { getIcon } from '@/lib/icon-map'
import { ChevronLeft, CheckCircle } from 'lucide-react'

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug)

  if (!solution) {
    notFound()
  }

  const relatedSolutions = getSolutionsByCategory(solution.category)
    .filter(s => s.id !== solution.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <section className="bg-gradient-to-b from-deepiq-light to-white dark:from-gray-900 dark:to-gray-950 py-16 transition-colors">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/solutions"
                className="inline-flex items-center text-deepiq-blue hover:underline mb-6"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Solutions
              </Link>

              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const IconComponent = getIcon(solution.icon)
                  return <IconComponent className="w-16 h-16 text-deepiq-blue dark:text-blue-400" />
                })()}
                <div>
                  <span className="text-sm text-deepiq-gray dark:text-gray-400 transition-colors">{solution.category}</span>
                  <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark dark:text-white transition-colors">
                    {solution.name}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-deepiq-gray dark:text-gray-400 transition-colors">
                {solution.title}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">Overview</h2>
                <p className="text-lg text-deepiq-gray dark:text-gray-400 transition-colors">
                  {solution.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-deepiq-blue to-blue-700 text-white rounded-lg p-6">
                    <div className="text-3xl font-thin mb-2">
                      {benefit.metric}
                    </div>
                    <h3 className="text-lg font-light mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-blue-100">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {solution.image && (
                <div className="mb-12">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transition-colors">
                    <Image
                      src={solution.image}
                      alt={`${solution.name} Screenshot`}
                      width={1200}
                      height={800}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              )}

              <div className="mb-12">
                <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-6 transition-colors">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-deepiq-gray dark:text-gray-400 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-6 transition-colors">Industries Served</h2>
                <div className="flex flex-wrap gap-3">
                  {solution.industries.map(industry => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-deepiq-light dark:bg-gray-700 text-deepiq-blue dark:text-blue-400 rounded-full font-medium transition-colors"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-deepiq-blue to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-thin mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-lg">
                  See how {solution.name} can transform your operations with a personalized demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/demo"
                    className="inline-block bg-white text-deepiq-blue px-6 py-3 rounded-lg font-light hover:bg-deepiq-light transition-colors text-center"
                  >
                    Schedule a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-light hover:bg-white hover:text-deepiq-blue transition-colors text-center"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedSolutions.length > 0 && (
          <section className="py-16 bg-deepiq-light dark:bg-gray-900 transition-colors">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-8 transition-colors">Related Solutions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedSolutions.map(related => (
                    <Link
                      key={related.id}
                      href={`/solutions/${related.id}`}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow group"
                    >
                      {(() => {
                        const IconComponent = getIcon(related.icon)
                        return <IconComponent className="w-8 h-8 mb-3 text-deepiq-blue dark:text-blue-400" />
                      })()}
                      <h3 className="font-light text-deepiq-dark dark:text-white mb-2 group-hover:text-deepiq-blue transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-deepiq-gray dark:text-gray-400 line-clamp-2 transition-colors">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}