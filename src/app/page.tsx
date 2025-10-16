// src/app/page.tsx
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
import { CtaSplit } from "@/components/CtaSplit";
import { BlogCards } from "@/components/BlogCards";
import { ContactBand } from "@/components/ContactBand";
import { SiteFooter } from "@/components/SiteFooter";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />

      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>

      <ChatWidget
        title="Ask Design Innovation Lab"
        position="bottom-right"
        widthClass="w-[26rem]"
        heightClass="h-[30rem]"
      />

      <section id="about" className="scroll-mt-24">
        <IntroBand />
        <AssistSplit />
        <MissionBanner />
      </section>

      <section id="services" className="scroll-mt-24">
        <ExpertsDomains />
        <HighlightServices />
        <CtaSplit />
      </section>

      <section id="team" className="scroll-mt-24">
        <IndustriesGrid /> 
        <TestimonialsStrip />
      </section>

      <section id="blog" className="scroll-mt-24">
        <BlogCards />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactBand />
      </section>

      <SiteFooter />
    </main>
  );
}
