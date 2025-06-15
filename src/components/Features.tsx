
import { Brain, Wifi, Mouse, Zap, Shield, Settings } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Powered by cutting-edge AI technology that understands and executes complex commands with precision."
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
    },
    {
      icon: Settings,
      title: "Customizable Commands",
      description: "Create and customize voice commands to match your workflow and personal preferences."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover what makes Murphix the most advanced offline AI assistant available today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
