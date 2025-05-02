
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const IntroSection = () => {
  return (
    <section className="section-padding bg-luxury-light">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionTitle
              title="Welcome to Kobler"
              subtitle="A blend of traditional craftsmanship and contemporary design in the heart of Zug, Switzerland."
            />
            <div className="prose max-w-none text-luxury-charcoal/80">
              <p className="mb-4">
                For generations, we have been providing our customers with the finest watches, exquisite jewelry, and carefully selected gemstones. At Kobler Goldschmied & Uhrmacher AG, we combine traditional craftsmanship with modern expertise to create timeless pieces that tell your unique story.
              </p>
              <p className="mb-6">
                Whether you are searching for a luxury timepiece, a bespoke engagement ring, or professional watch repair services, our dedicated team of experts is here to guide you through our collection and provide personalized service.
              </p>
            </div>
            <Button to="/about" variant="primary" size="md">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587851650203-6714af86aab4?q=80&w=1948&auto=format&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-luxury-gold flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-playfair text-3xl font-bold">25+</p>
                <p className="font-montserrat text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
