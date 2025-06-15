
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
    <div className={`min-h-screen bg-black transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      {/* Interstellar Black Hole Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Central Black Hole */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-black rounded-full animate-black-hole-core"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-900/20 to-purple-600/40 rounded-full animate-event-horizon"></div>
        </div>
        
        {/* Accretion Disk Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[200px] border border-orange-400/30 rounded-full animate-accretion-disk-1" style={{transform: 'rotateX(75deg)'}}></div>
          <div className="w-[1000px] h-[250px] border border-blue-400/20 rounded-full animate-accretion-disk-2 absolute -top-6 -left-24" style={{transform: 'rotateX(75deg)'}}></div>
          <div className="w-[1200px] h-[300px] border border-teal-400/15 rounded-full animate-accretion-disk-3 absolute -top-12 -left-48" style={{transform: 'rotateX(75deg)'}}></div>
        </div>
        
        {/* Stellar Particles */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-stellar-orbit ${
              i % 4 === 0 ? 'bg-orange-400/60' :
              i % 4 === 1 ? 'bg-blue-400/50' :
              i % 4 === 2 ? 'bg-white/70' : 'bg-purple-400/40'
            }`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 25}s`
            }}
          />
        ))}
        
        {/* Gravitational Lensing Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 animate-lensing-effect"></div>
        
        {/* Space Dust */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/20 animate-space-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${20 + Math.random() * 40}s`
            }}
          />
        ))}
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
