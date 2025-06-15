
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center animate-fade-in">
            <span className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">Murphix</span>
            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">FREE</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in [animation-delay:0.2s]">
            <a href="#features" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105">Features</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105">Benefits</a>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:scale-105 transition-all duration-300">
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/10 backdrop-blur-md rounded-lg mt-2 border border-white/20 animate-slide-up">
            <a href="#features" className="block text-slate-300 hover:text-white transition-colors duration-300 px-4 hover:translate-x-2">Features</a>
            <a href="#benefits" className="block text-slate-300 hover:text-white transition-colors duration-300 px-4 hover:translate-x-2">Benefits</a>
            <div className="px-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white hover:scale-105 transition-all duration-300">
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
