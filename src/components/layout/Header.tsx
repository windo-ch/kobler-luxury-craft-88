
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "de">("en");

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
    setCurrentLanguage(currentLanguage === "en" ? "de" : "en");
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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-luxury-navy">
              KOBLER
              <span className="block text-xs md:text-sm font-montserrat font-light tracking-wider text-luxury-charcoal">
                GOLDSCHMIED & UHRMACHER AG
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "Home" : "Startseite"}
            </Link>
            <Link
              to="/about"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "About Us" : "Über Uns"}
            </Link>
            <Link
              to="/services"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "Services" : "Dienstleistungen"}
            </Link>
            <Link
              to="/creations"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "Creations" : "Kreationen"}
            </Link>
            <Link
              to="/journal"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "Journal" : "Journal"}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
            >
              {currentLanguage === "en" ? "Contact" : "Kontakt"}
            </Link>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="font-montserrat text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase"
            >
              {currentLanguage === "en" ? "DE" : "EN"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-luxury-charcoal focus:outline-none"
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4 border-t mt-2 border-luxury-light">
            <Link
              to="/"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "Home" : "Startseite"}
            </Link>
            <Link
              to="/about"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "About Us" : "Über Uns"}
            </Link>
            <Link
              to="/services"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "Services" : "Dienstleistungen"}
            </Link>
            <Link
              to="/creations"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "Creations" : "Kreationen"}
            </Link>
            <Link
              to="/journal"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "Journal" : "Journal"}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {currentLanguage === "en" ? "Contact" : "Kontakt"}
            </Link>
            
            {/* Language Switcher - Mobile */}
            <button
              onClick={toggleLanguage}
              className="font-montserrat text-sm text-left text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase"
            >
              {currentLanguage === "en" ? "Deutsch" : "English"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
