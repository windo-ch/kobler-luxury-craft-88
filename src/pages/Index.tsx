
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedCollections from "../components/home/FeaturedCollections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";
import LoadingScreen from "../components/ui/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for at least 3 seconds to display the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Fade-in Animation für Seitenabschnitte hinzufügen
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
      clearTimeout(timer);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Layout>
        <HeroSection />
        <IntroSection />
        <ServicesOverview />
        <FeaturedCollections />
        <TestimonialsSection />
        <NewsletterSection />
      </Layout>
    </>
  );
};

export default Index;
