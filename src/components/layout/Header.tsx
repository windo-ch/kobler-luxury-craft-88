
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"de" | "en">("de");
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const switchToLanguage = (lang: "de" | "en") => {
    setCurrentLanguage(lang);
  };

  // Navigation items
  const navItems = [
    {
      title: currentLanguage === "de" ? "Geschichte" : "Story",
      url: "/about",
    },
    {
      title: currentLanguage === "de" ? "Dienstleistungen" : "Services",
      url: "/services",
    },
    {
      title: currentLanguage === "de" ? "Kreationen" : "Creations",
      url: "/creations",
    },
    {
      title: currentLanguage === "de" ? "Journal" : "Journal",
      url: "/journal",
    },
    {
      title: currentLanguage === "de" ? "Kontakt" : "Contact",
      url: "/contact",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between relative">
          {/* Logo - Links to homepage */}
          <Link 
            to="/" 
            className="flex items-center z-10" 
            aria-label="Home"
          >
            <div className="h-6 sm:h-7 md:h-8 w-auto relative">
              <img 
                src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
                alt="KOBLER ZUG" 
                className="h-full w-auto object-contain max-w-none" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation navItems={navItems} />
            
          {/* Language Switcher - Desktop */}
          <LanguageSwitcher 
            currentLanguage={currentLanguage} 
            switchToLanguage={switchToLanguage} 
          />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-3 text-luxury-charcoal focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu 
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navItems={navItems}
          currentLanguage={currentLanguage}
          switchToLanguage={switchToLanguage}
        />
      </div>
    </header>
  );
};

export default Header;
