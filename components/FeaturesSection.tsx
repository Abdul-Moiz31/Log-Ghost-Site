import type { LogGhostData } from "@/lib/types";
import { RevealOnView } from "./RevealOnView";

export function FeaturesSection({ site }: { site: LogGhostData }) {
  return (
    <section className="wrap py-20 md:py-24" id="features">
      <RevealOnView>
        <h2 className="text-3xl md:text-[2rem] font-medium tracking-[-0.02em] m-0 mb-2 text-[#f0f0f2]">
          {site.features.headline}
        </h2>
        <p className="text-[#8b8b9a] max-w-2xl m-0 mb-12 text-lg">{site.features.lead}</p>
      </RevealOnView>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.features.items.map((c, i) => (
          <RevealOnView key={c.title} delayMs={i * 75} variant="subtle">
            <article className="feature-card bg-[#131316] border border-white/[0.06] rounded-xl p-6 h-full shadow-[0_0_0_1px_rgba(127,119,221,0.04)]">
              <h3 className="text-base font-medium m-0 mb-1.5 text-[#f0f0f2]">{c.title}</h3>
              <p className="text-[#8b8b9a] text-[0.95rem] m-0 leading-[1.55]">{c.body}</p>
            </article>
          </RevealOnView>
        ))}
      </div>
    </section>
  );
}
