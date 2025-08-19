export interface Solution {
  id: string
  name: string
  category: string
  title: string
  description: string
  features: string[]
  benefits: {
    title: string
    description: string
    metric?: string
  }[]
  industries: string[]
  image?: string
  icon: string
}

export const solutionCategories = [
  'Data Convergence',
  'AI Solutions',
  'Data Transformation',
  'Industry Solutions',
  'ESG Solutions',
  'Infrastructure'
]

export const solutions: Solution[] = [
  {
    id: 'it-ot-contextualization',
    name: 'IT/OT Contextualization',
    category: 'Data Convergence',
    title: 'Bridge IT and OT Systems with AI-Powered Data Convergence',
    description: 'Break down silos between operational and enterprise systems using machine learning-based contextualization. Automatically reconcile disparate data sources and build comprehensive enterprise knowledge graphs with 95%+ accuracy.',
    features: [
      'Proprietary ML algorithms for pattern matching across millions of entities',
      'Automated data reconciliation with 95%+ accuracy',
      'Connect 40+ edge systems simultaneously',
      'Real-time IT-OT data synchronization',
      'Enterprise knowledge graph construction',
      'No-code configuration and mapping interface',
      'Temporal, geospatial, and textual property matching',
      'ISA-95 compliant hierarchies and models'
    ],
    benefits: [
      {
        title: 'Automated Accuracy',
        description: 'ML-based reconciliation with proven results',
        metric: '95%+ accuracy'
      },
      {
        title: 'Massive Scale',
        description: 'Connect and contextualize across systems',
        metric: '40+ systems'
      },
      {
        title: 'Unified Analytics',
        description: 'IT-OT convergence reports and dashboards',
        metric: '400+ reports'
      },
      {
        title: 'Faster Integration',
        description: 'Reduce manual mapping effort',
        metric: '10x faster'
      }
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Chemicals', 'Energy', 'Mining'],
    image: '/images/solutions/it-ot-placeholder.svg',
    icon: 'Network'
  },
  {
    id: 'predictive-maintenance',
    name: 'Predictive Maintenance',
    category: 'AI Solutions',
    title: 'Hybrid Knowledge-AI for Equipment Health Management',
    description: 'Revolutionary predictive maintenance using hybrid Knowledge-AI approach that builds accurate models even with limited failure data. Reduce downtime by 45% and save $8M annually through advanced diagnostics and prognostics.',
    features: [
      'Hybrid Knowledge-AI models combining physics and ML',
      'Build accurate models with sparse failure data',
      'Real-time anomaly detection and RUL prediction',
      'No-code platform for maintenance engineers',
      'Multi-modal analysis (vibration, thermal, oil, acoustic)',
      'Integration with SAP PM, Maximo, OSIsoft PI',
      'Edge deployment for real-time predictions',
      'Prescriptive maintenance recommendations'
    ],
    benefits: [
      {
        title: 'Reduce Unplanned Downtime',
        description: 'Prevent critical equipment failures',
        metric: '45% reduction'
      },
      {
        title: 'Optimize Maintenance Costs',
        description: 'Focus resources on critical equipment',
        metric: '$8M annual savings'
      },
      {
        title: 'Improve Prediction Accuracy',
        description: 'Reduce false positives dramatically',
        metric: '92% accuracy'
      },
      {
        title: 'Advance Warning',
        description: 'Predict failures well in advance',
        metric: '30+ days lead time'
      }
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Refining', 'Power Generation', 'Mining'],
    image: '/images/solutions/predictive-maintenance-placeholder.svg',
    icon: 'Wrench'
  },
  {
    id: 'production-optimization',
    name: 'Production Optimization',
    category: 'AI Solutions',
    title: 'Real-Time AI Optimization for Maximum Production Efficiency',
    description: 'Maximize production, quality, and efficiency with AI-powered real-time optimization. Handle thousands of variables, respect complex constraints, and achieve 15% production increase with 20% energy reduction.',
    features: [
      'Real-time multi-variable optimization with constraints',
      'AI-driven quality prediction and control',
      'Energy and yield optimization algorithms',
      'No-code platform for production engineers',
      'What-if scenario analysis and simulation',
      'Integration with DCS, SCADA, and MES systems',
      'Economic optimization based on market conditions',
      'Closed-loop control with automatic implementation'
    ],
    benefits: [
      {
        title: 'Increase Production',
        description: 'Maximize throughput within constraints',
        metric: '15% increase'
      },
      {
        title: 'Reduce Energy Costs',
        description: 'Optimize specific energy consumption',
        metric: '20% reduction'
      },
      {
        title: 'Improve Quality',
        description: 'Reduce off-spec production and rework',
        metric: '30% improvement'
      },
      {
        title: 'Annual Savings',
        description: 'Documented operational savings',
        metric: '$5-15M/facility'
      }
    ],
    industries: ['Oil & Gas', 'Chemicals', 'Manufacturing', 'Refining', 'Power Generation'],
    image: '/images/solutions/production-optimization-placeholder.svg',
    icon: 'TrendingUp'
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing',
    category: 'Infrastructure',
    title: 'Process Data at the Edge for Real-Time Insights',
    description: 'Deploy AI models and analytics at the edge for millisecond response times and reduced cloud costs.',
    features: [
      'Edge AI model deployment',
      'Local data processing and filtering',
      'Real-time anomaly detection',
      'Store-and-forward capability',
      'Edge-to-cloud orchestration',
      'Remote management and updates'
    ],
    benefits: [
      {
        title: 'Ultra-Low Latency',
        description: 'Millisecond response times for critical decisions',
        metric: '<10ms latency'
      },
      {
        title: 'Reduce Cloud Costs',
        description: 'Process data locally, send only insights',
        metric: '60% cost reduction'
      },
      {
        title: 'Offline Capability',
        description: 'Continue operations without connectivity',
        metric: '100% uptime'
      }
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Mining', 'Remote Operations'],
    icon: 'Monitor'
  },
  {
    id: 'well-construction-optimization',
    name: 'Well Construction Optimization',
    category: 'Industry Solutions',
    title: 'Revolutionize Drilling with AI-Powered Optimization',
    description: 'Accelerate well construction with generative AI and automated analytics. Reduce drilling time by 30%, minimize NPT by 40%, and save $2-5M per well through intelligent planning and real-time optimization.',
    features: [
      'GenAI-powered offset well analysis with 95% time reduction',
      'Context-aware well selection and geological matching',
      'Real-time drilling parameter optimization',
      'Automated BHA and casing recommendations',
      'Predictive NPT prevention and risk assessment',
      'No-code analytics platform for domain experts',
      'Integration with 40+ drilling data sources',
      'Automated well planning report generation'
    ],
    benefits: [
      {
        title: 'Faster Analysis',
        description: 'Reduce offset well analysis time dramatically',
        metric: '95% reduction'
      },
      {
        title: 'Lower Drilling Costs',
        description: 'Optimize operations and prevent NPT',
        metric: '$2-5M per well'
      },
      {
        title: 'Accelerate Drilling',
        description: 'Reduce total drilling time significantly',
        metric: '30% faster'
      },
      {
        title: 'Minimize NPT',
        description: 'Predict and prevent drilling problems',
        metric: '40% reduction'
      }
    ],
    industries: ['Oil & Gas', 'Energy', 'Offshore Drilling', 'Shale Operations'],
    image: '/images/solutions/well-construction-placeholder.svg',
    icon: 'Drill'
  },
  {
    id: 'p-id-digitization',
    name: 'P&ID Digitization',
    category: 'Data Transformation',
    title: 'Transform Engineering Drawings into Digital Intelligence',
    description: 'Automatically extract and digitize P&IDs with 99% accuracy using AI-powered computer vision. Convert decades of static drawings into searchable, actionable digital assets in minutes instead of weeks.',
    features: [
      '99% accuracy in symbol and text recognition',
      'Process 5000+ industry-standard P&ID symbols',
      'Multi-format support (PDF, DWG, DXF, scans)',
      'Automatic equipment tag and loop extraction',
      'Intelligent relationship mapping between systems',
      'ISA/ISO standards compliance validation',
      'Web-based interactive P&ID viewer',
      'Seamless integration with ERP and digital twins'
    ],
    benefits: [
      {
        title: 'Extraction Accuracy',
        description: 'AI-powered recognition with validation',
        metric: '99% accurate'
      },
      {
        title: 'Time Savings',
        description: 'From weeks to hours for digitization',
        metric: '90% faster'
      },
      {
        title: 'Cost Reduction',
        description: 'Lower than manual digitization',
        metric: '75% savings'
      },
      {
        title: 'ROI Period',
        description: 'Quick return on investment',
        metric: '6 months'
      }
    ],
    industries: ['Oil & Gas', 'Chemicals', 'Power Generation', 'Manufacturing', 'Engineering'],
    image: '/images/solutions/pid-digitization-placeholder.svg',
    icon: 'FileSearch'
  },
  {
    id: 'route-optimization',
    name: 'Route Optimization',
    category: 'AI Solutions',
    title: 'AI-Powered Field Service Route Optimization',
    description: 'Optimize crew dispatch and travel routes for oil & gas field operations. Reduce windshield time by 30-40%, increase jobs per day by 25%, and save millions in operational costs with real-time AI optimization.',
    features: [
      'Multi-stop route optimization for 50+ stops per day',
      'AI-powered crew assignment based on skills and proximity',
      'Real-time dynamic re-routing for emergencies',
      'Mobile app with offline capability and voice navigation',
      'Natural language AI queries for field information',
      'Integration with FSM, ERP, and fleet management',
      'GPS tracking and live crew monitoring',
      'Regulatory compliance and safety management'
    ],
    benefits: [
      {
        title: 'Reduce Drive Time',
        description: 'Minimize windshield time significantly',
        metric: '30-40% less'
      },
      {
        title: 'Increase Productivity',
        description: 'Complete more jobs per crew per day',
        metric: '25% more jobs'
      },
      {
        title: 'Save Fuel Costs',
        description: 'Reduce mileage and idle time',
        metric: '20% savings'
      },
      {
        title: 'Annual Savings',
        description: 'Documented operational savings',
        metric: '$3M+ per year'
      }
    ],
    industries: ['Oil & Gas', 'Field Services', 'Utilities', 'Pipeline Operations', 'Energy Services'],
    image: '/images/solutions/route-optimization-placeholder.svg',
    icon: 'Navigation'
  },
  {
    id: 'sustainability-emissions',
    name: 'Sustainability & Emissions Tracking',
    category: 'ESG Solutions',
    title: 'AI-Powered Carbon Management and ESG Reporting',
    description: 'Track, reduce, and report emissions across all scopes with real-time AI monitoring. Achieve 30% emissions reduction, automate ESG reporting, and ensure 100% regulatory compliance while optimizing carbon credits.',
    features: [
      'Real-time Scope 1, 2, and 3 emissions tracking',
      'AI-powered emissions forecasting and optimization',
      'Automated TCFD, SASB, GRI, CDP reporting',
      'Methane leak detection with satellite monitoring',
      'Carbon credit tracking and trading optimization',
      'Multi-jurisdiction regulatory compliance',
      'Net-zero roadmap planning and tracking',
      'Integration with IoT sensors and operational systems'
    ],
    benefits: [
      {
        title: 'Reduce Emissions',
        description: 'AI-optimized operations for lower footprint',
        metric: '30% reduction'
      },
      {
        title: 'Reporting Efficiency',
        description: 'Automate ESG report generation',
        metric: '80% faster'
      },
      {
        title: 'Carbon Savings',
        description: 'Reduce carbon costs and penalties',
        metric: '$10M+ annually'
      },
      {
        title: 'Compliance Rate',
        description: 'Meet all regulatory requirements',
        metric: '100% adherence'
      }
    ],
    industries: ['Oil & Gas', 'Chemicals', 'Power Generation', 'Manufacturing', 'Mining'],
    image: '/images/solutions/sustainability-placeholder.svg',
    icon: 'Leaf'
  },
  {
    id: 'oil-gas-exploration',
    name: 'Oil & Gas Exploration',
    category: 'Industry Solutions',
    title: 'AI-Powered Subsurface Exploration and Discovery',
    description: 'Revolutionize exploration with AI-driven seismic interpretation and geological modeling. Identify prospects 50% faster, reduce drilling risk by 40%, and increase discovery success rates by 35% using cutting-edge deep learning.',
    features: [
      'AI-powered seismic auto-interpretation and fault detection',
      '3D/4D seismic processing with time-lapse monitoring',
      'Advanced geological modeling with uncertainty quantification',
      'Automated well log analysis and correlation',
      'Prospect ranking with ML-based success prediction',
      'Direct hydrocarbon indicators and fluid detection',
      'Petabyte-scale data processing in minutes',
      'Integration with Petrel, Kingdom, and GeoFrame'
    ],
    benefits: [
      {
        title: 'Faster Prospects',
        description: 'Accelerate prospect identification',
        metric: '50% faster'
      },
      {
        title: 'Higher Success',
        description: 'Improve discovery success rate',
        metric: '35% increase'
      },
      {
        title: 'Risk Reduction',
        description: 'Reduce dry hole risk significantly',
        metric: '40% lower'
      },
      {
        title: 'Cost Savings',
        description: 'Reduce exploration costs dramatically',
        metric: '60% savings'
      }
    ],
    industries: ['Oil & Gas', 'Energy', 'Geophysical Services', 'Mining', 'Geothermal'],
    image: '/images/solutions/exploration-placeholder.svg',
    icon: 'Compass'
  }
]

export function getSolutionBySlug(slug: string) {
  return solutions.find(solution => solution.id === slug)
}

export function getSolutionsByCategory(category: string) {
  return solutions.filter(solution => solution.category === category)
}

export function getSolutionsByIndustry(industry: string) {
  return solutions.filter(solution => solution.industries.includes(industry))
}

export const solutionIndustries = [...new Set(solutions.flatMap(s => s.industries))].sort()