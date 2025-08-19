'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { solutions, solutionCategories } from '@/lib/solutions-data'
import { getIcon } from '@/lib/icon-map'
import { Zap, Cpu, BarChart3, ArrowRight, ChevronRight } from 'lucide-react'

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const allCategories = ['All', ...solutionCategories]
  
  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory)

  // Get featured solutions (first from each category)
  const featuredSolutions = [
    solutions.find(s => s.id === 'datastudio-extract'),
    solutions.find(s => s.id === 'it-ot-contextualization'),
    solutions.find(s => s.id === 'predictive-maintenance')
  ].filter(Boolean)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, #10b981 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-deepiq-dark dark:text-white mb-6">
                Industrial Intelligence
                <span className="block text-3xl md:text-4xl mt-4 text-gray-600 dark:text-gray-400">
                  Solutions That Scale
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
                From edge to cloud, from data to decisions. Transform your operations with 
                AI-powered solutions designed for the complexities of industrial data.
              </p>
              
              {/* Value Props */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <Zap className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <h3 className="font-light text-lg text-deepiq-dark dark:text-white mb-2">Connect Everything</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">150+ protocols, 40+ systems</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <Cpu className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <h3 className="font-light text-lg text-deepiq-dark dark:text-white mb-2">Transform Instantly</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">95% faster analytics</p>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <BarChart3 className="w-10 h-10 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <h3 className="font-light text-lg text-deepiq-dark dark:text-white mb-2">Optimize Continuously</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">$2-5M savings per asset</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-thin text-deepiq-dark dark:text-white mb-4">
                Featured Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our most impactful solutions delivering immediate ROI
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredSolutions.map((solution, index) => {
                if (!solution) return null
                const IconComponent = getIcon(solution.icon)
                const colors = ['blue', 'purple', 'green'][index]
                
                return (
                  <Link
                    key={solution.id}
                    href={`/solutions/${solution.id}`}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900 hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    {/* Color accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${
                      colors === 'blue' ? 'from-blue-400 to-blue-600' :
                      colors === 'purple' ? 'from-purple-400 to-purple-600' :
                      'from-green-400 to-green-600'
                    }`} />
                    
                    <div className="p-8">
                      <div className={`inline-flex p-3 rounded-xl mb-6 ${
                        colors === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        colors === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                        'bg-green-100 dark:bg-green-900/30'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          colors === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          colors === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                      
                      <h3 className="text-2xl font-light text-deepiq-dark dark:text-white mb-3 group-hover:text-deepiq-blue dark:group-hover:text-blue-400 transition-colors">
                        {solution.name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                        {solution.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {solution.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className={`text-2xl font-thin mr-3 ${
                              colors === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                              colors === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                              'text-green-600 dark:text-green-400'
                            }`}>
                              {benefit.metric}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {benefit.title}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`inline-flex items-center font-light group-hover:gap-3 transition-all ${
                        colors === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        colors === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        'text-green-600 dark:text-green-400'
                      }`}>
                        Explore Solution
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Solutions with Category Tabs */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-thin text-deepiq-dark dark:text-white mb-4">
                Complete Solution Portfolio
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore our comprehensive suite of industrial intelligence solutions
              </p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-light transition-all ${
                    selectedCategory === category
                      ? 'bg-deepiq-blue dark:bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                  {category === 'All' && (
                    <span className="ml-2 text-sm opacity-75">({solutions.length})</span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredSolutions.map(solution => {
                const IconComponent = getIcon(solution.icon)
                
                return (
                  <Link
                    key={solution.id}
                    href={`/solutions/${solution.id}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl dark:hover:shadow-gray-900 hover:border-deepiq-blue dark:hover:border-blue-600 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-lg font-light text-deepiq-dark dark:text-white group-hover:text-deepiq-blue dark:group-hover:text-blue-400 transition-colors">
                            {solution.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {solution.category}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-deepiq-blue dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {solution.title}
                    </p>
                    
                    {/* Key Metric */}
                    {solution.benefits[0] && (
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-500">Key Impact</span>
                        <span className="text-sm font-light text-deepiq-dark dark:text-white">
                          {solution.benefits[0].metric}
                        </span>
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Industry-Specific Expertise
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {['Oil & Gas', 'Manufacturing', 'Chemicals', 'Energy'].map(industry => {
                  const count = solutions.filter(s => s.industries.includes(industry)).length
                  
                  return (
                    <div key={industry} className="text-center">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow">
                        <h3 className="text-lg font-light text-deepiq-dark dark:text-white mb-2">
                          {industry}
                        </h3>
                        <p className="text-3xl font-thin text-deepiq-blue dark:text-blue-400">
                          {count}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Solutions
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-deepiq-blue to-blue-700 dark:from-blue-700 dark:to-blue-800">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our experts will help you identify the right solutions for your unique challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-deepiq-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-light"
                >
                  Talk to an Expert
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-light"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}