# Tech Stack

## Context

Global tech stack defaults for Agent OS projects, overridable in project-specific `.agent-os/product/tech-stack.md`.

- App Framework: React Native with Expo SDK 53
- Language: TypeScript 5.8+ / JavaScript (ES6+)
- Primary Database: PostgreSQL (via Supabase)
- ORM: Drizzle ORM
- JavaScript Framework: React 19.0.0
- Import Strategy: ES6 modules
- Package Manager: npm
- Node Version: 22 LTS
- CSS Framework: React Native StyleSheet (no TailwindCSS)
- UI Components: React Native Elements + Custom components
- UI Installation: Via npm dependencies
- Font Provider: Google Fonts
- Font Loading: Async loading via expo-font
- Icons: Lucide React Native + Expo Vector Icons
- Application Hosting: Not deployed yet (local development)
- Hosting Region: TBD
- Database Hosting: Supabase (hosted PostgreSQL)
- Database Backups: Managed by Supabase
- Asset Storage: Local storage + Supabase Storage (planned)
- CDN: Not implemented
- Asset Access: Direct URL access (no signed URLs yet)
- CI/CD Platform: GitHub Actions
- CI/CD Trigger: Push to main/staging branches
- Tests: Run before deployment
- Production Environment: main branch
- Staging Environment: staging branch
- Backend API: Express.js 5.1.0
- Authentication: JWT with bcryptjs
- Caching: Redis
- Real-time: Socket.io for WebSocket
- Push Notifications: Expo Notifications
- Payment Processing: Stripe
- State Management: React Query (TanStack Query)
- Error Monitoring: Sentry (configured but not active)
- Mobile Platform: iOS and Android via Expo
