import React from "react";
import heroBg from "../assets/images/hero-image.png";
import EventsGrid from "./EventsGrid";

const HeroWithEvents: React.FC = () => {
  return (
    <div className="relative">
      {/* Sezione Hero */}
      <section className="relative flex self-stretch h-[944px] overflow-hidden">
        <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>

        <div className="relative z-20 flex justify-center items-center w-[800px] px-20 py-10">
          <div className="w-[640px] flex flex-col justify-center gap-4">
            <h1
              className="text-[100px] leading-[1.1] text-[#1c1c1c]"
              style={{ fontFamily: "MADE Dillan", fontWeight: "normal" }}
            >
              <span className="bg-gradient-to-b from-[#56D698] to-[#3C8D3A] bg-clip-text text-transparent">
                Soulfarm
              </span>{" "}
              <br /> Agricoltura <br /> Familiare
            </h1>
            <p
              className="font-bold text-[18px] leading-[26px] text-[#1c1c1c]"
              style={{ fontFamily: "Lexend, sans-serif", fontWeight: "700" }}
            >
              L’azienda è certificata biologica ed è<br/> 
              composta da orto, frutteto<br/> 
              e pascolo.
            </p>
          </div>
        </div>

        {/* Immagine Hero */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Paesaggio agricolo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Sezione Eventi con sovrapposizione */}
      <div className="relative -mt-20 z-10 rounded-2xl shadow-lg p-8">
        <EventsGrid />
      </div>
    </div>
  );
};

export default HeroWithEvents;