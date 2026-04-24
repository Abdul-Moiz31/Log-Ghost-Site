import { site } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { EditorShowcaseSection } from "@/components/EditorShowcaseSection";
import { PricingSection } from "@/components/PricingSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav site={site} />
      <main className="relative z-10">
        <Hero site={site} />
        <StatsBar site={site} />
        <FeaturesSection site={site} />
        <HowItWorksSection site={site} />
        <EditorShowcaseSection site={site} />
        <PricingSection site={site} />
        <FinalCtaSection site={site} />
        <SiteFooter site={site} />
      </main>
    </>
  );
}
