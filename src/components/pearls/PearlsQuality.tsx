
import React from "react";

const PearlsQuality = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Qualitätsmerkmale</h2>
          <p className="text-white/60">
            Jede Perle ist ein Unikat – ein Wunder der Natur
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-light">Die Oberfläche</h3>
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-white/70 leading-relaxed">
                Die makellose Perlenoberfläche ist ein entscheidendes Kriterium für die Beurteilung 
                der Qualität einer Perle. Flecken, Kratzer, Ablagerungen und Unebenheiten, die mit 
                blossem Auge erkennbar sind, beeinträchtigen die Qualität.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-light">Der Lüster</h3>
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-white/70 leading-relaxed">
                Lüster definiert die mehr oder weniger perfekte Spiegelung des Lichts an der Perlenoberfläche. 
                Je intensiver die Lichtreflexion, um so stärker der Lüster. Guter Lüster gibt den Perlen ein 
                lebendiges Aussehen.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-light">Die Farbe</h3>
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-white/70 leading-relaxed">
                Perlen gibt es in einer ausserordentlich breiten Farbpalette. Wir bei Kobler sind stilsicher 
                in der Auswahl von Perlen für monochrome Colliers oder in der Zusammenstellung ausgewogener 
                Farbkombinationen.
              </p>
            </div>
          </div>
          
          <div className="mt-24 max-w-3xl mx-auto">
            <p className="text-center text-xl font-serif italic text-white/80">
              "Keine Perle ist wie die andere. Alle Farbschattierungen, das ganze wahrnehmbare 
              Farbenspektrum von Blütenweiss über alle Farbnuancen, bis hin zu Tiefschwarz, sind möglich."
            </p>
          </div>
          
          <div className="mt-24 border border-white/10 p-12 text-center">
            <h3 className="text-2xl font-serif font-light mb-6">Unsere Perlenkollektion</h3>
            <p className="text-white/70 leading-relaxed max-w-3xl mx-auto mb-8">
              Auf das Wachstum der Perlen, ihre Formen, Farben und Grössen haben Züchter keinen Einfluss. 
              Die Qualität der Perle wird allein bestimmt durch ihre Mutterauster und die vorherrschenden 
              Wasser- und Umweltbedingungen. Gerne zeigen wir Ihnen unsere umfassende Sammlung in unserem 
              Geschäft in Zug.
            </p>
            <a 
              href="/contact" 
              className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Beratungstermin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlsQuality;
