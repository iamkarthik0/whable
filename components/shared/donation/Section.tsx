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
              <h5 className="h5 font-bold">Libertà senza barriere</h5>
              <p className=" font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
                Con <span className=" text-primary font-semibold"> Whable</span>{" "}
                vogliamo creare una community inclusiva e una mappa
                dell’accessibilità per permettere a tutti di vivere il mondo
                senza limiti.
              </p>
            </div>
            <div className=" space-y-10  font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
              <p>
                Sostieni il progetto e aiuta le persone con disabilità a
                spostarsi in sicurezza e godersi le esperienze outdoor senza
                ostacoli.
              </p>
              <Button className=" font-gabarito">
                Sostieni la nostra campagna di Crowdfunding{" "}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        {/* -----------------------------first div-------------------- */}

        {/* -----------------------------------------------second div--------------------------------------------- */}

        {/* -----------------------------------------------second div--------------------------------------------- */}
      </div>
      {/* ----------------------------------------second div -------------------------- * */}
      <div className=" p-container flex flex-col lg:flex-row gap-10 bg-transparent">
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src="/image/donation/main2.png"
            alt="main1"
            width={500}
            height={500}
            className=" rounded-[24px]"
          />
        </div>

        <div className=" flex-1 space-y-4">
          <h2 className=" h2">
            <span className=" text-primary"> Whable:</span> Valorizzare
            l'accessibilità
          </h2>

          <h5 className=" h5">
            Esplora con fiducia, grazie a una piattaforma che ti offre
            informazioni precise e aggiornate, e ti permette di connetterti con
            una community di persone che condividono la tua esperienza.
          </h5>
        </div>
      </div>
      {/* ----------------------------------------second div -------------------------- * */}
    </>
  );
};
