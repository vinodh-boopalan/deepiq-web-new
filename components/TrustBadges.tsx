export default function TrustBadges() {
  const companies = [
    { name: 'Honeywell', className: 'text-red-600' },
    { name: 'HALLIBURTON', className: 'text-red-700' },
    { name: 'OMV', className: 'text-blue-800' },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-12 border-y dark:border-gray-800 transition-colors">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-lg font-light text-deepiq-dark dark:text-white">
            Trusted by industrial leaders worldwide
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`text-2xl font-thin ${company.className} opacity-70 hover:opacity-100 transition-opacity`}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}