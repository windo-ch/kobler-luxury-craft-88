
import React from "react";
import Layout from "@/components/layout/Layout";

// Pearl page sections
import PearlsHero from "@/components/pearls/PearlsHero";
import PearlsIntro from "@/components/pearls/PearlsIntro";
import PearlsTypes from "@/components/pearls/PearlsTypes";
import PearlsCultivation from "@/components/pearls/PearlsCultivation";
import PearlsQuality from "@/components/pearls/PearlsQuality";
import PearlsGallery from "@/components/pearls/PearlsGallery";
import Newsletter from "@/components/common/Newsletter";

const Perlen = () => {
  return (
    <Layout>
      <PearlsHero />
      <PearlsIntro />
      <PearlsTypes />
      <PearlsCultivation />
      <PearlsQuality />
      <PearlsGallery />
      <Newsletter />
    </Layout>
  );
};

export default Perlen;
