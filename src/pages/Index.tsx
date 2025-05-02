
import React, { useEffect } from "react";
import KoblerHeroSection from "../components/home/KoblerHeroSection";
import KoblerIntroSection from "../components/home/KoblerIntroSection";
import KoblerFeaturedCollections from "../components/home/KoblerFeaturedCollections";
import KoblerServicesOverview from "../components/home/KoblerServicesOverview";
import KoblerHighlightSection from "../components/home/KoblerHighlightSection";
import KoblerJournalPreview from "../components/home/KoblerJournalPreview";

const Index = () => {
  // Force loading animation on homepage refresh
  useEffect(() => {
    // This will trigger the loading animation to show
    window.sessionStorage.removeItem('loadingShown');
    
    // Clean up function
    return () => {
      // Mark loading as shown to prevent showing it again on page transitions
      window.sessionStorage.setItem('loadingShown', 'true');
    };
  }, []);

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
