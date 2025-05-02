
import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedCollections from "../components/home/FeaturedCollections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <FeaturedCollections />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
