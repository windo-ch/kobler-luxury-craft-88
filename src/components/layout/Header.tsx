
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<"de" | "en">("de");
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  // Navigation items
  const navItems = [
    {
      title: currentLanguage === "de" ? "Geschichte" : "Story",
      url: "/about",
    },
    {
      title: currentLanguage === "de" ? "Dienstleistungen" : "Services",
      url: "/services",
    },
    {
      title: currentLanguage === "de" ? "Kreationen" : "Creations",
      url: "/creations",
    },
    {
      title: currentLanguage === "de" ? "Journal" : "Journal",
      url: "/journal",
    },
    {
      title: currentLanguage === "de" ? "Kontakt" : "Contact",
      url: "/contact",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="luxury-container">
        <div className="flex items-center justify-between">
          {/* Logo - Links to homepage */}
          <Link 
            to="/" 
            className="flex items-center z-10" 
            aria-label="Home"
          >
            <div className="h-8 md:h-10 w-auto aspect-auto relative">
              <img 
                src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
                alt="KOBLER ZUG" 
                className="h-full w-auto object-contain max-w-none" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link
                    to={item.url}
                    className={`font-montserrat text-sm font-medium text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 relative py-2 
                      ${location.pathname === item.url ? 'text-luxury-gold after:opacity-100' : 'after:opacity-0'} 
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-luxury-gold 
                      after:transition-all after:duration-300 hover:after:opacity-100`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
            
          {/* Language Switcher - Desktop */}
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-1 font-montserrat text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase ml-8 font-medium"
          >
            {currentLanguage === "de" ? "EN" : "DE"}
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 text-luxury-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl`}
        >
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`font-playfair text-2xl text-luxury-charcoal hover:text-luxury-gold transition-colors 
                  ${location.pathname === item.url ? 'text-luxury-gold' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            
            {/* Language Switcher - Mobile */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 font-montserrat text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase"
              >
                <span className="text-sm font-medium">{currentLanguage === "de" ? "Sprache ändern" : "Change language"}</span>
                <span className="font-bold">{currentLanguage === "de" ? "EN" : "DE"}</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
