
import React from "react";
import { Link } from "react-router-dom";

const RelatedArticles = () => {
  return (
    <div className="mt-16 pt-12 border-t border-luxury-light/30">
      <h3 className="text-2xl font-playfair text-luxury-navy mb-8">Weitere Artikel, die Sie interessieren könnten</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <div className="relative overflow-hidden mb-4">
            <div className="aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop"
                alt="Edelsteinreise"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
              Edelsteine
            </div>
          </div>
          <span className="text-sm text-luxury-charcoal/60 font-montserrat">
            22. März 2025
          </span>
          <h4 className="text-xl font-playfair font-medium text-luxury-navy mt-2 mb-2">
            Edelsteinreise: Von der Erde zum exquisiten Schmuck
          </h4>
          <Link
            to="#"
            className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2"
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
        </div>
        <div className="group">
          <div className="relative overflow-hidden mb-4">
            <div className="aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop"
                alt="Die Sprache der Diamanten"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
              Bildung
            </div>
          </div>
          <span className="text-sm text-luxury-charcoal/60 font-montserrat">
            10. Februar 2025
          </span>
          <h4 className="text-xl font-playfair font-medium text-luxury-navy mt-2 mb-2">
            Die Sprache der Diamanten: Die vier C verstehen
          </h4>
          <Link
            to="#"
            className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2"
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
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
