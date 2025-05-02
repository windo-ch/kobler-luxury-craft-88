
import React, { useEffect, useState } from "react";
import { CircleFadingPlus } from "lucide-react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Display loading screen for 2.5 seconds, then start fading out
    const displayTimer = setTimeout(() => {
      setOpacity(0);
    }, 2500);

    // Complete the loading after fade out animation (total 3 seconds)
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 3000);

    return () => {
      clearTimeout(displayTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div 
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      style={{ 
        opacity, 
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <div className="relative">
        <img 
          src="/lovable-uploads/79756af4-30d5-4cb6-ba62-65f033d62b53.png" 
          alt="Kobler Zug Logo" 
          className="w-64 md:w-80 mb-6 animate-pulse duration-3000"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
          <CircleFadingPlus className="h-8 w-8 text-luxury-gold animate-spin" />
        </div>
      </div>
      <div className="mt-24 relative">
        <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-luxury-gold to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
