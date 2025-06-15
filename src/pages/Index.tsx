
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { SystemRequirements } from "@/components/SystemRequirements";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Timeline />
      <SystemRequirements />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
