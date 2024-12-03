import { Hero } from "@/components/shared/donation/Hero";
import { Section } from "@/components/shared/donation/Section";
import { Metadata, Viewport } from "next";
import React from "react";
export const revalidate = 60


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Sostienici',
  description: 'Sostieni Whable nella sua missione di rendere il mondo più accessibile. Il tuo contributo fa la differenza.',
  openGraph: {
    title: 'Sostieni Whable',
    description: 'Sostieni Whable nella sua missione di rendere il mondo più accessibile.',
    images: ['/og-donation.jpg'],
  },
}
export default function page() {
  return (
    <div className=" bg-[url('/image/donation/mobile-back.svg')]  sm:bg-[url('/image/donation/tab-back.svg')]     lg:bg-[url('/image/donation/desk-back.svg')]     bg-no-repeat  ">


        <Hero/>
        <Section/>  




    </div>
  );
}
