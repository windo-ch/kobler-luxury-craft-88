
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedCollections from "../components/home/FeaturedCollections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";
import LoadingScreen from "../components/layout/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fade-in Animation für Seitenabschnitte hinzufügen
    if (!loading) {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
      
      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }
  }, [loading]);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Layout>
          <HeroSection />
          <IntroSection />
          <ServicesOverview />
          <FeaturedCollections />
          <TestimonialsSection />
          <NewsletterSection />
        </Layout>
      </div>
    </>
  );
};

export default Index;
