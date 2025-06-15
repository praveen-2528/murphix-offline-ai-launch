
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900/90 via-violet-900/20 to-slate-900/90 backdrop-blur-md border-t border-violet-400/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text hover:from-violet-300 hover:to-purple-300 transition-all duration-300">
                Murphix
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors duration-300">
              The revolutionary offline AI assistant that puts your privacy first while delivering powerful voice-controlled automation.
            </p>
            <div className="flex items-center space-x-1 text-slate-400 text-sm group">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span>by</span>
              <span className="text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-300">Allynt</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4 animate-fade-in [animation-delay:0.2s]">
            <h3 className="text-white font-semibold hover:text-violet-300 transition-colors duration-300">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Features</a></li>
              <li><a href="#benefits" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Benefits</a></li>
              <li><a href="#requirements" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">System Requirements</a></li>
              <li><a href="/download" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Download</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4 animate-fade-in [animation-delay:0.4s]">
            <h3 className="text-white font-semibold hover:text-violet-300 transition-colors duration-300">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">About Allynt</a></li>
              <li><a href="#careers" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Careers</a></li>
              <li><a href="#partnerships" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Partnerships</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4 animate-fade-in [animation-delay:0.6s]">
            <h3 className="text-white font-semibold hover:text-violet-300 transition-colors duration-300">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-violet-300 hover:scale-110 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-300 hover:scale-110 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-violet-300 hover:scale-110 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@allynt.com" className="text-slate-400 hover:text-violet-300 hover:scale-110 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-3 border border-violet-400/20 hover:border-violet-400/30 transition-all duration-300">
              <p className="text-slate-300 text-sm font-medium mb-1">Open for Collaboration</p>
              <p className="text-slate-400 text-xs">Allynt is actively seeking partnerships and collaborative opportunities in AI innovation.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-violet-400/20 text-center animate-fade-in [animation-delay:0.8s]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
              © 2024 Allynt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-slate-400 hover:text-violet-300 text-sm transition-all duration-300 hover:scale-105">Privacy Policy</a>
              <a href="#terms" className="text-slate-400 hover:text-violet-300 text-sm transition-all duration-300 hover:scale-105">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
