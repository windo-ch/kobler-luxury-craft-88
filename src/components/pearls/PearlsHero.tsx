
import React from "react";

const PearlsHero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/48a37f93-58c9-41ff-ad7b-06457b292d4e.png" 
          alt="Luxury pearls" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-24">
        <div className="max-w-3xl mb-32">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6">Perlen</h1>
          <div className="h-px w-24 bg-white mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-md">
            Zarte Schätze des Meeres, perfekte Naturphänomene mit zeitloser Eleganz und unvergänglicher Schönheit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PearlsHero;
