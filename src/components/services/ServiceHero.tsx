
import React from "react";

const ServiceHero = () => {
  return (
    <div className="relative pt-16 pb-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-normal mb-6">Dienstleistungen</h1>
          <p className="text-xl text-white/90">
            Aussergewöhnliche Handwerkskunst und Expertise für Ihre wertvollen Schmuckstücke und Uhren
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ServiceHero;
