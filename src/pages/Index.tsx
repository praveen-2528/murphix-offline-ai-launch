
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
      {/* Cosmic Deep Space Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base cosmic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-black"></div>
        
        {/* Cosmic nebulae layers */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-600/10 to-transparent rounded-full blur-3xl animate-cosmic-drift-1"></div>
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-radial from-cyan-500/25 via-blue-600/12 to-transparent rounded-full blur-3xl animate-cosmic-drift-2"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-radial from-emerald-500/18 via-teal-600/8 to-transparent rounded-full blur-3xl animate-cosmic-drift-3"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-rose-500/15 via-pink-600/7 to-transparent rounded-full blur-3xl animate-cosmic-drift-4"></div>
          <div className="absolute bottom-1/4 right-20 w-56 h-56 bg-gradient-radial from-amber-500/12 via-orange-600/6 to-transparent rounded-full blur-3xl animate-cosmic-drift-5"></div>
        </div>
        
        {/* Stellar field with multiple layers */}
        <div className="absolute inset-0">
          {/* Bright foreground stars */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`bright-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-white shadow-lg animate-stellar-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.8 + Math.random() * 0.2
              }}
            />
          ))}
          
          {/* Medium distance stars */}
          {[...Array(120)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute w-0.5 h-0.5 bg-blue-100 rounded-full animate-stellar-shimmer"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.5 + Math.random() * 0.3
              }}
            />
          ))}
          
          {/* Distant star field */}
          {[...Array(400)].map((_, i) => (
            <div
              key={`distant-${i}`}
              className="absolute w-px h-px bg-slate-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.15 + Math.random() * 0.25
              }}
            />
          ))}
        </div>
        
        {/* Meteor shower */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-meteor-shower opacity-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${1.5 + Math.random() * 0.8}s`,
                transform: `rotate(${Math.random() * 45 - 22.5}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Spiral galaxies */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`galaxy-${i}`}
              className="absolute rounded-full bg-gradient-radial from-indigo-400/8 via-purple-300/4 to-transparent animate-galactic-rotation opacity-30"
              style={{
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                animationDuration: `${25 + Math.random() * 35}s`,
                animationDelay: `${Math.random() * 15}s`
              }}
            />
          ))}
        </div>
        
        {/* Cosmic dust clouds */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute w-px h-px bg-violet-200/20 rounded-full animate-cosmic-dust"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${20 + Math.random() * 30}s`
              }}
            />
          ))}
        </div>
        
        {/* Quantum energy fields */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 left-1/5 w-40 h-40 border border-cyan-400/8 rounded-full animate-quantum-field"></div>
          <div className="absolute top-2/3 right-1/5 w-32 h-32 border border-purple-400/8 rounded-full animate-quantum-field" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-2/3 w-24 h-24 border border-emerald-400/8 rounded-full animate-quantum-field" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-1/6 right-1/3 w-28 h-28 border border-rose-400/8 rounded-full animate-quantum-field" style={{ animationDelay: '9s' }}></div>
        </div>
        
        {/* Cosmic aurora effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/5 via-purple-500/3 to-transparent animate-cosmic-aurora"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-emerald-500/5 via-teal-500/3 to-transparent animate-cosmic-aurora" style={{ animationDelay: '8s' }}></div>
        </div>
        
        {/* Interstellar medium */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10"></div>
        
        {/* Deep space vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/60"></div>
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
