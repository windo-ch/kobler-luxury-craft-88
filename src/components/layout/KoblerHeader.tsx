
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useHeaderScroll from "../../hooks/useHeaderScroll";
import DesktopNav from "./header/DesktopNav";
import MobileHeader from "./header/MobileHeader";
import MobileNavMenu from "./header/MobileNavMenu";

const KoblerHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"de" | "en">("de");
  const location = useLocation();
  const { scrolled, pastHeroSection } = useHeaderScroll();
  
  // Check if the current page has a dark hero section
  const hasDarkHero = location.pathname === "/perlen" || location.pathname === "/";
  const isHomepage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const switchLanguage = (lang: "de" | "en") => {
    setCurrentLanguage(lang);
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
      <div className="container-lg">
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
          currentLanguage={currentLanguage}
          switchLanguage={switchLanguage}
        />
      </div>
      
      {/* Mobile Menu */}
      <MobileNavMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentLanguage={currentLanguage}
        switchLanguage={switchLanguage}
      />
    </header>
  );
};

export default KoblerHeader;
