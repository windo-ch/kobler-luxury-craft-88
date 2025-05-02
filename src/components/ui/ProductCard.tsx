
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  category?: string;
}

const ProductCard = ({ image, title, description, link, category }: ProductCardProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative overflow-hidden mb-4 aspect-[4/5]">
        <Link to={link} className="block w-full h-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {category && (
            <div className="absolute top-3 left-3 bg-luxury-gold/90 text-white px-3 py-1 text-xs uppercase tracking-wider font-medium">
              {category}
            </div>
          )}
        </Link>
      </div>
      
      <div className="flex flex-col flex-grow px-1">
        <Link to={link}>
          <h3 className="text-xl font-playfair text-luxury-navy mb-3 hover:text-luxury-gold transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-luxury-charcoal/80 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={link}
            className="inline-flex items-center text-luxury-navy hover:text-luxury-gold transition-colors duration-300 text-sm font-medium"
          >
            Mehr entdecken
            <svg 
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
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
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
