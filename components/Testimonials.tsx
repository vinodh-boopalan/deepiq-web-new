'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import testimonialsData from '@/data/testimonials/testimonials-data.json'

// No longer need logoMap or inversion lists since Brandfetch provides appropriate logos

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = testimonialsData

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-gray-900 dark:text-white mb-4">
            Trusted by <span className="text-blue-600 dark:text-blue-400">industrial leaders</span> worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See what our customers are saying about DeepIQ
          </p>
        </div>

        {/* Testimonial Carousel - Wider Layout */}
        <div className="max-w-7xl mx-auto relative">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
              <Quote className="w-full h-full" />
            </div>

            {/* Testimonials Container */}
            <div className="relative min-h-[380px] md:min-h-[320px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentIndex 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute inset-0'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-8 md:p-12 lg:p-16 items-center">
                      {/* Left Side - Quote */}
                      <div className="md:col-span-2 space-y-4">
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote>
                          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-light leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </blockquote>
                      </div>

                      {/* Right Side - Author Info */}
                      <div className="md:col-span-1 flex items-center md:border-l md:border-gray-200 dark:md:border-gray-700 md:pl-12">
                        <div className="flex flex-col items-center md:items-start space-y-4 w-full">
                          {/* Company Logo */}
                          {testimonial.logo_url ? (
                            <div className="flex items-center justify-center md:justify-start w-full">
                              <div className="h-[60px] w-full max-w-[200px] relative bg-white/90 dark:bg-white/95 rounded-lg px-3 py-2">
                                <img
                                  src={testimonial.logo_url}
                                  alt={`${testimonial.company} - Logos by Brandfetch`}
                                  className="h-full w-full object-contain object-center md:object-left opacity-85"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center md:justify-start w-full">
                              <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                                {testimonial.company !== 'Unknown' ? testimonial.company : ''}
                              </span>
                            </div>
                          )}
                          
                          {/* Author Details */}
                          <div className="text-center md:text-left">
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                              {testimonial.title}
                            </p>
                            {testimonial.company !== 'Unknown' && !testimonial.logo_url && (
                              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                {testimonial.company}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-blue-600 dark:bg-blue-400' 
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10PB+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Data Processed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}