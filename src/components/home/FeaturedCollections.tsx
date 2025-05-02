
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

const collections = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    title: "Signature Timepieces",
    description: "Exceptional watches that combine precision engineering with elegant design.",
    link: "/creations/watches",
    category: "Watches"
  },
  {
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
    title: "Bespoke Engagement Rings",
    description: "Handcrafted rings featuring exquisite diamonds and gemstones.",
    link: "/creations/engagement-rings",
    category: "Jewelry"
  },
  {
    image: "https://images.unsplash.com/photo-1589207212797-cfd578c4cbe0?q=80&w=2070&auto=format&fit=crop",
    title: "Artisan Jewelry",
    description: "Handcrafted pieces that showcase the skill of our master goldsmiths.",
    link: "/creations/jewelry",
    category: "Jewelry"
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Gemstones",
    description: "Carefully selected stones of exceptional quality, color, and brilliance.",
    link: "/creations/gemstones",
    category: "Gemstones"
  },
];

const FeaturedCollections = () => {
  return (
    <section className="section-padding bg-luxury-navy text-white">
      <div className="luxury-container">
        <SectionTitle
          title="Featured Collections"
          subtitle="Discover our handpicked selection of exceptional pieces, each representing the pinnacle of craftsmanship and design."
          centered
          light
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {collections.map((collection, index) => (
            <div key={index} className="bg-white">
              <ProductCard {...collection} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/creations" variant="secondary" size="lg">
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
