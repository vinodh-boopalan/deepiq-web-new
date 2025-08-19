import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DeepIQ - Moving Industrial Data. Powering Intelligent Operations.',
  description: 'From refineries to manufacturing floors, DeepIQ accelerates insight by moving, engineering, and contextualizing data at scale — enabling smarter decisions, safer operations, and better outcomes.',
  keywords: 'industrial AI, oil and gas, intelligent operations, data analytics, predictive maintenance',
  openGraph: {
    title: 'DeepIQ - Industrial AI Solutions',
    description: 'Powering intelligent operations in oil & gas industry',
    images: ['/og-image.jpg'],
    type: 'website',
    siteName: 'DeepIQ',
    url: 'https://deepiq.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepIQ - Industrial AI Solutions',
    description: 'Powering intelligent operations in oil & gas industry',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://deepiq.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}