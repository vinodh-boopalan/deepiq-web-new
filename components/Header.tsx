'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import PlatformMegamenu from './PlatformMegamenu'
import CompanyMegamenu from './CompanyMegamenu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false)
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)

  const navigation = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Platform', href: '/platform' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/company' },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50 transition-colors">
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-thin text-deepiq-dark dark:text-white">Deep</span>
            <span className="text-2xl font-thin text-deepiq-blue dark:text-blue-400">IQ</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            item.name === 'Platform' ? (
              <button
                key={item.name}
                onClick={() => {
                  setPlatformMenuOpen(!platformMenuOpen)
                  setCompanyMenuOpen(false)
                }}
                className="flex items-center gap-1 text-deepiq-gray dark:text-gray-300 hover:text-deepiq-blue dark:hover:text-blue-400 transition-colors font-light"
              >
                {item.name}
                <svg 
                  className={`w-4 h-4 transition-transform ${platformMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : item.name === 'Company' ? (
              <button
                key={item.name}
                onClick={() => {
                  setCompanyMenuOpen(!companyMenuOpen)
                  setPlatformMenuOpen(false)
                }}
                className="flex items-center gap-1 text-deepiq-gray dark:text-gray-300 hover:text-deepiq-blue dark:hover:text-blue-400 transition-colors font-light"
              >
                {item.name}
                <svg 
                  className={`w-4 h-4 transition-transform ${companyMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-deepiq-gray dark:text-gray-300 hover:text-deepiq-blue dark:hover:text-blue-400 transition-colors font-light"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="text-deepiq-blue hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-light"
          >
            Contact Sales
          </Link>
          <Link
            href="/demo"
            className="btn-primary"
          >
            View Interactive Demo
          </Link>
          <ThemeToggle />
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="container py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-deepiq-gray dark:text-gray-300 hover:text-deepiq-blue dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t dark:border-gray-800 space-y-3">
              <Link
                href="/contact"
                className="block py-2 text-deepiq-blue dark:text-blue-400 font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </Link>
              <Link
                href="/demo"
                className="block btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Interactive Demo
              </Link>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <PlatformMegamenu 
        isOpen={platformMenuOpen} 
        onClose={() => setPlatformMenuOpen(false)} 
      />
      
      <CompanyMegamenu 
        isOpen={companyMenuOpen} 
        onClose={() => setCompanyMenuOpen(false)} 
      />
    </header>
  )
}