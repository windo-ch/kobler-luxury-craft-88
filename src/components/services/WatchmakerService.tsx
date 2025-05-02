
import React from "react";
import { Watch } from "lucide-react";
import Button from "../ui/Button";

const WatchmakerService = () => {
  return (
    <section id="watchmaker" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Watch className="w-8 h-8 text-black mr-3" />
              <h2 className="text-3xl font-serif">Uhrmacher / Pendulier</h2>
            </div>
            <div className="prose max-w-none text-black/80">
              <p className="mb-4">
                Unsere Uhrmacher kombinieren traditionelles Handwerk mit modernem Fachwissen, um Ihre Zeitmesser zu warten, zu reparieren und zu restaurieren. Mit Präzision und Sorgfalt kümmern sie sich um jedes Detail Ihrer kostbaren Uhr.
              </p>
              <p className="mb-4">
                Unsere Uhrmacherdienste umfassen:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Bandwechsel - Professioneller Austausch von Armbändern</li>
                <li>Batteriewechsel - Fachgerechter Wechsel von Batterien und Akkus</li>
                <li>Reparaturen - Beseitigung von Defekten und technischen Problemen</li>
                <li>Restaurationen - Fachgerechte Wiederherstellung historischer Uhren</li>
                <li>Verkauf - Sorgfältig ausgewählte Qualitätsuhren</li>
              </ul>
              <p>
                Ob routinemäßige Wartung oder komplexe Restaurierung historischer Zeitmesser – unsere Uhrmacher sorgen dafür, dass Ihre Uhr mit höchster Präzision weiterläuft.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/collections/watches" variant="primary">
                Uhrenkollektion entdecken
              </Button>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop"
                alt="Uhrmacherarbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchmakerService;
