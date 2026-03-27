import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { STATS } from "@/lib/constants";

export function AboutFirm() {
  return (
    <section id="about" className="py-20 relative bg-white overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <Image
          src="/map-with-white-grey 1.png"
          alt="World Map"
          fill
          className="object-contain object-left pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left - ABOUT FIRM Card */}
          <div className="lg:col-span-3 h-fit">
            <div className="bg-surface rounded-3xl p-10 md:p-12 h-full flex items-center min-h-[200px]">
              <h2 className="text-3xl md:text-[34px] font-bold text-textDark uppercase leading-tight">
                ABOUT
                <br />
                FIRM
              </h2>
            </div>
          </div>

          {/* Middle - Content + Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-textDark mb-5">
              HLS Global Group
            </h3>
            <p className="text-textLight leading-relaxed mb-10 text-[13px] md:text-[14px]">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. Founded in 1990, we pride
              ourselves in delivering the highest levels of quality and customer
              service while remaining cost-effective. We have grown to more than
              250 professionals serving clients in the United States, Japan,
              Mexico, India, Germany, and UAE.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <div className="text-[36px] font-bold text-textDark mb-1 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-medium text-textLight leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Location Widget */}
          <div className="lg:col-span-4 gap-6 flex flex-col justify-start">
            {/* Orange location bar */}
            <div className="flex bg-secondary text-black text-[11px] font-bold px-5 py-3 rounded-xl items-center justify-between w-full max-w-sm lg:ml-auto mt-4 lg:mt-0">
              <span className="tracking-wider">WE ARE LOCATED</span>
              <span className="flex items-center gap-1 cursor-pointer text-[11px] font-bold px-3 py-1 rounded-sm">
                INDIA <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </div>
            {/* Building image */}
            <div className="relative w-full max-w-sm h-[450px] rounded-xl overflow-hidden lg:ml-auto">
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
