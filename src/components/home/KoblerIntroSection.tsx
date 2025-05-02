
import React from "react";
import { Link } from "react-router-dom";

const KoblerIntroSection = () => {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="heading-lg mb-8">A Heritage of Craftsmanship</h2>
            <p className="body-md mb-6 text-black/80">
              For nearly a century, Kobler Goldschmied & Uhrmacher AG has stood as a beacon of horological excellence and jewelry craftsmanship in the heart of Switzerland. Our artisans combine time-honored techniques with innovative precision to create pieces that transcend generations.
            </p>
            <p className="body-md mb-8 text-black/80">
              Every creation that leaves our atelier represents the pinnacle of Swiss excellence—meticulously crafted by master artisans who dedicate their lives to perfecting their craft.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=1200" 
                alt="Kobler Craftsman" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent element */}
            <div className="absolute -bottom-6 -left-6 lg:-left-16 w-48 h-48 border border-black p-6 bg-white hidden md:block">
              <div className="w-full h-full flex flex-col justify-center">
                <p className="font-serif italic text-lg">
                  "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
                </p>
                <p className="text-sm mt-3 text-black/70">— Antoine de Saint-Exupéry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoblerIntroSection;
