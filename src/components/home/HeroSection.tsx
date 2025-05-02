
import React from "react";
import Button from "../ui/Button";
import { ChevronRight } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const HeroSection = () => {
  // Define the images for the carousel
  const heroImages = [
    { 
      src: "/lovable-uploads/d36971d5-33a7-47d5-826e-21040bdc3817.png", 
      alt: "22-karätiger Rubin"
    },
    { 
      src: "/lovable-uploads/0ad3c6cf-89f4-4461-b46f-f5b85f20753b.png",
      alt: "Rubin aus Madagaskar" 
    },
    { 
      src: "/lovable-uploads/82344e9a-27cc-41b8-8085-16087e71f15b.png",
      alt: "Übergabe des 22ct. Rubins in Bangkok"
    },
    { 
      src: "/lovable-uploads/314e4f30-a728-4b8d-8709-631806d7b36c.png",
      alt: "Handgefertigter Ohrschmuck mit Rubinen"
    },
    { 
      src: "/lovable-uploads/0f2e457f-65a2-42d9-ba23-673d898b9475.png",
      alt: "Schleiferin bei der Arbeit in Bangkok"
    },
    { 
      src: "/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png",
      alt: "Dr. Peretti bei der Arbeit im Labor"
    },
    { 
      src: "/lovable-uploads/f4eddf44-b07a-4088-a5bc-18fe8487844b.png",
      alt: "Zeichnen im Büro in Bangkok"
    },
    { 
      src: "/lovable-uploads/f5a901d7-2839-4841-925a-133973977d34.png",
      alt: "Handgefertigter Ring mit Herzform Rubinen"
    },
    { 
      src: "/lovable-uploads/cce5343f-2f03-40ab-9afb-144b5cead03c.png",
      alt: "Kostbare Edelsteine mit DNA-Markierung"
    }
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Image Carousel with Ken Burns Effect */}
      <ImageCarousel 
        images={heroImages} 
        interval={5000} // 5 seconds per image
        transitionDuration={2000} // 2 second transition
      />
      
      <div className="relative z-10 luxury-container text-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Exklusive Schmuckkreationen <span className="text-luxury-gold">von Meisterhand</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Entdecken Sie einzigartige Juwelen, handgefertigt in Zug. Vom ersten Konzept bis zum fertigen Meisterwerk – erleben Sie Schweizer Schmuckhandwerk auf höchstem Niveau.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href="/creations" 
            className="px-6 py-3 bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium text-base"
          >
            Kollektionen entdecken
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            href="/contact" 
            variant="outline" 
            className="px-6 py-3 border-white text-white hover:bg-white/10 font-medium text-base"
          >
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
