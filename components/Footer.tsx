import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    Solutions: [
      { name: 'Oil & Gas', href: '/solutions/oil-gas' },
      { name: 'Manufacturing', href: '/solutions/manufacturing' },
      { name: 'Energy', href: '/solutions/energy' },
      { name: 'Chemicals', href: '/solutions/chemicals' },
    ],
    Platform: [
      { name: 'Data Integration', href: '/platform/integration' },
      { name: 'Analytics', href: '/platform/analytics' },
      { name: 'AI/ML Models', href: '/platform/ai-ml' },
      { name: 'Edge Computing', href: '/platform/edge' },
    ],
    Resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-deepiq-dark dark:bg-gray-950 text-white border-t dark:border-gray-800 transition-colors">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-thin text-white">Deep</span>
              <span className="text-2xl font-thin text-deepiq-blue">IQ</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Moving industrial data. Powering intelligent operations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/deepiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/deepiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-light mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 DeepIQ. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-sm text-gray-400 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}