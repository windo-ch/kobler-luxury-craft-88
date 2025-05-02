
import React from "react";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    quote: "The custom engagement ring that Kobler created exceeded all my expectations. Their attention to detail and commitment to quality is unmatched.",
    author: "Michael S.",
    location: "Zurich"
  },
  {
    quote: "I've been bringing my antique watches to Kobler for years. Their restoration work is impeccable and their expertise in vintage timepieces is remarkable.",
    author: "Elisabeth K.",
    location: "Lucerne"
  },
  {
    quote: "From the moment I stepped into their boutique, the service was exceptional. They guided me through their collection with expertise and patience.",
    author: "Thomas R.",
    location: "Zug"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-luxury-cream">
      <div className="luxury-container">
        <SectionTitle
          title="Client Testimonials"
          subtitle="Discover what our clients have to say about their experiences with Kobler Goldschmied & Uhrmacher AG."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-sm flex flex-col"
            >
              <div className="mb-6 text-luxury-gold">
                <svg 
                  className="w-10 h-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                </svg>
              </div>
              <p className="italic text-luxury-charcoal/80 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-medium text-luxury-navy">
                  {testimonial.author}
                </p>
                <p className="text-sm text-luxury-charcoal/70">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
