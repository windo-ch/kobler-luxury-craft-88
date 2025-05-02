
import React from "react";
import Button from "../ui/Button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-luxury-light">
      <div className="luxury-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-luxury-navy mb-4">
            Stay Updated
          </h2>
          <p className="text-luxury-charcoal/80 mb-8 max-w-2xl mx-auto">
            Melden Sie sich für unseren Newsletter an. Gerne versorgen wir Sie regelmässig mit Angeboten, Events und Neuigkeiten aus dem Hause Kobler.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                required
              />
              <Button variant="secondary" size="md" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-luxury-charcoal/60 mt-4">
              By subscribing, you agree to receive email communications from Kobler Goldschmied & Uhrmacher AG.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
