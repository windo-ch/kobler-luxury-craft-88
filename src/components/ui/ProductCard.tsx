
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
  link?: string;
  category?: string;
}

const ProductCard = ({ image, title, description, link, category }: ProductCardProps) => {
  const content = (
    <div className="group h-full flex flex-col">
      <div className="relative overflow-hidden mb-4">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {category && (
          <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
            {category}
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-playfair font-medium text-luxury-navy mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-luxury-charcoal/80 text-sm mb-3">{description}</p>
        )}
      </div>
      {link && (
        <div className="mt-auto">
          <span className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2">
            Discover more
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
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
};

export default ProductCard;
