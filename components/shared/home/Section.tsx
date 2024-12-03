"use client"
import { InlineContact } from "@/components/layout/InlineContact";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getHomeContent } from "@/app/actions/getHomeContent";

export const Section = () => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await getHomeContent();
      if (result.success) {
        setContent(result.data);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className=" ">
      {/* -----------------------------first div----------------------------- */}
      <div className=" p-container flex flex-col lg:flex-row gap-10">
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src={content?.whyWhableSection?.image || "/image/home/main-1.png"}
            alt="main1"
            width={500}
            height={500}
            className=" rounded-[24px]"
          />
        </div>

        <div className=" flex-1 space-y-4">
          <h2 className=" h2">
            {content?.whyWhableSection?.title || "Perché"} <span className=" text-primary">Whable</span> è importante
          </h2>

          <h5 className=" h5">
            {content?.whyWhableSection?.description || (
              <>
                <span className=" text-primary"> Whable</span> è più di una
                piattaforma, è una community creata da persone con disabilità per
                persone con disabilità. Qui ci ascoltiamo, condividiamo esperienze e
                forniamo informazioni affidabili. Il nostro obiettivo? Permettere
                agli utenti di vivere il proprio tempo libero senza ostacoli,
                sapendo sempre dove andare, senza sorprese o imprevisti.
              </>
            )}
          </h5>
        </div>
      </div>
      {/* -----------------------------first div----------------------------- */}
      {/* --------------------------------------second div-------------------------------------- */}

      <div className=" p-container">
        <div className=" flex flex-col lg:flex-row gap-10">
          <div className=" flex-1 flex justify-center items-center  lg:order-last">
            <Image
              src={content?.howItWorksSection?.image || "/image/home/main-2.png"}
              alt="main1"
              width={500}
              height={500}
              className=" rounded-[24px]"
            />
          </div>

          <div className=" flex-1 space-y-4 ">
            <h2 className=" h2 lg:text-end">
              {content?.howItWorksSection?.title || "Come funziona"}
              <span className=" text-primary">Whable</span>
            </h2>

            <h5 className=" h5 lg:text-end">
              {content?.howItWorksSection?.description || (
                "Una comunità attiva di persone con disabilità garantisce informazioni dettagliate e aggiornate sull'accessibilità di ogni luogo, creando una risorsa affidabile per tutti."
              )}
            </h5>
          </div>
        </div>

        <div className=" py-[40px] sm:py-[56px] gap-6 grid grid-cols-1 lg:grid-cols-3">
          {(content?.howItWorksSection?.features || [
            {
              title: "Comunità attiva",
              description: "Una rete di utenti collaborativi che si scambiano consigli e esperienze, creando una fonte di conoscenza affidabile e in continua evoluzione.",
              icon: "/icons/support.png"
            },
            {
              title: "Comunità attiva",
              description: "Una rete di utenti collaborativi che si scambiano consigli e esperienze, creando una fonte di conoscenza affidabile e in continua evoluzione.",
              icon: "/icons/support.png"
            },
            {
              title: "Comunità attiva", 
              description: "Una rete di utenti collaborativi che si scambiano consigli e esperienze, creando una fonte di conoscenza affidabile e in continua evoluzione.",
              icon: "/icons/support.png"
            }
          ]).map((feature: any, index: number) => (
            <div key={index} className=" font-gabarito space-y-3 p-4 border-[#FFCC00] border-[2px] rounded-[12px]">
              <Image
                src={feature.icon || "/icons/support.png"}
                alt={`feature-${index + 1}`}
                width={40}
                height={40}
              />
              <h5 className=" h5 text-primary">{feature.title}</h5>
              <p className=" text-[16px] leading-[20px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------second div-------------------------------------- */}

      {/* 
      -----------------third div-------------------------------------- */}

      <div className="p-container bg-[#F6F6F6]">
        <div className=" lg:px-[96px] space-y-10">
          <div className=" space-y-3">
            <h1 className="text-[28px] leading-[38px] font-bold sm:text-[32px] sm:leading-[44px] text-primary">
              {content?.futureSection?.title || "Il futuro di Whable"}
            </h1>
            <h5 className="h5 font-bold">
              {content?.futureSection?.subtitle || "Costruiamo insieme un futuro accessibile"}
            </h5>
          </div>
          <p className="font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
            {content?.futureSection?.description || (
              <>
                Il futuro di{" "}
                <span className="text-primary font-semibold">Whable </span> dipende
                da te. Stiamo sviluppando la prima versione della nostra app, che
                verrà lanciata all'inizio del 2025. Iscriviti per restare aggiornato
                e per aiutarci a costruire{" "}
                <span className=" text-primary font-semibold">Whable</span>,
                testando le nuove funzionalità e condividendo le tue idee con il
                nostro team.
              </>
            )}
          </p>
        </div>
      </div>

      {/* 
      -----------------third div-------------------------------------- */}

      {/* 
      -----------------fourth div-------------------------------------- */}

      <div className="p-container">
        <div className=" lg:px-[96px] space-y-10">
          <div className=" space-y-3">
            <h1 className="text-[28px] leading-[38px] font-bold sm:text-[32px] sm:leading-[44px] text-primary">
              {content?.joinSection?.title || "Sei pronto a unirti a Whable?"}
            </h1>
            <h5 className="h5 font-bold">
              {content?.joinSection?.subtitle || 
                "Iscriviti alla newsletter per rimanere aggiornato e contribuire a una community che rende il mondo più accessibile."
              }
            </h5>
          </div>
          <div>
            <InlineContact />
          </div>
        </div>
      </div>

      {/* 
      -----------------fourth div-------------------------------------- */}
    </div>
  );
};
