
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
    <section className="section-padding bg-secondary">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Our Services</h2>
          <p className="body-md max-w-2xl mx-auto text-black/80">
            Von meisterhaften Reparaturen bis hin zu exklusiven Kreationen bieten unsere Handwerker ein umfassendes Dienstleistungsspektrum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group"
            >
              <div className="mb-6 inline-flex items-center justify-center">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="body-sm text-black/70 mb-4">{service.description}</p>
              <span className="text-xs uppercase tracking-wider font-medium flex items-center hover-underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/services" className="btn">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KoblerServicesOverview;
