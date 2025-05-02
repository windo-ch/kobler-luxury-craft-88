
import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedCollections from "../components/home/FeaturedCollections";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";
import ImageCarousel from "../components/home/ImageCarousel";

const Index = () => {
  useEffect(() => {
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
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

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
