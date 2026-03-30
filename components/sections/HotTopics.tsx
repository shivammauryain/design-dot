import { HOT_TOPICS } from "@/lib/constants";

export function HotTopics() {
  return (
    <section className="w-full bg-white relative z-20">
      <div className="flex flex-col md:flex-row items-stretch max-w-[100vw] overflow-hidden">
        {/* Hot Topics button matching the slanted shape from the original design */}
        <div className="flex items-center justify-center md:pl-12 pr-6 py-6 shrink-0 md:w-auto">
          <div className="relative flex items-center group cursor-pointer h-[48px]">
            <div className="absolute inset-y-0 left-0 right-[20px] bg-[#FF6600] rounded-l-[4px]" />
            <div className="absolute top-0 bottom-0 right-0 w-[40px] bg-[#FF6600] rounded-tr-[4px] rounded-br-[4px] transform skew-x-25 origin-bottom-left" />
            
            <span className="relative z-10 font-bold text-[12px] tracking-[0.08em] px-8 text-black uppercase whitespace-nowrap">
              HOT TOPICS
            </span>
          </div>
        </div>

        {/* Article cards - No Outlines, Content top aligned with bottom right arrows */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-12">
          {HOT_TOPICS.map((topic, index) => (
            <div
              key={index}
              className="px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-surface/30 transition-colors min-h-[160px]"
            >
              <p className="text-[13px] md:text-[14px] text-textDark font-semibold leading-[1.6] group-hover:text-primary transition-colors pr-4">
                {topic}
              </p>
              <div className="flex justify-end mt-6">
                <svg
                  width="28"
                  height="12"
                  viewBox="0 0 32 12"
                  fill="none"
                  className="text-black group-hover:text-[#FF6600] transition-colors"
                >
                  <path
                    d="M0 6h30M24 1l6 5-6 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
