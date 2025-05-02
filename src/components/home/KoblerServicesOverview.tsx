
import React from "react";
import { Link } from "react-router-dom";
import { Watch, Diamond, Hammer, Scale, HandCoins } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Fine Watch Sales",
    description: "Discover our curated collection of prestigious timepieces from renowned Swiss manufacturers.",
    icon: Watch,
    link: "/services#watches"
  },
  {
    id: 2,
    title: "Jewelry & Gemstone Sales",
    description: "Explore our selection of exquisite jewelry and rare gemstones, each piece selected for its exceptional quality.",
    icon: Diamond,
    link: "/services#jewelry"
  },
  {
    id: 3,
    title: "Expert Repairs",
    description: "Trust our master watchmakers and jewelers to restore your precious pieces with unparalleled expertise.",
    icon: Hammer,
    link: "/services#repairs"
  },
  {
    id: 4,
    title: "Appraisals & Valuations",
    description: "Receive professional assessments of your timepieces and jewelry from our certified experts.",
    icon: Scale,
    link: "/services#appraisals"
  },
  {
    id: 5,
    title: "Bespoke Designs",
    description: "Commission unique, personalized creations crafted to your exact specifications by our master artisans.",
    icon: HandCoins,
    link: "/services#bespoke"
  }
];

const KoblerServicesOverview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Our Services</h2>
          <p className="body-md max-w-2xl mx-auto text-black/80">
            From expert repairs to bespoke creations, our master craftsmen provide a comprehensive range of services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
