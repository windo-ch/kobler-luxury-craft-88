
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 
        className={`text-3xl md:text-4xl font-playfair font-medium mb-4 
          ${light ? "text-white" : "text-luxury-navy"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-base md:text-lg max-w-3xl 
            ${centered ? "mx-auto" : ""} 
            ${light ? "text-luxury-light/90" : "text-luxury-charcoal/80"}`}
        >
          {subtitle}
        </p>
      )}
      <div 
        className={`h-0.5 w-24 mt-4 
          ${centered ? "mx-auto" : ""} 
          ${light ? "bg-luxury-gold" : "bg-luxury-gold"}`}
      ></div>
    </div>
  );
};

export default SectionTitle;
