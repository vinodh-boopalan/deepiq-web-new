import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getIcon } from '@/lib/icon-map'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    bio: '20+ years in industrial automation and AI',
    image: 'User'
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    bio: 'Former data scientist at major oil & gas companies',
    image: 'User'
  },
  {
    name: 'Michael Chen',
    role: 'VP of Engineering',
    bio: 'Expert in distributed systems and edge computing',
    image: 'User'
  },
  {
    name: 'Emily Williams',
    role: 'VP of Customer Success',
    bio: '15+ years helping enterprises achieve digital transformation',
    image: 'User'
  },
  {
    name: 'David Martinez',
    role: 'VP of Sales',
    bio: 'Specialized in enterprise software for industrial markets',
    image: 'User'
  },
  {
    name: 'Lisa Anderson',
    role: 'VP of Product',
    bio: 'Product leader with deep domain expertise in O&G',
    image: 'User'
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with industrial AI',
    icon: 'Lightbulb'
  },
  {
    title: 'Reliability',
    description: 'Our solutions work 24/7 in mission-critical environments',
    icon: 'Shield'
  },
  {
    title: 'Partnership',
    description: 'We succeed when our customers succeed',
    icon: 'Handshake'
  },
  {
    title: 'Excellence',
    description: 'We deliver best-in-class solutions and support',
    icon: 'Star'
  }
]

const milestones = [
  { year: '2018', event: 'DeepIQ founded in Houston, TX' },
  { year: '2019', event: 'First major oil & gas deployment' },
  { year: '2020', event: 'Expanded to 10+ enterprise customers' },
  { year: '2021', event: 'Launched DataStudio platform' },
  { year: '2022', event: 'Achieved 50M+ data points processed daily' },
  { year: '2023', event: 'Expanded globally with offices in 3 countries' },
  { year: '2024', event: 'Processing 1B+ data points daily across 100+ facilities' }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-deepiq-light to-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-thin text-deepiq-dark mb-6">
                Transforming Industrial Operations Through AI
              </h1>
              <p className="text-xl text-deepiq-gray">
                DeepIQ is on a mission to help industrial companies unlock the value 
                of their operational data through cutting-edge AI and machine learning.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-thin text-deepiq-dark mb-6">Our Story</h2>
                <p className="text-deepiq-gray dark:text-gray-400 mb-6 transition-colors">
                  Founded in 2018 by a team of data scientists and industrial automation experts, 
                  DeepIQ emerged from a simple observation: industrial companies were drowning in 
                  data but starving for insights. Despite collecting terabytes of operational data, 
                  most organizations were only utilizing a fraction of its potential value.
                </p>
                <p className="text-deepiq-gray dark:text-gray-400 mb-6 transition-colors">
                  We set out to bridge this gap by creating a platform that could seamlessly 
                  connect to any industrial system, automatically contextualize data with domain 
                  knowledge, and apply advanced AI to deliver actionable insights. Today, DeepIQ 
                  processes billions of data points daily, helping companies reduce downtime, 
                  optimize production, and operate more safely and sustainably.
                </p>
                <p className="text-deepiq-gray">
                  From our headquarters in Houston, the energy capital of the world, we serve 
                  customers across oil & gas, chemicals, manufacturing, and other industrial 
                  sectors. Our team combines deep industry expertise with cutting-edge technology 
                  skills to deliver solutions that work in the real world, not just in the lab.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-deepiq-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-thin text-deepiq-dark mb-4">Our Values</h2>
              <p className="text-lg text-deepiq-gray max-w-3xl mx-auto">
                These core values guide everything we do at DeepIQ
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {values.map(value => (
                <div key={value.title} className="text-center">
                  {(() => {
                    const IconComponent = getIcon(value.icon)
                    return <IconComponent className="w-12 h-12 mb-4 mx-auto text-deepiq-blue" />
                  })()}
                  <h3 className="text-xl font-light text-deepiq-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-deepiq-gray">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-thin text-deepiq-dark mb-4">Our Journey</h2>
              <p className="text-lg text-deepiq-gray max-w-3xl mx-auto">
                Key milestones in DeepIQ's growth and innovation
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-deepiq-blue"></div>
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start mb-8">
                    <div className="absolute left-8 w-4 h-4 bg-deepiq-blue rounded-full -translate-x-1/2"></div>
                    <div className="ml-20">
                      <div className="text-sm text-deepiq-blue font-light mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-deepiq-gray">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-deepiq-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-thin text-deepiq-dark mb-4">Leadership Team</h2>
              <p className="text-lg text-deepiq-gray max-w-3xl mx-auto">
                Meet the experts driving DeepIQ's vision forward
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map(member => (
                <div key={member.name} className="bg-white rounded-lg p-6 text-center">
                  {(() => {
                    const IconComponent = getIcon(member.image)
                    return <IconComponent className="w-16 h-16 mb-4 mx-auto text-deepiq-gray" />
                  })()}
                  <h3 className="text-xl font-light text-deepiq-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-deepiq-blue mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-deepiq-gray">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-thin text-deepiq-blue mb-2">100+</div>
                  <p className="text-deepiq-gray">Enterprise Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-thin text-deepiq-blue mb-2">1B+</div>
                  <p className="text-deepiq-gray">Data Points Daily</p>
                </div>
                <div>
                  <div className="text-4xl font-thin text-deepiq-blue mb-2">50+</div>
                  <p className="text-deepiq-gray">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deepiq-dark text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-thin mb-6">
                Join Us in Transforming Industrial Operations
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Whether you're a customer, partner, or future team member, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-deepiq-blue hover:bg-deepiq-light"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/careers"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-deepiq-dark"
                >
                  View Careers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}