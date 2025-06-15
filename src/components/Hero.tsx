
import { Play, Mic, MousePointer, FileText, Calendar, Mail, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./TypingAnimation";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [showDemoAnimation, setShowDemoAnimation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const taskExamples = [
    {
      command: "Create a new document",
      icon: FileText,
      steps: [
        { icon: Mic, text: '"Create a new document"', color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-400/50" },
        { icon: null, text: "Processing voice command...", color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-400/50" },
        { icon: null, text: "Understanding task context", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
        { icon: MousePointer, text: "Moving to Applications folder", color: "text-teal-400", bgColor: "bg-teal-500/20", borderColor: "border-teal-400/50" },
        { icon: null, text: "Opening Word/Text Editor", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
        { icon: null, text: "✓ New document created", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Schedule a meeting for tomorrow",
      icon: Calendar,
      steps: [
        { icon: Mic, text: '"Schedule meeting for tomorrow"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Parsing date and time", color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-400/50" },
        { icon: null, text: "Analyzing calendar context", color: "text-teal-400", bgColor: "bg-teal-500/20", borderColor: "border-teal-400/50" },
        { icon: MousePointer, text: "Opening Calendar app", color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-400/50" },
        { icon: null, text: "Creating new event entry", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ Meeting scheduled successfully", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Send email to my team",
      icon: Mail,
      steps: [
        { icon: Mic, text: '"Send email to my team"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Identifying team contacts", color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-400/50" },
        { icon: null, text: "Preparing email template", color: "text-teal-400", bgColor: "bg-teal-500/20", borderColor: "border-teal-400/50" },
        { icon: MousePointer, text: "Opening email client", color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-400/50" },
        { icon: null, text: "Composing message draft", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ Email ready for review", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Organize my downloads folder",
      icon: Folder,
      steps: [
        { icon: Mic, text: '"Organize my downloads"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Scanning folder contents", color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-400/50" },
        { icon: null, text: "Categorizing file types", color: "text-teal-400", bgColor: "bg-teal-500/20", borderColor: "border-teal-400/50" },
        { icon: MousePointer, text: "Creating organized folders", color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-400/50" },
        { icon: null, text: "Moving files to categories", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ Downloads organized perfectly", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    }
  ];

  const currentTask = taskExamples[currentTaskIndex];

  const handleTypingComplete = () => {
    setTypingComplete(true);
    setTimeout(() => setShowDemoAnimation(true), 1000);
  };

  useEffect(() => {
    if (showDemoAnimation) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= currentTask.steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentTaskIndex(prevTask => (prevTask + 1) % taskExamples.length);
              setCurrentStep(0);
            }, 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [showDemoAnimation, currentTask.steps.length, currentTaskIndex, taskExamples.length]);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6 animate-slide-up hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <span className="text-blue-300 text-sm">Your data stays private</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Meet{" "}
              <TypingAnimation 
                text="Murphix"
                speed={150}
                className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text"
                onComplete={handleTypingComplete}
              />
              <br />
              <span className={`transition-all duration-700 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
                Your Voice-Powered AI
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The revolutionary AI assistant that works completely offline, responds with natural voice, and features an innovative virtual mouse for seamless interaction.
            </p>
            
            <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-400/30 rounded-full px-4 py-2 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105">
                <Mic className="text-blue-400" size={16} />
                <span className="text-sm text-white">Voice Commands</span>
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-1 h-2 bg-teal-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-teal-500/10 backdrop-blur-md border border-purple-400/30 rounded-full px-4 py-2 hover:from-purple-500/20 hover:to-teal-500/20 transition-all duration-300 hover:scale-105">
                <MousePointer className="text-purple-400" size={16} />
                <span className="text-sm text-white">Virtual Mouse</span>
                <div className="relative ml-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-400/30 bg-gradient-to-r from-white/10 to-blue-500/10 backdrop-blur-md text-white hover:from-white/20 hover:to-blue-500/20 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:border-blue-400/50"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Interactive Demo Video with Holographic Effect */}
          <div className={`relative mx-auto max-w-4xl transition-all duration-1000 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5 backdrop-blur-md rounded-3xl p-8 border border-gradient-to-r border-blue-400/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:border-blue-400/40 group">
              {/* Holographic scan line */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-holographic-scan"></div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-slate-900/50 via-blue-900/20 to-purple-900/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-blue-400/20 hover:border-blue-400/30 transition-all duration-300 relative overflow-hidden">
                
                {/* Quantum particle field */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${
                        i % 4 === 0 ? 'bg-blue-400/40' :
                        i % 4 === 1 ? 'bg-purple-400/40' :
                        i % 4 === 2 ? 'bg-white/60' : 'bg-teal-400/40'
                      }`}
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>

                <div className="text-center mb-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group-hover:shadow-blue-500/30">
                    <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    See Murphix in Action
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    Voice commands • Virtual mouse • Offline AI
                  </p>
                  
                  {/* Dynamic Task Display */}
                  <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 border border-blue-400/30">
                    <currentTask.icon className="text-blue-400" size={16} />
                    <span className="text-sm text-blue-300 font-medium">
                      Current Task: {currentTask.command}
                    </span>
                  </div>
                </div>
                
                {/* Step-by-Step Demo Animation */}
                <div className={`transition-all duration-1000 ${showDemoAnimation ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col gap-3 mt-6 max-w-md mx-auto">
                    {currentTask.steps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isCompleted = index < currentStep;
                      const IconComponent = step.icon;
                      
                      return (
                        <div
                          key={`${currentTaskIndex}-${index}`}
                          className={`flex items-center gap-3 px-4 py-3 rounded-full border transition-all duration-500 ${
                            isActive 
                              ? `${step.bgColor} ${step.borderColor} scale-105 shadow-lg` 
                              : isCompleted
                              ? 'bg-emerald-500/10 border-emerald-400/30 opacity-75'
                              : 'bg-white/5 border-white/10 opacity-40'
                          }`}
                        >
                          {IconComponent ? (
                            <IconComponent 
                              className={`${isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} 
                              size={14} 
                            />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${isActive ? step.color.replace('text-', 'bg-') : isCompleted ? 'bg-emerald-400' : 'bg-slate-500'}`}></div>
                          )}
                          <span className={`text-sm font-medium ${isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {step.text}
                          </span>
                          {isActive && (
                            <div className="flex gap-1 ml-auto">
                              <div className="w-1 h-1 bg-current rounded-full"></div>
                              <div className="w-1 h-1 bg-current rounded-full"></div>
                              <div className="w-1 h-1 bg-current rounded-full"></div>
                            </div>
                          )}
                          {isCompleted && (
                            <div className="w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center ml-auto">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating quantum elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/50 hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/50 hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
