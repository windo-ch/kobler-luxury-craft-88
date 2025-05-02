
import React from "react";
import { Link } from "react-router-dom";

const KoblerHighlightSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Large Image */}
          <div className="lg:col-span-9 lg:pr-16">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1548612037-baaf5f1d7df0?auto=format&fit=crop&q=80&w=2400"
                alt="Luxury watch craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:col-span-3 lg:pt-16 flex flex-col justify-center">
            <h2 className="heading-md mb-6">The Art of Timekeeping</h2>
            <p className="body-md mb-8 text-black/80">
              Discover the fascinating story behind our watch restoration process and the meticulous attention to detail that goes into preserving horological treasures.
            </p>
            <Link to="/journal/watchmaking-artistry" className="btn-outline self-start">
              Read the Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KoblerHighlightSection;
