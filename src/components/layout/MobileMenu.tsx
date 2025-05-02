
import React from "react";
import { X } from "lucide-react";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    title: string;
    url: string;
  }>;
  currentLanguage: "de" | "en";
  switchToLanguage: (lang: "de" | "en") => void;
}

const MobileMenu = ({ 
  isOpen,
  onClose,
  navItems,
  currentLanguage,
  switchToLanguage
}: MobileMenuProps) => {
  return (
    <div 
      className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } shadow-xl flex flex-col`}
    >
      <div className="h-20 border-b border-gray-100 flex items-center justify-between px-6">
        <Link to="/" className="h-6 w-auto relative">
          <img 
            src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
            alt="KOBLER ZUG" 
            className="h-full w-auto object-contain max-w-none" 
          />
        </Link>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 text-luxury-charcoal hover:text-luxury-gold focus:outline-none transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <Navigation 
        navItems={navItems} 
        isMobile={true}
        closeMenu={onClose}
      />
      
      {/* Language Switcher - Mobile */}
      <div className="border-t border-gray-100 p-6">
        <LanguageSwitcher 
          currentLanguage={currentLanguage} 
          switchToLanguage={switchToLanguage}
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
