# Technical Stack

## Core Framework
- **Application Framework:** Next.js 14.2.0
- **React Version:** React 18.3.0
- **Language:** TypeScript 5.5+
- **Node Version:** 20 LTS
- **Package Manager:** npm

## Database & Backend
- **Database System:** PostgreSQL (via Supabase)
- **ORM:** Prisma 5.0
- **API Strategy:** Next.js API Routes + tRPC for type-safe APIs
- **Authentication:** NextAuth.js with JWT

## Frontend & Styling
- **JavaScript Framework:** React 18.3.0
- **Import Strategy:** ES6 modules
- **CSS Framework:** Tailwind CSS 3.4.0
- **UI Component Library:** shadcn/ui (Radix UI primitives)
- **Animation Library:** Framer Motion 11.0
- **Forms:** React Hook Form + Zod validation

## SEO & Performance
- **SEO Framework:** Next.js built-in SEO + next-seo
- **Sitemap Generation:** next-sitemap
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Performance Monitoring:** Vercel Analytics + Web Vitals
- **Image Optimization:** Next.js Image with automatic WebP conversion

## Content & Assets
- **CMS Integration:** Contentful (for case studies and blog)
- **Fonts Provider:** Google Fonts (Inter + System fonts)
- **Icon Library:** Lucide React
- **Asset Hosting:** Vercel CDN + Cloudinary for media
- **Image Storage:** Cloudinary with automatic optimization

## Development Tools
- **Linting:** ESLint with Next.js config
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged
- **Testing:** Vitest + React Testing Library
- **E2E Testing:** Playwright

## Deployment & Infrastructure
- **Application Hosting:** Vercel (Production)
- **Database Hosting:** Supabase Cloud
- **Preview Deployments:** Vercel Preview URLs
- **Domain & DNS:** Cloudflare
- **SSL:** Automatic via Vercel

## Third-Party Integrations
- **Email Service:** SendGrid for transactional emails
- **CRM Integration:** HubSpot API for lead capture
- **Chat Widget:** Intercom or Drift
- **Calendar Scheduling:** Calendly embed
- **Form Processing:** React Hook Form + API Routes

## Monitoring & Observability
- **Error Tracking:** Sentry
- **Uptime Monitoring:** Vercel + UptimeRobot
- **Log Management:** Vercel Logs
- **APM:** Vercel Analytics

## CI/CD
- **Deployment Solution:** GitHub Actions + Vercel
- **Branch Strategy:** main (production), staging, develop
- **Code Repository URL:** https://github.com/deepiq/deepiq-website
- **Automated Testing:** On PR and pre-merge

## Security
- **WAF:** Cloudflare
- **Rate Limiting:** Vercel Edge Functions
- **Security Headers:** Next.js security headers
- **Environment Variables:** Vercel encrypted env vars