'use client'

import { useEffect, useRef, useState } from 'react'
import connectorsData from '@/data/connectors/connectors-data.json'

const BRANDFETCH_TOKEN = '1idbbZjpKWqOp_-kDsZ'

interface Connector {
  name: string
  domain: string
  description?: string
}

interface ConnectorRowProps {
  connectors: Array<Connector>
  direction?: 'left' | 'right'
  speed?: number
}

function ConnectorRow({ connectors, direction = 'left', speed = 30 }: ConnectorRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const isPausedRef = useRef(false)
  const [hoveredConnector, setHoveredConnector] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = direction === 'left' ? 0.5 : -0.5
    
    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPosition += scrollSpeed
        
        // Reset scroll position for infinite loop
        const scrollWidth = scrollContainer.scrollWidth / 2
        if (direction === 'left' && scrollPosition >= scrollWidth) {
          scrollPosition = 0
        } else if (direction === 'right' && scrollPosition <= -scrollWidth) {
          scrollPosition = 0
        }
        
        scrollContainer.style.transform = `translateX(${-scrollPosition}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [direction])

  const handleMouseEnter = () => {
    isPausedRef.current = true
  }

  const handleMouseLeave = () => {
    isPausedRef.current = false
    setHoveredConnector(null)
  }

  const handleConnectorHover = (connector: Connector, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    })
    setHoveredConnector(connector.name)
  }

  const handleConnectorLeave = () => {
    setHoveredConnector(null)
  }

  // Duplicate connectors for infinite scroll effect
  const duplicatedConnectors = [...connectors, ...connectors]

  return (
    <div 
      className="relative overflow-hidden py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      
      <div 
        ref={scrollRef}
        className="flex items-center gap-8 transition-transform"
        style={{ willChange: 'transform' }}
      >
        {duplicatedConnectors.map((connector, index) => (
          <div
            key={`${connector.name}-${index}`}
            className="flex-shrink-0 group"
            onMouseEnter={(e) => handleConnectorHover(connector, e)}
            onMouseLeave={handleConnectorLeave}
            onClick={(e) => {
              // Mobile tap support
              if (hoveredConnector === connector.name) {
                setHoveredConnector(null)
              } else {
                handleConnectorHover(connector, e)
              }
            }}
          >
            <div className="relative w-32 h-16 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-lg p-3 shadow-sm hover:shadow-md transition-all cursor-help border border-gray-200 dark:border-gray-600">
              <img
                src={`https://cdn.brandfetch.io/${connector.domain}/logo?c=${BRANDFETCH_TOKEN}`}
                alt={`${connector.name} - Logos by Brandfetch`}
                className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Tooltip Modal */}
      {hoveredConnector && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `min(max(${tooltipPosition.x}px, 180px), calc(100vw - 180px))`,
            top: tooltipPosition.y - 8,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-lg px-4 py-3 shadow-xl max-w-xs mx-2 sm:mx-0">
            <div className="font-semibold mb-1">
              {connectors.find(c => c.name === hoveredConnector)?.name}
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              {connectors.find(c => c.name === hoveredConnector)?.description}
            </div>
            {/* Arrow pointing down */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900 dark:border-t-gray-800"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Connectors() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-gray-900 dark:text-white mb-4">
            Effortlessly move data from <span className="text-blue-600 dark:text-blue-400">any source</span> to <span className="text-blue-600 dark:text-blue-400">any destination</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Connect to 100+ industrial systems, databases, cloud platforms, and enterprise applications
          </p>
        </div>

        <div className="space-y-4">
          <ConnectorRow connectors={connectorsData.row1} direction="left" />
          <ConnectorRow connectors={connectorsData.row2} direction="right" />
          <ConnectorRow connectors={connectorsData.row3} direction="left" />
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            And many more... DeepIQ supports custom connectors for any system
          </p>
        </div>
      </div>
    </section>
  )
}