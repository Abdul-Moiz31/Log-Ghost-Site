export type LogGhostData = {
  meta: {
    title: string;
    description: string;
    githubUser: string;
    githubRepo: string;
    marketplaceSearchUrl: string;
    marketplaceVscode: string;
  };
  nav: {
    brand: string;
    links: { id: string; label: string }[];
    cta: { label: string; href: string };
  };
  hero: {
    headline: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; hash: string };
    proofLine: string;
  };
  heroMock: {
    fileName: string;
    rows: {
      line: number;
      severity: "critical" | "debug" | "safe";
      codelens: string;
      codeHtml: string;
    }[];
  };
  stats: { value: string; label: string }[];
  features: { headline: string; lead: string; items: { title: string; body: string }[] };
  howItWorks: {
    headline: string;
    lead: string;
    steps: { n: number; title: string; body: string }[];
  };
  editorShowcase: {
    headline: string;
    lead: string;
    sidebar: {
      title: string;
      action: string;
      filters: string[];
      activeFilterIndex: number;
      file: { name: string; sub: string };
      lines: { line: number; severity: "critical" | "debug" | "safe"; preview: string }[];
    };
  };
  pricing: {
    headline: string;
    lead: string;
    tierName: string;
    price: string;
    priceNote: string;
    bullets: string[];
    cta: { label: string; href: string };
  };
  finalCta: {
    headline: string;
    sub: string;
    button: { label: string; href: string };
  };
  footer: { tagline: string; bottom: string; links: { label: string; href: string }[] };
  theme: {
    bg: string;
    surface: string;
    border: string;
    text: string;
    muted: string;
    accent: string;
    critical: string;
    warn: string;
    safe: string;
    purplePanel: string;
  };
};
