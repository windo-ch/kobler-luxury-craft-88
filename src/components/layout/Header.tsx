
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, X } from "lucide-react";

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

  const switchToLanguage = (lang: "de" | "en") => {
    setCurrentLanguage(lang);
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
        <div className="flex items-center justify-between relative">
          {/* Logo - Links to homepage */}
          <Link 
            to="/" 
            className="flex items-center z-10" 
            aria-label="Home"
          >
            <div className="h-6 sm:h-7 md:h-8 w-auto relative">
              <img 
                src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
                alt="KOBLER ZUG" 
                className="h-full w-auto object-contain max-w-none" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`font-montserrat text-sm uppercase tracking-wider transition-all duration-300 pb-1 relative group
                  ${location.pathname === item.url 
                    ? 'text-luxury-gold' 
                    : 'text-luxury-charcoal hover:text-luxury-gold'}`}
              >
                {item.title}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left transition-transform duration-300
                  ${location.pathname === item.url ? 'bg-luxury-gold scale-x-100' : 'bg-luxury-gold scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>
            
          {/* Language Switcher - Desktop */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-luxury-charcoal hover:text-luxury-gold focus:outline-none focus:ring-0 transition-colors">
                <Globe className="h-4 w-4" />
                <span className="uppercase text-sm font-medium tracking-wider">{currentLanguage}</span>
                <ChevronDown className="h-3 w-3 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8} className="w-24 border-none shadow-md bg-white rounded-none p-0">
                <DropdownMenuItem 
                  onClick={() => switchToLanguage("de")}
                  className={`px-4 py-2 text-sm uppercase tracking-wider cursor-pointer ${currentLanguage === "de" ? "text-luxury-gold" : "text-luxury-charcoal hover:text-luxury-gold"}`}
                >
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => switchToLanguage("en")}
                  className={`px-4 py-2 text-sm uppercase tracking-wider cursor-pointer ${currentLanguage === "en" ? "text-luxury-gold" : "text-luxury-charcoal hover:text-luxury-gold"}`}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-3 text-luxury-charcoal focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl flex flex-col`}
        >
          <div className="h-20 border-b border-gray-100 flex items-center justify-between px-6">
            <div className="h-6 w-auto relative">
              <img 
                src="/lovable-uploads/e0ebbeb8-a995-43ce-9d8d-d315af3ebb77.png" 
                alt="KOBLER ZUG" 
                className="h-full w-auto object-contain max-w-none" 
              />
            </div>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-luxury-charcoal hover:text-luxury-gold focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
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
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Language Switcher - Mobile */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex justify-start space-x-4">
              <button
                onClick={() => switchToLanguage("de")}
                className={`py-2 px-4 text-sm uppercase tracking-wider transition-colors ${
                  currentLanguage === "de" 
                    ? "text-white bg-luxury-gold" 
                    : "text-luxury-charcoal border border-luxury-charcoal hover:border-luxury-gold hover:text-luxury-gold"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => switchToLanguage("en")}
                className={`py-2 px-4 text-sm uppercase tracking-wider transition-colors ${
                  currentLanguage === "en" 
                    ? "text-white bg-luxury-gold" 
                    : "text-luxury-charcoal border border-luxury-charcoal hover:border-luxury-gold hover:text-luxury-gold"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
