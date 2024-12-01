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
           <span className=" text-primary"> Whable</span> è più di una piattaforma, è una community creata da persone
            con disabilità per persone con disabilità. Qui ci ascoltiamo,
            condividiamo esperienze e forniamo informazioni affidabili. Il
            nostro obiettivo? Permettere agli utenti di vivere il proprio tempo
            libero senza ostacoli, sapendo sempre dove andare, senza sorprese o
            imprevisti.
          </h5>
        </div>
      </div>

      {/* -----------------------------first div----------------------------- */}



      {/* --------------------------------------second div-------------------------------------- */}
d
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
           <span className=" text-primary"> Whable</span> è più di una piattaforma, è una community creata da persone
            con disabilità per persone con disabilità. Qui ci ascoltiamo,
            condividiamo esperienze e forniamo informazioni affidabili. Il
            nostro obiettivo? Permettere agli utenti di vivere il proprio tempo
            libero senza ostacoli, sapendo sempre dove andare, senza sorprese o
            imprevisti.
          </h5>
        </div>
      </div>

      
      {/* --------------------------------------second div-------------------------------------- */}
    </div>
  );
};
