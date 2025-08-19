import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Features from '@/components/Features'
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies'
import IntegrationPartners from '@/components/IntegrationPartners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Features />
      <FeaturedCaseStudies />
      <IntegrationPartners />
      <Footer />
    </main>
  )
}