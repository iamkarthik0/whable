import Image from "next/image";
import React from "react";
import { getContactContent } from "@/app/actions/getContactContent";

export const Hero = async () => {
  const { success, data } = await getContactContent();

  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6 py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[3.65rem] xl:pr-[6.25rem] ">
            <h1 className=" h1 leading-[60px]">
              {data?.hero?.title || "Contattaci per un mondo senza barriere"}
            </h1>

            <p className=" text-[#363636] text-[18px] font-gabarito leading-[24px]">
              {data?.hero?.description || "Siamo qui per ascoltarti! Che tu abbia domande, suggerimenti o semplicemente voglia di condividere la tua esperienza, il team di Whable è pronto a supportarti nel rendere ogni destinazione più accessibile e inclusiva."}
            </p>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={data?.hero?.heroImageUrl || "/image/contact/main1.png"}
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
