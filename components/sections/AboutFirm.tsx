import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { STATS } from "@/lib/constants";

export function AboutFirm() {
  return (
    <section id="about" className="py-20 relative bg-[#F9FAFB] overflow-hidden">
      {/* Background map */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <Image
          src="/map-with-white-grey 1.png"
          alt="World Map"
          fill
          className="object-contain object-left pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1440px]">
        {/* Ratio matching Inspiration & Insights: 2/5/5 split approximately */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Title box - ~2 cols */}
          <div className="lg:col-span-2 h-fit">
            <div className="bg-[#EEF2F6] rounded-3xl p-8 md:p-10 min-h-[220px] flex items-center justify-center relative shadow-sm">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-textDark uppercase leading-tight text-center">
                ABOUT
                <br />
                FIRM
              </h2>
            </div>
          </div>

          {/* Text and stats - ~5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center px-2">
            <h3 className="text-2xl font-bold text-textDark mb-4">
              HLS Global Group
            </h3>
            <p className="text-textLight leading-[1.8] mb-10 text-[13px] md:text-[14px]">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. Founded in 1990, we pride
              ourselves in delivering the highest levels of quality and customer
              service while remaining cost-effective. We have grown to more than
              250 professionals serving clients in the United States, Japan,
              Mexico, India, Germany, and UAE. While catering to the business
              requirements of Japanese subsidiaries operating in the United
              States, Mexico, India, Germany, and UAE, we also provide
              comprehensive solutions to non-Japanese multinational companies
              operating in Japan.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-gray-200 pt-8">
              {STATS.slice(0, 2).map((stat, i) => (
                <div key={`top-${i}`} className="flex flex-col">
                  <div className="text-[32px] md:text-[40px] font-extrabold text-textDark mb-1 leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium text-textLight leading-relaxed mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}

              {/* Blue line between rows */}
              <div className="col-span-2 h-[2px] w-full bg-primary my-2" />

              {STATS.slice(2, 4).map((stat, i) => (
                <div key={`bottom-${i}`} className="flex flex-col">
                  <div className="text-[32px] md:text-[40px] font-extrabold text-textDark mb-1 leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium text-textLight leading-relaxed mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location button and image - ~5 cols */}
          <div className="lg:col-span-5 flex flex-col items-end w-full">
            <div className="bg-[#FF6600] w-[300px] rounded-t-2xl px-6 py-3 flex items-center justify-between shadow-md">
              <span className="text-black text-[12px] font-extrabold tracking-wider">
                WE ARE LOCATED
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[12px] font-extrabold text-black">
                INDIA <ChevronDown className="w-4 h-4 text-black" />
              </span>
            </div>
            
            <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl rounded-tr-none overflow-hidden shadow-lg border border-gray-100 bg-white">
              <Image
                src="/Rectangle 123.png"
                alt="Our location building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
