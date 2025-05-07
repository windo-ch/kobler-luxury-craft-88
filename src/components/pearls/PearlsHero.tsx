
import React, { useState, useEffect } from "react";

const PearlsHero = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/48a37f93-58c9-41ff-ad7b-06457b292d4e.png" 
          alt="Luxury pearls" 
          className="h-full w-full object-cover transform scale-110 transition-transform duration-[25s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-24">
        <div className={`max-w-3xl mb-32 transition-all duration-1000 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6 tracking-tight">Perlen</h1>
          <div className="h-px w-24 bg-white mb-6"></div>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-lg">
            Zarte Schätze des Meeres, perfekte Naturphänomene mit zeitloser Eleganz und unvergänglicher Schönheit.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default PearlsHero;
