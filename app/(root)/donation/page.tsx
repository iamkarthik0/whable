import { Hero } from "@/components/shared/donation/Hero";
import { Section } from "@/components/shared/donation/Section";
import React from "react";

export default function page() {
  return (
    <div className=" bg-[url('/image/donation/mobile-back.svg')]  sm:bg-[url('/image/donation/tab-back.svg')]     lg:bg-[url('/image/donation/desk-back.svg')]     bg-no-repeat  ">


        <Hero/>
        <Section/>  




    </div>
  );
}
