
import { Monitor, Cpu, HardDrive, MemoryStick } from "lucide-react";

export const SystemRequirements = () => {
  const requirements = [
    {
      icon: Cpu,
      title: "Processor",
      minimum: "Intel i5 or AMD equivalent",
      recommended: "Intel i7 or AMD Ryzen 7"
    },
    {
      icon: MemoryStick,
      title: "Memory",
      minimum: "8GB RAM",
      recommended: "16GB RAM"
    },
    {
      icon: HardDrive,
      title: "Storage",
      minimum: "4GB available space",
      recommended: "8GB available space"
    },
    {
      icon: Monitor,
      title: "Operating System",
      minimum: "Windows 10 / macOS 10.15",
      recommended: "Windows 11 / macOS 12+"
    }
  ];

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            System Requirements
          </h2>
          <p className="text-xl text-slate-300">
            Make sure your computer is ready for Murphix
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <req.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{req.title}</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-green-400 font-medium">Minimum:</span>
                  <p className="text-slate-300 text-sm">{req.minimum}</p>
                </div>
                <div>
                  <span className="text-sm text-blue-400 font-medium">Recommended:</span>
                  <p className="text-slate-300 text-sm">{req.recommended}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            <h3 className="text-xl font-semibold text-white mb-3">Performance Note</h3>
            <p className="text-slate-300 leading-relaxed">
              Murphix is optimized to run efficiently on most modern computers. The AI processing is designed to use minimal resources while delivering instant responses. 
              Higher specifications will provide smoother performance, especially when using multiple features simultaneously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
