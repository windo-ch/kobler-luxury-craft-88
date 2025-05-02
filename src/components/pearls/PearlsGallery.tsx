
import React from "react";

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
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Gallery</h2>
          <p className="text-black/60">
            Einzigartige Perlen in all ihren Farben und Formen
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="mt-4 text-sm text-black/60">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PearlsGallery;
