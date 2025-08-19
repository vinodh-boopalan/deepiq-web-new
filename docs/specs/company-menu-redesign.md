# Company Menu Redesign Specification

## Overview

Redesign the Company navigation menu into a modern, engaging megamenu that provides quick access to company information, resources, and engagement opportunities. The new design will improve discoverability, reduce clicks, and create a more professional, enterprise-ready presentation of DeepIQ's corporate information.

## Current State Analysis

### Existing Menu Items
- About Us (main page)
- About Us → Company Team
- About Us → Our Investors
- Resources
- News
- Career
- Contact Us

### Problems with Current Structure
- Nested navigation requires multiple clicks
- Limited visual hierarchy
- No preview of content
- Disconnected user journey
- Poor discoverability of important content
- No clear calls-to-action

## Proposed Solution

### Megamenu Structure

The Company megamenu will be organized into four main columns with visual elements and clear CTAs:

```
COMPANY (hover/click to expand)
├── About DeepIQ
│   ├── Our Story
│   ├── Mission & Vision
│   ├── Leadership Team
│   └── Board & Advisors
├── Why DeepIQ
│   ├── Our Investors
│   ├── Awards & Recognition
│   ├── Partnerships
│   └── Customer Success
├── Resources & Insights
│   ├── Resource Center
│   ├── News & Press
│   ├── Blog & Articles
│   └── Events & Webinars
└── Join Us
    ├── Careers
    ├── Culture & Values
    ├── Open Positions
    └── Contact Us
```

## Detailed Component Design

### 1. Megamenu Container
```tsx
interface CompanyMegamenuProps {
  isOpen: boolean
  onClose: () => void
}

// Layout: 4-column grid with featured content area
// Dimensions: Full width, 480px height
// Animation: Smooth slide-down with fade-in (200ms)
// Background: White with subtle shadow
// Dark mode: Gray-900 background
```

### 2. Column 1: About DeepIQ
```tsx
interface AboutSection {
  title: "About DeepIQ"
  icon: Building2 // Lucide icon
  items: [
    {
      title: "Our Story",
      description: "From startup to industry leader",
      href: "/about",
      icon: BookOpen
    },
    {
      title: "Mission & Vision",
      description: "Transforming industrial operations with AI",
      href: "/about#mission",
      icon: Target
    },
    {
      title: "Leadership Team",
      description: "Meet our experienced executives",
      href: "/team",
      icon: Users
    },
    {
      title: "Board & Advisors",
      description: "Industry experts guiding our journey",
      href: "/team#board",
      icon: UserCheck
    }
  ]
}
```

### 3. Column 2: Why DeepIQ
```tsx
interface WhySection {
  title: "Why DeepIQ"
  icon: Sparkles
  items: [
    {
      title: "Our Investors",
      description: "Backed by leading VCs and strategics",
      href: "/investors",
      icon: TrendingUp,
      badge: "Series B"
    },
    {
      title: "Awards & Recognition",
      description: "Industry accolades and achievements",
      href: "/awards",
      icon: Award
    },
    {
      title: "Partnerships",
      description: "AWS, Microsoft, Schlumberger & more",
      href: "/partners",
      icon: Handshake
    },
    {
      title: "Customer Success",
      description: "Proven results across industries",
      href: "/customers",
      icon: Star
    }
  ]
}
```

### 4. Column 3: Resources & Insights
```tsx
interface ResourcesSection {
  title: "Resources & Insights"
  icon: Library
  items: [
    {
      title: "Resource Center",
      description: "Whitepapers, guides, and datasheets",
      href: "/resources",
      icon: FileText,
      count: 25 // Number of resources
    },
    {
      title: "News & Press",
      description: "Latest announcements and coverage",
      href: "/news",
      icon: Newspaper,
      badge: "New"
    },
    {
      title: "Blog & Articles",
      description: "Technical insights and best practices",
      href: "/blog",
      icon: PenTool
    },
    {
      title: "Events & Webinars",
      description: "Join us at upcoming events",
      href: "/events",
      icon: Calendar,
      highlight: true // For upcoming events
    }
  ]
}
```

### 5. Column 4: Join Us
```tsx
interface JoinSection {
  title: "Join Us"
  icon: Rocket
  backgroundColor: "blue-50" // Highlighted section
  items: [
    {
      title: "Careers",
      description: "Build the future of industrial AI",
      href: "/careers",
      icon: Briefcase,
      badge: "15+ Open Roles"
    },
    {
      title: "Culture & Values",
      description: "What it's like to work at DeepIQ",
      href: "/culture",
      icon: Heart
    },
    {
      title: "Open Positions",
      description: "View all opportunities",
      href: "/careers#positions",
      icon: Search,
      cta: true
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact",
      icon: Mail,
      cta: true
    }
  ]
}
```

### 6. Featured Content Area
```tsx
interface FeaturedContent {
  // Bottom section spanning full width
  type: "announcement" | "stat" | "cta"
  content: {
    title: "DeepIQ Selected for AWS Clean Energy Accelerator",
    description: "Join us in accelerating the energy transition",
    link: "/news/aws-accelerator",
    image: "/images/aws-logo.png",
    stats: [
      { label: "Countries", value: "6" },
      { label: "Customers", value: "50+" },
      { label: "Data Processed", value: "10PB+" }
    ]
  }
}
```

## Visual Design Specifications

### Layout
- **Container**: Full viewport width, max-width 1440px centered
- **Height**: 480px (auto-adjust for mobile)
- **Columns**: 4 equal columns (300px each) with 32px gap
- **Padding**: 40px vertical, 32px horizontal
- **Featured Area**: 80px height at bottom

