
import { useEffect, useState } from "react";
import { Mic, MousePointer, Zap, Brain, Sparkles, Cpu, Shield, Rocket } from "lucide-react";

export const StartupLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const steps = [
    { icon: Brain, text: "Initializing Neural Networks", color: "text-blue-400", bgColor: "bg-blue-500/20" },
    { icon: Shield, text: "Encrypting Privacy Protocols", color: "text-emerald-400", bgColor: "bg-emerald-500/20" },
    { icon: Mic, text: "Loading Voice Recognition", color: "text-teal-400", bgColor: "bg-teal-500/20" },
    { icon: MousePointer, text: "Calibrating Virtual Mouse", color: "text-orange-400", bgColor: "bg-orange-500/20" },
    { icon: Cpu, text: "Optimizing Offline Processing", color: "text-amber-400", bgColor: "bg-amber-500/20" },
    { icon: Rocket, text: "Launching Murphix AI", color: "text-pink-400", bgColor: "bg-pink-500/20" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1.2;
      });
    }, 30);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    const particleTimer = setTimeout(() => setShowParticles(true), 300);
    const matrixTimer = setTimeout(() => setShowMatrix(true), 600);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
      clearTimeout(particleTimer);
      clearTimeout(matrixTimer);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced animated particles with new colors */}
      {showParticles && (
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float-delayed ${
                i % 4 === 0 ? 'bg-blue-400/40' :
                i % 4 === 1 ? 'bg-teal-400/30' :
                i % 4 === 2 ? 'bg-orange-400/35' : 'bg-emerald-400/25'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Matrix-style falling code effect */}
      {showMatrix && (
        <div className="absolute inset-0 opacity-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-blue-400 animate-pulse-soft"
              style={{
                left: `${(i * 4) % 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random().toString(36).substring(2, 8)}
            </div>
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Enhanced main logo with cooler animation */}
        <div className="mb-8 relative">
          <div className="relative group">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-teal-400 via-orange-400 to-emerald-400 bg-clip-text animate-shimmer bg-400% relative animate-float">
              Murphix
            </h1>
            {/* Multiple glowing ring effects */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping scale-150"></div>
            <div className="absolute inset-0 rounded-full border border-teal-400/30 animate-pulse-soft scale-125"></div>
            <div className="absolute inset-0 rounded-full border border-orange-400/20 animate-ping scale-175 [animation-delay:0.5s]"></div>
          </div>
          
          {/* Company branding */}
          <div className="mt-2 flex items-center justify-center space-x-2 opacity-80 animate-slide-up">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300 font-medium">Powered by Allynt</span>
            <Sparkles className="w-4 h-4 text-teal-400 animate-pulse [animation-delay:0.5s]" />
          </div>
        </div>

        {/* Enhanced step indicators with cooler design */}
        <div className="mb-8 space-y-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const IconComponent = step.icon;
            
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-4 transition-all duration-700 ${
                  isActive ? 'scale-110 opacity-100' : isCompleted ? 'opacity-80 scale-105' : 'opacity-30 scale-95'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-700 relative ${
                  isActive 
                    ? `${step.color.replace('text-', 'border-')} ${step.bgColor} shadow-lg animate-glow` 
                    : isCompleted
                    ? 'border-emerald-400 bg-emerald-400/10 shadow-emerald-400/25'
                    : 'border-slate-600 bg-slate-800/50'
                }`}>
                  <IconComponent 
                    className={`${
                      isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'
                    } ${isActive ? 'animate-spin-slow' : ''}`} 
                    size={20} 
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-50"></div>
                  )}
                </div>
                <div className="text-left min-w-0 flex-1 max-w-xs">
                  <span className={`text-sm font-medium transition-colors duration-700 block ${
                    isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'
                  }`}>
                    {step.text}
                    {isActive && (
                      <span className="ml-2">
                        <div className="inline-flex gap-1">
                          <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:0ms]"></div>
                          <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:150ms]"></div>
                          <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:300ms]"></div>
                        </div>
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <div className="mt-1 bg-slate-700/50 rounded-full h-1 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 animate-shimmer bg-400%"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced progress bar with cooler design */}
        <div className="w-96 mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-4 overflow-hidden border border-blue-400/30 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-teal-500 via-orange-500 to-emerald-500 transition-all duration-200 ease-out relative bg-400% animate-shimmer"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse-soft"></div>
              <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-sm"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-slate-400 text-sm font-medium">Initializing AI Core Systems...</p>
            <div className="flex items-center space-x-2">
              <p className="text-blue-400 text-sm font-mono font-bold">{Math.round(progress)}%</p>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced completion effect */}
        {progress === 100 && (
          <div className="mt-8 animate-scale-in">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-glow relative">
              <Rocket className="text-white animate-bounce-gentle" size={28} />
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-pulse-soft scale-125"></div>
            </div>
            <p className="text-emerald-400 font-bold text-lg mt-3 animate-pulse">Launch Sequence Complete!</p>
            <p className="text-blue-300 text-sm mt-1 animate-fade-in">Welcome to the future of AI assistance</p>
          </div>
        )}
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-teal-600/5 to-orange-600/5 pointer-events-none animate-gradient-shift bg-400%"></div>
    </div>
  );
};
