"use client"
import { ResponsiveCarousel } from "@/components/layout/ResponsiveCarousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getAboutContent } from "@/app/actions/getAboutContent";

export const Section = () => {
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
      {/* ---------------------------first div--------------------------- */}
      <div className="p-container  bg-white">
        <div className=" lg:px-[96px] space-y-10">
          <div className=" space-y-3">
            <h1 className="  text-[28px] leading-[38px] font-bold sm:text-[32px] sm:leading-[44px]  text-primary">
              {content?.visionSection?.title || "Sentiti libero di esplorare con Whable"}
            </h1>
            <h5 className="h5 font-bold">{content?.visionSection?.subtitle || "Visione"}</h5>
          </div>
          <p className=" font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
            {content?.visionSection?.description ? (
              content.visionSection.description.replace(
                /Whable/g,
                '<span class="text-primary font-semibold">Whable</span>'
              )
            ) : (
              <><span className=" text-primary font-semibold">Whable</span> mira a
              diventare il punto di riferimento globale per l'accessibilità,
              trasformando ogni città in un luogo più accogliente, inclusivo e
              sicuro per tutti. Con una combinazione di innovazione tecnologica,
              partecipazione collettiva e un impegno etico, puntando a
              rivoluzionare il modo in cui le persone con disabilità vivono e
              scoprono il mondo.</>
            )}
          </p>
        </div>
      </div>
      {/* -----------------------------first div-------------------- */}

      {/* ----------------------------------------second div -------------------------- * */}
      <div className=" p-container flex flex-col lg:flex-row gap-10">
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={content?.valueSection?.imageUrl || "/image/about/section-1.png"}
            alt="main1"
            width={500}
            height={500}
            className=" rounded-[24px]"
          />
        </div>

        <div className=" flex-1 space-y-4">
          <h2 className=" h2">
            {content?.valueSection?.title ? (
              content.valueSection.title.replace(
                /Whable/g,
                '<span class="text-primary">Whable</span>'
              )
            ) : (
              <><span className=" text-primary"> Whable:</span> Valorizzare
              l'accessibilità</>
            )}
          </h2>

          <h5 className=" h5">
            {content?.valueSection?.description ? (
              content.valueSection.description.replace(
                /Whable/g,
                '<span class="text-primary">Whable</span>'
              )
            ) : (
              <><span className=" text-primary"> Whable</span> è una
              piattaforma innovativa dedicata a migliorare la mobilità delle
              persone con disabilità, offrendo un supporto completo e affidabile.
              che ti permette di conoscere in anticipo le condizioni di
              accessibilità di luoghi, percorsi e servizi, fornendo informazioni
              validate e dettagliate tramite recensioni e valutazioni autentiche
              condivise da altri utenti con disabilità, creando una comunità che
              promuove la condivisione di esperienze utili.</>
            )}
          </h5>
        </div>
      </div>
      {/* ----------------------------------------second div -------------------------- * */}

      {/* -----------------------------------------------second div--------------------------------------------- */}

      <div className=" bg-[#F6F6F6] p-container space-y-12">
        <div className=" space-y-5" >
          <h1 className=" h1 text-center">I nostri visionari</h1>
          <p className=" text-center text-[22px] leading-[30px] font-gabarito font-medium text-[#252525]">Le menti dietro il pensiero accessibile ed inclusivo.</p>
        </div>
        <ResponsiveCarousel/>
      </div>

      {/* -----------------------------------------------second div--------------------------------------------- */}
    </div>
  );
};
