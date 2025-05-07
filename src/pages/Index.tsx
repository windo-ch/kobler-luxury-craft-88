
import React, { useEffect } from "react";
import KoblerHeroSection from "../components/home/KoblerHeroSection";
import KoblerIntroSection from "../components/home/KoblerIntroSection";
import KoblerFeaturedCollections from "../components/home/KoblerFeaturedCollections";
import KoblerServicesOverview from "../components/home/KoblerServicesOverview";
import KoblerHighlightSection from "../components/home/KoblerHighlightSection";
import KoblerJournalPreview from "../components/home/KoblerJournalPreview";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  // Force loading animation on homepage refresh
  useEffect(() => {
    // This will trigger the loading animation to show
    window.sessionStorage.removeItem('loadingShown');
    
    // Update document title for SEO
    document.title = language === 'de' 
      ? 'Kobler Goldschmied & Uhrmacher | Exquisite Zeitmesser und Schmuck seit 1996'
      : 'Kobler Goldschmied & Uhrmacher | Exquisite Timepieces and Jewelry since 1996';
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'de'
        ? 'Kobler Zug - Feinste Uhren, Edelsteine und Schmuck seit 1996. Expertise in Uhrmacherkunst, Goldschmiedearbeiten und Edelsteinen.'
        : 'Kobler Zug - Finest watches, gemstones and jewelry since 1996. Expertise in watchmaking, goldsmithing, and gemology.');
    }
    
    // Clean up function
    return () => {
      // Mark loading as shown to prevent showing it again on page transitions
      window.sessionStorage.setItem('loadingShown', 'true');
    };
  }, [language]);

  return (
    <>
      <KoblerHeroSection />
      <KoblerIntroSection />
      <KoblerFeaturedCollections />
      <KoblerServicesOverview />
      <KoblerHighlightSection />
      <KoblerJournalPreview />
    </>
  );
};

export default Index;
