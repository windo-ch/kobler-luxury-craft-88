
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const PearlsQuality = () => {
  return (
    <section className="section-padding bg-luxury-navy text-white">
      <div className="luxury-container">
        <SectionTitle 
          title="Qualitätsmerkmale" 
          subtitle="Jede Perle ist ein Unikat – ein Wunder der Natur" 
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-luxury-navy/50 backdrop-blur-md p-6 rounded-md border border-luxury-gold/30">
            <h3 className="font-playfair text-2xl mb-4 text-luxury-gold">Die Oberfläche</h3>
            <div className="h-0.5 w-12 bg-luxury-gold mb-4"></div>
            <p className="text-luxury-light leading-relaxed">
              Die makellose Perlenoberfläche ist ein entscheidendes Kriterium für die Beurteilung der Qualität einer Perle. 
              Flecken, Kratzer, Ablagerungen und Unebenheiten, die mit blossem Auge erkennbar sind, beeinträchtigen die Qualität. 
              Nur Zuchtperlen ohne bedeutende Markierungen werden durch den Perlenspezialisten Kobler der höchsten Klasse zugeordnet.
            </p>
          </div>
          
          <div className="bg-luxury-navy/50 backdrop-blur-md p-6 rounded-md border border-luxury-gold/30">
            <h3 className="font-playfair text-2xl mb-4 text-luxury-gold">Der Lüster</h3>
            <div className="h-0.5 w-12 bg-luxury-gold mb-4"></div>
            <p className="text-luxury-light leading-relaxed">
              Lüster definiert die mehr oder weniger perfekte Spiegelung des Lichts an der Perlenoberfläche. 
              Je intensiver die Lichtreflexion, um so stärker der Lüster. Guter Lüster gibt den Perlen ein lebendiges Aussehen.
            </p>
          </div>
          
          <div className="bg-luxury-navy/50 backdrop-blur-md p-6 rounded-md border border-luxury-gold/30">
            <h3 className="font-playfair text-2xl mb-4 text-luxury-gold">Die Farbe</h3>
            <div className="h-0.5 w-12 bg-luxury-gold mb-4"></div>
            <p className="text-luxury-light leading-relaxed">
              Perlen gibt es in einer ausserordentlich breiten Farbpalette. Wir bei Kobler sind stilsicher in der Auswahl 
              von Perlen für monochrome Colliers oder in der Zusammenstellung ausgewogener Farbkombinationen.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="italic text-xl text-luxury-light font-playfair">
            "Keine Perle ist wie die andere. Alle Farbschattierungen, das ganze wahrnehmbare Farbenspektrum von 
            Blütenweiss über alle Farbnuancen, bis hin zu Tiefschwarz, sind möglich."
          </p>
        </div>
        
        <div className="mt-12 bg-luxury-navy/30 p-8 rounded-md border border-luxury-gold/20">
          <h3 className="font-playfair text-2xl mb-6 text-center text-luxury-gold">Unsere Perlenkollektion</h3>
          <p className="text-luxury-light leading-relaxed text-center max-w-3xl mx-auto">
            Auf das Wachstum der Perlen, ihre Formen, Farben und Grössen haben Züchter keinen Einfluss. Die Qualität der Perle 
            wird allein bestimmt durch ihre Mutterauster und die vorherrschenden Wasser- und Umweltbedingungen. 
            Gerne zeigen wir Ihnen unsere umfassende Sammlung in unserem Geschäft in Zug.
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-luxury-gold hover:bg-luxury-gold/90 transition-colors text-white px-8 py-3 font-medium tracking-wide"
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
