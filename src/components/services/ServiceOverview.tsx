
import React from "react";

const ServiceOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Umfassende Dienstleistungen</h2>
          <p className="text-lg text-black/80">
            Bei Kobler Goldschmied & Uhrmacher AG bieten wir eine Reihe von spezialisierten Dienstleistungen, die alle Ihre Anforderungen an feine Uhren, exquisiten Schmuck und hochwertige Edelsteine erfüllen.
          </p>
          <div className="prose max-w-none text-black/80 mt-8">
            <p>
              Ob Sie auf der Suche nach einer einzigartigen Uhr, einer maßgeschneiderten Schmuckkreation, professionellen Reparaturdiensten oder einer fachkundigen Bewertung sind – unser engagiertes Team kombiniert jahrzehntelange Erfahrung mit unerschütterlicher Leidenschaft, um außergewöhnliche Ergebnisse zu erzielen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
