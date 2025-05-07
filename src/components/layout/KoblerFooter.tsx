
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const KoblerFooter = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Logo and Intro */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-serif text-xl tracking-tight">KOBLER</h2>
            </Link>
            <p className="text-sm text-black/70 mb-8 max-w-md">
              {language === 'de' 
                ? 'Exzellenz in feiner Uhrmacherei und Schmuckherstellung seit 1996. In Zug, Schweiz, verbindet unser Atelier traditionelles Handwerk mit zeitgenössischem Design, um zeitlose Stücke zu kreieren.'
                : 'Excellence in fine watchmaking and jewelry since 1996. Located in the heart of Zug, Switzerland, our atelier combines traditional craftsmanship with contemporary design to create timeless pieces.'}
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-black hover:text-black/70 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-black hover:text-black/70 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-black hover:text-black/70 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/collections" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.collections')}</Link></li>
              <li><Link to="/services" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/perlen" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.pearls')}</Link></li>
              <li><Link to="/about" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/journal" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.journal')}</Link></li>
              <li><Link to="/contact" className="text-sm text-black/70 hover:text-black transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">
              {language === 'de' ? 'Rechtliches' : 'Legal'}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-sm text-black/70 hover:text-black transition-colors">
                  {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-black/70 hover:text-black transition-colors">
                  {language === 'de' ? 'Nutzungsbedingungen' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="text-sm text-black/70 hover:text-black transition-colors">
                  {language === 'de' ? 'Versand & Rückgabe' : 'Shipping & Returns'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">{t('footer.newsletter')}</h3>
            <p className="text-sm text-black/70 mb-6">
              {t('footer.newsletter.desc')}
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full border-b border-black/20 py-3 px-0 bg-transparent placeholder-black/40 focus:outline-none focus:border-black" 
                  placeholder={t('footer.newsletter.placeholder')} 
                  required
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-none border border-black bg-black px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black w-full">
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright and Address */}
        <div className="mt-20 pt-8 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-black/70">
                {t('footer.copyright')}
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs text-black/70">
                Bahnhofstrasse 28, 6300 Zug, Switzerland<br />
                Tel: +41 41 710 20 20 | info@kobler-zug.ch
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KoblerFooter;
