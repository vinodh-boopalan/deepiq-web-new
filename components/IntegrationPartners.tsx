import Link from 'next/link'

export default function IntegrationPartners() {
  const topPartners = [
    { name: 'OPCUA', className: 'text-blue-600 font-thin' },
    { name: 'MQTT', className: 'text-green-600 font-thin' },
    { name: 'Modbus', className: 'text-purple-600 font-thin' },
  ]

  const bottomPartners = [
    { name: 'SAP', className: 'text-blue-700 font-thin text-2xl' },
    { name: 'Maximo', className: 'text-red-600 font-light' },
    { name: 'Honeywell PHD', className: 'text-red-700 font-light' },
    { name: 'Schneider', className: 'text-green-700 font-light' },
    { name: 'Ignition', className: 'text-orange-600 font-light' },
    { name: 'CSV', className: 'text-gray-600 font-light' },
    { name: 'Azure IoT Hub', className: 'text-blue-500 font-light' },
    { name: 'AWS', className: 'text-orange-500 font-thin' },
    { name: 'Google Cloud', className: 'text-gray-700 font-light' },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 section-padding transition-colors">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-deepiq-dark dark:text-white mb-4">
            Scale and innovate with contextualized industrial data
          </h2>
          <p className="text-lg text-deepiq-gray dark:text-gray-400 max-w-3xl mx-auto">
            Connect to any industrial system and transform raw data into actionable insights
          </p>
        </div>

        <div className="bg-deepiq-light dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {topPartners.map((partner) => (
                <div key={partner.name} className={partner.className}>
                  {partner.name}
                </div>
              ))}
            </div>
            <div className="text-center text-deepiq-gray dark:text-gray-400 mb-8">
              ↓ equipment + aiq.knowledge ↓
            </div>
            <div className="text-center mb-8">
              <span className="text-sm text-deepiq-gray dark:text-gray-400">
                from raw tags to unified equipment hierarchies(t)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {bottomPartners.map((partner) => (
              <div key={partner.name} className={partner.className}>
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/integrations" className="btn-primary">
            View All Integrations →
          </Link>
        </div>
      </div>
    </section>
  )
}