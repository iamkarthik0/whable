import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getHomeContent } from "@/app/actions/getHomeContent";

const Hero = async () => {
  const { data } = await getHomeContent();

  return (
    <div className=" relative   ">
      <div className="    ">
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6  py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[2.65rem] xl:pr-[4.25rem] ">
            <h1 className=" h1 leading-[60px]">
              {data?.hero?.title ? (
                <>
                  {data?.hero?.title.split(/\b(Whable|Marco)\b/).map((part: string, index: number) => (
                    <React.Fragment key={index}>
                      {['Whable', 'Marco'].includes(part) ? (
                        <div className="text-primary">{part}</div>
                      ) : (
                        part
                      )}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <>
                  Il viaggio di <span className="text-primary">Marco</span> e la nascita di <span className="text-primary">Whable</span>
                </>
              )}
            </h1>

            <p>
              {data?.hero?.description || "Unisciti a Whable e diventa parte di una community che sta rendendo il mondo più accessibile."}
            </p>

            <Button className="gap-2 w-full sm:max-w-[268px]  font-gabarito font-bold">
                {data?.hero?.subtitle || "Abbatti le barriere"} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={data?.hero?.heroImageUrl || "/image/home/hero-img.png"}
            alt="hero"
            width={900}
            height={450}
          />
        </div>
        {/* ------------- div 2------------- */}
      </div>
     
      </div>

      {/* ---------------------------------sub hero ------------------------------- */}
      <div className=" p-container bg-white z-10  ">
        <div className="  space-y-4 lg:px-[96px]">
          <h4 className=" font-garabito font-bold text-[#363636] text-[20px] leading-[28px]">
            {data?.subhero?.title || "Libertà e autonomia per tutti"}
          </h4>

          <p className="  text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px]  lg:text-[36px] lg:leading-[50px]  font-bitter">
            {data?.subhero?.description ? (
              data?.subhero?.description.split(/\b(Whable)\b/).map((part: string, index: number) => (
                <React.Fragment key={index}>
                  {part === 'Whable' ? (
                    <span className="text-primary font-semibold">{part}</span>
                  ) : (
                    part
                  )}
                </React.Fragment>
              ))
            ) : (
              <><span className="text-primary font-semibold">Whable</span> si impegna a restituire autonomia a chi è discriminato o limitato da barriere fisiche e sociali.</>
            )}
          </p>
        </div>
      </div>

      {/* ---------------------------------sub hero ------------------------------- */}
    </div>
  );
};

export default Hero;
