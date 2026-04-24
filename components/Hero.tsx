import type { LogGhostData } from "@/lib/types";
import { HeroCodeMock } from "./HeroCodeMock";
import { LogGhostLogo } from "./LogGhostLogo";
import { RevealOnView } from "./RevealOnView";

export function Hero({ site }: { site: LogGhostData }) {
  return (
    <section className="wrap pt-10 pb-12 md:pt-14 md:pb-16 relative overflow-hidden" id="top">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[22rem] w-[min(100vw,640px)] -translate-x-1/2 rounded-full bg-[#7F77DD]/[0.1] blur-[100px] opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-[#22D3EE]/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 lg:items-start">
        <div className="min-w-0">
          <div className="mb-6 motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-safe:animation-delay-100 motion-reduce:opacity-100">
            <LogGhostLogo size="hero" className="mx-0" priority />
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.35rem)] leading-[1.08] font-medium tracking-[-0.02em] m-0 mb-5 text-[#f0f0f2] motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-safe:animation-delay-200 motion-reduce:opacity-100">
            {site.hero.headline}
          </h1>
          <p className="text-[#8b8b9a] text-lg md:text-[1.0625rem] m-0 max-w-[34rem] leading-relaxed motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-safe:animation-delay-300 motion-reduce:opacity-100">
            {site.hero.subhead}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-safe:animation-delay-400 motion-reduce:opacity-100">
            <a
              className="btn btn-primary btn-lg"
              href={site.hero.primaryCta.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {site.hero.primaryCta.label}
            </a>
            <a className="btn btn-ghost btn-lg" href={site.hero.secondaryCta.hash}>
              {site.hero.secondaryCta.label}
            </a>
          </div>
          <p className="text-[#6e6e7a] text-sm m-0 mt-6 motion-safe:opacity-0 motion-safe:animate-fade-in-up motion-safe:animation-delay-500 motion-reduce:opacity-100">
            {site.hero.proofLine}
          </p>
        </div>

        <div className="min-w-0 lg:pt-2">
          <RevealOnView>
            <HeroCodeMock mock={site.heroMock} />
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
