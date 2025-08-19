'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    companySize: '',
    industry: '',
    preferredDate: '',
    preferredTime: '',
    interests: [] as string[],
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitSuccess(true)
    setIsSubmitting(false)
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-deepiq-light to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark mb-6">
                See DeepIQ in Action
              </h1>
              <p className="text-xl text-deepiq-gray">
                Get a personalized demonstration of how DeepIQ can transform your operations. 
                Our experts will show you solutions tailored to your specific challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {submitSuccess ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                      <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h2 className="text-2xl font-thin text-green-800 mb-2">Demo Request Received!</h2>
                      <p className="text-green-700">
                        Thank you for your interest in DeepIQ. Our team will contact you within 24 hours 
                        to schedule your personalized demonstration.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Company *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.jobTitle}
                            onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Company Size
                          </label>
                          <select
                            value={formData.companySize}
                            onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          >
                            <option value="">Select size</option>
                            <option value="1-50">1-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501-1000">501-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Industry *
                          </label>
                          <select
                            required
                            value={formData.industry}
                            onChange={(e) => setFormData({...formData, industry: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          >
                            <option value="">Select industry</option>
                            <option value="oil-gas">Oil & Gas</option>
                            <option value="chemicals">Chemicals</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="energy">Energy & Utilities</option>
                            <option value="mining">Mining</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          What solutions are you interested in?
                        </label>
                        <div className="space-y-2">
                          {[
                            'Data Integration (DataStudio Extract)',
                            'Data Engineering (DataStudio Engineer)',
                            'Analytics & Insights (DataStudio Explore)',
                            'Predictive Maintenance',
                            'Production Optimization',
                            'Edge Computing'
                          ].map(interest => (
                            <label key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.interests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                                className="mr-3"
                              />
                              <span className="text-sm text-deepiq-gray">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                            Preferred Time
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          >
                            <option value="">Select time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 5PM)</option>
                            <option value="evening">Evening (5PM - 7PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Tell us about your challenges (optional)
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                          placeholder="What specific challenges are you looking to solve?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-8 py-3 bg-deepiq-blue text-white font-light rounded-lg transition-colors ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Demo'}
                      </button>
                    </form>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-deepiq-light rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-light text-deepiq-dark mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-deepiq-gray">
                          30-minute personalized demonstration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-deepiq-gray">
                          Solutions tailored to your industry
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-deepiq-gray">
                          ROI analysis and implementation roadmap
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-deepiq-gray">
                          Q&A with our technical experts
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-light text-deepiq-dark mb-3">
                      Why Choose DeepIQ?
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-thin text-deepiq-blue">30%</div>
                        <p className="text-sm text-deepiq-gray">Average reduction in downtime</p>
                      </div>
                      <div>
                        <div className="text-2xl font-thin text-deepiq-blue">60 min</div>
                        <p className="text-sm text-deepiq-gray">Deployment time per site</p>
                      </div>
                      <div>
                        <div className="text-2xl font-thin text-deepiq-blue">10x</div>
                        <p className="text-sm text-deepiq-gray">Faster data processing</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-deepiq-dark text-white rounded-lg p-6">
                    <h3 className="text-lg font-light mb-3">Have Questions?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Our team is here to help you understand how DeepIQ can meet your needs.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-white text-deepiq-blue px-4 py-2 rounded-lg text-sm font-light hover:bg-deepiq-light transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}