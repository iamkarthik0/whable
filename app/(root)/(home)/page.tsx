import Hero from "@/components/shared/home/Hero";
import { Section } from "@/components/shared/home/Section";

import React from "react";
export const revalidate = 20
export default function page() {
  return (
    <div className="bg-hero-1 sm:bg-hero-2 lg:bg-hero-3   bg-no-repeat">
    
    <Hero/>

    <Section/>


   
    </div>
  );
}
