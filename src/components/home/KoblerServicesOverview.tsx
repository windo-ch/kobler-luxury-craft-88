
import React from "react";
import { Link } from "react-router-dom";
import { Diamond, Watch, Hammer, Scale } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Gold- und Silberschmied",
    description: "Anfertigungen, Reparaturen, Umarbeitungen und Verkauf von feinen Schmuckstücken.",
    icon: Hammer,
    link: "/services#goldsmith"
  },
  {
    id: 2,
    title: "Gemmologe / Steinschleifer",
    description: "Analysieren, Polieren, Umschleifen, Verkauf und Zertifizieren von Edelsteinen.",
    icon: Diamond,
    link: "/services#gemologist"
  },
  {
    id: 3,
    title: "Uhrmacher / Pendulier",
    description: "Bandwechsel, Batteriewechsel, Reparaturen, Restaurationen und Verkauf von Uhren.",
    icon: Watch,
    link: "/services#watchmaker"
  },
  {
    id: 4,
    title: "Schätzungen",
    description: "Versicherungswert, Erbteilungswert, Handelswert und Liquidationswert für Ihre Wertsachen.",
    icon: Scale,
    link: "/services#appraisals"
  }
];

const KoblerServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Unsere Dienstleistungen</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Von meisterhaften Reparaturen bis hin zu exklusiven Kreationen bieten unsere Handwerker ein umfassendes Dienstleistungsspektrum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group flex flex-col items-start"
            >
              <div className="mb-6 inline-flex items-center justify-center">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-black/70 mb-4">{service.description}</p>
              <span className="text-xs uppercase tracking-wider font-medium flex items-center border-b border-transparent group-hover:border-black transition-all duration-300">
                Mehr erfahren
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KoblerServicesOverview;
