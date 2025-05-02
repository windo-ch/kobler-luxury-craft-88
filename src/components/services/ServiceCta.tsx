
import React from "react";
import Button from "../ui/Button";

const ServiceCta = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Erleben Sie aussergewöhnlichen Service
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Wir laden Sie ein, unsere Boutique in Zug zu besuchen, um unsere Kollektionen und Dienstleistungen aus erster Hand zu entdecken. Unser Expertenteam steht Ihnen bei allen Anliegen rund um Uhren und Schmuck zur Verfügung.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;
