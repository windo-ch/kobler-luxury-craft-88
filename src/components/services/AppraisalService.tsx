
import React from "react";
import { Scale } from "lucide-react";
import Button from "../ui/Button";

const AppraisalService = () => {
  return (
    <section id="appraisals" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620783770629-122b7f187703?q=80&w=2070&auto=format&fit=crop"
                alt="Schätzungen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 text-black mr-3" />
              <h2 className="text-3xl font-serif">Schätzungen</h2>
            </div>
            <div className="prose max-w-none text-black/80">
              <p className="mb-4">
                Unsere professionellen Bewertungsdienste bieten genaue und detaillierte Schätzungen von Uhren, Schmuck und losen Edelsteinen. Diese Bewertungen dienen verschiedenen Zwecken, darunter Versicherungsschutz, Nachlassplanung und Marktwertermittlung.
              </p>
              <p className="mb-4">
                Unsere Bewertungsdienste umfassen:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Versicherungswert - Grundlage für angemessenen Versicherungsschutz</li>
                <li>Erbteilungswert - Faire Bewertung für Nachlassregelungen</li>
                <li>Handelswert - Aktuelle Marktbewertung für Kaufentscheidungen</li>
                <li>Liquidationswert - Realistische Einschätzung für schnelle Verkäufe</li>
              </ul>
              <p>
                Jede Schätzung wird von unseren zertifizierten Experten mit größter Sorgfalt durchgeführt, die über umfangreiches Wissen über den Markt und die technischen Aspekte feiner Zeitmesser und Schmuck verfügen.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                Schätzung anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppraisalService;
