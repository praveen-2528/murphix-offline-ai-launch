
import { CheckCircle, Clock, Lock, Cpu, Volume2 } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Daily",
      description: "Automate repetitive tasks and streamline your workflow with intelligent voice commands and responses."
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Everything stays on your device. No data sent to external servers or cloud services."
    },
    {
      icon: Volume2,
      title: "Natural Conversations",
      description: "Murphix talks back with natural voice responses, making interactions feel truly human-like."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Murphix?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the future of AI assistance with complete privacy, voice interaction, and offline functionality. 
              Murphix revolutionizes how you interact with your computer - and it's completely free.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-slide-up hover:transform hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-300 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8 animate-scale-in [animation-delay:0.6s]">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-500">
              <div className="space-y-4">
                {[
                  "Completely free forever",
                  "Voice commands & responses",
                  "Zero latency AI responses",
                  "Works in any environment",
                  "Enterprise-grade security",
                  "Regular feature updates"
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-green-400 animate-fade-in hover:scale-105 transition-all duration-300 hover:text-green-300"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <CheckCircle size={20} className="animate-pulse" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
