import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6 py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[3.65rem] xl:pr-[6.25rem] ">
            <h1 className=" h1 leading-[60px]">
              <span className=" text-primary"> Whable:</span> Muoversi Liberi,
              Vivere Senza Barriere
            </h1>

            <p>
              Crediamo in un mondo dove ogni esperienza è accessibile a tutti:
              Whable ti guida verso un futuro senza ostacoli, con informazioni
              affidabili e una community che condivide la passione per
              l'outdoor.
            </p>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src="/image/mission/main1.png"
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
