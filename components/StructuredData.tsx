export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DeepIQ',
    url: 'https://deepiq.com',
    logo: 'https://deepiq.com/logo.png',
    description: 'DeepIQ provides AI-powered solutions for industrial operations, helping companies reduce downtime and optimize production.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'sales',
      email: 'info@deepiq.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/deepiq',
      'https://twitter.com/deepiq',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DeepIQ',
    url: 'https://deepiq.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://deepiq.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DeepIQ DataStudio',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Cloud',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}