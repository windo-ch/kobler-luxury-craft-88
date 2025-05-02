
import React from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Watches",
    description: "Precision timepieces crafted with exceptional attention to detail",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200",
    link: "/collections/watches"
  },
  {
    id: 2,
    title: "Jewelry",
    description: "Exquisite jewelry pieces that blend artistry with expertise",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200",
    link: "/collections/jewelry"
  },
  {
    id: 3,
    title: "Gemstones",
    description: "Rare and precious gemstones selected with discerning expertise",
    image: "https://images.unsplash.com/photo-1573408301828-96f89a3523e0?auto=format&fit=crop&q=80&w=1200",
    link: "/collections/gemstones"
  }
];

const KoblerFeaturedCollections = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-lg">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="heading-lg mb-6">Collections</h2>
          <p className="body-md max-w-2xl mx-auto text-black/80">
            Discover our curated collections of fine watches, jewelry, and rare gemstones, each piece reflecting our commitment to exceptional craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              to={collection.link}
              key={collection.id}
              className="group block"
            >
              <div className="overflow-hidden mb-4">
                <div className="aspect-[3/4]">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="heading-sm mb-2">{collection.title}</h3>
              <p className="body-sm text-black/70">{collection.description}</p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/collections" className="btn">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KoblerFeaturedCollections;
