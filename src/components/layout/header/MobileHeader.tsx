
import React from "react";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  hasDarkHero: boolean;
  scrolled: boolean;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const MobileHeader = ({ 
  hasDarkHero, 
  scrolled, 
  toggleMobileMenu, 
  mobileMenuOpen 
}: MobileHeaderProps) => {
  // Determine text color based on scroll position and hero type
  const getMenuColor = () => {
    if (mobileMenuOpen) return "bg-black";
    if (scrolled) return "bg-black";
    if (hasDarkHero) return "bg-white";
    return "bg-black";
  };
  
  return (
    <div className="flex justify-center items-center relative lg:hidden">
      <Link to="/" className="z-50">
        <img 
          src="/lovable-uploads/2527bd09-b43e-468c-9deb-c5ce7d3b2967.png" 
          alt="KOBLER"
          className={`h-8 md:h-10 w-auto transition-all duration-300 ${
            scrolled ? "h-7 md:h-8" : "h-8 md:h-10"
          }`}
        />
      </Link>
      
      {/* Mobile Menu Trigger - Positioned absolutely */}
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
          <span 
            className={`h-px ${getMenuColor()} transform transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span 
            className={`h-px ${getMenuColor()} transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span 
            className={`h-px ${getMenuColor()} transform transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default MobileHeader;
