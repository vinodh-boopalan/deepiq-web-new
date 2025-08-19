'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { companyMenuSections, companyFeaturedContent } from '@/lib/company-menu-data'

interface CompanyMegamenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function CompanyMegamenu({ isOpen, onClose }: CompanyMegamenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const megamenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megamenuRef.current && !megamenuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      ref={megamenuRef}
      className="absolute left-0 top-full mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-5 duration-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-4 gap-8 p-8">
          {companyMenuSections.map((section) => (
            <div 
              key={section.title}
              className={`space-y-4 ${section.backgroundColor === 'blue-50' ? 'bg-blue-50 dark:bg-blue-900/20 -m-4 p-4 rounded-lg' : ''}`}
              onMouseEnter={() => setActiveSection(section.title)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Section Header */}
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                <section.icon className={`w-5 h-5 ${activeSection === section.title ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`} />
                <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">
                  {section.title}
                </h3>
              </div>

              {/* Section Items */}
              <div className="space-y-3">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`group flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      item.cta ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30' : ''
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </p>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                            {item.badge}
                          </span>
                        )}
                        {item.count && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ({item.count})
                          </span>
                        )}
                        {item.highlight && (
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    {item.cta && (
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-0.5" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Section */}
        <div className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white rounded-full">
                  Featured
                </span>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {companyFeaturedContent.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {companyFeaturedContent.description}
              </p>
              {companyFeaturedContent.link && (
                <Link
                  href={companyFeaturedContent.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  onClick={onClose}
                >
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Stats Grid */}
            {companyFeaturedContent.stats && (
              <div className="grid grid-cols-4 gap-6 ml-8">
                {companyFeaturedContent.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}