
import { ArrowRight, Play, Mic, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [showDemoAnimation, setShowDemoAnimation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    { icon: Mic, text: '"Open my files"', color: "text-green-400", bgColor: "bg-green-500/20", borderColor: "border-green-400/50" },
    { icon: null, text: "Processing voice...", color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-400/50" },
    { icon: null, text: "Understanding command", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
    { icon: MousePointer, text: "Moving cursor to Files", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
    { icon: null, text: "Double-clicking Files folder", color: "text-yellow-400", bgColor: "bg-yellow-500/20", borderColor: "border-yellow-400/50" },
    { icon: null, text: "✓ Files opened successfully", color: "text-green-400", bgColor: "bg-green-500/20", borderColor: "border-green-400/50" }
  ];

  const handleTypingComplete = () => {
    setTypingComplete(true);
    setTimeout(() => setShowDemoAnimation(true), 1000);
  };

  useEffect(() => {
    if (showDemoAnimation) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= demoSteps.length - 1) {
            clearInterval(interval);
            // Reset after a pause
            setTimeout(() => setCurrentStep(0), 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [showDemoAnimation, demoSteps.length]);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6 animate-slide-up">
              <span className="text-blue-300 text-sm">Your data stays private</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Meet{" "}
              <TypingAnimation 
                text="Murphix"
                speed={150}
                className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
                onComplete={handleTypingComplete}
              />
              <br />
              <span className={`transition-opacity duration-500 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
                Your Voice-Powered AI
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The revolutionary AI assistant that works completely offline, responds with natural voice, and features an innovative virtual mouse for seamless interaction.
            </p>
            
            <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Mic className="text-blue-400 animate-pulse" size={16} />
                <span className="text-sm text-white">Voice Commands</span>
                {/* Voice wave animation */}
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse [animation-delay:0ms]"></div>
                  <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse [animation-delay:150ms]"></div>
                  <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:300ms]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <MousePointer className="text-cyan-400 animate-bounce" size={16} />
                <span className="text-sm text-white">Virtual Mouse</span>
                {/* Mouse trail animation */}
                <div className="relative ml-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300">
              Get Early Access
              <ArrowRight className="ml-2 animate-bounce" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 animate-pulse" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Interactive Demo Video */}
          <div className={`relative mx-auto max-w-4xl transition-all duration-1000 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-white/30 group">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                
                {/* Animated background particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float [animation-delay:0s]"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float [animation-delay:1s]"></div>
                  <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-blue-300/20 rounded-full animate-float [animation-delay:2s]"></div>
                </div>

                <div className="text-center mb-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer group-hover:shadow-blue-500/25">
                    <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    See Murphix in Action
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    Voice commands • Virtual mouse • Offline AI
                  </p>
                </div>
                
                {/* Enhanced Step-by-Step Demo Animation */}
                <div className={`transition-all duration-1000 ${showDemoAnimation ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col gap-3 mt-6 max-w-md mx-auto">
                    {demoSteps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isCompleted = index < currentStep;
                      const IconComponent = step.icon;
                      
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 ${
                            isActive 
                              ? `${step.bgColor} ${step.borderColor} scale-105 shadow-lg` 
                              : isCompleted
                              ? 'bg-green-500/10 border-green-400/30 opacity-75'
                              : 'bg-white/5 border-white/10 opacity-40'
                          }`}
                        >
                          {IconComponent ? (
                            <IconComponent 
                              className={`${isActive ? step.color : isCompleted ? 'text-green-400' : 'text-slate-500'} ${isActive ? 'animate-pulse' : ''}`} 
                              size={14} 
                            />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${isActive ? step.color.replace('text-', 'bg-') : isCompleted ? 'bg-green-400' : 'bg-slate-500'} ${isActive ? 'animate-pulse' : ''}`}></div>
                          )}
                          <span className={`text-sm font-medium ${isActive ? step.color : isCompleted ? 'text-green-400' : 'text-slate-500'}`}>
                            {step.text}
                          </span>
                          {isActive && (
                            <div className="flex gap-1 ml-auto">
                              <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:0ms]"></div>
                              <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:150ms]"></div>
                              <div className="w-1 h-1 bg-current rounded-full animate-bounce [animation-delay:300ms]"></div>
                            </div>
                          )}
                          {isCompleted && (
                            <div className="w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center ml-auto">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/50 animate-float [animation-delay:0.5s] hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500/30 backdrop-blur-sm rounded-full border border-cyan-400/50 animate-float [animation-delay:1.5s] hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/40 animate-float [animation-delay:2.5s]"></div>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 backdrop-blur-3xl rounded-full pointer-events-none animate-float [animation-delay:2s] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 backdrop-blur-3xl rounded-full pointer-events-none animate-float [animation-delay:3s] -z-10"></div>
    </section>
  );
};
