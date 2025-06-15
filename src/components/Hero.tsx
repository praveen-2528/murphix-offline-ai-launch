
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Murphix</span>
              <br />
              Your Offline AI Assistant
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The revolutionary AI assistant that works completely offline, helping you with any task while featuring an innovative virtual mouse for seamless interaction.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:text-white px-8 py-4 text-lg">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="relative mx-auto max-w-4xl animate-scale-in">
            <div className="relative bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-white" size={32} />
                  </div>
                  <p className="text-slate-400">Product Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 pointer-events-none"></div>
    </section>
  );
};
