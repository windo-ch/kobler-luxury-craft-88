
import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";

const KoblerIntroSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="intro-section" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Kobler Goldschmied & Uhrmacher AG
          </h2>
          
          <div className={`h-px w-20 bg-black/30 mx-auto mb-10 transition-all duration-1000 delay-300 ease-out ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <p className={`text-lg md:text-xl text-black/80 leading-relaxed mb-6 transition-all duration-1000 delay-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('intro.paragraph1')}
          </p>
          
          <p className={`text-lg md:text-xl text-black/80 leading-relaxed transition-all duration-1000 delay-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('intro.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default KoblerIntroSection;
