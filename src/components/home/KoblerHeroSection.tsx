
import React from "react";
import { Link } from "react-router-dom";

const KoblerHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Large background image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2400"
          alt="Kobler luxury watch"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative flex flex-col justify-end min-h-screen pb-20 md:pb-32">
        <div className="container-lg">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-white heading-xl mb-8">
              Masters of Time<br className="hidden md:block" /> and Treasure
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
              Expert watchmakers and jewelers crafting timeless pieces since 1924 in Zug, Switzerland.
            </p>
            <Link to="/collections" className="btn">
              Explore Our Collections
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
          <div className="w-px h-10 bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default KoblerHeroSection;
