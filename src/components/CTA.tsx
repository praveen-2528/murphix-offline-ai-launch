
import { ArrowRight, Download, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Free AI Power?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the revolution of offline AI assistance. Get early access to Murphix - the free AI that talks back and never needs the internet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-lg">
                <Bell className="mr-2" size={20} />
                Get Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg"
              >
                Coming Soon
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-slate-300 text-sm">
              <span>✓ 100% Free Forever</span>
              <span>✓ No Registration Required</span>
              <span>✓ Instant Voice Response</span>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 backdrop-blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 backdrop-blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
