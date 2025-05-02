
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-luxury-light py-16">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-luxury-navy mb-8">
            Entdecken Sie unsere einzigartigen Kreationen
          </h2>
          <p className="text-luxury-charcoal/80 mb-10 max-w-2xl mx-auto">
            Besuchen Sie uns in unserem Atelier in Zug und erleben Sie die Schönheit unserer handgefertigten Schmuckstücke und Uhren. Oder vereinbaren Sie einen persönlichen Termin für eine individuelle Beratung.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-luxury-navy text-white px-8 py-3 transition-colors hover:bg-luxury-navy/90 uppercase tracking-wider text-sm font-medium">
              Kontakt aufnehmen
            </Link>
            <Link to="/creations" className="bg-transparent border border-luxury-navy text-luxury-navy px-8 py-3 transition-colors hover:bg-luxury-navy/10 uppercase tracking-wider text-sm font-medium">
              Kreationen entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
