
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

interface DesktopNavProps {
  hasDarkHero: boolean;
  scrolled: boolean;
  pastHeroSection: boolean;
  currentLanguage: "de" | "en";
  switchLanguage: (lang: "de" | "en") => void;
}

const DesktopNav = ({ 
  hasDarkHero, 
  scrolled, 
  pastHeroSection,
  currentLanguage, 
  switchLanguage 
}: DesktopNavProps) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  
  // Get text color based on scroll position and page
  const getTextColor = () => {
    if (scrolled) return "text-black";
    if (hasDarkHero) return "text-white";
    return "text-black";
  };

  return (
    <div className={`hidden lg:flex flex-col items-center transition-all duration-500 ${scrolled ? "py-2" : "py-6"}`}>
      {/* Logo - Centered */}
      <Link to="/" className="z-50 mb-6">
        <img 
          src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
          alt="KOBLER"
          className={`h-10 w-auto transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
        />
      </Link>
      
      {/* Desktop Navigation - Centered */}
      <nav className="flex items-center justify-center space-x-12">
        <Link 
          to="/collections" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          Collections
        </Link>
        <Link 
          to="/services" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          Services
        </Link>
        <Link 
          to="/perlen" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          Perlen
        </Link>
        <Link 
          to="/about" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          About
        </Link>
        <Link 
          to="/journal" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          Journal
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm uppercase tracking-wide hover-underline transition-colors duration-300 ${getTextColor()} hover:opacity-80`}
        >
          Contact
        </Link>
      </nav>
      
      {/* Search and Language (Desktop) */}
      <div className="flex items-center space-x-6 absolute right-4 top-1/2 -translate-y-1/2">
        <button className={`transition-colors duration-300 ${getTextColor()} hover:opacity-80`}>
          <Search size={18} />
        </button>
        
        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => switchLanguage("de")} 
            className={`text-xs uppercase ${currentLanguage === "de" 
              ? "font-bold" 
              : `font-medium opacity-70 hover:opacity-100 transition-opacity`
            } ${getTextColor()}`}
          >
            DE
          </button>
          <span className={`text-xs opacity-50 ${getTextColor()}`}>|</span>
          <button 
            onClick={() => switchLanguage("en")} 
            className={`text-xs uppercase ${currentLanguage === "en" 
              ? "font-bold" 
              : `font-medium opacity-70 hover:opacity-100 transition-opacity`
            } ${getTextColor()}`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
