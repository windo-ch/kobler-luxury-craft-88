
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { Clock, Gem, Watch } from "lucide-react";

const services = [
  {
    title: "Fine Watches",
    description: "Discover our collection of precision timepieces from renowned brands or explore our bespoke watch creation services.",
    icon: <Watch className="w-12 h-12 text-luxury-gold" />,
    link: "/services#watches"
  },
  {
    title: "Jewelry & Gemstones",
    description: "From elegant engagement rings to statement necklaces, our jewelry selection showcases the finest craftsmanship and materials.",
    icon: <Gem className="w-12 h-12 text-luxury-gold" />,
    link: "/services#jewelry"
  },
  {
    title: "Expert Repairs",
    description: "Our master watchmakers and goldsmiths provide meticulous repair and restoration services for your treasured timepieces and jewelry.",
    icon: <Clock className="w-12 h-12 text-luxury-gold" />,
    link: "/services#repairs"
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of services tailored to meet your luxury watch and jewelry needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
