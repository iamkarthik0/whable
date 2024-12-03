import { Hero } from "@/components/shared/mission/Hero";
import { Section } from "@/components/shared/mission/Section";
import { Metadata, Viewport } from "next";
import React from "react";
export const revalidate = 60


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'La Nostra Missione',
  description: 'La missione di Whable è creare una community inclusiva che renda il mondo più accessibile per tutti.',
  openGraph: {
    title: 'La Nostra Missione | Whable',
    description: 'La missione di Whable è creare una community inclusiva che renda il mondo più accessibile per tutti.',
    images: ['/og-mission.jpg'],
  },
}
const page = () => {
  return (
    <div className=" bg-[url('/image/mission/mobile-back.svg')]  sm:bg-[url('/image/mission/tab-back.svg')]     lg:bg-[url('/image/mission/desk-back.svg')]     bg-no-repeat  ">
      <Hero />
      <Section />
    </div>
  );
};

export default page;
