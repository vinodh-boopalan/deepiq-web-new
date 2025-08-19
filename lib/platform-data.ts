import { 
  LucideIcon,
  Download,
  Workflow,
  Search,
  Cable,
  Database,
  Cloud,
  Building2,
  FileText,
  Radio,
  RefreshCw,
  GitBranch,
  Calculator,
  CheckCircle,
  Clock,
  Network,
  BarChart3,
  TrendingUp,
  Brain,
  MessageSquare,
  Lightbulb,
  Users
} from 'lucide-react'

export interface PlatformFeature {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  iconName: string
  color: string
  features: string[]
  benefits: {
    title: string
    description: string
    metric?: string
  }[]
  capabilities: {
    title: string
    description: string
    icon: LucideIcon
  }[]
  useCases: string[]
  integrations: string[]
  ctaText: string
  detailUrl: string
  image: string
}

export const platformFeatures: PlatformFeature[] = [
  {
    id: 'extract',
    title: 'Extract',
    subtitle: 'Connect & Collect',
    description: 'Seamlessly connect to any industrial data source and extract data in real-time or batch mode. From SCADA systems to IoT sensors, unify your data landscape.',
    icon: Download,
    iconName: 'Download',
    color: 'blue',
    features: [
      'Connect to 200+ industrial protocols',
      'Real-time and batch data ingestion',
      'Edge computing capabilities',
      'Secure data transmission',
      'Auto-discovery of data sources',
      'Built-in data validation'
    ],
    benefits: [
      {
        title: 'Reduce Integration Time',
        description: 'Connect to new data sources in minutes, not months',
        metric: '90%'
      },
      {
        title: 'Increase Data Coverage',
        description: 'Access previously siloed operational data',
        metric: '3x'
      },
      {
        title: 'Lower Infrastructure Costs',
        description: 'Eliminate redundant data collection systems',
        metric: '60%'
      }
    ],
    capabilities: [
      {
        title: 'Industrial Protocols',
        description: 'OPC UA, Modbus, MQTT, DNP3, IEC 61850, and more',
        icon: Cable
      },
      {
        title: 'Time-Series Databases',
        description: 'OSIsoft PI, Wonderware, Honeywell PHD, AspenTech IP21',
        icon: Database
      },
      {
        title: 'Cloud Platforms',
        description: 'AWS IoT, Azure IoT Hub, Google Cloud IoT',
        icon: Cloud
      },
      {
        title: 'Enterprise Systems',
        description: 'SAP, Oracle, IBM Maximo, Microsoft Dynamics',
        icon: Building2
      },
      {
        title: 'File Systems',
        description: 'CSV, Excel, Parquet, JSON, XML data files',
        icon: FileText
      },
      {
        title: 'Streaming Sources',
        description: 'Kafka, Kinesis, Event Hubs, Pub/Sub',
        icon: Radio
      }
    ],
    useCases: [
      'Unified operational data lake',
      'Real-time equipment monitoring',
      'Historical data migration',
      'Multi-site data aggregation',
      'Edge-to-cloud data pipelines'
    ],
    integrations: [
      'OSIsoft PI', 'Wonderware', 'Honeywell PHD', 'AspenTech',
      'OPC Servers', 'MQTT Brokers', 'Modbus Devices', 'SQL Databases'
    ],
    ctaText: 'Learn More',
    detailUrl: '/platform/extract',
    image: '/images/platform/deepiq-extract.png'
  },
  {
    id: 'engineer',
    title: 'Engineer',
    subtitle: 'Transform & Contextualize',
    description: 'Transform raw industrial data into analytics-ready datasets. Apply business context, create calculated tags, and build equipment hierarchies automatically.',
    icon: Workflow,
    iconName: 'Workflow',
    color: 'purple',
    features: [
      'Visual data pipeline builder',
      'Equipment hierarchy mapping',
      'Calculated tags and KPIs',
      'Data quality management',
      'Automated anomaly detection',
      'Version control for transformations'
    ],
    benefits: [
      {
        title: 'Accelerate Time-to-Insight',
        description: 'Build data pipelines 10x faster with visual tools',
        metric: '10x'
      },
      {
        title: 'Improve Data Quality',
        description: 'Automated validation and cleansing',
        metric: '99.9%'
      },
      {
        title: 'Reduce Manual Effort',
        description: 'Automate repetitive data engineering tasks',
        metric: '75%'
      }
    ],
    capabilities: [
      {
        title: 'Data Transformation',
        description: 'Clean, normalize, aggregate, and enrich industrial data',
        icon: RefreshCw
      },
      {
        title: 'Contextualization',
        description: 'Map tags to assets, add metadata, create relationships',
        icon: GitBranch
      },
      {
        title: 'Calculated Metrics',
        description: 'Create derived KPIs, efficiency metrics, and performance indicators',
        icon: Calculator
      },
      {
        title: 'Data Quality',
        description: 'Validate, detect anomalies, handle missing data, ensure consistency',
        icon: CheckCircle
      },
      {
        title: 'Pipeline Orchestration',
        description: 'Schedule, monitor, and manage complex data workflows',
        icon: Clock
      },
      {
        title: 'Knowledge Graphs',
        description: 'Build semantic models of equipment and processes',
        icon: Network
      }
    ],
    useCases: [
      'Equipment performance calculations',
      'Production efficiency metrics',
      'Energy consumption optimization',
      'Predictive maintenance features',
      'Regulatory compliance reporting'
    ],
    integrations: [
      'Apache Spark', 'Apache Airflow', 'dbt', 'Databricks',
      'Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse'
    ],
    ctaText: 'Learn More',
    detailUrl: '/platform/engineer',
    image: '/images/platform/deepiq-engineer.png'
  },
  {
    id: 'explore',
    title: 'Explore',
    subtitle: 'Analyze & Act',
    description: 'Discover insights with AI-powered analytics. Visualize operations in real-time, predict failures, and optimize performance with machine learning.',
    icon: Search,
    iconName: 'Search',
    color: 'green',
    features: [
      'AI-powered analytics',
      'Real-time dashboards',
      'Predictive models',
      'Root cause analysis',
      'Natural language queries',
      'Automated reporting'
    ],
    benefits: [
      {
        title: 'Prevent Downtime',
        description: 'Predict equipment failures before they occur',
        metric: '45%'
      },
      {
        title: 'Optimize Performance',
        description: 'AI-driven recommendations for operations',
        metric: '25%'
      },
      {
        title: 'Faster Decision Making',
        description: 'Real-time insights at your fingertips',
        metric: '5x'
      }
    ],
    capabilities: [
      {
        title: 'Interactive Dashboards',
        description: 'Real-time KPIs, trends, alerts, and operational views',
        icon: BarChart3
      },
      {
        title: 'Advanced Analytics',
        description: 'Statistical analysis, pattern recognition, correlation analysis',
        icon: TrendingUp
      },
      {
        title: 'Machine Learning',
        description: 'Predictive models, anomaly detection, optimization algorithms',
        icon: Brain
      },
      {
        title: 'Natural Language',
        description: 'Ask questions in plain English, get instant insights',
        icon: MessageSquare
      },
      {
        title: 'Automated Insights',
        description: 'Proactive alerts, recommendations, and root cause analysis',
        icon: Lightbulb
      },
      {
        title: 'Collaboration Tools',
        description: 'Share insights, annotate findings, create reports',
        icon: Users
      }
    ],
    useCases: [
      'Production optimization',
      'Predictive maintenance',
      'Energy efficiency analysis',
      'Quality control monitoring',
      'Safety incident prevention'
    ],
    integrations: [
      'Power BI', 'Tableau', 'Grafana', 'Jupyter',
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'AutoML'
    ],
    ctaText: 'Learn More',
    detailUrl: '/platform/explore',
    image: '/images/platform/deepiq-explore.png'
  }
]

export function getPlatformFeatureById(id: string): PlatformFeature | undefined {
  return platformFeatures.find(feature => feature.id === id)
}