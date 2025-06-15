
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Murphix?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the future of AI assistance with complete privacy, voice interaction, and offline functionality. 
              Murphix revolutionizes how you interact with your computer - and it's completely free.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <benefit.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Completely free forever</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Voice commands & responses</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Zero latency AI responses</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Works in any environment</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center space-x-3 text-green-400">
                  <CheckCircle size={20} />
                  <span>Regular feature updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
