import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Showcase } from "@/components/Showcase";
import { Deliverables } from "@/components/Deliverables";
import { CodeTeaser } from "@/components/CodeTeaser";
import { Curriculum } from "@/components/Curriculum";
import { Pricing } from "@/components/Pricing";
import { ContentCommitment } from "@/components/ContentCommitment";
import { FAQ } from "@/components/FAQ";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";

export default function Page() {
  return (
    <div>
      <Navbar />
      <SeoJsonLd />
      <main>
        <Hero />
        <ValueProps />
        <Showcase />
        <Deliverables />
        <CodeTeaser />
        <Curriculum />
        <Pricing />
        <ContentCommitment />
        <FAQ />
        <StickyCTA />
      </main>
      <Footer />
    </div>
  );
}
