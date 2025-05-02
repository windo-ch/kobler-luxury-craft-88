
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
              title="Willkommen bei Kobler"
              subtitle="Eine Verschmelzung von traditioneller Handwerkskunst und zeitgenössischem Design im Herzen von Zug, Schweiz."
            />
            <div className="prose max-w-none text-luxury-charcoal/80">
              <p className="mb-4">
                Seit Generationen bieten wir unseren Kunden feinste Uhren, exquisiten Schmuck und sorgfältig ausgewählte Edelsteine. Bei Kobler Goldschmied & Uhrmacher AG kombinieren wir traditionelles Handwerk mit modernem Fachwissen, um zeitlose Stücke zu schaffen, die Ihre einzigartige Geschichte erzählen.
              </p>
              <p className="mb-6">
                Ob Sie auf der Suche nach einer Luxusuhr, einem maßgeschneiderten Verlobungsring oder professionellen Uhrenreparaturdiensten sind, unser engagiertes Team von Experten steht Ihnen zur Verfügung, um Sie durch unsere Kollektion zu führen und Ihnen einen persönlichen Service zu bieten.
              </p>
            </div>
            <Button to="/about" variant="primary" size="md">
              Mehr über uns erfahren
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587851650203-6714af86aab4?q=80&w=1948&auto=format&fit=crop"
                alt="Schmuckhandwerk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-luxury-gold flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-playfair text-3xl font-bold">25+</p>
                <p className="font-montserrat text-sm uppercase tracking-wider">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
