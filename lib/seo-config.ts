export const defaultSEO = {
  defaultTitle: 'DeepIQ - Industrial AI Solutions for Oil & Gas',
  titleTemplate: '%s | DeepIQ',
  description: 'Transform industrial operations with AI-powered data integration, predictive analytics, and intelligent insights. Reduce downtime by 30% and optimize production.',
  canonical: 'https://deepiq.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepiq.com',
    siteName: 'DeepIQ',
    title: 'DeepIQ - Moving Industrial Data. Powering Intelligent Operations.',
    description: 'Transform industrial operations with AI-powered solutions. From refineries to manufacturing floors, DeepIQ helps you achieve operational excellence.',
    images: [
      {
        url: 'https://deepiq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DeepIQ - Industrial AI Solutions',
      },
    ],
  },
  twitter: {
    handle: '@deepiq',
    site: '@deepiq',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'industrial AI, predictive maintenance, oil and gas, data integration, edge computing, production optimization, DataStudio, industrial IoT, operational excellence',
    },
    {
      name: 'author',
      content: 'DeepIQ',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
}

export const pageSEO = {
  home: {
    title: 'Industrial AI Solutions for Oil & Gas | DeepIQ',
    description: 'Transform your operations with DeepIQ\'s AI-powered platform. Reduce downtime by 30%, optimize production, and achieve operational excellence.',
  },
  caseStudies: {
    title: 'Customer Success Stories',
    description: 'See how industry leaders are transforming operations with DeepIQ. Real results from oil & gas, chemicals, and manufacturing companies.',
  },
  solutions: {
    title: 'Solutions for Industrial Intelligence',
    description: 'End-to-end solutions for data integration, predictive maintenance, and production optimization. Deploy in 60 minutes per site.',
  },
  about: {
    title: 'About DeepIQ - Transforming Industrial Operations',
    description: 'Learn about DeepIQ\'s mission to help industrial companies unlock the value of operational data through AI and machine learning.',
  },
  contact: {
    title: 'Contact DeepIQ - Get Started Today',
    description: 'Ready to transform your operations? Contact our team of experts to learn how DeepIQ can help you achieve operational excellence.',
  },
  demo: {
    title: 'Request a Demo - See DeepIQ in Action',
    description: 'Get a personalized demonstration of DeepIQ\'s platform. See solutions tailored to your industry and specific challenges.',
  },
}