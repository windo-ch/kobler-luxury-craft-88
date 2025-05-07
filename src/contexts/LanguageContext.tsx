
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Default context value
const defaultContext: LanguageContextType = {
  language: 'de',
  setLanguage: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

// Translation dictionaries
const translations = {
  de: {
    // Navigation
    'nav.collections': 'Kollektionen',
    'nav.services': 'Dienstleistungen',
    'nav.pearls': 'Perlen',
    'nav.about': 'Über uns',
    'nav.journal': 'Journal',
    'nav.contact': 'Kontakt',
    
    // Homepage
    'home.hero.title': 'Zeitlose Eleganz. Meisterhafte Handwerkskunst.',
    'home.hero.subtitle': 'Exquisite Zeitmesser und Schmuckkreationen seit 1996 im Herzen von Zug, Schweiz.',
    'home.hero.cta.collections': 'Entdecken Sie die Kollektion',
    'home.hero.cta.story': 'Unsere Geschichte',
    'home.hero.explore': 'Entdecken',
    
    // Footer
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Erhalten Sie Neuigkeiten und Einblicke vom Atelier Kobler.',
    'footer.newsletter.placeholder': 'Ihre E-Mail-Adresse',
    'footer.newsletter.button': 'Abonnieren',
    'footer.copyright': '© 2025 Kobler Goldschmied & Uhrmacher AG. Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.collections': 'Collections',
    'nav.services': 'Services',
    'nav.pearls': 'Pearls',
    'nav.about': 'About',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    
    // Homepage
    'home.hero.title': 'Timeless Elegance. Masterful Craftsmanship.',
    'home.hero.subtitle': 'Exquisite timepieces and jewelry creations since 1996 in the heart of Zug, Switzerland.',
    'home.hero.cta.collections': 'Discover The Collection',
    'home.hero.cta.story': 'Our Story',
    'home.hero.explore': 'Explore',
    
    // Footer
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Receive news and insights from Atelier Kobler.',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.button': 'Subscribe',
    'footer.copyright': '© 2025 Kobler Goldschmied & Uhrmacher AG. All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // Get initial language from localStorage or default to German
  const storedLang = localStorage.getItem('kobler-language');
  const initialLang: Language = (storedLang === 'en' || storedLang === 'de') ? storedLang : 'de';
  
  const [language, setLanguage] = useState<Language>(initialLang);

  // Update language and save to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('kobler-language', lang);
    
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lang;
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage,
        t 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
