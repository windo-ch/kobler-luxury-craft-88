
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const KoblerFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-black/10">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Logo and Intro */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-serif text-xl tracking-tight">KOBLER</h2>
            </Link>
            <p className="text-sm text-black/70 mb-8 max-w-md">
              Excellence in fine watchmaking and jewelry since 1996. 
              Located in the heart of Zug, Switzerland, our atelier combines traditional craftsmanship with contemporary design to create timeless pieces.
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
              <li><Link to="/collections" className="text-sm text-black/70 hover:text-black transition-colors">Collections</Link></li>
              <li><Link to="/services" className="text-sm text-black/70 hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/perlen" className="text-sm text-black/70 hover:text-black transition-colors">Pearls</Link></li>
              <li><Link to="/about" className="text-sm text-black/70 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-sm text-black/70 hover:text-black transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="text-sm text-black/70 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-sm text-black/70 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-black/70 hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/shipping-returns" className="text-sm text-black/70 hover:text-black transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-sm text-black/70 mb-6">
              Receive news and insights from Atelier Kobler.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full border-b border-black/20 py-3 px-0 bg-transparent placeholder-black/40 focus:outline-none focus:border-black" 
                  placeholder="Your email address" 
                  required
                />
              </div>
              <button type="submit" className="btn w-full py-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright and Address */}
        <div className="mt-20 pt-8 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-black/70">
                © {currentYear} Kobler Goldschmied & Uhrmacher AG. All rights reserved.
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
