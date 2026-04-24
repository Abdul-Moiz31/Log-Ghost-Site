import type { LogGhostData } from "@/lib/types";
import { LogGhostLogo } from "./LogGhostLogo";
import { RevealOnView } from "./RevealOnView";

export function SiteFooter({ site }: { site: LogGhostData }) {
  return (
    <footer className="wrap py-12 border-t border-[#2a2a2f]">
      <RevealOnView variant="subtle">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 no-underline text-[#f0f0f2] font-medium transition-transform duration-200 hover:translate-x-0.5"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            <LogGhostLogo size="footer" />
          </span>
          {site.nav.brand}
        </a>
        <p className="text-[#8b8b9a] text-sm m-0 mt-2 mb-6">{site.footer.tagline}</p>
        <div className="flex flex-wrap gap-5 mb-6">
          {site.footer.links.map((l) => (
            <a
              key={l.label}
              className="link-muted"
              href={l.href}
              rel="noopener noreferrer"
              target={l.href.startsWith("http") ? "_blank" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-[#5c5c68] text-sm m-0">{site.footer.bottom}</p>
      </RevealOnView>
    </footer>
  );
}
