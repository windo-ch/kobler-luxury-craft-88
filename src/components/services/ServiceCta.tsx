
import React, { useRef, useEffect } from "react";
import Button from "../ui/Button";

const ServiceCta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.2 });
    
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
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-black text-white relative overflow-hidden transition-all duration-1000 ease-out transform opacity-0 translate-y-10"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjk4LTEuNzggNC00ek01NiA0TDQgNDRoMTBsMzYtMzZjLTYgMC0xMC0ySC01NnY2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-repeat opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-tight">
            Erleben Sie aussergewöhnlichen Service
          </h2>
          <div className="w-16 h-px bg-white/50 mx-auto mb-8"></div>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Wir laden Sie ein, unsere Boutique in Zug zu besuchen, um unsere Kollektionen und Dienstleistungen aus erster Hand zu entdecken. Unser Expertenteam steht Ihnen bei allen Anliegen rund um Uhren und Schmuck zur Verfügung.
          </p>
          <Button to="/contact" variant="secondary" size="lg" className="bg-white text-black hover:bg-white/90">
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;
