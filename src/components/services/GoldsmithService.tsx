
import React from "react";
import { Hammer } from "lucide-react";
import Button from "../ui/Button";

const GoldsmithService = () => {
  return (
    <section id="goldsmith" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Hammer className="w-8 h-8 text-black mr-3" />
              <h2 className="text-3xl font-serif">Gold- und Silberschmied</h2>
            </div>
            <div className="prose max-w-none text-black/80">
              <p className="mb-4">
                Unsere Gold- und Silberschmiede vereinen traditionelles Handwerk mit modernem Design, um außergewöhnliche Schmuckstücke zu kreieren. Mit jahrelanger Erfahrung und höchster Präzision erfüllen wir Ihre individuellen Wünsche.
              </p>
              <p className="mb-4">
                Unsere Dienstleistungen umfassen:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Anfertigungen - Maßgefertigter Schmuck nach Ihren Wünschen</li>
                <li>Reparaturen - Fachgerechte Instandsetzung von Schmuckstücken</li>
                <li>Umarbeitungen - Neugestaltung von vorhandenem Schmuck</li>
                <li>Verkauf - Exklusive Schmuckkollektion</li>
              </ul>
              <p>
                Von der ersten Skizze bis zum fertigen Schmuckstück begleiten wir Sie durch den gesamten Prozess und garantieren ein einzigartiges Ergebnis, das Ihre Persönlichkeit widerspiegelt.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/collections/jewelry" variant="primary">
                Schmuckkollektion entdecken
              </Button>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617160895052-22d4d400f471?q=80&w=2070&auto=format&fit=crop"
                alt="Goldschmiedearbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldsmithService;
