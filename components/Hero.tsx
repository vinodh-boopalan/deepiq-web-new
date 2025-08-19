import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Cpu, Building, BarChart3, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-deepiq-light dark:from-gray-900 to-white dark:to-gray-950 overflow-hidden transition-colors">
      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin leading-tight">
              <span className="text-deepiq-dark dark:text-white">Moving industrial data. </span>
              <span className="text-deepiq-dark dark:text-white">Powering </span>
              <span className="text-deepiq-blue dark:text-blue-400">intelligent</span>
              <span className="text-deepiq-dark dark:text-white"> operations.</span>
            </h1>
            
            <p className="text-lg text-deepiq-gray leading-relaxed">
              From refineries to manufacturing floors, DeepIQ accelerates insight by moving, engineering, and 
              contextualizing data at scale — enabling smarter decisions, safer operations, and better outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/demo" className="btn-primary inline-block text-center">
                Get Started
              </Link>
              <Link href="/case-studies" className="btn-secondary inline-block text-center">
                View Interactive Demo
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-deepiq-gray">15x moved daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-deepiq-gray">Knowledge graph</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-deepiq-blue/10 to-transparent rounded-2xl"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 p-6 transform hover:scale-105 transition-all">
                  <Cpu className="w-12 h-12 text-deepiq-blue mb-3" />
                  <h3 className="font-light text-deepiq-dark dark:text-white">Oil Rig</h3>
                  <p className="text-sm text-deepiq-gray dark:text-gray-400 mt-1">Offshore platforms</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 p-6 transform hover:scale-105 transition-all">
                  <Building className="w-12 h-12 text-deepiq-blue mb-3" />
                  <h3 className="font-light text-deepiq-dark dark:text-white">Refineries</h3>
                  <p className="text-sm text-deepiq-gray dark:text-gray-400 mt-1">Processing facilities</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 p-6 transform hover:scale-105 transition-all">
                  <BarChart3 className="w-12 h-12 text-deepiq-blue mb-3" />
                  <h3 className="font-light text-deepiq-dark dark:text-white">Manufacturing</h3>
                  <p className="text-sm text-deepiq-gray dark:text-gray-400 mt-1">Production floors</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900 p-6 transform hover:scale-105 transition-all">
                  <Zap className="w-12 h-12 text-deepiq-blue mb-3" />
                  <h3 className="font-light text-deepiq-dark dark:text-white">Energy</h3>
                  <p className="text-sm text-deepiq-gray dark:text-gray-400 mt-1">Power generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}