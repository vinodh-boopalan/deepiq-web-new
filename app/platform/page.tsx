import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { platformFeatures } from '@/lib/platform-data'

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-deepiq-light dark:from-gray-900 to-white dark:to-gray-950 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-thin text-deepiq-dark dark:text-white mb-6">
                The Complete Industrial Data Platform
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Extract, Engineer, and Explore your industrial data with a unified platform 
                designed for the unique challenges of oil & gas operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary">
                  See Platform Demo
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Flow Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-thin text-center text-deepiq-dark dark:text-white mb-4">
                End-to-End Data Journey
              </h2>
              <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
                Transform raw industrial data into actionable insights with our integrated platform
              </p>

              <div className="relative">
                {/* Flow Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2" />
                
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  {platformFeatures.map((feature, index) => (
                    <div key={feature.id} className="relative">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-0 text-6xl font-thin text-gray-200 dark:text-gray-800 z-0">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900 hover:shadow-xl dark:hover:shadow-gray-800 transition-all">
                        <div className={`
                          w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0
                          ${feature.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                          ${feature.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : ''}
                          ${feature.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : ''}
                        `}>
                          <feature.icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-2xl font-thin text-deepiq-dark dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {feature.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {feature.description}
                        </p>
                        
                        <ul className="space-y-3 mb-6">
                          {feature.features.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link
                          href={feature.detailUrl}
                          className={`
                            inline-flex items-center font-light
                            ${feature.color === 'blue' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' : ''}
                            ${feature.color === 'purple' ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300' : ''}
                            ${feature.color === 'green' ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' : ''}
                            hover:underline transition-colors
                          `}
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      
                      {/* Arrow between cards (mobile) */}
                      {index < platformFeatures.length - 1 && (
                        <div className="lg:hidden flex justify-center my-8">
                          <svg className="w-8 h-8 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Platform Showcase */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-thin text-center text-deepiq-dark dark:text-white mb-4">
                See the Platform in Action
              </h2>
              <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                Explore how each component of our platform works together to deliver value
              </p>
              
              <div className="space-y-8">
                {platformFeatures.map((feature, index) => (
                  <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-gray-900">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`
                            w-12 h-12 rounded-lg flex items-center justify-center
                            ${feature.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                            ${feature.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : ''}
                            ${feature.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : ''}
                          `}>
                            <feature.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-thin text-deepiq-dark dark:text-white">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {feature.description}
                        </p>
                        <Link
                          href={feature.detailUrl}
                          className={`
                            inline-flex items-center font-light
                            ${feature.color === 'blue' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' : ''}
                            ${feature.color === 'purple' ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300' : ''}
                            ${feature.color === 'green' ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' : ''}
                            hover:underline transition-colors
                          `}
                        >
                          Explore {feature.title}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <Link href={feature.detailUrl} className="block">
                        <div className="relative rounded-xl overflow-hidden shadow-xl dark:shadow-gray-900 hover:shadow-2xl transition-shadow">
                          <Image
                            src={feature.image}
                            alt={`${feature.title} Platform`}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-thin text-center text-deepiq-dark dark:text-white mb-16">
                Why Choose DeepIQ Platform
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Unified Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Single platform for all your data needs, from extraction to insights
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Industry-Specific
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built for oil & gas with deep domain expertise
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bank-grade security with SOC2 compliance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Cloud & Edge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deploy in cloud, on-premise, or at the edge
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Scalable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Handle millions of tags and petabytes of data
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    Real-Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Process and analyze data with millisecond latency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-deepiq-blue to-blue-700 dark:from-blue-700 dark:to-blue-800">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
                See the Platform in Action
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Discover how DeepIQ can transform your data operations in just 30 minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="bg-white text-deepiq-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Schedule Live Demo
                </Link>
                <Link href="/resources/platform-overview" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Download Overview
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