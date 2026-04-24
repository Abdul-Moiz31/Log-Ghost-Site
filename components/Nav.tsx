import type { LogGhostData } from "@/lib/types";
import { LogGhostLogo } from "./LogGhostLogo";

export function Nav({ site }: { site: LogGhostData }) {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(127,119,221,0.08)]"
      role="banner"
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-3.5">
        <a
          href="#top"
          className="group flex items-center gap-3 no-underline text-[#f0f0f2] font-medium text-base transition-opacity duration-200 hover:opacity-95"
        >
          <span className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-105">
            <LogGhostLogo size="nav" />
          </span>
          <span className="tracking-tight">{site.nav.brand}</span>
        </a>
        <nav className="flex flex-wrap items-center gap-4 md:gap-6" aria-label="Main">
          {site.nav.links.map((l) => (
            <a key={l.id} className="link-muted" href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href={site.nav.cta.href} rel="noopener noreferrer" target="_blank">
            {site.nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
