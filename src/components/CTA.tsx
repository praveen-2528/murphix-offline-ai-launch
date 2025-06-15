
import { ArrowRight, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailSignup } from "./EmailSignup";

export const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-gradient-to-br from-white/10 via-violet-500/5 to-purple-500/10 backdrop-blur-md rounded-3xl p-12 border border-violet-400/20 shadow-2xl relative overflow-hidden hover:shadow-violet-500/25 hover:border-violet-400/30 transition-all duration-500 animate-scale-in group">
          <div className="relative z-20">
            <div className="flex items-center justify-center mb-4 animate-fade-in">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-400/30">
                <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                <span className="text-sm text-violet-300 font-medium">Powered by Allynt Innovation</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Ready for AI Power?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:0.2s]">
              Join the revolution of offline AI assistance. Get early access to Murphix - the AI that talks back and keeps your data completely private on your device.
            </p>
            
            <div className="mb-8 animate-fade-in [animation-delay:0.4s]">
              <EmailSignup />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in [animation-delay:0.6s]">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-lg hover:scale-105 transition-all duration-300 animate-glow">
                <Bell className="mr-2 animate-pulse" size={20} />
                Join Beta List
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-violet-400/30 bg-gradient-to-r from-white/10 to-violet-500/10 backdrop-blur-sm text-white hover:from-white/20 hover:to-violet-500/20 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:border-violet-400/50"
              >
                Coming Q3 2025
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-slate-300 text-sm animate-slide-up [animation-delay:0.8s]">
              <span className="hover:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                100% Private
              </span>
              <span className="hover:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                Completely Offline
              </span>
              <span className="hover:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:1s]"></div>
                Instant Voice Response
              </span>
            </div>
          </div>
          
          {/* Background decoration with proper z-index and new colors */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 backdrop-blur-3xl rounded-full animate-float [animation-delay:1s] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 backdrop-blur-3xl rounded-full animate-float [animation-delay:2s] -z-10"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/5 backdrop-blur-3xl rounded-full animate-float [animation-delay:3s] -z-10"></div>
        </div>
      </div>
    </section>
  );
};
