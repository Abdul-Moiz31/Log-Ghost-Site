import type { LogGhostData } from "@/lib/types";
import { RevealOnView } from "./RevealOnView";

const dot: Record<string, string> = {
  critical: "bg-[#E24B4A]",
  debug: "bg-[#EF9F27]",
  safe: "bg-[#639922]",
};

export function EditorShowcaseSection({ site }: { site: LogGhostData }) {
  const { editorShowcase: e } = site;
  return (
    <section className="py-16 bg-[#0c0c0e] border-t border-[#2a2a2f]/50" id="see-it">
      <div className="wrap">
        <RevealOnView>
          <h2 className="text-3xl font-medium tracking-tight m-0 mb-1 text-[#f0f0f2]">
            {e.headline}
          </h2>
          <p className="text-[#8b8b9a] max-w-2xl m-0 mb-8">{e.lead}</p>
        </RevealOnView>
        <RevealOnView variant="scale">
          <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row min-h-[320px] rounded-[10px] border border-[#2a2a2f] overflow-hidden bg-[#121213] shadow-[0_16px_48px_rgba(0,0,0,0.35)] transition-transform duration-500 motion-safe:hover:scale-[1.005] motion-safe:hover:shadow-[0_20px_56px_rgba(0,0,0,0.45)]">
            <div className="w-full md:w-60 shrink-0 bg-[#161618] border-b md:border-b-0 md:border-r border-[#2a2a2f] p-3 text-[0.7rem]">
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[#f0f0f2] text-xs font-medium">{e.sidebar.title}</span>
                <span className="px-1 py-0.5 rounded text-[0.6rem] bg-[#0f0f11] border border-[#2a2a2f] text-[#f0f0f2]">
                  {e.sidebar.action}
                </span>
              </div>
              <p className="text-[0.6rem] m-0 mb-2 text-[#8b8b9a]">
                {e.sidebar.filters.map((f, i) => (
                  <span key={f} className={i === e.sidebar.activeFilterIndex ? "text-[#f0f0f2]" : ""}>
                    {f}
                    {i < e.sidebar.filters.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
              <div className="text-[#89ddff] text-xs mt-1">{e.sidebar.file.name}</div>
              <div className="text-[#8b8b9a] text-[0.6rem]">{e.sidebar.file.sub}</div>
              {e.sidebar.lines.map((line) => (
                <div key={line.line} className="flex items-start gap-1.5 my-1 text-[#8b8b9a]">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${dot[line.severity] ?? "bg-gray-500"}`} />
                  <span className="shrink-0">L{line.line}</span>
                  <span className="min-w-0 flex-1 truncate text-[0.6rem]">{line.preview}</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#2a2a2f] shrink-0" />
                </div>
              ))}
            </div>
            <div className="flex-1 font-mono text-[0.65rem] p-2 bg-[#0f0f11] overflow-x-auto">
              <div className="border-l-2 border-[#E24B4A] bg-[#E24B4A]/[0.06] mb-0.5">
                <div className="pl-1 text-[0.55rem] text-[#8b8b9a]">you · critical · 2h</div>
                <div className="flex">
                  <span className="w-5 text-right pr-1.5 text-[#6a6a75] select-none">40</span>
                  <code className="pl-0.5 text-[#c0c0c8]">
                    <span className="text-[#82aaff]">console</span>
                    <span className="text-[#f78c6c]">.</span>
                    <span className="text-[#82aaff]">log</span>
                    <span className="text-[#f78c6c]">(</span>
                    <span className="text-[#82aaff]">token</span>
                    <span className="text-[#f78c6c]">)</span>
                  </code>
                </div>
              </div>
              <div className="flex border-l-2 border-[#2a2a2f] opacity-60">
                <span className="w-5 text-right pr-1.5 text-[#6a6a75]">41</span>
                <code className="text-[#8b8b9a]">return null;</code>
              </div>
              <div className="border-l-2 border-[#EF9F27] bg-[#EF9F27]/[0.04] mt-0.5">
                <div className="pl-1 text-[0.55rem] text-[#8b8b9a]">sara · debug</div>
                <div className="flex">
                  <span className="w-5 text-right pr-1.5 text-[#6a6a75]">48</span>
                  <code className="pl-0.5 text-[#c0c0c8]">
                    <span className="text-[#82aaff]">console</span>
                    <span className="text-[#f78c6c]">.</span>
                    <span className="text-[#82aaff]">log</span>
                    <span className="text-[#f78c6c]">(</span>
                    <span className="text-[#c3e88d]">&apos;auth ok&apos;</span>
                    <span className="text-[#f78c6c]">)</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
