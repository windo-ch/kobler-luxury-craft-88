
import React from "react";
import Layout from "../components/layout/KoblerLayout";
import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import GoldsmithService from "../components/services/GoldsmithService";
import GemologistService from "../components/services/GemologistService";
import WatchmakerService from "../components/services/WatchmakerService";
import AppraisalService from "../components/services/AppraisalService";
import ServiceCta from "../components/services/ServiceCta";

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <ServiceHero />

      {/* Overview Section */}
      <ServiceOverview />

      {/* Service Sections */}
      <GoldsmithService />
      <GemologistService />
      <WatchmakerService />
      <AppraisalService />

      {/* CTA Section */}
      <ServiceCta />
    </div>
  );
};

export default Services;
