import { ContactForm } from '@/components/layout/ContactForm'
import { Hero } from '@/components/shared/contact/Hero'
import { Section } from '@/components/shared/contact/Section'
import React from 'react'

export default function page() {
  return (
    <div className=" bg-[url('/image/contact/mobile-back.svg')]  sm:bg-[url('/image/contact/tab-back.svg')]     lg:bg-[url('/image/contact/desk-back.svg')]     bg-no-repeat  ">
        <Hero/>

        <Section/>
   
     
    </div>
  )
}
