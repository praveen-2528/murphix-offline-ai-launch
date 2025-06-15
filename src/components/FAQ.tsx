
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Murphix really completely free?",
      answer: "Yes! Murphix is 100% free with no hidden fees, premium tiers, or subscription costs. We believe AI assistance should be accessible to everyone."
    },
    {
      question: "How does offline AI work?",
      answer: "Murphix runs entirely on your device using optimized AI models. No internet connection is required once installed, ensuring complete privacy and instant responses."
    },
    {
      question: "What makes the virtual mouse feature special?",
      answer: "Our virtual mouse allows hands-free computer navigation using voice commands. You can click, scroll, and interact with your screen without touching your mouse or trackpad."
    },
    {
      question: "How secure is my data?",
      answer: "Your data never leaves your device. All conversations, commands, and interactions are processed locally, ensuring complete privacy and security."
    },
    {
      question: "What are the system requirements?",
      answer: "Minimum requirements: Intel i5 processor (or equivalent), 8GB RAM, and 4GB available storage. Most modern computers from the last 5 years will run Murphix smoothly."
    },
    {
      question: "When will Murphix be available?",
      answer: "We're targeting a public release in Q3 2025, with beta testing beginning in Q2 2025. Sign up for early access to be notified first!"
    },
    {
      question: "Which operating systems will be supported?",
      answer: "Murphix will initially launch on Windows and macOS, with Linux support planned for a future update."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300">
            Everything you need to know about Murphix
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openItem === index ? (
                  <ChevronUp className="text-blue-400 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
