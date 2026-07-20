import Hero from "@/components/sections/Hero";
import ScrollSequence from "@/components/sections/ScrollSequence";
import TrustBar from "@/components/sections/TrustBar";
import Approach from "@/components/sections/Approach";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import KeyFigures from "@/components/sections/KeyFigures";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import CtaDevis from "@/components/sections/CtaDevis";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollSequence />
      <TrustBar />
      <Approach />
      <ServicesGrid />
      <PortfolioGrid />
      <KeyFigures />
      <ProcessTimeline />
      <Testimonials />
      <CtaDevis />
      <ContactSection num="06" />
    </>
  );
}
