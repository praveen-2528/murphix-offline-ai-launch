
import { useEffect, useState } from "react";
import { Mic, MousePointer, Zap, Brain } from "lucide-react";

export const StartupLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showParticles, setShowParticles] = useState(false);

  const steps = [
    { icon: Brain, text: "Initializing AI Core", color: "text-blue-400" },
    { icon: Mic, text: "Loading Voice Engine", color: "text-green-400" },
    { icon: MousePointer, text: "Activating Virtual Mouse", color: "text-cyan-400" },
    { icon: Zap, text: "Powering Up Murphix", color: "text-yellow-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    const particleTimer = setTimeout(() => setShowParticles(true), 500);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
      clearTimeout(particleTimer);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated particles */}
      {showParticles && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Main logo with enhanced animation */}
        <div className="mb-8 relative">
          <div className="relative">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text animate-pulse">
              Murphix
            </h1>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping scale-150"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse scale-125"></div>
          </div>
        </div>

        {/* Enhanced step indicators */}
        <div className="mb-8 space-y-3">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const IconComponent = step.icon;
            
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-3 transition-all duration-500 ${
                  isActive ? 'scale-110 opacity-100' : isCompleted ? 'opacity-75' : 'opacity-40'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  isActive 
                    ? `${step.color.replace('text-', 'border-')} bg-current/10 shadow-lg animate-pulse` 
                    : isCompleted
                    ? 'border-green-400 bg-green-400/10'
                    : 'border-slate-600 bg-slate-800/50'
                }`}>
                  <IconComponent 
                    className={`${
                      isActive ? step.color : isCompleted ? 'text-green-400' : 'text-slate-500'
                    } ${isActive ? 'animate-spin' : ''}`} 
                    size={16} 
                  />
                </div>
                <span className={`text-sm font-medium transition-colors duration-500 ${
                  isActive ? step.color : isCompleted ? 'text-green-400' : 'text-slate-500'
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
              </div>
            );
          })}
        </div>

        {/* Enhanced progress bar */}
        <div className="w-80 mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-slate-700/50">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-slate-400 text-sm">Loading AI Assistant...</p>
            <p className="text-blue-400 text-sm font-mono">{Math.round(progress)}%</p>
          </div>
        </div>

        {/* Completion effect */}
        {progress === 100 && (
          <div className="mt-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
              <Zap className="text-white animate-pulse" size={24} />
            </div>
            <p className="text-green-400 font-semibold mt-2 animate-pulse">Ready to Launch!</p>
          </div>
        )}
      </div>
    </div>
  );
};
