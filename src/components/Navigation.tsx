
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-blue-400/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text hover:from-blue-300 hover:via-purple-300 hover:to-teal-300 transition-all duration-300 cursor-pointer">
                Murphix
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <a href="#features" className="text-slate-300 hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#benefits" className="text-slate-300 hover:text-purple-300 transition-all duration-300 hover:scale-105 relative group">
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white hover:scale-105 transition-all duration-300 shadow-lg">
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-gradient-to-br from-black/20 via-blue-500/5 to-purple-500/10 backdrop-blur-md rounded-lg mt-2 border border-blue-400/20 animate-scale-in">
            <a href="#features" className="block text-slate-300 hover:text-blue-300 transition-all duration-300 px-4 hover:translate-x-2">Features</a>
            <a href="#benefits" className="block text-slate-300 hover:text-purple-300 transition-all duration-300 px-4 hover:translate-x-2">Benefits</a>
            <div className="px-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white hover:scale-105 transition-all duration-300 shadow-lg">
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
