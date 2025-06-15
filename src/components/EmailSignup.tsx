import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  email: string;
  name: string;
  company: string;
}

interface FormErrors {
  email?: string;
  name?: string;
}

export const EmailSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    company: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting to Supabase:", formData);
      
      const { error } = await supabase
        .from('early_access_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null
          }
        ]);

      if (error) {
        console.error("Supabase error:", error);
        
        // Handle duplicate email error specifically
        if (error.code === '23505') {
          toast({
            title: "Already signed up",
            description: "This email is already on our early access list!",
            variant: "destructive",
          });
          return;
        }
        
        throw error;
      }
      
      console.log("Successfully saved to database");
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
      
      // Redirect to download page after 2 seconds
      setTimeout(() => {
        navigate('/download');
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 ${
                  errors.name ? 'border-red-400 focus:border-red-400' : ''
                }`}
                required
              />
              {errors.name && (
                <div className="flex items-center mt-1 text-red-400 text-xs">
                  <AlertCircle size={12} className="mr-1" />
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange('email')}
                className={`bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 ${
                  errors.email ? 'border-red-400 focus:border-red-400' : ''
                }`}
                required
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-red-400 text-xs">
                  <AlertCircle size={12} className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="company" className="text-white text-sm font-medium">
                Company (Optional)
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleInputChange('company')}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </Button>
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
