
import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Display loading screen for 2 seconds, then start fading out
    const displayTimer = setTimeout(() => {
      setOpacity(0);
    }, 2000);

    // Complete the loading after fade out animation
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 2500);

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
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <img 
        src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
        alt="Kobler Logo" 
        className="h-16 md:h-24 mb-8"
      />
      <div className="mt-8 relative">
        <div className="h-[1px] w-24 md:w-32 bg-black/30 overflow-hidden">
          <div className="h-full bg-black w-1/2 animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
