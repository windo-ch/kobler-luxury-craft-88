
import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import GoldsmithService from "../components/services/GoldsmithService";
import GemologistService from "../components/services/GemologistService";
import WatchmakerService from "../components/services/WatchmakerService";
import AppraisalService from "../components/services/AppraisalService";
import ServiceCta from "../components/services/ServiceCta";

const Services = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Our Services | Kobler Goldschmied & Uhrmacher';
  }, []);

  return (
    <>
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
    </>
  );
};

export default Services;
