
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import ProductCard from "../components/ui/ProductCard";

const collections = [
  {
    title: "Watches",
    description: "Discover our collection of exquisite timepieces, from classic designs to contemporary innovations.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1974&auto=format&fit=crop",
        title: "Classic Timepieces",
        description: "Elegant watches inspired by traditional Swiss design.",
        link: "/creations/classic-timepieces",
        category: "Watches"
      },
      {
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop",
        title: "Contemporary Collection",
        description: "Modern watches that blend innovation with sophistication.",
        link: "/creations/contemporary-collection",
        category: "Watches"
      },
      {
        image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1964&auto=format&fit=crop",
        title: "Vintage & Rare",
        description: "Carefully curated vintage timepieces and limited editions.",
        link: "/creations/vintage-rare",
        category: "Watches"
      },
      {
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1974&auto=format&fit=crop",
        title: "Luxury Sports Watches",
        description: "Precision timepieces designed for the active lifestyle.",
        link: "/creations/sports-watches",
        category: "Watches"
      }
    ]
  },
  {
    title: "Jewelry",
    description: "Explore our handcrafted jewelry pieces, showcasing the artistry and expertise of our master goldsmiths.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
        title: "Engagement Rings",
        description: "Bespoke rings crafted to symbolize your unique love story.",
        link: "/creations/engagement-rings",
        category: "Jewelry"
      },
      {
        image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1974&auto=format&fit=crop",
        title: "Necklaces & Pendants",
        description: "Elegant pieces that add a touch of sophistication to any ensemble.",
        link: "/creations/necklaces",
        category: "Jewelry"
      },
      {
        image: "https://images.unsplash.com/photo-1612348517532-caf2747bd22e?q=80&w=2070&auto=format&fit=crop",
        title: "Bracelets & Bangles",
        description: "Artfully designed wrist pieces that blend tradition with modernity.",
        link: "/creations/bracelets",
        category: "Jewelry"
      },
      {
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=2080&auto=format&fit=crop",
        title: "Earrings",
        description: "From subtle studs to statement pieces, crafted with precision.",
        link: "/creations/earrings",
        category: "Jewelry"
      }
    ]
  },
  {
    title: "Gemstones",
    description: "Discover our selection of premium gemstones, each chosen for its exceptional quality and beauty.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
        title: "Diamonds",
        description: "Expertly selected diamonds of exceptional cut, clarity, and brilliance.",
        link: "/creations/diamonds",
        category: "Gemstones"
      },
      {
        image: "https://images.unsplash.com/photo-1598751337485-0215d4c0c44e?q=80&w=2070&auto=format&fit=crop",
        title: "Colored Gemstones",
        description: "Vibrant sapphires, rubies, emeralds and other precious stones.",
        link: "/creations/colored-gemstones",
        category: "Gemstones"
      },
      {
        image: "https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop",
        title: "Rare & Unique",
        description: "Exceptional stones with distinctive characteristics and provenance.",
        link: "/creations/rare-gemstones",
        category: "Gemstones"
      },
      {
        image: "https://images.unsplash.com/photo-1518081204925-082a2decbdb2?q=80&w=1964&auto=format&fit=crop",
        title: "Investment Grade",
        description: "Premium gemstones selected for their investment potential.",
        link: "/creations/investment-gemstones",
        category: "Gemstones"
      }
    ]
  }
];

const Creations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Creations</h1>
            <p className="text-xl text-luxury-light/90">
              Discover our exquisite collections of watches, jewelry, and gemstones
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Collections */}
      {collections.map((collection, index) => (
        <section
          key={index}
          className={`section-padding ${
            index % 2 === 0 ? "bg-white" : "bg-luxury-light"
          }`}
          id={collection.title.toLowerCase()}
        >
          <div className="luxury-container">
            <SectionTitle
              title={collection.title}
              subtitle={collection.description}
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {collection.items.map((item, itemIndex) => (
                <div key={itemIndex} className="h-full">
                  <ProductCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Creation CTA */}
      <section className="section-padding bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Bespoke Creations"
              subtitle="Let us bring your vision to life with a custom-designed piece that perfectly captures your personal style and preferences."
              centered
              light
            />
            <p className="text-luxury-light/90 mt-8 mb-8">
              Our master craftsmen combine traditional techniques with innovative approaches to create unique pieces that tell your story. From initial concept to final creation, we work closely with you to ensure every detail reflects your vision.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-luxury-gold text-white px-8 py-3 inline-block font-montserrat font-medium transition-colors hover:bg-luxury-gold/90"
              >
                Inquire About Custom Creations
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Creations;
