'use client'

import Link from 'next/link'
import { platformFeatures } from '@/lib/platform-data'

interface PlatformMegamenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function PlatformMegamenu({ isOpen, onClose }: PlatformMegamenuProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Megamenu */}
      <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-2xl dark:shadow-gray-950 border-t border-gray-100 dark:border-gray-800 z-50 animate-slide-down">
        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={feature.id} className="relative">
                {/* Flow indicator */}
                {index < platformFeatures.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                
                <div className="h-full bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-gray-900 transition-all group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center
                      ${feature.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                      ${feature.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : ''}
                      ${feature.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : ''}
                    `}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-deepiq-dark dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-deepiq-gray dark:text-gray-400">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.features.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={feature.detailUrl}
                    onClick={onClose}
                    className={`
                      inline-flex items-center text-sm font-light
                      ${feature.color === 'blue' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' : ''}
                      ${feature.color === 'purple' ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300' : ''}
                      ${feature.color === 'green' ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' : ''}
                      group-hover:underline transition-colors
                    `}
                  >
                    {feature.ctaText}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-lg font-light text-deepiq-dark dark:text-white mb-1">
                  Ready to transform your data operations?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See how DeepIQ can accelerate your digital transformation
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/demo"
                  onClick={onClose}
                  className="btn-primary text-sm"
                >
                  Request Demo
                </Link>
                <Link
                  href="/platform"
                  onClick={onClose}
                  className="btn-secondary text-sm"
                >
                  View Full Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}