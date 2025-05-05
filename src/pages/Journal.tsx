import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const journal = [
  {
    id: 1,
    title: "Journey of a Ruby: Der Weg eines aussergewöhnlichen 22-karatigen Rubins",
    excerpt:
      "Verfolgen Sie die faszinierende Reise eines seltenen 22-karatigen Rubins von Bangkok bis in unser Atelier in Zug. Eine Geschichte von Handwerkskunst, Tradition und aussergewöhnlichem Design.",
    image: "https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubycleaned-scaled.jpg",
    date: "30. August 2024",
    category: "Edelsteine",
    slug: "ruby-story"
  },
  {
    id: 2,
    title: "Edelsteinreise: Von der Erde zum exquisiten Schmuck",
    excerpt:
      "Verfolgen Sie die bemerkenswerte Transformation von Edelsteinen von rohen Mineralien tief in der Erde zu beeindruckenden Mittelpunkten feinen Schmucks.",
    image: "https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop",
    date: "22. März 2025",
    category: "Edelsteine"
  },
  {
    id: 3,
    title: "Die Sprache der Diamanten: Die vier C verstehen",
    excerpt:
      "Ein umfassender Leitfaden zum Verständnis der Diamantqualität durch Schliff, Farbe, Reinheit und Karat – unverzichtbares Wissen für anspruchsvolle Sammler.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
    date: "10. Februar 2025",
    category: "Bildung"
  },
  {
    id: 4,
    title: "Pflege Ihrer Zeitmesser: Wesentliche Pflege für Luxusuhren",
    excerpt:
      "Entdecken Sie Expertentipps und -techniken zur Erhaltung der Schönheit und Funktionalität Ihrer Luxusuhren für kommende Generationen.",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1974&auto=format&fit=crop",
    date: "28. Januar 2025",
    category: "Pflege & Wartung"
  },
  {
    id: 5,
    title: "Die Evolution der Verlobungsringe durch die Jahrhunderte",
    excerpt:
      "Eine faszinierende Reise durch die Geschichte der Verlobungsringe, von alten Traditionen bis zu modernen Designs und sich wandelnder Symbolik.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
    date: "12. Dezember 2024",
    category: "Schmuckgeschichte"
  },
  {
    id: 6,
    title: "Die Wiederbelebung von Vintage-Uhren in modernen Kollektionen",
    excerpt:
      "Erkunden Sie den wachsenden Trend von Vintage-inspirierten Zeitmessern und warum Sammler zunehmend von Designs mit historischer Bedeutung angezogen werden.",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1964&auto=format&fit=crop",
    date: "5. November 2024",
    category: "Trends"
  }
];

const Journal = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Journal</h1>
            <p className="text-xl text-white/90">
              Geschichten und Einblicke aus der Welt der feinen Uhren und des Schmucks
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Journal Entries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journal.map((entry) => (
              <article key={entry.id} className="group mb-8">
                <div className="relative overflow-hidden mb-4">
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 uppercase">
                    {entry.category}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-black/60">
                    {entry.date}
                  </span>
                </div>
                <h2 className="text-xl font-serif font-medium text-black mb-2">
                  {entry.title}
                </h2>
                <p className="text-black/80 text-sm mb-4">
                  {entry.excerpt}
                </p>
                <Link 
                  to={entry.slug ? `/journal/${entry.slug}` : "#"} 
                  className="inline-block text-sm text-black font-medium transition-all duration-300 group-hover:translate-x-2"
                >
                  Weiterlesen
                  <svg
                    className="inline-block ml-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Bleiben Sie informiert"
              subtitle="Abonnieren Sie unseren Newsletter, um die neuesten Geschichten, Einblicke und Ankündigungen von Kobler Goldschmied & Uhrmacher AG zu erhalten."
              centered
            />
            <form className="max-w-lg mx-auto mt-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-grow px-4 py-3 border border-black/30 focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
                <Button variant="secondary" size="md" className="whitespace-nowrap">
                  Abonnieren
                </Button>
              </div>
              <p className="text-xs text-black/60 mt-4">
                Mit dem Abonnieren stimmen Sie zu, E-Mail-Kommunikation von Kobler Goldschmied & Uhrmacher AG zu erhalten.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
