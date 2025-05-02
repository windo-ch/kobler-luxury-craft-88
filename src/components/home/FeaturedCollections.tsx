
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

const collections = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    title: "Signatur-Zeitmesser",
    description: "Außergewöhnliche Uhren, die Präzisionstechnik mit elegantem Design verbinden.",
    link: "/creations/watches",
    category: "Uhren"
  },
  {
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
    title: "Maßgefertigte Verlobungsringe",
    description: "Handgefertigte Ringe mit exquisiten Diamanten und Edelsteinen.",
    link: "/creations/engagement-rings",
    category: "Schmuck"
  },
  {
    image: "https://images.unsplash.com/photo-1589207212797-cfd578c4cbe0?q=80&w=2070&auto=format&fit=crop",
    title: "Kunsthandwerklicher Schmuck",
    description: "Handgefertigte Stücke, die das Können unserer Goldschmiede-Meister zeigen.",
    link: "/creations/jewelry",
    category: "Schmuck"
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
    title: "Premium-Edelsteine",
    description: "Sorgfältig ausgewählte Steine von außergewöhnlicher Qualität, Farbe und Brillanz.",
    link: "/creations/gemstones",
    category: "Edelsteine"
  },
];

const FeaturedCollections = () => {
  return (
    <section className="section-padding bg-luxury-navy text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{ backgroundImage: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 1px, transparent 1px)", 
                      backgroundSize: "20px 20px" }}></div>
      </div>
      
      <div className="luxury-container relative z-10">
        <SectionTitle
          title="Ausgewählte Kollektionen"
          subtitle="Entdecken Sie unsere handverlesene Auswahl an außergewöhnlichen Stücken, die jeweils den Höhepunkt von Handwerkskunst und Design darstellen."
          centered
          light
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="group bg-white overflow-hidden rounded-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-5">
                <ProductCard {...collection} />
              </div>
              <div className="h-1 w-0 bg-luxury-gold transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            to="/creations" 
            variant="secondary" 
            size="lg"
            className="px-10 tracking-wider border border-luxury-gold/20 hover:border-luxury-gold/50 bg-luxury-gold/10 hover:bg-luxury-gold/20 transition-all duration-300"
          >
            Alle Kollektionen entdecken
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-24 h-24 border-l-2 border-b-2 border-luxury-gold/20 -mb-12 -ml-12"></div>
      <div className="absolute right-0 top-0 w-24 h-24 border-r-2 border-t-2 border-luxury-gold/20 -mt-12 -mr-12"></div>
    </section>
  );
};

export default FeaturedCollections;
