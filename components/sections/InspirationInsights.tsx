"use client";

import { useState } from "react";
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
  const [activeId, setActiveId] = useState("pre-market");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-3xl p-10 md:p-12 min-h-[200px] lg:h-[280px] flex items-center">
              <h2 className="text-[28px] md:text-[32px] font-bold text-textDark uppercase leading-tight">
                INSPIRATION &<br />
                INSIGHTS
              </h2>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex flex-col">
              {INSIGHTS.map((insight) => {
                const isActive = activeId === insight.id;
                return (
                  <div
                    key={insight.id}
                    className={`border-t-2 py-4 cursor-pointer transition-all ${isActive ? "border-primary" : "border-border/50"
                      }`}
                    onClick={() => setActiveId(insight.id)}
                  >
                    <h4
                      className={`text-[15px] font-bold transition-colors ${isActive
                        ? "text-primary underline underline-offset-2 mb-2"
                        : "text-textDark hover:text-primary"
                        }`}
                    >
                      {insight.title}
                    </h4>
                    {isActive && (
                      <p className="text-[12px] text-textLight leading-relaxed mt-1">
                        {insight.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex gap-3 h-[420px] lg:h-[450px]">
            {IMAGE_CARDS.map((card) => {
              const isWide = card.id === activeId || card.id === "pre-market";
              const isExpanded = card.id === "pre-market";

              return (
                <div
                  key={card.id}
                  className={`relative rounded-2xl overflow-hidden shadow-sm transition-all duration-500 cursor-pointer ${isExpanded ? "flex-3" : "flex-[0.7]"
                    }`}
                  onClick={() => setActiveId(card.id)}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-0 p-5 flex items-end">
                    {isExpanded ? (
                      <div className="text-white w-full">
                        <h5 className="font-bold text-lg mb-1">
                          {card.title}
                        </h5>
                        {card.desc && (
                          <p className="text-[11px] text-white/85 leading-relaxed">
                            {card.desc}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        <h5 className="text-white font-bold text-sm whitespace-nowrap absolute bottom-8 -left-16 transform -rotate-90 origin-bottom-left w-[250px] text-left">
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
