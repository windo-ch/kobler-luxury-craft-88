
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const KoblerHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"de" | "en">("de");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const switchLanguage = (lang: "de" | "en") => {
    setCurrentLanguage(lang);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-black/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-lg">
        {/* Mobile header layout with aligned logo and burger */}
        <div className="flex justify-center items-center relative lg:hidden">
          <Link to="/" className="z-50">
            <img 
              src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
              alt="KOBLER"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          
          {/* Mobile Menu Trigger - Positioned absolutely */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span 
                className={`h-px bg-black transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span 
                className={`h-px bg-black transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span 
                className={`h-px bg-black transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
        
        {/* Desktop Layout - Centered navigation */}
        <div className="hidden lg:flex flex-col items-center">
          {/* Logo - Centered */}
          <Link to="/" className="z-50 mb-6">
            <img 
              src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
              alt="KOBLER"
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="flex items-center justify-center space-x-12">
            <Link to="/collections" className="text-sm uppercase tracking-wide hover-underline">Collections</Link>
            <Link to="/services" className="text-sm uppercase tracking-wide hover-underline">Services</Link>
            <Link to="/perlen" className="text-sm uppercase tracking-wide hover-underline">Perlen</Link>
            <Link to="/about" className="text-sm uppercase tracking-wide hover-underline">About</Link>
            <Link to="/journal" className="text-sm uppercase tracking-wide hover-underline">Journal</Link>
            <Link to="/contact" className="text-sm uppercase tracking-wide hover-underline">Contact</Link>
          </nav>
          
          {/* Search and Language (Desktop) */}
          <div className="flex items-center space-x-6 absolute right-4 top-1/2 -translate-y-1/2">
            <button>
              <Search size={20} />
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => switchLanguage("de")} 
                className={`text-xs uppercase ${currentLanguage === "de" ? "font-bold" : "font-medium text-black/70 hover:text-black"}`}
              >
                DE
              </button>
              <span className="text-xs text-black/50">|</span>
              <button 
                onClick={() => switchLanguage("en")} 
                className={`text-xs uppercase ${currentLanguage === "en" ? "font-bold" : "font-medium text-black/70 hover:text-black"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <nav className="flex flex-col space-y-8 text-center">
            <Link 
              to="/collections"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/services"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/perlen"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              Perlen
            </Link>
            <Link 
              to="/about"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/journal"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journal
            </Link>
            <Link 
              to="/contact"
              className="text-xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex space-x-6 pt-6">
              <button 
                onClick={() => {
                  switchLanguage("de");
                  setMobileMenuOpen(false);
                }}
                className={`text-sm uppercase ${currentLanguage === "de" ? "font-bold" : "font-medium text-black/70"}`}
              >
                Deutsch
              </button>
              <button 
                onClick={() => {
                  switchLanguage("en");
                  setMobileMenuOpen(false);
                }}
                className={`text-sm uppercase ${currentLanguage === "en" ? "font-bold" : "font-medium text-black/70"}`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default KoblerHeader;
