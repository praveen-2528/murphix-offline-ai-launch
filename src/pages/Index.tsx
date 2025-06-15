
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Timeline } from "@/components/Timeline";
import { SystemRequirements } from "@/components/SystemRequirements";
import { EmailSignup } from "@/components/EmailSignup";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { StartupLoader } from "@/components/StartupLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 200);
  };

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (isLoading) {
    return <StartupLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob [animation-delay:4s]"></div>
      </div>
      
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Timeline />
      <SystemRequirements />
      <EmailSignup />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
