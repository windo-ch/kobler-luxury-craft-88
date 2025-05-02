
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { Search } from "lucide-react";

const KoblerHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-black/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-lg flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className="font-serif text-xl md:text-2xl tracking-tight">KOBLER</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <Link to="/collections" className="text-sm uppercase tracking-wide hover-underline">Collections</Link>
          <Link to="/services" className="text-sm uppercase tracking-wide hover-underline">Services</Link>
          <Link to="/about" className="text-sm uppercase tracking-wide hover-underline">About</Link>
          <Link to="/journal" className="text-sm uppercase tracking-wide hover-underline">Journal</Link>
          <Link to="/contact" className="text-sm uppercase tracking-wide hover-underline">Contact</Link>
        </nav>
        
        {/* Right Menu Items */}
        <div className="flex items-center space-x-6">
          <button className="hidden lg:flex">
            <Search size={20} />
          </button>
          <LanguageSwitcher />
          
          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden z-50" 
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default KoblerHeader;
