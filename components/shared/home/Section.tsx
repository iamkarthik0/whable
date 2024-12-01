import Image from "next/image";
import React from "react";

export const Section = () => {
  return (
    <div className=" ">
      {/* -----------------------------first div----------------------------- */}
      <div className=" p-container flex flex-col lg:flex-row gap-10">
        <div className=" flex-1 flex justify-center items-center">
          <Image
            src="/image/home/main-1.png"
            alt="main1"
            width={500}
            height={500}
            className=" rounded-[24px]"
          />
        </div>

        <div className=" flex-1 space-y-4">
          <h2 className=" h2">
            Perché <span className=" text-primary">Whable</span> è importante
          </h2>

          <h5 className=" h5">
            {" "}
            <span className=" text-primary"> Whable</span> è più di una
            piattaforma, è una community creata da persone con disabilità per
            persone con disabilità. Qui ci ascoltiamo, condividiamo esperienze e
            forniamo informazioni affidabili. Il nostro obiettivo? Permettere
            agli utenti di vivere il proprio tempo libero senza ostacoli,
            sapendo sempre dove andare, senza sorprese o imprevisti.
          </h5>
        </div>
      </div>
      {/* -----------------------------first div----------------------------- */}
      {/* --------------------------------------second div-------------------------------------- */}

      <div className=" p-container">
        <div className=" flex flex-col lg:flex-row gap-10">
          <div className=" flex-1 flex justify-center items-center lg:order-last">
            <Image
              src="/image/home/main-2.png"
              alt="main1"
              width={500}
              height={500}
              className=" rounded-[24px]"
            />
          </div>

          <div className=" flex-1 space-y-4 ">
            <h2 className=" h2 lg:text-end">
              Come funziona
              <span className=" text-primary">Whable</span>
            </h2>

            <h5 className=" h5 lg:text-end">
              {" "}
              Una comunità attiva di persone con disabilità garantisce
              informazioni dettagliate e aggiornate sull'accessibilità di ogni
              luogo, creando una risorsa affidabile per tutti.
            </h5>
          </div>
        </div>

        <div className=" py-[40px] sm:py-[56px] gap-6 grid grid-cols-1 lg:grid-cols-3">
          {/* -----div 1----- */}
          <div className=" font-gabarito space-y-3 p-4 border-[#FFCC00] border-[2px] rounded-[12px]">
            <Image
              src="/icons/support.png"
              alt="main1"
              width={40}
              height={40}
            />

            <h5 className=" h5 text-primary">Comunità attiva</h5>
            <p className=" text-[16px]  leading-[20px]">
              Una rete di utenti collaborativi che si scambiano consigli e
              esperienze, creando una fonte di conoscenza affidabile e in
              continua evoluzione.
            </p>
          </div>
          {/* -----div 1----- */}

          {/* ------div 2 -------- */}

          <div className=" font-gabarito space-y-3 p-4 border-[#FFCC00] border-[2px] rounded-[12px]">
            <Image
              src="/icons/support.png"
              alt="main1"
              width={40}
              height={40}
            />

            <h5 className=" h5 text-primary">Comunità attiva</h5>
            <p className=" text-[16px]  leading-[20px]">
              Una rete di utenti collaborativi che si scambiano consigli e
              esperienze, creando una fonte di conoscenza affidabile e in
              continua evoluzione.
            </p>
          </div>

          {/* ------div 2 -------- */}

          {/* ------div 3 -------- */}

          <div className=" font-gabarito space-y-3 p-4 border-[#FFCC00] border-[2px] rounded-[12px]">
            <Image
              src="/icons/support.png"
              alt="main1"
              width={40}
              height={40}
            />

            <h5 className=" h5 text-primary">Comunità attiva</h5>
            <p className=" text-[16px]  leading-[20px]">
              Una rete di utenti collaborativi che si scambiano consigli e
              esperienze, creando una fonte di conoscenza affidabile e in
              continua evoluzione.
            </p>
          </div>

          {/* ------div 3 -------- */}
        </div>
      </div>

      {/* --------------------------------------second div-------------------------------------- */}

      {/* 
      -----------------third div-------------------------------------- */}

      <div className="p-container   bg-[#F6F6F6]">
        <div className=" lg:px-[96px] space-y-10">
          <div className=" space-y-3">
            <h1 className="  text-[28px] leading-[38px] font-bold sm:text-[32px] sm:leading-[44px]  text-primary">
              Il futuro di Whable
            </h1>
            <h5 className="h5 font-bold">
              Costruiamo insieme un futuro accessibile
            </h5>
          </div>
          <p className=" font-bitter text-[28px] leading-[40px] sm:text-[32px] sm:leading-[46px] text-[#363636]">
            Il futuro di Whable dipende da te. Stiamo sviluppando la prima
            versione della nostra app, che verrà lanciata all’inizio del 2025.
            Iscriviti per restare aggiornato e per aiutarci a costruire Whable,
            testando le nuove funzionalità e condividendo le tue idee con il
            nostro team.
          </p>
        </div>
      </div>

      {/* 
      -----------------third div-------------------------------------- */}
    </div>
  );
};
