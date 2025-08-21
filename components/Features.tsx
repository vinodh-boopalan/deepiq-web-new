import { ArrowUpDown, Cpu, Code } from 'lucide-react'
import Connectors from './Connectors'

export default function Features() {
  const features = [
    {
      title: 'Effortlessly move and contextualize data from any industrial system',
      description: 'Automatically ingest, engineer, and contextualize data from industrial protocols, historians, IoT gateways, SCADA/DCS, and enterprise systems into analytics-ready datasets.',
      icon: <ArrowUpDown className="w-8 h-8" />,
    },
    {
      title: 'Enrich with domain context',
      description: 'Map equipment, instruments, and processes into knowledge graphs to provide rich operational context for advanced analytics.',
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: 'Build custom connectors',
      description: 'Establish secure real-time or batch connections to legacy systems with custom protocol adapters and edge computing capabilities.',
      icon: <Code className="w-8 h-8" />,
    },
  ]

  const capabilities = [
    {
      title: 'Engineer your data pipelines',
      description: 'From raw tags to unified equipment hierarchies',
    },
    {
      title: 'Enrich with domain context',
      description: 'Map equipment, instruments, and processes into knowledge graphs',
    },
  ]

  return (
    <>
      <section className="bg-deepiq-light dark:bg-gray-900 section-padding transition-colors">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-thin text-deepiq-dark dark:text-white mb-6">
                Automatically ingest, engineer and contextualize data from industrial systems
              </h2>
              <p className="text-lg text-deepiq-gray dark:text-gray-400">
                DeepIQ's equipment and aiq.knowledge from.raw tags to unified hierarchies(t)
              </p>
            </div>
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-gray-900">
                  <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-deepiq-gray dark:text-gray-400">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm dark:shadow-gray-900 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow"
            >
              <div className="text-deepiq-blue mb-4">{feature.icon}</div>
              <h3 className="text-xl font-light text-deepiq-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-deepiq-gray dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Connectors Section */}
    <Connectors />
    </>
  )
}