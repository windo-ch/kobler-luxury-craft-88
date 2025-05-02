
import React from "react";
import KoblerHeroSection from "../components/home/KoblerHeroSection";
import KoblerIntroSection from "../components/home/KoblerIntroSection";
import KoblerFeaturedCollections from "../components/home/KoblerFeaturedCollections";
import KoblerServicesOverview from "../components/home/KoblerServicesOverview";
import KoblerHighlightSection from "../components/home/KoblerHighlightSection";
import KoblerJournalPreview from "../components/home/KoblerJournalPreview";

const Index = () => {
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
