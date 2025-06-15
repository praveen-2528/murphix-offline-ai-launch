
import { Mail, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">Murphix</span>
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">FREE</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed hover:text-slate-300 transition-colors duration-300">
              The world's first truly free offline AI assistant with voice interaction and virtual mouse capabilities. 
              Transform your productivity while keeping your data completely private on your device.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:border-white/40 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:border-white/40 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:border-white/40 hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="animate-slide-up [animation-delay:0.2s]">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Features</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Early Access</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">System Requirements</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Updates</a></li>
            </ul>
          </div>

          <div className="animate-slide-up [animation-delay:0.4s]">
            <h3 className="text-white font-semibold mb-4">Privacy & Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Data Security</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in [animation-delay:0.6s]">
          <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
            © 2024 Murphix. All rights reserved. Your privacy is our priority.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-all duration-300 hover:scale-105">Data Protection</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
