
import { Mail, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Murphix</span>
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">FREE</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The world's first truly free offline AI assistant with voice interaction and virtual mouse capabilities. 
              Transform your productivity while keeping your data completely private.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Early Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Requirements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Murphix. All rights reserved. Forever free.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
