
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Newsletter</h2>
          <p className="text-white/70 mb-10">
            Abonnieren Sie unseren Newsletter, um über Neuigkeiten, exklusive Veranstaltungen 
            und Kollektionen auf dem Laufenden zu bleiben.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ihre E-Mail Adresse" 
                className="bg-transparent border-b border-white/30 px-3 py-2 flex-grow focus:outline-none focus:border-white text-white placeholder-white/50"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Abonnieren
              </button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Durch Absenden dieses Formulars stimmen Sie dem Erhalt von E-Mails zu. Sie können sich jederzeit abmelden.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
