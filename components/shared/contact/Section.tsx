import { ContactForm } from "@/components/layout/ContactForm";
import { ResponsiveCarousel } from "@/components/layout/ResponsiveCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Section = () => {
  return (
    <>
      <div>
        {/* ---------------------------first div--------------------------- */}
        <div className="p-container  bg-white">
          <div className=" lg:px-[96px] space-y-10">
            <div className=" space-y-4">
              <h1 className="  text-[28px] leading-[38px] font-bold sm:text-[32px] sm:leading-[44px]  text-primary">
                Sentiti libero di esplorare con Whable
              </h1>
              <h5 className="h5 font-bold">Vuoi scoprire come migliorare la tua vita e quella degli altri? Contattaci e unisciti alla nostra rete di persone con disabilità che lavorano insieme per un mondo più accessibile.</h5>
             
            </div>
            <div className=" space-y-10  font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
            <ContactForm/>
   
            </div>
          </div>
        </div>
        {/* -----------------------------first div-------------------- */}

        {/* -----------------------------------------------second div--------------------------------------------- */}

        {/* -----------------------------------------------second div--------------------------------------------- */}
      </div>
      {/* ----------------------------------------second div -------------------------- * */}
      <div className=" p-container flex flex-col lg:flex-row gap-10 bg-transparent">
        <div className=" flex-1 space-y-4">
          <h5 className=" h5">La tua guida sicura per un mondo accessibile</h5>
          <p className=" font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
            Viaggia con tranquillità, sapendo che puoi contare su una community
            di persone che condividono le tue stesse passioni e che ti
            aiuteranno a scoprire i luoghi più interessanti e accessibili della
            tua città.
          </p>
        </div>
      </div>
      {/* ----------------------------------------second div -------------------------- * */}
    </>
  );
};
