import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCaseStudyBySlug, getCaseStudiesByIndustry } from '@/lib/case-studies-data'

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const relatedStudies = getCaseStudiesByIndustry(caseStudy.industry)
    .filter(study => study.id !== caseStudy.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <section className="bg-gradient-to-b from-deepiq-light to-white dark:from-gray-900 dark:to-gray-950 py-16 transition-colors">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-deepiq-blue hover:underline mb-6"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-deepiq-blue text-white text-sm font-light rounded">
                  {caseStudy.industry}
                </span>
                <span className="px-3 py-1 bg-deepiq-light text-deepiq-blue text-sm font-light rounded">
                  {caseStudy.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-deepiq-gray dark:text-gray-400 mb-8 transition-colors">
                {caseStudy.client}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-deepiq-light dark:bg-gray-800 rounded-lg p-6 text-center transition-colors">
                    <p className="text-2xl font-thin text-deepiq-blue mb-2">
                      {result.split(' ')[0]}
                    </p>
                    <p className="text-sm text-deepiq-gray dark:text-gray-400 transition-colors">
                      {result.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">Overview</h2>
                  <p className="text-deepiq-gray dark:text-gray-400 transition-colors">{caseStudy.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">The Challenge</h2>
                  <p className="text-deepiq-gray dark:text-gray-400 transition-colors">{caseStudy.challenge}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">The Solution</h2>
                  <p className="text-deepiq-gray dark:text-gray-400 transition-colors">{caseStudy.solution}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">Key Results</h2>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-deepiq-gray dark:text-gray-400 transition-colors">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-4 transition-colors">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-deepiq-light dark:bg-gray-700 text-deepiq-blue dark:text-blue-400 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {caseStudy.pdfPath && (
                <div className="bg-gradient-to-r from-deepiq-blue to-blue-700 rounded-lg p-8 text-white mb-12">
                  <h3 className="text-2xl font-thin mb-4">Download Full Case Study</h3>
                  <p className="mb-6">
                    Get the complete case study with detailed technical specifications, 
                    implementation timeline, and ROI analysis.
                  </p>
                  <a
                    href={caseStudy.pdfPath}
                    download
                    className="inline-flex items-center bg-white text-deepiq-blue px-6 py-3 rounded-lg font-light hover:bg-deepiq-light transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              )}

              <div className="bg-deepiq-dark dark:bg-gray-800 rounded-lg p-8 text-white transition-colors">
                <h3 className="text-2xl font-thin mb-4">Ready to Transform Your Operations?</h3>
                <p className="mb-6">
                  See how DeepIQ can help you achieve similar results in your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/demo"
                    className="inline-block bg-deepiq-blue text-white px-6 py-3 rounded-lg font-light hover:bg-blue-600 transition-colors text-center"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-light hover:bg-white hover:text-deepiq-dark transition-colors text-center"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedStudies.length > 0 && (
          <section className="py-12 bg-deepiq-light dark:bg-gray-900 transition-colors">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-8 transition-colors">Related Case Studies</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedStudies.map(study => (
                    <Link
                      key={study.id}
                      href={`/case-studies/${study.id}`}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow group"
                    >
                      <h3 className="font-light text-deepiq-dark dark:text-white mb-2 group-hover:text-deepiq-blue transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-deepiq-gray dark:text-gray-400 mb-3 transition-colors">
                        {study.client}
                      </p>
                      <p className="text-sm text-deepiq-blue group-hover:underline">
                        Read more →
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