
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: "de" | "en";
  switchLanguage: (lang: "de" | "en") => void;
}

const MobileNavMenu = ({ 
  isOpen, 
  onClose, 
  currentLanguage, 
  switchLanguage 
}: MobileNavMenuProps) => {
  const { t } = useLanguage();
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Create staggered animation delays
  const getAnimationDelay = (index: number): string => {
    return `${100 + (index * 75)}ms`;
  };
  
  // Menu items - matching desktop navigation for consistency
  const menuItems = [
    { title: t('nav.collections'), url: "/collections" },
    { title: t('nav.services'), url: "/services" },
    { title: t('nav.pearls'), url: "/perlen" },
    { title: t('nav.about'), url: "/about" },
    { title: t('nav.journal'), url: "/journal" },
    { title: t('nav.contact'), url: "/contact" }
  ];

  return (
    <div 
      className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full pt-24 pb-16 px-6">
        <nav className="flex flex-col space-y-8 mt-8">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              className={`transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: getAnimationDelay(index) }}
            >
              <Link 
                to={item.url}
                className="text-2xl font-serif"
                onClick={onClose}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
        
        {/* Mobile Language Switcher */}
        <div 
          className={`flex space-x-6 pt-12 mt-auto transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: getAnimationDelay(menuItems.length + 1) }}
        >
          <button 
            onClick={() => {
              switchLanguage("de");
              onClose();
            }}
            className={`text-sm uppercase ${currentLanguage === "de" ? "font-bold" : "font-medium text-black/70"}`}
          >
            Deutsch
          </button>
          <button 
            onClick={() => {
              switchLanguage("en");
              onClose();
            }}
            className={`text-sm uppercase ${currentLanguage === "en" ? "font-bold" : "font-medium text-black/70"}`}
          >
            English
          </button>
        </div>
        
        {/* Social Icons */}
        <div 
          className={`flex space-x-6 mt-8 transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: getAnimationDelay(menuItems.length + 2) }}
        >
          <a href="#" className="text-black" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-black" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-black" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
