
import React, { useState } from "react";

const PearlsTypes = () => {
  const [activeTab, setActiveTab] = useState<'nature' | 'culture'>('nature');
  
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-4">Naturperlen und Kulturperlen</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Wunder der Natur in verschiedenen Formen
          </p>
          
          {/* Tab navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex border-b border-white/20">
              <button 
                className={`px-8 py-4 text-sm uppercase tracking-widest border-b-2 transition-all ${
                  activeTab === 'nature' ? 'border-white text-white' : 'border-transparent text-white/50 hover:text-white'
                }`}
                onClick={() => setActiveTab('nature')}
              >
                Naturperlen
              </button>
              <button 
                className={`px-8 py-4 text-sm uppercase tracking-widest border-b-2 transition-all ${
                  activeTab === 'culture' ? 'border-white text-white' : 'border-transparent text-white/50 hover:text-white'
                }`}
                onClick={() => setActiveTab('culture')}
              >
                Kulturperlen
              </button>
            </div>
          </div>
          
          {/* Content for Natural Pearls */}
          {activeTab === 'nature' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Naturperlen – Pure Magie ohne menschliche Eingriffe gewachsene Juwelen – sind eine 
                  zauberhafte und geheimnisvolle Laune der Natur. Sie bilden sich unter nicht völlig geklärten Umständen.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Wird eine Auster verletzt (beispielsweise durch ein anderes Tier), entwickelt sie eine 
                  Abwehrreaktion. Nach einer gewissen Zeit können sich an der verletzten Stelle Schichten 
                  von Aragonit bilden und so im Laufe der Jahre oder Jahrzehnte eine Naturperle formen.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Schätzungen gehen davon aus, dass in der Vergangenheit etwa 15'000 Austern geöffnet werden 
                  mussten, bis eine einzige Naturperle gefunden wurde.
                </p>
              </div>
              <div>
                <div className="aspect-square w-full relative mb-6">
                  <img 
                    src="/lovable-uploads/5cfd7755-8314-4523-80d6-22951b2e3cc3.png" 
                    alt="Querschnitt einer Naturperle" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-white/60">
                  Querschnitt einer Naturperle: Zentralbereich aus säuligem Calciumcarbonat (reich an 
                  organischem Material) und Perlmutt (feintafelige Aragonit-Plättchen)
                </p>
              </div>
            </div>
          )}
          
          {/* Content for Cultured Pearls */}
          {activeTab === 'culture' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Kulturperlen, auch Zuchtperlen genannt, wachsen in Perlenaustern in einer natürlichen 
                  Umgebung. Von Japan aus nahm die Erfolgsgeschichte der Zuchtperle ihren Lauf.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Kokichi Mikimoto wird als eigentlicher Erfinder der Zuchtperle bezeichnet. Im Jahre 1898 
                  konnte er seine erste kleine Ernte Akoya-Perlen einbringen. Sie bestand aus rund 4200 
                  Zuchtperlen, welche der erfolgreiche Züchter gleich seinem Kaiser verehrte.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Nach dem Zweiten Weltkrieg entwickelten Japaner ausserhalb Japans die Kunst der Perlenzucht weiter. 
                  Nämlich in Australien, Burma, Indonesien und in den Philippinen.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="aspect-square w-full relative mb-3">
                    <img 
                      src="/lovable-uploads/538248c1-9dc2-4b7f-94a5-ff04d0dd9b63.png" 
                      alt="Querschnitt einer Salzwasser-Kulturperle" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-white/60">Querschnitt Salzwasser-Kulturperle</p>
                </div>
                <div>
                  <div className="aspect-square w-full relative mb-3">
                    <img 
                      src="/lovable-uploads/79fb9666-c154-431a-8f15-89c96f5196f7.png" 
                      alt="Querschnitt einer Süsswasser-Kulturperle" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-white/60">Querschnitt Süsswasser-Kulturperle</p>
                </div>
                <div className="col-span-2 mt-6">
                  <div className="aspect-[4/3] w-full relative">
                    <img 
                      src="/lovable-uploads/2833f407-d56b-4e75-a30b-7f0cf8f3ac61.png" 
                      alt="Kokichi Mikimoto" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-white/60 mt-3">Kokichi Mikimoto (1858-1954)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PearlsTypes;
