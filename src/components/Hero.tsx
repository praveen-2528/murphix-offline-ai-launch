
import { ArrowRight, Play, Mic, MousePointer, FileText, Calendar, Mail, Folder } from "lucide-react";
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
        { icon: Mic, text: '"Create a new document"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Processing voice command...", color: "text-violet-400", bgColor: "bg-violet-500/20", borderColor: "border-violet-400/50" },
        { icon: null, text: "Understanding task context", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
        { icon: MousePointer, text: "Moving to Applications folder", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
        { icon: null, text: "Opening Word/Text Editor", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ New document created", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Schedule a meeting for tomorrow",
      icon: Calendar,
      steps: [
        { icon: Mic, text: '"Schedule meeting for tomorrow"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Parsing date and time", color: "text-violet-400", bgColor: "bg-violet-500/20", borderColor: "border-violet-400/50" },
        { icon: null, text: "Analyzing calendar context", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
        { icon: MousePointer, text: "Opening Calendar app", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
        { icon: null, text: "Creating new event entry", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ Meeting scheduled successfully", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Send email to my team",
      icon: Mail,
      steps: [
        { icon: Mic, text: '"Send email to my team"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Identifying team contacts", color: "text-violet-400", bgColor: "bg-violet-500/20", borderColor: "border-violet-400/50" },
        { icon: null, text: "Preparing email template", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
        { icon: MousePointer, text: "Opening email client", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
        { icon: null, text: "Composing message draft", color: "text-amber-400", bgColor: "bg-amber-500/20", borderColor: "border-amber-400/50" },
        { icon: null, text: "✓ Email ready for review", color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" }
      ]
    },
    {
      command: "Organize my downloads folder",
      icon: Folder,
      steps: [
        { icon: Mic, text: '"Organize my downloads"', color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-400/50" },
        { icon: null, text: "Scanning folder contents", color: "text-violet-400", bgColor: "bg-violet-500/20", borderColor: "border-violet-400/50" },
        { icon: null, text: "Categorizing file types", color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-400/50" },
        { icon: MousePointer, text: "Creating organized folders", color: "text-cyan-400", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/50" },
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
            // Switch to next task after a pause
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
              <span className="text-violet-300 text-sm animate-pulse">Your data stays private</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Meet{" "}
              <TypingAnimation 
                text="Murphix"
                speed={150}
                className="text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text animate-pulse"
                onComplete={handleTypingComplete}
              />
              <br />
              <span className={`transition-all duration-700 ${typingComplete ? 'opacity-100 animate-float' : 'opacity-0'}`}>
                Your Voice-Powered AI
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The revolutionary AI assistant that works completely offline, responds with natural voice, and features an innovative virtual mouse for seamless interaction.
            </p>
            
            <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-md border border-violet-400/30 rounded-full px-4 py-2 hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 animate-glow">
                <Mic className="text-violet-400 animate-pulse" size={16} />
                <span className="text-sm text-white">Voice Commands</span>
                <div className="flex gap-1 ml-2">
                  <div className="w-1 h-3 bg-violet-400 rounded-full animate-pulse [animation-delay:0ms]"></div>
                  <div className="w-1 h-4 bg-purple-400 rounded-full animate-pulse [animation-delay:150ms]"></div>
                  <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:300ms]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-md border border-cyan-400/30 rounded-full px-4 py-2 hover:from-cyan-500/20 hover:to-emerald-500/20 transition-all duration-300 hover:scale-105 animate-glow [animation-delay:1s]">
                <MousePointer className="text-cyan-400 animate-bounce" size={16} />
                <span className="text-sm text-white">Virtual Mouse</span>
                <div className="relative ml-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 ${typingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Button size="lg" className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-glow shadow-lg">
              Get Early Access
              <ArrowRight className="ml-2 animate-bounce" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-violet-400/30 bg-gradient-to-r from-white/10 to-violet-500/10 backdrop-blur-md text-white hover:from-white/20 hover:to-violet-500/20 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:border-violet-400/50"
            >
              <Play className="mr-2 animate-pulse" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Interactive Demo Video with Dynamic Tasks */}
          <div className={`relative mx-auto max-w-4xl transition-all duration-1000 ${typingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-gradient-to-br from-white/10 via-violet-500/5 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-gradient-to-r border-violet-400/20 shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 hover:border-violet-400/40 group animate-float">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 via-violet-900/20 to-slate-900/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-violet-400/20 hover:border-violet-400/30 transition-all duration-300 relative overflow-hidden">
                
                {/* Enhanced animated background particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400/30 rounded-full animate-float [animation-delay:0s]"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-float [animation-delay:1s]"></div>
                  <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-cyan-300/20 rounded-full animate-float [animation-delay:2s]"></div>
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400/30 rounded-full animate-float [animation-delay:3s]"></div>
                </div>

                <div className="text-center mb-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer group-hover:shadow-violet-500/30 animate-glow">
                    <Play className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                    <div className="absolute inset-0 rounded-full border-2 border-violet-400/50 animate-ping"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    See Murphix in Action
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    Voice commands • Virtual mouse • Offline AI
                  </p>
                  
                  {/* Dynamic Task Display */}
                  <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full px-4 py-2 border border-violet-400/30">
                    <currentTask.icon className="text-violet-400 animate-pulse" size={16} />
                    <span className="text-sm text-violet-300 font-medium">
                      Current Task: {currentTask.command}
                    </span>
                  </div>
                </div>
                
                {/* Enhanced Step-by-Step Demo Animation with Task Rotation */}
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
                              ? `${step.bgColor} ${step.borderColor} scale-105 shadow-lg animate-pulse` 
                              : isCompleted
                              ? 'bg-emerald-500/10 border-emerald-400/30 opacity-75'
                              : 'bg-white/5 border-white/10 opacity-40'
                          }`}
                        >
                          {IconComponent ? (
                            <IconComponent 
                              className={`${isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'} ${isActive ? 'animate-spin' : ''}`} 
                              size={14} 
                            />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${isActive ? step.color.replace('text-', 'bg-') : isCompleted ? 'bg-emerald-400' : 'bg-slate-500'} ${isActive ? 'animate-ping' : ''}`}></div>
                          )}
                          <span className={`text-sm font-medium ${isActive ? step.color : isCompleted ? 'text-emerald-400' : 'text-slate-500'}`}>
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
                            <div className="w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center ml-auto animate-pulse">
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
            
            {/* Enhanced floating elements with new colors */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500/30 backdrop-blur-sm rounded-full border border-violet-400/50 animate-float [animation-delay:0.5s] hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 backdrop-blur-sm rounded-full border border-purple-400/50 animate-float [animation-delay:1.5s] hover:scale-110 transition-transform duration-300"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/40 animate-float [animation-delay:2.5s]"></div>
            <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-emerald-500/25 backdrop-blur-sm rounded-full border border-emerald-400/45 animate-float [animation-delay:3.5s]"></div>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration with new color scheme */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-purple-600/10 pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/5 backdrop-blur-3xl rounded-full pointer-events-none animate-float [animation-delay:2s] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 backdrop-blur-3xl rounded-full pointer-events-none animate-float [animation-delay:3s] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/5 backdrop-blur-3xl rounded-full pointer-events-none animate-float [animation-delay:4s] -z-10"></div>
    </section>
  );
};
