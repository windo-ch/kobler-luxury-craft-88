
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  navItems: Array<{
    title: string;
    url: string;
  }>;
  isMobile?: boolean;
  closeMenu?: () => void;
}

const Navigation = ({ navItems, isMobile = false, closeMenu }: NavigationProps) => {
  const location = useLocation();

  if (isMobile) {
    return (
      <nav className="flex-1 flex flex-col justify-center px-6 py-10 space-y-8">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.url}
            className={`font-playfair text-2xl transition-colors ${
              location.pathname === item.url 
                ? 'text-luxury-gold' 
                : 'text-luxury-charcoal hover:text-luxury-gold'
            }`}
            onClick={closeMenu}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-10">
      {navItems.map((item) => (
        <Link
          key={item.title}
          to={item.url}
          className={`font-montserrat text-sm uppercase tracking-wider transition-all duration-300 pb-1 relative group
            ${location.pathname === item.url 
              ? 'text-luxury-gold font-medium' 
              : 'text-luxury-charcoal hover:text-luxury-gold font-medium'}`}
        >
          {item.title}
          <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left transition-transform duration-300
            ${location.pathname === item.url ? 'bg-luxury-gold scale-x-100' : 'bg-luxury-gold scale-x-0 group-hover:scale-x-100'}`}></span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
