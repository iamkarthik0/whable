import { Hero } from '@/components/shared/about/Hero'
import { Section } from '@/components/shared/about/Section'
import { Metadata, Viewport } from 'next'
import React from 'react'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Scopri chi siamo e la nostra missione per rendere il mondo più accessibile attraverso la community Whable.',
  openGraph: {
    title: 'Chi Siamo | Whable',
    description: 'Scopri chi siamo e la nostra missione per rendere il mondo più accessibile.',
    images: ['/og-about.jpg'],
  },
}
export const revalidate = 60
export default function page() {
  return (
    <div className="bg-hero-1 sm:bg-hero-2 lg:bg-hero-3   bg-no-repeat">
      <Hero/>
      <Section/>
    </div>
  )
}
