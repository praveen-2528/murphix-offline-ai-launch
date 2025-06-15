
import { useEffect, useState } from "react";
import { Download as DownloadIcon, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-start download after 3 seconds
    const timer = setTimeout(() => {
      handleDownload();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    // This is where you'll add your actual download file URL later
    // For now, it just simulates a download
    console.log("Download started");
    setDownloadStarted(true);
    
    // You can replace this with actual file download logic:
    // const link = document.createElement('a');
    // link.href = '/path-to-your-file.zip';
    // link.download = 'murphix-installer.zip';
    // link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {!downloadStarted ? (
            <>
              <DownloadIcon className="mx-auto mb-4 text-blue-400" size={48} />
              <h1 className="text-2xl font-bold text-white mb-4">
                Thank You for Signing Up!
              </h1>
              <p className="text-slate-300 mb-6">
                Your download will start automatically in a few seconds. If it doesn't start, click the button below.
              </p>
              <Button 
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
              >
                Download Now
              </Button>
            </>
          ) : (
            <>
              <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h1 className="text-2xl font-bold text-white mb-4">
                Download Started!
              </h1>
              <p className="text-slate-300 mb-6">
                If your download didn't start automatically, please check your downloads folder or try again.
              </p>
              <Button 
                onClick={handleDownload}
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 mb-4"
              >
                Download Again
              </Button>
            </>
          )}
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="mr-2 text-yellow-400" size={16} />
              <span className="text-sm text-slate-300">Coming Q3 2025</span>
            </div>
            <Button 
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-slate-300 hover:text-white"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
