import type { LogGhostData } from "@/lib/types";
import { RevealOnView } from "./RevealOnView";

export function PricingSection({ site }: { site: LogGhostData }) {
  const p = site.pricing;
  return (
    <section className="wrap py-16" id="pricing">
      <RevealOnView>
        <h2 className="text-3xl font-medium tracking-tight m-0 mb-1 text-[#f0f0f2]">{p.headline}</h2>
        <p className="text-[#8b8b9a] max-w-2xl m-0 mb-8">{p.lead}</p>
      </RevealOnView>
      <RevealOnView delayMs={60} variant="scale" className="max-w-sm mx-auto block">
        <div className="max-w-sm mx-auto bg-[#17171a] border border-[#2a2a2f] rounded-xl p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#7F77DD]/35 motion-safe:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <h3 className="text-sm uppercase tracking-wider text-[#8b8b9a] font-medium m-0 mb-1">{p.tierName}</h3>
          <p className="text-2xl font-medium text-[#f0f0f2] m-0 mb-5">
            {p.price}{" "}
            <span className="text-base font-normal text-[#8b8b9a]">{p.priceNote}</span>
          </p>
          <ul className="list-none m-0 p-0">
            {p.bullets.map((b) => (
              <li
                key={b}
                className="py-1.5 pl-4 relative text-[#8b8b9a] text-[0.95rem] before:content-['✓'] before:absolute before:left-0 before:text-[#639922] before:text-sm"
              >
                {b}
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary btn-block w-full mt-5"
            href={p.cta.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {p.cta.label}
          </a>
        </div>
      </RevealOnView>
    </section>
  );
}
