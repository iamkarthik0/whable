import { ResponsiveCarousel } from "@/components/layout/ResponsiveCarousel";
import Image from "next/image";
import React from "react";
import { getMissionContent } from "@/app/actions/getMissionContent";

export const Section = async () => {
  const { success, data } = await getMissionContent();

  return (
    <>
      <div>
        {/* ---------------------------first div--------------------------- */}
        <div className="p-container  bg-white">
          <div className=" lg:px-[96px] space-y-8">
            <div className=" space-y-3">
              <h5 className="h5 font-bold">{data?.missionSection?.title || "Missione Sociale"}</h5>
            </div>

            <div className=" space-y-10  font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
              {data?.missionSection?.description ? (
                data.missionSection.description.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    <span className=" text-primary font-semibold">Whable </span> non
                    è solo una piattaforma tecnologica, ma un progetto con una forte
                    vocazione sociale.
                  </p>

                  <p>
                    Si impegna a promuovere una cultura inclusiva, sensibilizzando
                    le comunità locali sull'importanza dell'accessibilità.
                  </p>

                  <p>
                    Collaborare con amministrazioni pubbliche e operatori privati
                    per migliorare le infrastrutture e i servizi.
                  </p>
                  <p>
                    Dare voce alle persone con disabilità, creando un ecosistema
                    partecipativo e in continua evoluzione.
                  </p>
                </>
              )}
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
            src={data?.companionSection?.imageUrl || "/image/mission/main2.png"}
            alt="main1"
            width={500}
            height={500}
            className=" rounded-[24px]"
          />
        </div>

        <div className=" flex-1 space-y-4">
          <h2 className=" h2">
            {data?.companionSection?.title || "Più di una semplice app, un compagno di viaggio affidabile."}
          </h2>

          <h5 className=" h5">
            {data?.companionSection?.description || "Whable è più di un'app: è una community che trasforma l'accessibilità in libertà, offrendo informazioni affidabili e strumenti per scoprire luoghi dove vivere esperienze outdoor in totale sicurezza e serenità."}
          </h5>
        </div>
      </div>
      {/* ----------------------------------------second div -------------------------- * */}
    </>
  );
};
