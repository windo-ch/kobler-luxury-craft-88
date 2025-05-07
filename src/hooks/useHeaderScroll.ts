
import { useState, useEffect } from "react";

const useHeaderScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHeroSection, setPastHeroSection] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled at all
      setScrolled(window.scrollY > 20);
      
      // Check if scrolled past hero section
      const heroHeight = window.innerHeight * 0.7; // 70% of viewport height
      setPastHeroSection(window.scrollY > heroHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return { scrolled, pastHeroSection };
};

export default useHeaderScroll;
