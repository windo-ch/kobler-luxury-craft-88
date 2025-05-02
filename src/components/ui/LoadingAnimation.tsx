
import React, { useEffect, useRef } from 'react';

const LoadingAnimation = () => {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  
  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      if (!path) return;
      
      const length = path.getTotalLength();
      
      // Set up the starting position
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      // Trigger the animation with delay based on the index
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        path.style.strokeDashoffset = '0';
      }, index * 200);
    });
    
    // Final reveal animation after all paths are drawn
    const totalDelay = (pathRefs.current.length * 200) + 500;
    
    setTimeout(() => {
      pathRefs.current.forEach((path) => {
        if (!path) return;
        path.style.fill = '#000000';
        path.style.transition = 'fill 0.5s ease-in-out';
      });
    }, totalDelay);
    
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <svg 
        width="300" 
        height="150" 
        viewBox="0 0 800 400" 
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white"
      >
        {/* K */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M14,25 L14,170 M50,25 L14,90 L60,170"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* O */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M120,25 C160,25 185,55 185,95 C185,140 155,170 120,170 C85,170 55,140 55,95 C55,55 80,25 120,25 Z"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* B */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M200,25 L200,170 M200,25 Q250,25 250,60 Q250,95 200,95 M200,95 Q260,95 260,135 Q260,170 200,170"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* L */}
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M275,25 L275,170 L330,170"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* E */}
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M410,25 L345,25 L345,170 L410,170 M345,95 L390,95"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* R */}
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M425,25 L425,170 M425,25 Q470,25 470,60 Q470,95 425,95 M445,95 L480,170"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Z */}
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M100,240 L180,240 L100,320 L180,320"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* U */}
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M200,240 L200,300 Q200,320 225,320 Q250,320 250,300 L250,240"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* G */}
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M330,240 C290,240 270,260 270,280 C270,300 290,320 330,320 C370,320 390,300 390,280 L390,275 L330,275"
          stroke="#000000"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default LoadingAnimation;
