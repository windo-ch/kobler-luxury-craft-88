
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { Watch, Diamond, Hammer, Scale } from "lucide-react";

const services = [
  {
    title: "Gold- und Silberschmied",
    description: "Anfertigungen, Reparaturen, Umarbeitungen und Verkauf von feinen Schmuckstücken.",
    icon: <Hammer className="w-12 h-12 text-luxury-gold" />,
    link: "/services#goldsmith"
  },
  {
    title: "Gemmologe / Steinschleifer",
    description: "Analysieren, Polieren, Umschleifen, Verkauf und Zertifizieren von Edelsteinen.",
    icon: <Diamond className="w-12 h-12 text-luxury-gold" />,
    link: "/services#gemologist"
  },
  {
    title: "Uhrmacher / Pendulier",
    description: "Bandwechsel, Batteriewechsel, Reparaturen, Restaurationen und Verkauf von Uhren.",
    icon: <Watch className="w-12 h-12 text-luxury-gold" />,
    link: "/services#watchmaker"
  },
  {
    title: "Schätzungen",
    description: "Versicherungswert, Erbteilungswert, Handelswert und Liquidationswert für Ihre Wertsachen.",
    icon: <Scale className="w-12 h-12 text-luxury-gold" />,
    link: "/services#appraisals"
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <SectionTitle
          title="Our Services"
          subtitle="Wir bieten Ihnen ein umfassendes Angebot an Dienstleistungen für Ihre Uhren, Schmuck und Edelsteine."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-luxury-light p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-playfair text-luxury-navy mb-3">
                {service.title}
              </h3>
              <p className="text-luxury-charcoal/80 mb-6">
                {service.description}
              </p>
              <Button 
                to={service.link} 
                variant="outline" 
                size="sm" 
                className="mt-auto"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
