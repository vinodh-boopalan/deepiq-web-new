import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPlatformFeatureById } from '@/lib/platform-data'

export default function PlatformFeaturePage({ params }: { params: { slug: string } }) {
  const feature = getPlatformFeatureById(params.slug)

  if (!feature) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        {/* Hero Section */}
        <section className={`
          relative py-20 overflow-hidden
          ${feature.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950' : ''}
          ${feature.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950' : ''}
          ${feature.color === 'green' ? 'bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-950' : ''}
        `}>
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm dark:shadow-gray-900 mb-6">
                    <feature.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                      {feature.subtitle}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-deepiq-dark dark:text-white mb-6">
                    {feature.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/demo" className="btn-primary">
                      See It In Action
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
                
                {/* Right side - Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} Platform Visualization`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative element behind image */}
                  <div className={`
                    absolute -inset-4 -z-10 rounded-2xl opacity-20 blur-2xl
                    ${feature.color === 'blue' ? 'bg-blue-500' : ''}
                    ${feature.color === 'purple' ? 'bg-purple-500' : ''}
                    ${feature.color === 'green' ? 'bg-green-500' : ''}
                  `} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5 -z-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 80% 50%, ${
                feature.color === 'blue' ? '#0066FF' :
                feature.color === 'purple' ? '#9333EA' :
                '#10B981'
              } 0%, transparent 50%)`,
            }} />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Measurable Business Impact
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {feature.benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className={`
                      text-5xl font-thin mb-4
                      ${feature.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                      ${feature.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                      ${feature.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                    `}>
                      {benefit.metric}
                    </div>
                    <h3 className="text-lg font-light text-deepiq-dark dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feature.features.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className={`
                      w-6 h-6 mr-3 mt-0.5 flex-shrink-0
                      ${feature.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                      ${feature.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                      ${feature.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                    `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Platform Capabilities
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {feature.capabilities.map((capability, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm dark:shadow-gray-900 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow">
                    <div className="mb-4">
                      <capability.icon className="w-8 h-8 text-deepiq-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-light text-deepiq-dark dark:text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Common Use Cases
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feature.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 shadow-sm dark:shadow-gray-900">
                    <div className="flex items-center">
                      <div className={`
                        w-2 h-2 rounded-full mr-3
                        ${feature.color === 'blue' ? 'bg-blue-600 dark:bg-blue-400' : ''}
                        ${feature.color === 'purple' ? 'bg-purple-600 dark:bg-purple-400' : ''}
                        ${feature.color === 'green' ? 'bg-green-600 dark:bg-green-400' : ''}
                      `} />
                      <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-center text-deepiq-dark dark:text-white mb-12">
                Seamless Integrations
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                {feature.integrations.map((integration, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full">
                    <span className="text-sm font-light text-gray-700 dark:text-gray-300">
                      {integration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`
          py-20
          ${feature.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800' : ''}
          ${feature.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800' : ''}
          ${feature.color === 'green' ? 'bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800' : ''}
        `}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
                Ready to Transform Your Data Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                See how DeepIQ can help you {feature.title.toLowerCase()} your industrial data at scale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Schedule a Demo
                </Link>
                <Link href="/contact" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Contact Sales
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