
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const KoblerHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
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
    <section className="relative w-full h-screen overflow-hidden m-0 p-0">
      {/* Full screen background image without margins or padding */}
      <div className="absolute inset-0 w-full h-full m-0 p-0">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2400"
          alt="Kobler luxury timepiece"
          className="w-full h-full object-cover opacity-80 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content overlay - centered horizontally and vertically */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full m-0 p-0">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight mb-8">
              Timeless Elegance.<br className="hidden md:block" /> Masterful Craftsmanship.
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Exquisite timepieces and jewelry creations since 1996 in the heart of Zug, Switzerland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link 
                to="/collections" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-none border border-white bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Discover The Collection
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-none border border-white bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
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
