import Image from "next/image";
import React from "react";
import { getMissionContent } from "@/app/actions/getMissionContent";

export const Hero = async () => {
  const { success, data } = await getMissionContent();

  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6 py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[3.65rem] xl:pr-[6.25rem] ">
            <h1 className=" h1 leading-[60px]">
              {data?.hero?.title ? (
                <>
                  {data?.hero?.title?.includes('Whable:') ? (
                    data?.hero?.title?.split('Whable:').map((part: string, index: number) => 
                      index === 0 ? part : (
                        <React.Fragment key={index}>
                          <span style={{color: '#FF6B00'}}>Whable:</span>
                          {part}
                        </React.Fragment>
                      )
                    )
                  ) : data?.hero?.title}
                </>
              ) : (
                <><span className=" text-primary"> Whable:</span> Muoversi Liberi,
                Vivere Senza Barriere</>
              )}
            </h1>

            <p>
              {data?.hero?.description || 
                "Crediamo in un mondo dove ogni esperienza è accessibile a tutti: Whable ti guida verso un futuro senza ostacoli, con informazioni affidabili e una community che condivide la passione per l'outdoor."
              }
            </p>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={data?.hero?.heroImageUrl || "/image/mission/main1.png"}
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
