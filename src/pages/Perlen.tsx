
import React, { useEffect } from "react";

// Pearl page sections
import PearlsHero from "@/components/pearls/PearlsHero";
import PearlsIntro from "@/components/pearls/PearlsIntro";
import PearlsTypes from "@/components/pearls/PearlsTypes";
import PearlsCultivation from "@/components/pearls/PearlsCultivation";
import PearlsQuality from "@/components/pearls/PearlsQuality";
import PearlsGallery from "@/components/pearls/PearlsGallery";
import Newsletter from "@/components/common/Newsletter";

const Perlen = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Pearls Collection | Kobler Goldschmied & Uhrmacher';
  }, []);

  return (
    <>
      <PearlsHero />
      <PearlsIntro />
      <PearlsTypes />
      <PearlsCultivation />
      <PearlsQuality />
      <PearlsGallery />
      <Newsletter />
    </>
  );
};

export default Perlen;