### Typography
- **Column Headers**: 14px, font-weight 600, uppercase, letter-spacing 0.05em
- **Item Titles**: 16px, font-weight 500
- **Descriptions**: 14px, font-weight 400, text-gray-600
- **Badges**: 11px, font-weight 600, uppercase

### Colors
- **Background**: White (dark: gray-900)
- **Borders**: gray-200 (dark: gray-700)
- **Hover States**: Blue-50 background (dark: blue-900/20)
- **Active Column**: Blue-600 header color
- **Featured Section**: Gradient background blue-50 to white

### Icons
- **Size**: 20px for section headers, 16px for items
- **Color**: Match text color, blue-600 on hover
- **Style**: Lucide React icons throughout

### Interactions
- **Hover Delay**: 150ms before opening
- **Close Delay**: 300ms after mouse leave
- **Item Hover**: Background color transition (150ms)
- **Click**: Immediate navigation
- **Keyboard**: Full keyboard navigation support

## Component Implementation

### File Structure
```
components/
├── CompanyMegamenu.tsx       # Main megamenu component
├── MegamenuColumn.tsx        # Reusable column component
├── MegamenuItem.tsx          # Individual menu item
├── FeaturedSection.tsx       # Bottom featured content
└── company-menu-data.ts     # Menu configuration data
```

### Key Features
1. **Smart Positioning**: Adjust if near screen edge
2. **Responsive**: Mobile-optimized accordion view
3. **Accessible**: ARIA labels, keyboard navigation
4. **Performance**: Lazy load images, virtualized if needed
5. **Analytics**: Track clicks and engagement

## Mobile Design

### Mobile Layout (< 768px)
- Full-screen overlay menu
- Accordion-style sections
- Single column layout
- Sticky header with close button
- Smooth scroll to sections

### Touch Interactions
- Tap to expand sections
- Swipe down to close
- Large touch targets (48px minimum)
- Haptic feedback on interactions

## Implementation Phases

### Phase 1: Core Structure (Week 1)
- [ ] Create megamenu component structure
- [ ] Implement basic layout and grid
- [ ] Add navigation items and links
- [ ] Set up hover/click interactions

### Phase 2: Visual Polish (Week 2)
- [ ] Add icons and visual elements
- [ ] Implement animations and transitions
- [ ] Add dark mode support
- [ ] Create featured content section

### Phase 3: Mobile & Accessibility (Week 3)
- [ ] Build mobile responsive version
- [ ] Add keyboard navigation
- [ ] Implement ARIA labels
- [ ] Test with screen readers

### Phase 4: Integration & Testing (Week 4)
- [ ] Integrate with existing header
- [ ] Add analytics tracking
- [ ] Performance optimization
- [ ] Cross-browser testing

## Success Metrics

### User Engagement
- **Click-through Rate**: 25% increase
- **Time to Find**: 40% reduction
- **Bounce Rate**: 20% decrease
- **Mobile Usage**: 35% increase

### Technical Performance
- **Load Time**: < 100ms to render
- **Animation FPS**: 60fps minimum
- **Accessibility Score**: 100/100
- **Mobile Score**: 95+ PageSpeed

### Business Impact
- **Contact Form Submissions**: 30% increase
- **Career Applications**: 40% increase
- **Resource Downloads**: 50% increase
- **Partner Inquiries**: 25% increase

## Content Requirements

### New Pages Needed
1. **Mission & Vision Page**: Dedicated page for company purpose
2. **Investors Page**: Showcase backing and credibility
3. **Awards Page**: Recognition and achievements
4. **Partners Page**: Strategic partnerships
5. **Culture Page**: Company culture and values
6. **Events Page**: Upcoming events and webinars

### Content Updates
- Refresh team photos and bios
- Update investor logos and information
- Compile awards and recognition
- Create culture video/content
- Develop event calendar

## Technical Considerations

### Performance
- Lazy load images in megamenu
- Preload critical resources
- Use CSS transforms for animations
- Implement virtual scrolling if needed

### SEO
- Maintain crawlable links
- Add structured data for organization
- Implement breadcrumbs
- Optimize meta descriptions

### Analytics
- Track menu opens/closes
- Monitor click patterns
- Measure engagement time
- A/B test layouts

## Competitive Analysis

### Best Practices from Industry Leaders
- **Stripe**: Clean grid layout with icons
- **Notion**: Illustrated sections with CTAs
- **Webflow**: Interactive previews
- **Datadog**: Product-focused with resources
- **Snowflake**: Customer success highlights

## Risks and Mitigation

### Risks
1. **Complexity**: Too many options overwhelming users
2. **Performance**: Large menu affecting page speed
3. **Mobile**: Difficult navigation on small screens
4. **Maintenance**: Keeping content fresh and updated

### Mitigation Strategies
1. User testing to optimize layout
2. Lazy loading and code splitting
3. Mobile-first design approach
4. CMS integration for easy updates

## Next Steps

1. **Design Approval**: Review with stakeholders
2. **Prototype Development**: Build interactive prototype
3. **User Testing**: Validate with target users
4. **Implementation**: Develop production version
5. **Launch**: Gradual rollout with monitoring

## Conclusion

The redesigned Company megamenu will transform how users discover and engage with DeepIQ's corporate information. By organizing content into logical sections with visual hierarchy and clear CTAs, we'll improve user experience, increase engagement, and better communicate DeepIQ's value proposition to prospects, investors, and potential employees.