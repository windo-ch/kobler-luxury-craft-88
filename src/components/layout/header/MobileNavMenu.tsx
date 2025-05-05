
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div 
      className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <nav className="flex flex-col space-y-8 text-center">
          <Link 
            to="/collections"
            className="text-xl font-serif"
            onClick={onClose}
          >
            Collections
          </Link>
          <Link 
            to="/services"
            className="text-xl font-serif"
            onClick={onClose}
          >
            Services
          </Link>
          <Link 
            to="/perlen"
            className="text-xl font-serif"
            onClick={onClose}
          >
            Perlen
          </Link>
          <Link 
            to="/about"
            className="text-xl font-serif"
            onClick={onClose}
          >
            About
          </Link>
          <Link 
            to="/journal"
            className="text-xl font-serif"
            onClick={onClose}
          >
            Journal
          </Link>
          <Link 
            to="/contact"
            className="text-xl font-serif"
            onClick={onClose}
          >
            Contact
          </Link>
          
          {/* Mobile Language Switcher */}
          <div className="flex space-x-6 pt-6">
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
        </nav>
      </div>
    </div>
  );
};

export default MobileNavMenu;
