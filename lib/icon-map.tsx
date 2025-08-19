import { 
  RefreshCw, 
  Settings, 
  Search, 
  Factory, 
  Gauge, 
  Wrench, 
  Lightbulb, 
  Sparkles, 
  Brain, 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Monitor,
  User,
  Handshake,
  Star,
  Network,
  Hammer,
  FileSearch,
  Navigation,
  Leaf,
  Compass,
  LucideIcon
} from 'lucide-react'

const iconMap: { [key: string]: LucideIcon } = {
  RefreshCw,
  Settings,
  Search,
  Factory,
  Gauge,
  Wrench,
  Lightbulb,
  Sparkles,
  Brain,
  Shield,
  AlertTriangle,
  TrendingUp,
  Monitor,
  User,
  Handshake,
  Star,
  Network,
  Drill: Hammer, // Using Hammer as a substitute for drilling icon
  FileSearch,
  Navigation,
  Leaf,
  Compass,
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Lightbulb // Default fallback
}