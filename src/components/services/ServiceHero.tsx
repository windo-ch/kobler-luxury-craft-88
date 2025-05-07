
import React, { useEffect, useState } from "react";

const ServiceHero = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-28 pb-16 bg-black text-white min-h-[50vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury watchmaking"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 tracking-tight">Dienstleistungen</h1>
          <div className="w-16 h-px bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-xl mx-auto">
            Aussergewöhnliche Handwerkskunst und Expertise für Ihre wertvollen Schmuckstücke und Uhren
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ServiceHero;
