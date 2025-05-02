
import React from "react";
import { Calendar } from "lucide-react";

const RubyStoryHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[500px]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubycleaned-scaled.jpg"
          alt="22-karätiger Rubin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-navy/60"></div>
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="luxury-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-luxury-gold/90 text-white px-3 py-1 mb-6 backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider font-medium">30. August 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Journey of a Ruby: Der Weg eines aussergewöhnlichen 22-karatigen Rubins
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Von Bangkok bis nach Zug – die faszinierende Reise eines seltenen Edelsteins und seine Transformation zu einem Meisterwerk der Schmuckkunst.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default RubyStoryHero;
