import React from "react";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import event4 from "../assets/images/event4.png";
import event5 from "../assets/images/event5.png";

type EventType = {
  title: string;
  description: string;
  image: string;
};

const events: EventType[] = [
  {
    title: "Sabato in Planetario",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event1,
  },
  {
    title: "Momenti di Agri-creatività",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event2,
  },
  {
    title: "Ruota dell'Anno Celtico",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event3,
  },
  {
    title: "Sabato in Planetario",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event4,
  },
  {
    title: "Momenti di Agri-creatività",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event4,
  },
  {
    title: "Ruota dell'Anno Celtico",
    description:
      "L’azienda è certificata biologica ed è<br/> composta da orto, frutteto e pascolo, colture<br/> cerealicole, vigneto e medicaio.",
    image: event5,
  },
];

const EventsGrid: React.FC = () => {
  const eventRows: EventType[][] = [];
  for (let i = 0; i < events.length; i += 3) {
    eventRows.push(events.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-20 self-stretch px-[140px] pb-20">
      <div className="flex flex-col justify-center items-center gap-16 self-stretch">
        {eventRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-10 self-stretch">
            {row.map((event, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-[360px] h-[360px] flex gap-2.5 bg-white rounded-2xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-[360px] h-[360px] object-cover"
                  />
                </div>
                <div className="w-[360px] flex flex-col gap-2">
                  <span
                    className="font-normal text-[24px] text-[#1c1c1c] text-left"
                    style={{ fontFamily: "MADE Dillan, sans-serif" }}
                  >
                    {event.title}
                  </span>
                  <span className="text-base text-[#1c1c1c] text-left" dangerouslySetInnerHTML={{ __html: event.description }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2.5 bg-[#d1f864] px-6 py-3 rounded-[40px] cursor-pointer">
        <span className="font-bold text-base text-[#1c1c1c]">
          Scopri tutti gli eventi
        </span>
      </div>
    </div>
  );
};

export default EventsGrid;