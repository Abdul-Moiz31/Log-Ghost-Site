import type { LogGhostData } from "@/lib/types";

const map = {
  critical: {
    line: "border-l-[#E24B4A]",
    gutter: "border-l-2 border-[#E24B4A] bg-[#E24B4A]/[0.06]",
    codelens: "border-l-2 border-[#E24B4A] bg-[#E24B4A]/[0.04] text-[#8b8b9a] pl-2 pr-1",
    code: "bg-[#E24B4A]/[0.08]",
  },
  debug: {
    line: "border-l-[#EF9F27]",
    gutter: "border-l-2 border-[#EF9F27] bg-[#EF9F27]/[0.06]",
    codelens: "border-l-2 border-[#EF9F27] text-[#8b8b9a] pl-2 pr-1",
    code: "bg-[#EF9F27]/[0.05]",
  },
  safe: {
    line: "border-l-[#639922]",
    gutter: "border-l-2 border-[#639922] bg-[#639922]/[0.06]",
    codelens: "border-l-2 border-[#639922] text-[#8b8b9a] pl-2 pr-1",
    code: "bg-[#639922]/[0.04]",
  },
} as const;

export function HeroCodeMock({ mock }: { mock: LogGhostData["heroMock"] }) {
  return (
    <div className="code-mock font-mono text-[0.7rem] leading-[1.5] bg-[#17171a] border border-[#2a2a2f] rounded-lg overflow-hidden motion-safe:animate-float-gentle motion-reduce:animate-none">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#121214] border-b border-[#2a2a2f]">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-1.5 text-[#8b8b9a] text-[0.65rem]">{mock.fileName}</span>
      </div>
      <div className="py-2">
        {mock.rows.map((row) => {
          const s = map[row.severity as keyof typeof map] ?? map.critical;
          return (
            <div key={row.line} className="text-[#c0c0c8]">
              <p className={`m-0 text-[0.6rem] leading-snug pl-0 py-0.5 ${s.codelens}`}>
                {row.codelens}
              </p>
              <div className="flex items-stretch">
                <span className={`w-9 shrink-0 text-right pr-1.5 py-0.5 text-[#8b8b9a] select-none ${s.gutter}`}>
                  {row.line}
                </span>
                <div className={`flex-1 pl-1.5 py-0.5 pr-1 ${s.code}`}>
                  <span
                    className="tok [&_span.v]:text-[#82aaff] [&_span.s]:text-[#c3e88d] [&_span.fn]:text-[#82aaff] [&_span.p]:text-[#f78c6c]"
                    dangerouslySetInnerHTML={{ __html: row.codeHtml }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
