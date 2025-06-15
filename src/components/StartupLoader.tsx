
import { useEffect, useState } from "react";
import { Mic, MousePointer } from "lucide-react";

export const StartupLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const iconTimer = setTimeout(() => setShowIcons(true), 800);

    return () => {
      clearInterval(timer);
      clearTimeout(iconTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50 animate-fade-in">
      <div className="text-center">
        <div className="mb-8 animate-scale-in">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text animate-pulse">
            Murphix
          </h1>
          <p className="text-slate-300 mt-2 animate-fade-in [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]">
            Initializing AI Assistant...
          </p>
        </div>

        {/* Animated Icons */}
        {showIcons && (
          <div className="flex justify-center gap-8 mb-8 animate-fade-in">
            <div className="flex flex-col items-center animate-float">
              <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-400/50">
                <Mic className="text-blue-400 animate-pulse" size={20} />
              </div>
              <span className="text-xs text-slate-400 mt-2">Voice</span>
            </div>
            <div className="flex flex-col items-center animate-float [animation-delay:0.5s]">
              <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/50">
                <MousePointer className="text-cyan-400 animate-pulse" size={20} />
              </div>
              <span className="text-xs text-slate-400 mt-2">Control</span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-slate-400 text-sm mt-2">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
};
