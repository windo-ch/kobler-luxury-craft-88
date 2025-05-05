
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface DesktopNavProps {
  hasDarkHero: boolean;
  scrolled: boolean;
  currentLanguage: "de" | "en";
  switchLanguage: (lang: "de" | "en") => void;
}

const DesktopNav = ({ 
  hasDarkHero, 
  scrolled, 
  currentLanguage, 
  switchLanguage 
}: DesktopNavProps) => {
  return (
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
        <Link 
          to="/collections" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          Collections
        </Link>
        <Link 
          to="/services" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          Services
        </Link>
        <Link 
          to="/perlen" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          Perlen
        </Link>
        <Link 
          to="/about" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          About
        </Link>
        <Link 
          to="/journal" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          Journal
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm uppercase tracking-wide hover-underline ${hasDarkHero && !scrolled ? "text-white" : "text-black"}`}
        >
          Contact
        </Link>
      </nav>
      
      {/* Search and Language (Desktop) */}
      <div className="flex items-center space-x-6 absolute right-4 top-1/2 -translate-y-1/2">
        <button className={hasDarkHero && !scrolled ? "text-white" : "text-black"}>
          <Search size={20} />
        </button>
        
        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => switchLanguage("de")} 
            className={`text-xs uppercase ${currentLanguage === "de" 
              ? "font-bold" 
              : `font-medium ${hasDarkHero && !scrolled ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`
            }`}
          >
            DE
          </button>
          <span className={`text-xs ${hasDarkHero && !scrolled ? "text-white/50" : "text-black/50"}`}>|</span>
          <button 
            onClick={() => switchLanguage("en")} 
            className={`text-xs uppercase ${currentLanguage === "en" 
              ? "font-bold" 
              : `font-medium ${hasDarkHero && !scrolled ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
