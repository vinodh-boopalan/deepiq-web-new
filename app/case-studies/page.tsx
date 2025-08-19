'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { caseStudies, industries, categories } from '@/lib/case-studies-data'

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesIndustry && matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <section className="bg-gradient-to-b from-deepiq-light dark:from-gray-900 to-white dark:to-gray-950 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark dark:text-white mb-4">
                Customer Success Stories
              </h1>
              <p className="text-lg text-deepiq-gray dark:text-gray-400">
                Discover how industry leaders are transforming their operations with DeepIQ's 
                AI-powered solutions. Real results from real customers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-64">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <h3 className="font-light text-deepiq-dark dark:text-white mb-3">Search</h3>
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:border-deepiq-blue dark:focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-light text-deepiq-dark dark:text-white mb-3">Industry</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="industry"
                          value="all"
                          checked={selectedIndustry === 'all'}
                          onChange={(e) => setSelectedIndustry(e.target.value)}
                          className="mr-2 text-deepiq-blue"
                        />
                        <span className="text-sm dark:text-gray-300">All Industries</span>
                      </label>
                      {industries.map(industry => (
                        <label key={industry} className="flex items-center">
                          <input
                            type="radio"
                            name="industry"
                            value={industry}
                            checked={selectedIndustry === industry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm dark:text-gray-300">{industry}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-light text-deepiq-dark dark:text-white mb-3">Solution Type</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value="all"
                          checked={selectedCategory === 'all'}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm dark:text-gray-300">All Solutions</span>
                      </label>
                      {categories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm dark:text-gray-300">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-deepiq-gray dark:text-gray-400">
                    Showing {filteredStudies.length} of {caseStudies.length} case studies
                  </p>
                  <button
                    onClick={() => {
                      setSelectedIndustry('all')
                      setSelectedCategory('all')
                      setSearchTerm('')
                    }}
                    className="text-deepiq-blue dark:text-blue-400 hover:underline text-sm"
                  >
                    Clear filters
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredStudies.map(study => (
                    <Link
                      key={study.id}
                      href={`/case-studies/${study.id}`}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow group"
                    >
                      {study.featured && (
                        <span className="inline-block px-3 py-1 bg-deepiq-blue dark:bg-blue-600 text-white text-xs font-light rounded-full mb-3">
                          FEATURED
                        </span>
                      )}
                      <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2 group-hover:text-deepiq-blue dark:group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3 text-sm text-deepiq-gray dark:text-gray-400">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                      <p className="text-deepiq-gray dark:text-gray-400 mb-4 line-clamp-3">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-deepiq-light dark:bg-gray-700 text-deepiq-blue dark:text-blue-400 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-deepiq-blue dark:text-blue-400 font-light group-hover:underline">
                        Read Case Study →
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredStudies.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-deepiq-gray dark:text-gray-400">
                      No case studies found matching your criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}