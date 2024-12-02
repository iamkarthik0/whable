import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" relative   ">

      <div className="    ">
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* ------------- div 1------------- */}
        <div className="flex-1 flex justify-center items-center   ">
          <div className="  space-y-6  py-10 lg:py-0 px-8  sm:px-[90px] lg:pl-[65px]   xl:pl-[156px] lg:pr-[2.65rem] xl:pr-[4.25rem] ">
            <h1 className=" h1 leading-[60px]">
            Il viaggio di Marco e la nascita di <span className=" text-primary">Whable</span>
            </h1>

            <p>
            Unisciti a Whable e diventa parte di una community che sta rendendo il mondo più accessibile.
            </p>

            <Button className="gap-2 w-full sm:max-w-[268px]  font-gabarito font-bold">
                Abbatti le barriere <ArrowRight size={16} />
              </Button>
          </div>
        </div>
        {/* ------------- div 1------------- */}
        {/* ------------- div 2------------- */}
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src="/image/home/hero-img.png"
            alt="hero"
            width={900}
            height={450}
          />
        </div>
        {/* ------------- div 2------------- */}
      </div>
        {/* ---------------------------------hero section ------------------------------- */}
        {/* <div className="  z-10 flex flex-col lg:flex-row gap-10 md:gap-2 md:justify-between py-10  md:py-0 ">
          <div className=" flex-1 flex  ">
            <div className="  space-y-7  px-8 sm:px-0  sm:ml-[90px] py-10 lg:ml-[156px]  justify-center flex flex-col      ">
              <h1 className="  h1">
                Il viaggio di <span className=" text-primary">Marco</span> e{" "}
                <br className="hidden xl:flex" /> la{" "}
                <br className="hidden sm:flex  lg:hidden" /> nascita di{" "}
                <span className=" text-primary">Whable</span>{" "}
              </h1>

              <p>
                Unisciti a Whable e diventa parte di una community che sta{" "}
                <br className=" hidden sm:flex" />
                rendendo il mondo più accessibile.
              </p>

              <Button className="gap-2 w-full sm:max-w-[268px]  font-gabarito font-bold">
                Abbatti le barriere <ArrowRight size={16} />
              </Button>
            </div>
          </div>{" "}
          <div className="   flex-1">
            {" "}
            <Image
              src="/image/home/hero-img.png"
              alt="hero"
              width={900}
              height={450}
            />
          </div>
        </div> */}

        {/* ---------------------------------hero section ------------------------------- */}
      </div>

      {/* ---------------------------------title ------------------------------- */}
      <div className=" p-container bg-white z-10  ">
        <div className="  space-y-4 lg:px-[96px]">
          <h4 className=" font-garabito font-bold text-[#363636] text-[20px] leading-[28px]">
            Libertà e autonomia per tutti
          </h4>

          <p className="  text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px]  lg:text-[36px] lg:leading-[50px]  font-bitter">
            <span className=" text-primary">Whable</span> si impegna a
            restituire autonomia a chi è discriminato o limitato da barriere
            fisiche e sociali.
          </p>
        </div>
      </div>

      {/* ---------------------------------title ------------------------------- */}
    </div>
  );
};

export default Hero;
