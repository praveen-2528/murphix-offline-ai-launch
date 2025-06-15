
import { useEffect, useState } from "react";
import { Clock, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <Clock className="mx-auto mb-4 text-blue-400 animate-pulse" size={48} />
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Murphix Isn't Ready Yet
          </h1>
          
          <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <AlertCircle className="mr-2 text-amber-400" size={20} />
              <span className="text-amber-200 font-medium">Development in Progress</span>
            </div>
            <p className="text-amber-100 text-sm">
              We're working hard to bring you the best offline AI experience. Murphix is still under development.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">Expected Launch</h2>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <span className="text-2xl font-bold text-blue-300">Q3 2025</span>
              <p className="text-slate-300 text-sm mt-1">Free • Private • Offline</p>
            </div>
          </div>

          <p className="text-slate-300 mb-6">
            Thank you for your interest! We'll notify you via email as soon as Murphix is ready for download.
          </p>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
            
            <p className="text-slate-400 text-sm">
              Redirecting automatically in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
