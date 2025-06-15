
import { Check, Clock, Zap } from "lucide-react";

export const Timeline = () => {
  const milestones = [
    {
      title: "Core AI Development",
      description: "Building the offline AI engine",
      status: "completed",
      date: "Q3 2024"
    },
    {
      title: "Voice Integration",
      description: "Natural voice commands & responses",
      status: "completed",
      date: "Q4 2024"
    },
    {
      title: "Virtual Mouse Feature",
      description: "Revolutionary hands-free navigation",
      status: "current",
      date: "Q1 2025"
    },
    {
      title: "Beta Testing",
      description: "Limited beta release for early users",
      status: "upcoming",
      date: "Q2 2025"
    },
    {
      title: "Public Launch",
      description: "Free release for everyone",
      status: "upcoming",
      date: "Q3 2025"
    }
  ];

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Development Timeline
          </h2>
          <p className="text-xl text-slate-300">
            Track our progress towards bringing Murphix to life
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-start gap-6 animate-slide-up hover:transform hover:translate-x-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  milestone.status === 'completed' 
                    ? 'bg-green-500 border-green-400' 
                    : milestone.status === 'current'
                    ? 'bg-blue-500 border-blue-400 animate-pulse'
                    : 'bg-slate-600 border-slate-500'
                }`}>
                  {milestone.status === 'completed' ? (
                    <Check className="text-white" size={20} />
                  ) : milestone.status === 'current' ? (
                    <Zap className="text-white" size={20} />
                  ) : (
                    <Clock className="text-white" size={20} />
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    <span className="text-sm text-slate-400 bg-white/10 px-3 py-1 rounded-full">
                      {milestone.date}
                    </span>
                  </div>
                  <p className="text-slate-300">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
