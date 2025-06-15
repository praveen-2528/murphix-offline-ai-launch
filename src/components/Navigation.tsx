
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Murphix</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Reviews</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="block text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors">Reviews</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Early Access
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
