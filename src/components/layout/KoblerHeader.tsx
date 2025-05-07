
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useHeaderScroll from "../../hooks/useHeaderScroll";
import DesktopNav from "./header/DesktopNav";
import MobileHeader from "./header/MobileHeader";
import MobileNavMenu from "./header/MobileNavMenu";
import { useLanguage } from "../../contexts/LanguageContext";

const KoblerHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const { scrolled, pastHeroSection } = useHeaderScroll();
  
  // Check if the current page has a dark hero section
  const hasDarkHero = location.pathname === "/perlen" || location.pathname === "/";
  const isHomepage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const switchLanguage = (lang: "de" | "en") => {
    setLanguage(lang);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white border-b border-black/5 py-2 shadow-sm" 
          : hasDarkHero 
            ? "bg-transparent py-4 md:py-6" 
            : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12">
        {/* Mobile Header */}
        <MobileHeader
          hasDarkHero={hasDarkHero}
          scrolled={scrolled}
          toggleMobileMenu={toggleMobileMenu}
          mobileMenuOpen={mobileMenuOpen}
        />
        
        {/* Desktop Navigation */}
        <DesktopNav
          hasDarkHero={hasDarkHero}
          scrolled={scrolled}
          pastHeroSection={pastHeroSection}
          currentLanguage={language}
          switchLanguage={switchLanguage}
        />
      </div>
      
      {/* Mobile Menu */}
      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentLanguage={language}
        switchLanguage={switchLanguage}
      />
    </header>
  );
};

export default KoblerHeader;
