import type { LogGhostData } from "@/lib/types";
import { RevealOnView } from "./RevealOnView";

export function StatsBar({ site }: { site: LogGhostData }) {
  return (
    <div className="relative bg-[#101012]/90 border-y border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(127,119,221,0.06)]">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-6 py-9">
        {site.stats.map((s, i) => (
          <RevealOnView key={s.label} delayMs={i * 100} variant="scale">
            <div className="text-center">
              <div className="text-2xl font-medium text-[#f0f0f2] tabular-nums">{s.value}</div>
              <div className="text-[#8b8b9a] text-sm mt-0.5">{s.label}</div>
            </div>
          </RevealOnView>
        ))}
      </div>
    </div>
  );
}
