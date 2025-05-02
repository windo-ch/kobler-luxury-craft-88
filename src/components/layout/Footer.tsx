
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-white">
              KOBLER
              <span className="block text-xs font-montserrat font-light tracking-wider text-luxury-silver mt-1">
                GOLDSCHMIED & UHRMACHER AG
              </span>
            </h3>
            <p className="text-sm text-luxury-light/80 mt-4">
              Feinste Uhren, Edelsteine und Schmuck in Zug, Schweiz.
              Verbindung von Tradition mit modernem Fachwissen seit der Gründung.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-playfair mb-4 text-luxury-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/creations" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Unsere Kreationen
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-luxury-light/80 hover:text-luxury-gold hover:underline transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div>
            <h4 className="text-lg font-playfair mb-4 text-luxury-gold">Kontakt</h4>
            <address className="not-italic">
              <p className="text-sm text-luxury-light/80 mb-2">
                Kobler Goldschmied & Uhrmacher AG
              </p>
              <p className="text-sm text-luxury-light/80 mb-2">
                Neugasse 32<br />
                6300 Zug<br />
                Schweiz
              </p>
              <p className="text-sm text-luxury-light/80 mb-2">
                <a href="tel:+41417110633" className="hover:text-luxury-gold transition-colors">
                  +41 41 711 06 33
                </a>
              </p>
              <p className="text-sm text-luxury-light/80">
                <a href="mailto:info@kobler-zug.ch" className="hover:text-luxury-gold transition-colors">
                  info@kobler-zug.ch
                </a>
              </p>
            </address>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-playfair mb-4 text-luxury-gold">Newsletter</h4>
            <p className="text-sm text-luxury-light/80 mb-4">
              Melden Sie sich für unseren Newsletter an. Gerne versorgen wir Sie regelmässig mit Angeboten, Events und Neuigkeiten aus dem Hause Kobler.
            </p>
            <form className="mt-2">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="E-Mail-Adresse" 
                  className="px-4 py-2 text-luxury-charcoal w-full focus:outline-none focus:ring-1 focus:ring-luxury-gold" 
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-luxury-gold text-white px-4 py-2 mt-2 sm:mt-0 hover:bg-luxury-gold/90 transition-colors"
                >
                  Abonnieren
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-luxury-light/70">
          <p>© {new Date().getFullYear()} Kobler Goldschmied & Uhrmacher AG. Alle Rechte vorbehalten.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-luxury-gold transition-colors">Datenschutz</Link>
            <Link to="/imprint" className="hover:text-luxury-gold transition-colors">Impressum</Link>
            <Link to="/sitemap" className="hover:text-luxury-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
