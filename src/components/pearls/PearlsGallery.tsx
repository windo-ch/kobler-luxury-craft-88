
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const PearlsGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/48a37f93-58c9-41ff-ad7b-06457b292d4e.png",
      alt: "Perlenschmuck",
      caption: "Exquisite Perlenkette"
    },
    {
      src: "/lovable-uploads/275576c8-3701-40c8-8141-f70b4c22cb93.png",
      alt: "Perlenfarm",
      caption: "Perlenfarm im Südpazifik"
    },
    {
      src: "/lovable-uploads/b5d8ded1-b837-4209-8245-bd9f8b115919.png",
      alt: "Geöffnete Perlenmuschel",
      caption: "Perlen in der geöffneten Muschel"
    },
    {
      src: "/lovable-uploads/f20decfa-ccdd-4018-96b0-19e83f4e00b4.png",
      alt: "Schwarze Perlen",
      caption: "Tahiti Perlen mit charakteristischem dunklen Farbton"
    },
    {
      src: "/lovable-uploads/afd1ab53-c73d-448e-a1ee-76d2b4b836b2.png",
      alt: "Perlenring",
      caption: "Eleganter Perlenring mit Diamantbesatz"
    },
    {
      src: "/lovable-uploads/4712e8ff-4b1e-472b-b628-75fef4ff7b7d.png",
      alt: "Goldene Perlen",
      caption: "Golden schimmernde Südseeperlen"
    },
  ];

  return (
    <section className="section-padding bg-luxury-light/5">
      <div className="luxury-container">
        <SectionTitle 
          title="Perlen Gallery" 
          subtitle="Einzigartige Perlen in all ihren Farben und Formen" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-md shadow-md bg-white">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4">
                <p className="text-luxury-charcoal/80 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-md shadow-md text-center">
          <h3 className="font-playfair text-2xl mb-4 text-luxury-navy">FINEST GEMSTONES FINEST JEWELRY ART FINEST WATCH ART</h3>
          <div className="h-0.5 w-24 bg-luxury-gold mx-auto mb-6"></div>
          <div className="max-w-2xl mx-auto">
            <p className="text-luxury-charcoal mb-4">
              Rigistrasse 4, CH-6300 Zug
              <br />
              <a href="mailto:info@goldschmied-uhrmacher.ch" className="text-luxury-gold hover:underline">info@goldschmied-uhrmacher.ch</a>
              <br />
              <a href="https://www.goldschmied-uhrmacher.ch" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">www.goldschmied-uhrmacher.ch</a>
              <br />
              Telefon: <a href="tel:+41885008" className="text-luxury-gold hover:underline">041 88 500 88</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlsGallery;
