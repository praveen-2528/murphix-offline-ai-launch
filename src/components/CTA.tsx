
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 backdrop-blur-sm border border-slate-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Murphix?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the revolution of offline AI assistance. Download Murphix today and transform how you work with your computer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Download className="mr-2" size={20} />
              Download Now
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:text-white px-8 py-4 text-lg">
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-slate-400 text-sm">
            <span>✓ Free 30-day trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Instant setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};
