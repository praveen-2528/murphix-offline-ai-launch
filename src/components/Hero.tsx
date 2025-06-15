
import { ArrowRight, Play, Mic, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-green-400 text-sm font-medium">✨ Completely FREE</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="text-blue-300 text-sm">No subscriptions ever</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Murphix</span>
              <br />
              Your Voice-Powered AI
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              The revolutionary AI assistant that works completely offline, responds with natural voice, and features an innovative virtual mouse for seamless interaction.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <Mic className="text-blue-400" size={16} />
                <span className="text-sm text-white">Voice Commands</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <MousePointer className="text-cyan-400" size={16} />
                <span className="text-sm text-white">Virtual Mouse</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg backdrop-blur-sm">
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 text-lg"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Interactive Demo Video */}
          <div className="relative mx-auto max-w-4xl animate-scale-in">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-white/10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Play className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">See Murphix in Action</h3>
                  <p className="text-slate-300">Voice commands • Virtual mouse • Offline AI</p>
                </div>
                
                {/* Animated Demo Elements */}
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white">"Open my files"</span>
                  </div>
                  <div className="text-slate-400">→</div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <MousePointer className="text-cyan-400" size={14} />
                    <span className="text-sm text-white">Files opened</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/50"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500/30 backdrop-blur-sm rounded-full border border-cyan-400/50"></div>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 backdrop-blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 backdrop-blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
};
