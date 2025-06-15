
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
    <div className={`min-h-screen bg-slate-900 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
      {/* Deep Space Background with Nebula and Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/30"></div>
        
        {/* Nebula clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-nebula-drift-1"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-radial from-purple-500/15 via-purple-600/8 to-transparent rounded-full blur-3xl animate-nebula-drift-2"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-teal-500/12 via-cyan-600/6 to-transparent rounded-full blur-3xl animate-nebula-drift-3"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-orange-500/8 via-amber-600/4 to-transparent rounded-full blur-3xl animate-nebula-drift-4"></div>
        </div>
        
        {/* Star field layers */}
        <div className="absolute inset-0">
          {/* Large bright stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`bright-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-white shadow-sm animate-star-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.7 + Math.random() * 0.3
              }}
            />
          ))}
          
          {/* Medium stars */}
          {[...Array(150)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute w-0.5 h-0.5 bg-blue-100 rounded-full animate-star-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.4 + Math.random() * 0.4
              }}
            />
          ))}
          
          {/* Small distant stars */}
          {[...Array(300)].map((_, i) => (
            <div
              key={`small-${i}`}
              className="absolute w-px h-px bg-slate-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="absolute w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${1 + Math.random()}s`,
                transform: `rotate(${Math.random() * 60 - 30}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Distant galaxies */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`galaxy-${i}`}
              className="absolute rounded-full bg-gradient-radial from-white/5 via-blue-300/3 to-transparent animate-galaxy-rotation opacity-20"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
                animationDuration: `${20 + Math.random() * 30}s`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Cosmic dust particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute w-px h-px bg-blue-200/30 rounded-full animate-cosmic-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 25}s`
              }}
            />
          ))}
        </div>
        
        {/* Energy fields */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/10 rounded-full animate-energy-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/10 rounded-full animate-energy-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-20 h-20 border border-teal-400/10 rounded-full animate-energy-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/5"></div>
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40"></div>
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
