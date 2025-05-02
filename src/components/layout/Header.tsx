
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"de" | "en">("de");

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

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "de" ? "en" : "de");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between">
          {/* Logo - Links to homepage */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <img 
              src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
              alt="KOBLER ZUG" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation - Removed "Startseite"/"Home" */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "de" ? "Über Uns" : "About Us"}
            </Link>
            <Link
              to="/services"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "de" ? "Dienstleistungen" : "Services"}
            </Link>
            <Link
              to="/creations"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "de" ? "Kreationen" : "Creations"}
            </Link>
            <Link
              to="/journal"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "de" ? "Journal" : "Journal"}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "de" ? "Kontakt" : "Contact"}
            </Link>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="font-montserrat text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase"
            >
              {currentLanguage === "de" ? "EN" : "DE"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-luxury-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu - Removed "Startseite"/"Home" */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4 border-t mt-2 border-luxury-light">
            <Link
              to="/about"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "de" ? "Über Uns" : "About Us"}
            </Link>
            <Link
              to="/services"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "de" ? "Dienstleistungen" : "Services"}
            </Link>
            <Link
              to="/creations"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "de" ? "Kreationen" : "Creations"}
            </Link>
            <Link
              to="/journal"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "de" ? "Journal" : "Journal"}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "de" ? "Kontakt" : "Contact"}
            </Link>
            
            {/* Language Switcher - Mobile */}
            <button
              onClick={toggleLanguage}
              className="font-montserrat text-sm text-left text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase"
            >
              {currentLanguage === "de" ? "English" : "Deutsch"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
