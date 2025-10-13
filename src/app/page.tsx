import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroBand } from "@/components/IntroBand";
import { AssistSplit } from "@/components/AssistSplit";
import { MissionBanner } from "@/components/MissionBanner";
import { ExpertsDomains } from "@/components/ExpertsDomains";
import { HighlightServices } from "@/components/HighlightServices";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { TestimonialsStrip } from "@/components/TestimonialsStrip";
import { LogosCarousel } from "@/components/LogosCarousel";
import { CtaSplit } from "@/components/CtaSplit";
import { BlogCards } from "@/components/BlogCards";
import { ContactBand } from "@/components/ContactBand";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home(){
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <IntroBand />
      <AssistSplit />
      <MissionBanner />
      <ExpertsDomains />
      <HighlightServices />
      <IndustriesGrid />
      <TestimonialsStrip />
      <LogosCarousel />
      <CtaSplit />
      <BlogCards />
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
