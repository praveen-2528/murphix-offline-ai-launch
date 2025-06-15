
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "Murphix has completely transformed my workflow. The offline functionality means I never have to worry about connectivity issues, and the virtual mouse is incredibly intuitive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Digital Designer",
      content: "The privacy aspect is what sold me. Finally, an AI assistant that keeps everything local. The voice commands are so natural and responsive.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Business Analyst",
      content: "I've tried many AI assistants, but Murphix stands out with its offline capabilities and seamless integration. It's like having a personal assistant that never sleeps.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have revolutionized their productivity with Murphix
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
