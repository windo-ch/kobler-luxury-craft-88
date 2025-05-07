
import React from "react";

const PearlsGallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1602752250015-52934bc45613?q=80&w=2070&auto=format&fit=crop",
      alt: "Perlenschmuck",
      caption: "Exquisite Perlenkette"
    },
    {
      src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2070&auto=format&fit=crop",
      alt: "Perlenfarm",
      caption: "Perlenfarm im Südpazifik"
    },
    {
      src: "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?q=80&w=2070&auto=format&fit=crop",
      alt: "Geöffnete Perlenmuschel",
      caption: "Perlen in der geöffneten Muschel"
    },
    {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Schwarze Perlen",
      caption: "Tahiti Perlen mit charakteristischem dunklen Farbton"
    },
    {
      src: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2070&auto=format&fit=crop",
      alt: "Perlenring",
      caption: "Eleganter Perlenring mit Diamantbesatz"
    },
    {
      src: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?q=80&w=2059&auto=format&fit=crop",
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
