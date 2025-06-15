
import { CheckCircle, Clock, Lock, Cpu } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Daily",
      description: "Automate repetitive tasks and streamline your workflow with intelligent voice commands."
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Everything stays on your device. No data sent to external servers or cloud services."
    },
    {
      icon: Cpu,
      title: "No Internet Required",
      description: "Work anywhere, anytime without worrying about internet connectivity or data usage."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Murphix?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the future of AI assistance with complete privacy and offline functionality. 
              Murphix revolutionizes how you interact with your computer.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="space-y-4">
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
                  <span>No subscription fees</span>
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
