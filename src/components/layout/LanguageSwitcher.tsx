
import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  currentLanguage: "de" | "en";
  switchToLanguage: (lang: "de" | "en") => void;
  isMobile?: boolean;
}

const LanguageSwitcher = ({ 
  currentLanguage, 
  switchToLanguage,
  isMobile = false
}: LanguageSwitcherProps) => {
  
  // For desktop (dropdown)
  if (!isMobile) {
    return (
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
    );
  }
  
  // For mobile (buttons)
  return (
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
  );
};

export default LanguageSwitcher;
