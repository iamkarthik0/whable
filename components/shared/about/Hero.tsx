"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getAboutContent } from "@/app/actions/getAboutContent";

export const Hero = () => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await getAboutContent();
      if (result.success) {
        setContent(result.data);
      }
    };
    fetchContent();
  }, []);

  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6 py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[3.65rem] xl:pr-[6.25rem] ">
            <h1 className=" h1 leading-[60px]">
              {content?.hero?.title || "Insieme, apriamo le porte del mondo"}
            </h1>

            <p>
              {content?.hero?.description || "Whable nasce dal desiderio di creare una comunità inclusiva che trasformi ogni spostamento in un'opportunità senza barriere. Condividiamo informazioni affidabili sull'accessibilità e mappiamo location che promuovono esperienze outdoor sicure, perché crediamo che la libertà di esplorare appartenga a tutti."}
            </p>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={content?.hero?.heroImageUrl || "/image/about/hero.png"}
            alt="hero"
            width={900}
            height={450}
          />
        </div>
        {/* ------------- div 2------------- */}
      </div>
    </div>
  );
};