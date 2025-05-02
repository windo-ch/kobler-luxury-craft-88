
import React, { useEffect, useState, useMemo } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

interface Gem {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: number;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [opacity, setOpacity] = useState(1);
  const [revealedGems, setRevealedGems] = useState<number[]>([]);
  
  // Define the gems positions randomly but consistently
  const gems = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 70 + 15}%`,
      left: `${Math.random() * 70 + 15}%`,
      size: `${Math.random() * 30 + 40}px`,
      delay: Math.random() * 1000 + 100,
    }));
  }, []);

  useEffect(() => {
    // Reveal gems one by one
    const gemTimers = gems.map((gem) => {
      return setTimeout(() => {
        setRevealedGems(prev => [...prev, gem.id]);
      }, gem.delay);
    });
    
    // Start fading out after all gems are shown
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 2500);

    // Complete the loading after fade animation
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 3000);

    return () => {
      gemTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete, gems]);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      style={{ 
        opacity, 
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Gems from the provided image */}
        {gems.map((gem) => (
          <div
            key={gem.id}
            className="absolute transition-opacity duration-500"
            style={{
              top: gem.top,
              left: gem.left,
              width: gem.size,
              height: gem.size,
              opacity: revealedGems.includes(gem.id) ? 1 : 0,
              transform: 'translate(-50%, -50%)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                backgroundImage: `url('/lovable-uploads/0bff3816-bcb3-4cc2-a892-df23dd2670b3.png')`,
                backgroundSize: '800px 800px',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Kobler Logo below the gems */}
      <img 
        src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
        alt="Kobler Logo" 
        className="h-12 md:h-16 mt-8"
        style={{
          opacity: revealedGems.length > gems.length / 2 ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default LoadingScreen;
