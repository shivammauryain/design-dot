import Image from "next/image";
import { INSIGHTS } from "@/lib/constants";

const IMAGE_CARDS = [
  {
    id: "pre-market",
    title: "Pre-Market",
    desc: "Evaluating Supply Chain Readiness Before Committing Capital In Emerging Markets",
    img: "/close-up-coins-table 2.png",
  },
  {
    id: "operations",
    title: "Operations",
    desc: "",
    img: "/futuristic-office-cover-diverse-professionals-holograms-data-analysis-career-growth 2.png",
  },
  {
    id: "growth",
    title: "Growth & Expansion",
    desc: "",
    img: "/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation 1.png",
  },
];

export function InspirationInsights() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-[1440px]">
        {/* Same layout ratio as AboutFirm: 2/4/6 or 2/5/5 roughly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Title box - 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-[#EEF2F6] rounded-3xl p-6 md:p-8 min-h-[220px] flex items-center justify-center shadow-sm">
              <h2 className="text-[26px] md:text-[30px] font-extrabold text-textDark uppercase leading-tight text-center">
                INSPIRATION &<br />
                INSIGHTS
              </h2>
            </div>
          </div>

          {/* Text list (ALL visible, NO accordion) - 4 cols */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-2">
            <div className="flex flex-col gap-6">
              {INSIGHTS.map((insight, index) => {
                const isActive = index === 0;
                return (
                  <div
                    key={insight.id}
                    className="flex flex-col pb-4 border-b border-gray-200 last:border-0"
                  >
                    <h4 
                      className={`text-[15px] font-bold mb-2 ${
                        isActive ? "text-primary underline underline-offset-4" : "text-textDark"
                      }`}
                    >
                      {insight.title}
                    </h4>
                    <p 
                      className={`text-[13px] leading-[1.8] ${
                        isActive ? "text-primary" : "text-textLight"
                      }`}
                    >
                      {insight.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image cards - 6 cols */}
          <div className="lg:col-span-6 flex gap-4 h-[450px] md:h-[550px]">
            {IMAGE_CARDS.map((card, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={card.id}
                  className={`relative rounded-3xl overflow-hidden shadow-lg ${
                    isFirst ? "flex-[2.5]" : "flex-[0.8]"
                  }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    {isFirst ? (
                      <div className="text-white">
                        <h5 className="font-bold text-[20px] mb-2 tracking-wide">
                          {card.title}
                        </h5>
                        {card.desc && (
                          <p className="text-[13px] text-gray-200 leading-[1.6]">
                            {card.desc}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full relative flex items-end">
                        <h5 className="text-white font-extrabold text-[14px] whitespace-nowrap origin-bottom-left -rotate-90 translate-y-[-20px] translate-x-[15px] tracking-wider uppercase">
                          {card.title}
                        </h5>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
