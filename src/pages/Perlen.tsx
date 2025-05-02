
import React from "react";
import { Layout } from "@/components/layout/Layout";
import PearlsHero from "@/components/pearls/PearlsHero";
import PearlsHistory from "@/components/pearls/PearlsHistory";
import PearlTypes from "@/components/pearls/PearlTypes";
import PearlCultivation from "@/components/pearls/PearlCultivation";
import PearlsQuality from "@/components/pearls/PearlsQuality";
import PearlsGallery from "@/components/pearls/PearlsGallery";

const Perlen = () => {
  return (
    <Layout>
      <PearlsHero />
      <PearlsHistory />
      <PearlTypes />
      <PearlCultivation />
      <PearlsQuality />
      <PearlsGallery />
    </Layout>
  );
};

export default Perlen;
