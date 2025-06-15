
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
      {/* Interstellar Black Hole Background - Enhanced and Cinematic */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Event Horizon - The Black Core */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-black rounded-full shadow-[0_0_200px_rgba(0,0,0,1)]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-black via-black to-transparent rounded-full animate-event-horizon-glow"></div>
        </div>
        
        {/* Photon Sphere - Orange Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-600/30 to-transparent rounded-full animate-photon-sphere blur-sm"></div>
        </div>
        
        {/* Accretion Disk - Primary Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-[900px] h-[180px] border-2 border-orange-400/60 rounded-full animate-accretion-primary shadow-[0_0_100px_rgba(251,146,60,0.3)]" 
            style={{
              transform: 'rotateX(75deg)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(251,146,60,0.1) 25%, rgba(251,146,60,0.3) 50%, rgba(251,146,60,0.1) 75%, transparent 100%)'
            }}
          ></div>
        </div>
        
        {/* Accretion Disk - Secondary Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-[1100px] h-[220px] border border-blue-400/40 rounded-full animate-accretion-secondary shadow-[0_0_80px_rgba(96,165,250,0.2)] absolute -top-5 -left-24" 
            style={{
              transform: 'rotateX(75deg)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.05) 25%, rgba(96,165,250,0.15) 50%, rgba(96,165,250,0.05) 75%, transparent 100%)'
            }}
          ></div>
        </div>
        
        {/* Outer Accretion Disk */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-[1300px] h-[260px] border border-teal-400/25 rounded-full animate-accretion-outer shadow-[0_0_60px_rgba(45,212,191,0.15)] absolute -top-8 -left-48" 
            style={{
              transform: 'rotateX(75deg)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(45,212,191,0.03) 25%, rgba(45,212,191,0.08) 50%, rgba(45,212,191,0.03) 75%, transparent 100%)'
            }}
          ></div>
        </div>
        
        {/* Gravitational Lensing Ring */}
        <div className="absolute top-1/2 left-1/2 w-[1500px] h-[300px] -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-full h-full border border-white/10 rounded-full animate-lensing-ring opacity-30" 
            style={{transform: 'rotateX(80deg)'}}
          ></div>
        </div>
        
        {/* Stellar Matter Jets */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-96 bg-gradient-to-t from-transparent via-blue-400/20 to-transparent animate-stellar-jet-top -translate-y-48"></div>
          <div className="w-2 h-96 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-stellar-jet-bottom translate-y-48"></div>
        </div>
        
        {/* Orbiting Matter Particles */}
        {[...Array(60)].map((_, i) => {
          const angle = (i * 6) % 360;
          const radius = 400 + (i % 3) * 100;
          const speed = 15 + (i % 5) * 5;
          
          return (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                i % 4 === 0 ? 'bg-orange-400/80 shadow-[0_0_4px_rgba(251,146,60,0.8)]' :
                i % 4 === 1 ? 'bg-blue-400/60 shadow-[0_0_3px_rgba(96,165,250,0.6)]' :
                i % 4 === 2 ? 'bg-white/90 shadow-[0_0_2px_rgba(255,255,255,0.9)]' : 
                'bg-teal-400/50 shadow-[0_0_2px_rgba(45,212,191,0.5)]'
              }`}
              style={{
                left: '50%',
                top: '50%',
                animation: `stellar-orbit-${i % 3} ${speed}s linear infinite`,
                animationDelay: `${(i * 0.5)}s`,
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`
              }}
            />
          );
        })}
        
        {/* Doppler Effect Simulation */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[160px] -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-full h-full animate-doppler-shift opacity-40"
            style={{
              transform: 'rotateX(75deg)',
              background: 'linear-gradient(90deg, rgba(239,68,68,0.3) 0%, transparent 25%, transparent 75%, rgba(96,165,250,0.3) 100%)',
              borderRadius: '50%'
            }}
          ></div>
        </div>
        
        {/* Space-Time Distortion Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent animate-spacetime-grid"></div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border-l border-white/5 h-full animate-grid-warp"
              style={{
                left: `${12.5 * (i + 1)}%`,
                animationDelay: `${i * 0.2}s`,
                transform: 'skew(-2deg)'
              }}
            ></div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border-t border-white/5 w-full animate-grid-warp"
              style={{
                top: `${16.66 * (i + 1)}%`,
                animationDelay: `${i * 0.3}s`,
                transform: 'skew(0deg, -1deg)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Ambient Cosmic Dust */}
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/15 animate-cosmic-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 40}s`,
              animationDuration: `${30 + Math.random() * 60}s`
            }}
          />
        ))}
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent via-transparent to-black/80 animate-cinematic-vignette"></div>
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
