import { Hero } from "@/components/shared/mission/Hero";
import { Section } from "@/components/shared/mission/Section";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[url('/image/mission/mobile-back.svg')]  sm:bg-[url('/image/mission/tab-back.svg')]     lg:bg-[url('/image/mission/desk-back.svg')]     bg-no-repeat  ">
      <Hero />
      <Section />
    </div>
  );
};

export default page;
