import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Features } from "@/components/sections/Features";
import { ComplianceCliff } from "@/components/sections/ComplianceCliff";
import { WhyVertio } from "@/components/sections/WhyVertio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <ComplianceCliff />
        <WhyVertio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
