'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/home/buld-highs.jpg',
    title: 'Industrial Excellence',
    description: 'Transforming operations with real-time data insights'
  },
  {
    image: '/images/home/ingests.jpg',
    title: 'Data at Scale',
    description: 'Processing billions of data points daily'
  },
  {
    image: '/images/home/usenaturls.jpg',
    title: 'Intelligent Operations',
    description: 'AI-powered optimization for industrial facilities'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative bg-gradient-to-b from-deepiq-light dark:from-gray-900 to-white dark:to-gray-950 overflow-hidden transition-colors">
      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin leading-tight">
              <span className="text-deepiq-dark dark:text-white">Moving industrial data. </span>
              <span className="text-deepiq-dark dark:text-white">Powering </span>
              <span className="text-deepiq-blue dark:text-blue-400">intelligent</span>
              <span className="text-deepiq-dark dark:text-white"> operations.</span>
            </h1>
            
            <p className="text-lg text-deepiq-gray leading-relaxed">
              From refineries to manufacturing floors, DeepIQ accelerates insight by moving, engineering, and 
              contextualizing data at scale — enabling smarter decisions, safer operations, and better outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/demo" className="btn-primary inline-block text-center">
                Get Started
              </Link>
              <Link href="/case-studies" className="btn-secondary inline-block text-center">
                View Interactive Demo
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-deepiq-gray">15x moved daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-deepiq-gray">Knowledge graph</span>
              </div>
            </div>
          </div>

          {/* Slideshow Section */}
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
            {/* Main Slideshow Container */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Container */}
              <div className="relative h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Slide Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-thin mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-200">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Touch Instructions - Only visible on mobile */}
            <p className="md:hidden text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
              Swipe or wait for auto-advance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}