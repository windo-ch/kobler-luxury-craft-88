
import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "The Fascinating World of Gemstones",
    excerpt: "Delve into the captivating universe of precious and semi-precious stones that adorn our finest jewelry creations.",
    image: "https://images.unsplash.com/photo-1588389543050-dba034035cf0?auto=format&fit=crop&q=80&w=1200",
    date: "October 15, 2024",
    link: "/journal/gemstone-world"
  },
  {
    id: 2,
    title: "The Evolution of Watchmaking",
    excerpt: "Explore how the art of horology has transformed through the centuries while maintaining its core principles of precision and artistry.",
    image: "https://images.unsplash.com/photo-1595059894386-13e55018853a?auto=format&fit=crop&q=80&w=1200",
    date: "September 28, 2024",
    link: "/journal/watchmaking-evolution"
  },
  {
    id: 3,
    title: "A Jewelry Piece with History",
    excerpt: "Follow the journey of an extraordinary ruby necklace from its discovery to becoming a treasured heirloom across generations.",
    image: "https://images.unsplash.com/photo-1620654458831-ef45dc34c3bc?auto=format&fit=crop&q=80&w=1200",
    date: "August 10, 2024",
    link: "/journal/ruby-story"
  }
];

const KoblerJournalPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg">
        <div className="flex justify-between items-end mb-16">
          <h2 className="heading-lg">Journal</h2>
          <Link to="/journal" className="text-sm uppercase tracking-wider hover-underline hidden md:inline-block">
            View All Articles
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={article.link}
              className="group block"
            >
              <div className="overflow-hidden mb-6">
                <div className="aspect-[4/3]">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-xs uppercase tracking-wider mb-2 text-black/70">
                {article.date}
              </div>
              <h3 className="heading-sm mb-3">{article.title}</h3>
              <p className="body-sm text-black/70 mb-4">
                {article.excerpt}
              </p>
              <span className="text-xs uppercase tracking-wider font-medium hover-underline inline-block">
                Read Article
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Link to="/journal" className="btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KoblerJournalPreview;
