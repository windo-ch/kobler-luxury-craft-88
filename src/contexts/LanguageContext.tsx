
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

// Default context value
const defaultContext: LanguageContextType = {
  language: 'de',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
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
    
    // Intro section
    'intro.paragraph1': 'Seit 1996 steht der Name Kobler für exquisite Handwerkskunst, seltene Edelsteine und hervorragende Uhrmacherei in Zug. Unsere Arbeit verbindet traditionelles Handwerk mit moderner Innovation, um zeitlose Stücke zu schaffen, die Generationen überdauern.',
    'intro.paragraph2': 'Jedes Kobler-Schmuckstück und jede restaurierte Uhr trägt die Signatur eines Handwerks, das in seiner Präzision und seinem künstlerischen Ausdruck unvergleichlich ist. Wir laden Sie ein, die Welt von Kobler zu entdecken.',
    
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
    
    // Intro section
    'intro.paragraph1': 'Since 1996, the name Kobler has stood for exquisite craftsmanship, rare gemstones, and outstanding watchmaking in Zug. Our work combines traditional craftsmanship with modern innovation to create timeless pieces that endure for generations.',
    'intro.paragraph2': 'Each Kobler piece of jewelry and each restored watch bears the signature of a craft that is incomparable in its precision and artistic expression. We invite you to discover the world of Kobler.',
    
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

  // Translation function that accepts a fallback value
  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    return langDict[key as keyof typeof langDict] || fallback || key;
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
