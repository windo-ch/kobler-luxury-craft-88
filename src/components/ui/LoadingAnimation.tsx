
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
      }, index * 300);
    });
    
    // Final reveal animation after all paths are drawn
    const totalDelay = (pathRefs.current.length * 300) + 500;
    
    setTimeout(() => {
      pathRefs.current.forEach((path) => {
        if (!path) return;
        path.style.fill = 'currentColor';
        path.style.transition = 'fill 0.5s ease-in-out';
      });
    }, totalDelay);
    
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <svg 
        width="300" 
        height="150" 
        viewBox="0 0 600 300" 
        xmlns="http://www.w3.org/2000/svg" 
        className="text-luxury-gold"
      >
        {/* K */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M30,30 L30,170 M30,100 L80,30 M30,100 L80,170"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* O */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M120,30 C145,30 170,55 170,100 C170,145 145,170 120,170 C95,170 70,145 70,100 C70,55 95,30 120,30 Z"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* B */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M190,30 L190,170 M190,30 L230,30 C250,30 260,45 260,60 C260,80 245,90 230,90 M190,90 L230,90 C255,90 270,110 270,130 C270,155 250,170 230,170 L190,170"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* L */}
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M290,30 L290,170 L340,170"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* E */}
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M420,30 L360,30 L360,170 L420,170 M360,100 L410,100"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* R */}
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M440,30 L440,170 M440,30 L480,30 C500,30 520,45 520,70 C520,95 500,110 480,110 L440,110 M480,110 L520,170"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* Z */}
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M120,200 L170,200 L120,270 L170,270"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* U */}
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M190,200 L190,250 C190,270 210,270 220,270 C230,270 250,270 250,250 L250,200"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
        
        {/* G */}
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M320,200 C295,200 270,225 270,235 C270,255 295,270 320,270 C345,270 360,255 360,235 L360,235 L330,235 M360,235 L360,200"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default LoadingAnimation;
