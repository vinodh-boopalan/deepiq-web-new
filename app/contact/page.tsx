'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    country: '',
    message: '',
    consent: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.consent) newErrors.consent = 'Please agree to the privacy policy'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call - replace with actual HubSpot integration
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        country: '',
        message: '',
        consent: false
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-deepiq-light to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark mb-6">
                Let's Transform Your Operations Together
              </h1>
              <p className="text-xl text-deepiq-gray">
                Ready to see how DeepIQ can help you achieve operational excellence? 
                Get in touch with our team of experts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-light">
                        Thank you for contacting us! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deepiq-blue"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                            errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deepiq-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deepiq-blue"
                      >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-deepiq-dark dark:text-white mb-2 transition-colors">
                        How can we help you? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-deepiq-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="Tell us about your challenges and what you're looking to achieve..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm text-deepiq-gray">
                          I agree to the processing of my personal data according to DeepIQ's privacy policy. 
                          DeepIQ may contact me with relevant information about products and services. *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-sm text-red-500">{errors.consent}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-8 py-3 bg-deepiq-blue text-white font-light rounded-lg transition-colors ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-deepiq-light rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-light text-deepiq-dark mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-deepiq-blue mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-light text-deepiq-dark">Email</p>
                          <a href="mailto:info@deepiq.com" className="text-deepiq-blue hover:underline">
                            info@deepiq.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-deepiq-blue mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="font-light text-deepiq-dark">Phone</p>
                          <a href="tel:+1-555-0123" className="text-deepiq-blue hover:underline">
                            +1 (555) 0123
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-deepiq-blue mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-light text-deepiq-dark">Headquarters</p>
                          <p className="text-deepiq-gray">
                            Houston, TX<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-deepiq-dark text-white rounded-lg p-6">
                    <h3 className="text-xl font-light mb-4">Ready for a Demo?</h3>
                    <p className="mb-4 text-gray-300">
                      See DeepIQ in action with a personalized demonstration tailored to your needs.
                    </p>
                    <a
                      href="/demo"
                      className="inline-block bg-white text-deepiq-blue px-6 py-2 rounded-lg font-light hover:bg-deepiq-light transition-colors"
                    >
                      Schedule Demo
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