
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import ProductCard from "../components/ui/ProductCard";

const collections = [
  {
    title: "Uhren",
    description: "Entdecken Sie unsere Kollektion exquisiter Zeitmesser, von klassischen Designs bis hin zu zeitgenössischen Innovationen.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1974&auto=format&fit=crop",
        title: "Klassische Zeitmesser",
        description: "Elegante Uhren, inspiriert vom traditionellen Schweizer Design.",
        link: "/creations/classic-timepieces",
        category: "Uhren"
      },
      {
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop",
        title: "Zeitgenössische Kollektion",
        description: "Moderne Uhren, die Innovation mit Raffinesse verbinden.",
        link: "/creations/contemporary-collection",
        category: "Uhren"
      },
      {
        image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1964&auto=format&fit=crop",
        title: "Vintage & Raritäten",
        description: "Sorgfältig kuratierte Vintage-Zeitmesser und limitierte Editionen.",
        link: "/creations/vintage-rare",
        category: "Uhren"
      },
      {
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1974&auto=format&fit=crop",
        title: "Luxus-Sportuhren",
        description: "Präzisionszeitmesser, entworfen für den aktiven Lebensstil.",
        link: "/creations/sports-watches",
        category: "Uhren"
      }
    ]
  },
  {
    title: "Schmuck",
    description: "Entdecken Sie unsere handgefertigten Schmuckstücke, die die Kunstfertigkeit und Expertise unserer Meistergoldschmiede zeigen.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
        title: "Verlobungsringe",
        description: "Maßgefertigte Ringe, die Ihre einzigartige Liebesgeschichte symbolisieren.",
        link: "/creations/engagement-rings",
        category: "Schmuck"
      },
      {
        image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1974&auto=format&fit=crop",
        title: "Halsketten & Anhänger",
        description: "Elegante Stücke, die jedem Outfit einen Hauch von Raffinesse verleihen.",
        link: "/creations/necklaces",
        category: "Schmuck"
      },
      {
        image: "https://images.unsplash.com/photo-1612348517532-caf2747bd22e?q=80&w=2070&auto=format&fit=crop",
        title: "Armbänder & Armreifen",
        description: "Kunstvoll gestaltete Handgelenksstücke, die Tradition mit Moderne verbinden.",
        link: "/creations/bracelets",
        category: "Schmuck"
      },
      {
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=2080&auto=format&fit=crop",
        title: "Ohrringe",
        description: "Von subtilen Steckern bis hin zu Statement-Stücken, mit Präzision gefertigt.",
        link: "/creations/earrings",
        category: "Schmuck"
      }
    ]
  },
  {
    title: "Edelsteine",
    description: "Entdecken Sie unsere Auswahl an erstklassigen Edelsteinen, jeden ausgewählt für seine außergewöhnliche Qualität und Schönheit.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
        title: "Diamanten",
        description: "Fachkundig ausgewählte Diamanten von außergewöhnlichem Schliff, Klarheit und Brillanz.",
        link: "/creations/diamonds",
        category: "Edelsteine"
      },
      {
        image: "https://images.unsplash.com/photo-1598751337485-0215d4c0c44e?q=80&w=2070&auto=format&fit=crop",
        title: "Farbige Edelsteine",
        description: "Leuchtende Saphire, Rubine, Smaragde und andere kostbare Steine.",
        link: "/creations/colored-gemstones",
        category: "Edelsteine"
      },
      {
        image: "https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop",
        title: "Selten & Einzigartig",
        description: "Außergewöhnliche Steine mit einzigartigen Eigenschaften und Herkunft.",
        link: "/creations/rare-gemstones",
        category: "Edelsteine"
      },
      {
        image: "https://images.unsplash.com/photo-1518081204925-082a2decbdb2?q=80&w=1964&auto=format&fit=crop",
        title: "Investitionsqualität",
        description: "Premium-Edelsteine, ausgewählt für ihr Anlagepotenzial.",
        link: "/creations/investment-gemstones",
        category: "Edelsteine"
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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Unsere Kreationen</h1>
            <p className="text-xl text-luxury-light/90">
              Entdecken Sie unsere exquisiten Kollektionen von Uhren, Schmuck und Edelsteinen
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
              title="Maßgefertigte Kreationen"
              subtitle="Lassen Sie uns Ihre Vision mit einem maßgeschneiderten Design zum Leben erwecken, das Ihren persönlichen Stil und Ihre Vorlieben perfekt widerspiegelt."
              centered
              light
            />
            <p className="text-luxury-light/90 mt-8 mb-8">
              Unsere Meisterhandwerker kombinieren traditionelle Techniken mit innovativen Ansätzen, um einzigartige Stücke zu schaffen, die Ihre Geschichte erzählen. Von der ersten Idee bis zur endgültigen Kreation arbeiten wir eng mit Ihnen zusammen, um sicherzustellen, dass jedes Detail Ihre Vision widerspiegelt.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-luxury-gold text-white px-8 py-3 inline-block font-montserrat font-medium transition-colors hover:bg-luxury-gold/90"
              >
                Anfrage für maßgefertigte Kreationen
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Creations;
