
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const KoblerHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll down handler
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Large background image with subtle zoom effect */}
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2400"
          alt="Kobler luxury timepiece"
          className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative flex flex-col justify-end h-full pb-20 md:pb-32">
        <div className="luxury-container">
          <div className={`max-w-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-white heading-xl mb-8">
              Timeless Elegance.<br className="hidden md:block" /> Masterful Craftsmanship.
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl">
              Exquisite timepieces and jewelry creations since 1996 in the heart of Zug, Switzerland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/collections" className="btn">
                Discover The Collection
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white/10 hover:text-white">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with animation */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2">Explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default KoblerHeroSection;
