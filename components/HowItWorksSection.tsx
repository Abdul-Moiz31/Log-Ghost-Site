import type { LogGhostData } from "@/lib/types";
import { RevealOnView } from "./RevealOnView";

export function HowItWorksSection({ site }: { site: LogGhostData }) {
  return (
    <section className="wrap py-16" id="how">
      <RevealOnView>
        <h2 className="text-3xl font-medium tracking-tight m-0 mb-1 text-[#f0f0f2]">
          {site.howItWorks.headline}
        </h2>
        <p className="text-[#8b8b9a] max-w-2xl m-0 mb-10">{site.howItWorks.lead}</p>
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-px z-0" aria-hidden>
            <div className="h-full w-full bg-[#2a2a2f]" />
            <div className="how-line-inner absolute inset-0 origin-left h-full w-full bg-[#7F77DD]/35" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-[1]">
            {site.howItWorks.steps.map((step, i) => (
              <div
                key={step.n}
                className="text-center motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-reduce:opacity-100"
                style={{ animationDelay: `${150 + i * 110}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-full border border-[#2a2a2f] bg-[#17171a] flex items-center justify-center text-sm font-medium mx-auto mb-3 text-[#f0f0f2] motion-safe:opacity-0 motion-safe:animate-step-ring motion-reduce:opacity-100"
                  style={{ animationDelay: `${180 + i * 110}ms` }}
                >
                  {step.n}
                </div>
                <h3 className="text-base font-medium m-0 mb-1.5 text-[#f0f0f2]">{step.title}</h3>
                <p className="text-[#8b8b9a] text-sm m-0 leading-relaxed max-w-sm mx-auto">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}
