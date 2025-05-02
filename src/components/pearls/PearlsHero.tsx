
import React from "react";

const PearlsHero = () => {
  return (
    <div className="relative bg-luxury-navy h-[70vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/48a37f93-58c9-41ff-ad7b-06457b292d4e.png" 
          alt="Luxurious pearl jewelry" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/50 to-luxury-navy/90" />
      </div>
      
      <div className="luxury-container relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-playfair font-medium mb-4">
          Perlen
        </h1>
        <p className="text-lg md:text-2xl text-luxury-gold font-playfair italic max-w-3xl">
          Ein ewiges Versprechen
        </p>
        <div className="h-0.5 w-24 bg-luxury-gold mt-8" />
      </div>
    </div>
  );
};

export default PearlsHero;
