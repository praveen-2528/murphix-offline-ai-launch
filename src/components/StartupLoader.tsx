
import { useEffect, useState } from "react";
import { Rocket, Satellite, Sparkles } from "lucide-react";

export const StartupLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Initializing AI Core", color: "text-blue-400" },
    { text: "Loading Voice Recognition", color: "text-teal-400" },
    { text: "Calibrating Virtual Mouse", color: "text-orange-400" },
    { text: "Launching Murphix AI", color: "text-emerald-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Space Background with Stars */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Satellites */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-satellite-orbit"
            style={{
              left: '50%',
              top: '50%',
              animation: `satellite-orbit-${i} ${15 + i * 5}s linear infinite`,
              animationDelay: `${i * 2}s`
            }}
          >
            <Satellite 
              className="text-blue-400/60" 
              size={16 + i * 4}
              style={{
                transform: `translateX(${200 + i * 50}px) translateY(${-100 + i * 50}px)`
              }}
            />
          </div>
        ))}

        {/* Distant galaxies */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-radial from-purple-400/20 to-transparent opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              animation: `galaxy-glow ${10 + Math.random() * 10}s ease-in-out infinite`
            }}
          />
        ))}

        {/* Nebula effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/10 to-teal-600/5 opacity-50"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main logo */}
        <div className="mb-8 relative">
          <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text animate-shimmer bg-400%">
            Murphix
          </h1>
          
          {/* Company branding */}
          <div className="mt-2 flex items-center justify-center space-x-2 opacity-80">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Powered by Allynt</span>
            <Sparkles className="w-4 h-4 text-teal-400" />
          </div>
        </div>

        {/* Current step display */}
        <div className="mb-8">
          <div className="text-lg font-medium mb-2">
            <span className={`transition-colors duration-500 ${steps[currentStep]?.color || 'text-blue-400'}`}>
              {steps[currentStep]?.text || 'Initializing...'}
            </span>
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentStep 
                    ? 'bg-blue-400 scale-125' 
                    : index < currentStep 
                    ? 'bg-emerald-400' 
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-blue-400/30">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-200 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-slate-400 text-sm">Initializing Systems...</p>
            <div className="flex items-center space-x-2">
              <p className="text-blue-400 text-sm font-mono">{Math.round(progress)}%</p>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Completion effect */}
        {progress === 100 && (
          <div className="mt-8 animate-scale-in">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
              <Rocket className="text-white" size={24} />
            </div>
            <p className="text-emerald-400 font-bold text-lg mt-3">Launch Complete!</p>
            <p className="text-blue-300 text-sm mt-1">Welcome to Murphix AI</p>
          </div>
        )}
      </div>
    </div>
  );
};
