
import React from "react";
import { Link } from "react-router-dom";

const KoblerHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Large background image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2400"
          alt="Kobler luxury timepiece"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative flex flex-col justify-end h-full pb-20 md:pb-32">
        <div className="container-lg">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-white heading-xl mb-8">
              Timeless Elegance.<br className="hidden md:block" /> Masterful Craftsmanship.
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
              Exquisite timepieces and jewelry creations since 1924 in the heart of Zug, Switzerland.
            </p>
            <Link to="/collections" className="btn">
              Discover The Collection
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
          <div className="w-px h-10 bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default KoblerHeroSection;
