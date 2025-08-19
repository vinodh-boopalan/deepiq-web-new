export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  category: string
  description: string
  challenge: string
  solution: string
  results: string[]
  image?: string
  pdfPath?: string
  featured: boolean
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'valaris-drilling',
    title: 'Revolutionizing Offshore Drilling Operations',
    client: 'Valaris',
    industry: 'Oil & Gas',
    category: 'Drilling Optimization',
    description: 'How Valaris reduced NPT by 30% using DeepIQ predictive analytics platform for offshore drilling operations.',
    challenge: 'Valaris faced significant non-productive time (NPT) in their offshore drilling operations due to equipment failures and unplanned maintenance.',
    solution: 'DeepIQ implemented real-time data integration from drilling systems, predictive maintenance models, and automated anomaly detection.',
    results: [
      '30% reduction in NPT',
      '$15M annual cost savings',
      '50% fewer equipment failures',
      '24/7 real-time monitoring capability'
    ],
    pdfPath: '/docs/case-studies/DeepIQCaseStudyValaris.pdf',
    featured: true,
    tags: ['Predictive Maintenance', 'Drilling', 'Real-time Analytics', 'Cost Reduction']
  },
  {
    id: 'sustainable-oils',
    title: 'Revolutionizing Agricultural Operations with IoT and Cloud',
    client: 'Sustainable Oils, Inc.',
    industry: 'Agriculture/Energy',
    category: 'IoT Integration',
    description: 'Transforming agricultural operations through intelligent IoT integration and cloud-based analytics.',
    challenge: 'Sustainable Oils needed to optimize their agricultural operations and improve yield predictions across multiple facilities.',
    solution: 'DeepIQ deployed edge computing devices, integrated IoT sensors, and built a cloud-based analytics platform for real-time insights.',
    results: [
      '25% increase in crop yield',
      'Real-time monitoring of 500+ sensors',
      '40% reduction in water usage',
      'Predictive harvest optimization'
    ],
    pdfPath: '/docs/case-studies/Sustainable Oils, Inc_ Revolutionizing Agricultural Operations with IoT and Cloud – DeepIQ.pdf',
    featured: true,
    tags: ['IoT', 'Agriculture', 'Cloud Analytics', 'Sustainability']
  },
  {
    id: 'aws-integration',
    title: 'Moving Operational Data into AWS at Scale',
    client: 'Major Oil & Gas Operator',
    industry: 'Oil & Gas',
    category: 'Cloud Migration',
    description: 'Successfully migrated operational data from 50+ facilities to AWS in less than 60 minutes per site.',
    challenge: 'Client needed to centralize operational data from distributed facilities into a unified cloud data lake.',
    solution: 'DeepIQ DataStudio enabled rapid data ingestion, transformation, and loading into AWS with automated pipelines.',
    results: [
      'Deployment in <60 minutes per site',
      '50+ facilities integrated',
      '90% reduction in data silos',
      'Real-time data availability'
    ],
    pdfPath: '/docs/case-studies/Moving Operational Data into AWS at Scale in less than 60 minutes – DeepIQ.pdf',
    featured: false,
    tags: ['AWS', 'Cloud Migration', 'Data Integration', 'Scale']
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Excellence',
    client: 'Global Refinery',
    industry: 'Refining',
    category: 'Predictive Maintenance',
    description: 'Implementing AI-driven predictive maintenance to prevent equipment failures and optimize maintenance schedules.',
    challenge: 'Reactive maintenance approach leading to unexpected downtime and high maintenance costs.',
    solution: 'DeepIQ deployed machine learning models to predict equipment failures 30 days in advance.',
    results: [
      '45% reduction in unplanned downtime',
      '$8M annual maintenance savings',
      '60% improvement in maintenance scheduling',
      'Zero critical equipment failures'
    ],
    pdfPath: '/docs/case-studies/Predictive Maintenance – DeepIQ.pdf',
    featured: false,
    tags: ['AI/ML', 'Predictive Maintenance', 'Refining', 'Cost Optimization']
  },
  {
    id: 'knowledge-graph',
    title: 'Building Enterprise Knowledge Graphs',
    client: 'Energy Conglomerate',
    industry: 'Energy',
    category: 'Knowledge Management',
    description: 'Creating comprehensive knowledge graphs from asset hierarchies to enable intelligent operations.',
    challenge: 'Disconnected asset information across multiple systems preventing holistic operational insights.',
    solution: 'DeepIQ built an enterprise knowledge graph connecting equipment, processes, and operational data.',
    results: [
      'Unified view of 10,000+ assets',
      '70% faster root cause analysis',
      'Automated compliance reporting',
      'Cross-facility best practice sharing'
    ],
    pdfPath: '/docs/case-studies/From-Asset-Hierarchies-to-Enterprise-Knowledge-Graphs.pdf',
    featured: false,
    tags: ['Knowledge Graph', 'Asset Management', 'Digital Twin', 'Enterprise']
  },
  {
    id: 'historian-integration',
    title: 'Historian Integration with Cloud Data Lakes',
    client: 'Chemical Manufacturer',
    industry: 'Chemicals',
    category: 'Data Integration',
    description: 'Seamlessly integrating legacy historian systems with modern cloud data lakes for advanced analytics.',
    challenge: 'Siloed historian data preventing enterprise-wide analytics and machine learning initiatives.',
    solution: 'DeepIQ created bi-directional integration between historians and cloud data lakes.',
    results: [
      '100% historian data availability in cloud',
      '10x faster query performance',
      'Enabled advanced ML models',
      'Preserved existing historian investments'
    ],
    pdfPath: '/docs/case-studies/Historian-Integration-with-Cloud-Data-Lakes-Challenges-and-Best-Practices.pdf',
    featured: false,
    tags: ['Historian', 'Data Lake', 'Integration', 'Cloud']
  }
]

export function getFeaturedCaseStudies() {
  return caseStudies.filter(study => study.featured)
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(study => study.id === slug)
}

export function getCaseStudiesByIndustry(industry: string) {
  return caseStudies.filter(study => study.industry === industry)
}

export function getCaseStudiesByCategory(category: string) {
  return caseStudies.filter(study => study.category === category)
}

export const industries = [...new Set(caseStudies.map(s => s.industry))].sort()
export const categories = [...new Set(caseStudies.map(s => s.category))].sort()