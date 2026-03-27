import { HOT_TOPICS } from "@/lib/constants";

export function HotTopics() {
  return (
    <section className="w-full bg-white border-b border-border">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* HOT TOPICS Badge */}
        <div className="flex items-center justify-center px-6 py-5 md:py-0 md:px-8 shrink-0">
          <span className="inline-block border-2 border-secondary text-secondary font-bold text-[11px] tracking-wider px-5 py-2 rounded-sm uppercase">
            HOT TOPICS
          </span>
        </div>

        {/* Topic Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {HOT_TOPICS.map((topic, index) => (
            <div
              key={index}
              className="px-6 py-6 md:py-8 flex flex-col justify-between group cursor-pointer hover:bg-surface/50 transition-colors min-h-[140px]"
            >
              <p className="text-[13px] text-textDark font-medium leading-[1.6] mb-6 group-hover:text-primary transition-colors">
                {topic}
              </p>
              <div className="flex justify-start">
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  className="text-textDark group-hover:text-primary transition-all group-hover:translate-x-1"
                >
                  <path
                    d="M0 8h28M22 2l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
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
