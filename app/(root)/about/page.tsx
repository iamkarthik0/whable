import { Hero } from '@/components/shared/about/Hero'
import { Section } from '@/components/shared/about/Section'
import React from 'react'

export default function page() {
  return (
    <div className="bg-hero-1 sm:bg-hero-2 lg:bg-hero-3   bg-no-repeat">
      <Hero/>
      <Section/>
    </div>
  )
}
