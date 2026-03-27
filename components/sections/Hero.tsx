import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Blue Background - covers entire section */}
      <div className="absolute inset-0 bg-[#05378b] z-0" />

      {/* Background Image - right side visible through clip */}
      <div className="absolute -top-[180px] -right-[150px] w-[70vw] h-screen overflow-hidden rounded-l-[100px] -rotate-35 z-1 hidden md:block">
        <Image
          src="/futuristic-office-cover-diverse-professionals-holograms-data-analysis-career-growth 1.png"
          alt="Office Background"
          fill
          className="mt-40 -ml-48 rotate-35"
          priority
        />
      </div>

      {/* Mobile: full blue background */}
      <div className="absolute inset-0 z-2 md:hidden bg-[#05378b]" />

      {/* Content Layer */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full justify-center">
        <div className="max-w-[520px] text-white pt-16">
          <p className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase mb-3 text-white/60">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <div className="inline-block mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-[1.05] tracking-tight">
              EMPOWERED
              <br />
              WORKPLACES
            </h1>
            <div className="w-full h-[3px] bg-white mt-4" />
          </div>

          <p className="text-[14px] md:text-[15px] font-light mb-10 text-white/80 leading-[1.85] max-w-[440px] italic">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          {/* CTA Button with slanted right edge */}
          <div className="inline-block">
            <button className="relative flex items-center pl-8 pr-12 py-4 group outline-none bg-transparent border-none cursor-pointer">
              {/* Background Left (straight edge, rounded left) */}
              <div className="absolute inset-y-0 left-0 right-[28px] bg-[#FF6600] group-hover:bg-[#FF7A1F] transition-colors rounded-l-[10px] shadow-sm" />

              {/* Background Right (slanted) */}
              <div className="absolute top-0 bottom-0 right-0 w-[56px] bg-[#FF6600] group-hover:bg-[#FF7A1F] transition-colors rounded-tr-[8px] rounded-br-[4px] transform skew-x-22 origin-bottom-right" />

              <span className="relative z-10 flex items-center gap-4 text-[#02183b] font-extrabold text-[14px] tracking-wide group-hover:scale-[1.02] transition-transform">
                <svg
                  width="32"
                  height="20"
                  viewBox="0 0 32 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                >
                  <path d="M2 10h22M18 4l6 6-6 6" />
                </svg>
                LETS CONNECT
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex flex-col md:flex-row items-start md:items-end justify-between">
          {/* Bottom Left Text */}
          <div className="mb-8 md:mb-0">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.04em] text-white/90 uppercase max-w-sm leading-[1.7]">
              ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN,
              AND THE WORLD
            </p>
          </div>

          {/* Bottom Right Avatars + Stat */}
          <div className="flex items-center gap-5 pb-1">
            <div className="flex -space-x-3">
              <Image
                src="/Ellipse 10.png"
                alt="Avatar 1"
                width={46}
                height={46}
                className="rounded-full border-[3px] border-[#05378b] object-cover relative z-30"
              />
              <Image
                src="/Ellipse 7.png"
                alt="Avatar 2"
                width={46}
                height={46}
                className="rounded-full border-[3px] border-[#05378b] object-cover relative z-20"
              />
              <Image
                src="/Ellipse 9.png"
                alt="Avatar 3"
                width={46}
                height={46}
                className="rounded-full border-[3px] border-[#05378b] object-cover relative z-10"
              />
              <div className="w-[46px] h-[46px] rounded-full border-[3px] border-[#05378b] bg-[#FF6600] flex items-center justify-center text-[9px] font-bold text-white shadow-sm relative z-0">
                MORE
              </div>
            </div>
            <div className="text-white">
              <span className="text-[30px] font-extrabold block leading-none mb-1 tracking-tight">
                250 +
              </span>
              <span className="text-white/70 text-[10px] font-medium leading-[1.3] tracking-wide block">
                Enjoy Working
                <br />
                with us
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
