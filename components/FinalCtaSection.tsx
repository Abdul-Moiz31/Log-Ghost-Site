import type { LogGhostData } from "@/lib/types";
import { LogGhostLogo } from "./LogGhostLogo";
import { RevealOnView } from "./RevealOnView";

export function FinalCtaSection({ site }: { site: LogGhostData }) {
  return (
    <section className="relative py-20 overflow-hidden bg-[#16142a] border-y border-white/[0.06]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(127,119,221,0.2),transparent_60%)]"
        aria-hidden
      />
      <div className="wrap relative max-w-xl mx-auto text-center z-[1]">
        <RevealOnView>
          <div className="flex justify-center mb-5">
            <LogGhostLogo size="sm" className="opacity-90" />
          </div>
          <h2 className="text-2xl md:text-[1.65rem] font-medium m-0 mb-2 text-[#f0f0f2] tracking-tight">
            {site.finalCta.headline}
          </h2>
          <p className="text-[#8b8b9a] m-0 mb-6">{site.finalCta.sub}</p>
          <a
            className="btn btn-primary btn-lg inline-flex min-w-[16rem] justify-center motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-[0_0_32px_rgba(127,119,221,0.35)]"
            href={site.finalCta.button.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {site.finalCta.button.label}
          </a>
          <div className="mt-6 flex justify-center" role="img" aria-label="Get it for Visual Studio Code Marketplace">
            <svg viewBox="0 0 180 40" className="w-44 h-10 transition-transform duration-300 ease-out motion-safe:hover:scale-[1.04]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="179" height="39" rx="3" fill="#0f0f11" stroke="#2a2a2f" />
              <text
                x="10"
                y="22"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="10"
                fontWeight="500"
                fill="#f0f0f2"
              >
                Get it for Visual Studio
              </text>
              <text
                x="10"
                y="32"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="5.5"
                fontWeight="400"
                fill="#8b8b9a"
              >
                Visual Studio Code Marketplace
              </text>
              <text x="152" y="24" fontSize="12" fontWeight="500" fill="#7F77DD">
                →
              </text>
            </svg>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
