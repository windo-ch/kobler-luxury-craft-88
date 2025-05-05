
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

// This component is kept for backward compatibility
// For new components, use the mobile menu in KoblerHeader instead
// Due to navigation transition, this component is being phased out
const MobileMenu = ({ 
  isOpen,
  onClose,
  navItems,
  currentLanguage,
  switchToLanguage
}: MobileMenuProps) => {
  // Return null or minimal implementation to avoid double navigation
  // This will help in the transition period as we phase out this component
  return null;
};

export default MobileMenu;
