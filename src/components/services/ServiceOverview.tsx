
import React, { useRef, useEffect } from "react";

const ServiceOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 tracking-tight">Umfassende Dienstleistungen</h2>
          <div className="w-12 h-px bg-black/50 mx-auto mb-8"></div>
          <p className="text-lg text-black/80 mb-12">
            Bei Kobler Goldschmied & Uhrmacher AG bieten wir eine Reihe von spezialisierten Dienstleistungen, die alle Ihre Anforderungen an feine Uhren, exquisiten Schmuck und hochwertige Edelsteine erfüllen.
          </p>
          <div className="prose max-w-none text-black/80 text-lg">
            <p>
              Ob Sie auf der Suche nach einer einzigartigen Uhr, einer maßgeschneiderten Schmuckkreation, professionellen Reparaturdiensten oder einer fachkundigen Bewertung sind – unser engagiertes Team kombiniert jahrzehntelange Erfahrung mit unerschütterlicher Leidenschaft, um außergewöhnliche Ergebnisse zu erzielen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
