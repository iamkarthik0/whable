import Image from "next/image";
import React from "react";
import { getDonationContent } from "@/app/actions/getDonationContent";

export const Hero = async () => {
  const { success, data } = await getDonationContent();

  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6 py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[3.65rem] xl:pr-[6.25rem] ">
            <h1 className=" h1 leading-[60px]">
              {data?.hero?.title || "La piattaforma che ti connette con un mondo accessibile"}
            </h1>

            <p>
              {data?.hero?.description || 
                "Con Whable, costruiamo insieme un mondo accessibile, dove ogni esperienza outdoor diventa sicura e alla portata di tutti. Unisciti a noi per mappare l'accessibilità e abbattere le barriere, un luogo alla volta."
              }
            </p>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={data?.hero?.heroImageUrl || "/image/donation/main1.png"}
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
