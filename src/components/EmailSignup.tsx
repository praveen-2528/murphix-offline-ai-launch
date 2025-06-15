import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      
      // Redirect to download page after 2 seconds
      setTimeout(() => {
        navigate('/download');
      }, 2000);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 animate-scale-in">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-4">
            <Mail className="mx-auto mb-2 text-blue-400" size={24} />
            <h3 className="text-lg font-semibold text-white">Get Early Access</h3>
            <p className="text-slate-300 text-sm">Be the first to know when Murphix launches</p>
          </div>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6">
              Notify Me
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-4">
          <Check className="mx-auto mb-2 text-green-400" size={32} />
          <h3 className="text-lg font-semibold text-white mb-1">Thanks!</h3>
          <p className="text-slate-300 text-sm">Redirecting to download...</p>
        </div>
      )}
    </div>
  );
};
