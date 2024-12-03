
import { Hero } from '@/components/shared/contact/Hero'
import { Section } from '@/components/shared/contact/Section'
import React from 'react'


import { Metadata, Viewport } from 'next'
export const revalidate = 60

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Contattaci',
  description: 'Contatta Whable per scoprire come migliorare la tua vita e quella degli altri. Unisciti alla nostra community per un mondo più accessibile.',
  openGraph: {
    title: 'Contatta Whable',
    description: 'Contatta Whable per scoprire come migliorare la tua vita e quella degli altri.',
    images: ['/og-contact.jpg'],
  },
}
export default function page() {
  return (
    <div className=" bg-[url('/image/contact/mobile-back.svg')]  sm:bg-[url('/image/contact/tab-back.svg')]     lg:bg-[url('/image/contact/desk-back.svg')]     bg-no-repeat  ">
        <Hero/>

        <Section/>
   
     
    </div>
  )
}
