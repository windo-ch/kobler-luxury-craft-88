
import React from "react";
import { Diamond } from "lucide-react";
import Button from "../ui/Button";

const GemologistService = () => {
  return (
    <section id="gemologist" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566977827083-6431c2e555f9?q=80&w=2070&auto=format&fit=crop"
                alt="Edelsteine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <Diamond className="w-8 h-8 text-black mr-3" />
              <h2 className="text-3xl font-serif">Gemmologe / Steinschleifer</h2>
            </div>
            <div className="prose max-w-none text-black/80">
              <p className="mb-4">
                Unsere Gemmologen und Steinschleifer verfügen über tiefgreifendes Fachwissen und modernste Technologien zur Analyse und Bearbeitung von Edelsteinen. Ihr Engagement für Exzellenz spiegelt sich in jedem Edelstein wider, den sie bearbeiten.
              </p>
              <p className="mb-4">
                Unsere Dienstleistungen umfassen:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Analysieren - Professionelle Bestimmung von Edelsteinen</li>
                <li>Polieren - Auffrischen des Glanzes Ihrer Edelsteine</li>
                <li>Umschleifen - Neugestaltung und Optimierung von Edelsteinen</li>
                <li>Verkauf - Sorgfältig ausgewählte Edelsteine höchster Qualität</li>
                <li>Zertifizieren - Offizielle Dokumentation der Echtheit und Qualität</li>
              </ul>
              <p>
                Mit unserem gemmologischen Fachwissen garantieren wir, dass jeder Edelstein sein volles Potenzial entfaltet und seine natürliche Schönheit optimal zur Geltung kommt.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/collections/gemstones" variant="primary">
                Edelsteinkollektion entdecken
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemologistService;
