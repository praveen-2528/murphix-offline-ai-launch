
import { Brain, Wifi, Mouse, Zap, Shield, Settings, Mic2, DollarSign } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Completely Free",
      description: "No subscriptions, no hidden fees, no premium tiers. Murphix is free forever for everyone."
    },
    {
      icon: Mic2,
      title: "Natural Voice Interaction",
      description: "Talk to Murphix naturally and get spoken responses. Have real conversations with your AI assistant."
    },
    {
      icon: Wifi,
      title: "100% Offline Functionality",
      description: "Works completely offline without internet connection. Your data stays private and secure on your device."
    },
    {
      icon: Mouse,
      title: "Virtual Mouse Control",
      description: "Revolutionary virtual mouse feature allows hands-free navigation and interaction with your computer."
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Instant response time with optimized local processing. No waiting for cloud servers."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations and data never leave your device. Complete privacy and security guaranteed."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover what makes Murphix the most advanced free offline AI assistant available
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background glassmorphism elements */}
      <div className="absolute top-1/3 left-0 w-32 h-32 bg-blue-500/5 backdrop-blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-24 h-24 bg-cyan-500/5 backdrop-blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
};
