import { 
  Building2, 
  BookOpen, 
  Target, 
  Users, 
  UserCheck,
  Sparkles,
  TrendingUp,
  Award,
  Handshake,
  Star,
  Library,
  FileText,
  Newspaper,
  PenTool,
  Calendar,
  Rocket,
  Briefcase,
  Heart,
  Search,
  Mail,
  LucideIcon
} from 'lucide-react'

export interface MenuItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
  badge?: string
  count?: number
  highlight?: boolean
  cta?: boolean
}

export interface MenuSection {
  title: string
  icon: LucideIcon
  backgroundColor?: string
  items: MenuItem[]
}

export const companyMenuSections: MenuSection[] = [
  {
    title: 'About DeepIQ',
    icon: Building2,
    items: [
      {
        title: 'Our Story',
        description: 'From startup to industry leader',
        href: '/about',
        icon: BookOpen
      },
      {
        title: 'Mission & Vision',
        description: 'Transforming industrial operations with AI',
        href: '/about#mission',
        icon: Target
      },
      {
        title: 'Leadership Team',
        description: 'Meet our experienced executives',
        href: '/team',
        icon: Users
      },
      {
        title: 'Board & Advisors',
        description: 'Industry experts guiding our journey',
        href: '/team#board',
        icon: UserCheck
      }
    ]
  },
  {
    title: 'Why DeepIQ',
    icon: Sparkles,
    items: [
      {
        title: 'Our Investors',
        description: 'Backed by leading VCs and strategics',
        href: '/investors',
        icon: TrendingUp,
        badge: 'Series B'
      },
      {
        title: 'Awards & Recognition',
        description: 'Industry accolades and achievements',
        href: '/awards',
        icon: Award
      },
      {
        title: 'Partnerships',
        description: 'AWS, Microsoft, Schlumberger & more',
        href: '/partners',
        icon: Handshake
      },
      {
        title: 'Customer Success',
        description: 'Proven results across industries',
        href: '/case-studies',
        icon: Star
      }
    ]
  },
  {
    title: 'Resources & Insights',
    icon: Library,
    items: [
      {
        title: 'Resource Center',
        description: 'Whitepapers, guides, and datasheets',
        href: '/resources',
        icon: FileText,
        count: 25
      },
      {
        title: 'News & Press',
        description: 'Latest announcements and coverage',
        href: '/news',
        icon: Newspaper,
        badge: 'New'
      },
      {
        title: 'Blog & Articles',
        description: 'Technical insights and best practices',
        href: '/blog',
        icon: PenTool
      },
      {
        title: 'Events & Webinars',
        description: 'Join us at upcoming events',
        href: '/events',
        icon: Calendar,
        highlight: true
      }
    ]
  },
  {
    title: 'Join Us',
    icon: Rocket,
    backgroundColor: 'blue-50',
    items: [
      {
        title: 'Careers',
        description: 'Build the future of industrial AI',
        href: '/careers',
        icon: Briefcase,
        badge: '15+ Open Roles'
      },
      {
        title: 'Culture & Values',
        description: "What it's like to work at DeepIQ",
        href: '/culture',
        icon: Heart
      },
      {
        title: 'Open Positions',
        description: 'View all opportunities',
        href: '/careers#positions',
        icon: Search,
        cta: true
      },
      {
        title: 'Contact Us',
        description: 'Get in touch with our team',
        href: '/contact',
        icon: Mail,
        cta: true
      }
    ]
  }
]

export interface FeaturedContent {
  type: 'announcement' | 'stat' | 'cta'
  title: string
  description: string
  link?: string
  image?: string
  stats?: Array<{
    label: string
    value: string
  }>
}

export const companyFeaturedContent: FeaturedContent = {
  type: 'announcement',
  title: 'DeepIQ Selected for AWS Clean Energy Accelerator',
  description: 'Join us in accelerating the energy transition with AI-powered solutions',
  link: '/news/aws-accelerator',
  stats: [
    { label: 'Countries', value: '6' },
    { label: 'Customers', value: '50+' },
    { label: 'Data Processed', value: '10PB+' },
    { label: 'Team Members', value: '100+' }
  ]
}