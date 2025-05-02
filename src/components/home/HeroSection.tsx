
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=2070&auto=format&fit=crop"
          alt="Luxus Uhrmacherkunst"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="luxury-container">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
              Kobler Goldschmied & Uhrmacher AG
            </h1>
            <p className="text-xl md:text-2xl font-montserrat text-white/90 mb-8">
              Feinste Uhren, Edelsteine und Schmuck
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8">
              Erleben Sie Exzellenz in der Uhrmacherei und Schmuckkunst im Herzen von Zug, Schweiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/creations" variant="secondary" size="lg">
                Kollektionen Entdecken
              </Button>
              <Button to="/about" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Unsere Geschichte
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-6 h-6">
          <svg 
            className="w-full h-full text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
