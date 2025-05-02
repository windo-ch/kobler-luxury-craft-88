
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const PearlsHistory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <SectionTitle 
          title="Die Geschichte der Perlen" 
          subtitle="Eines der ältesten Kulturgüter der Menschheit"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-luxury-charcoal leading-relaxed">
              Perlen gehören zu den ältesten Kulturgütern der Menschheit. Die erste schriftliche Erwähnung von Perlen geht auf das Jahr 2206 vor Christi Geburt zurück.
              Bibel, Koran und Talmud preisen dieses Juwel des Meeres als Ideal himmlischer Schönheit. Der Persische Golf war seinerzeit das berühmteste Perlengebiet, denn die Gewässer des Persischen Golfs waren besonders reich an Perlenaustern. Perser
              galten als die führenden Perlenfischer der Welt. Nach persischer Mythologie sind Perlen «Tränen der Götter».
            </p>
            <p className="text-luxury-charcoal leading-relaxed">
              Perlen galten als die wertvollsten und gesuchtesten Schätze der Menschheit. Sie zierten die Insignien sowohl von humanen Herrschern wie auch von Tyrannen und schmückten Königinnen, Kurtisanen und Modegöttinnen.
            </p>
            <p className="text-luxury-charcoal leading-relaxed font-medium">
              Die Perle – vollendetes Bijou der Natur bedarf keiner Veredelung durch den Menschen und unterscheidet sich darin entscheidend von anderen edlen Juwelen. Die Perle hat über Jahrtausende die Aura des göttlichen Geschenkes bewahrt
              durch die Verkörperung natürlicher Schönheit, ästhetischer Perfektion und edler Bescheidenheit. Kein Wunder wurden Perlen bald auch zum klassischen Brautgeschenk.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-luxury-light/10 p-6 border-l-4 border-luxury-gold">
              <h3 className="font-playfair text-xl mb-3">Königin Elisabeth I. (1533-1603)</h3>
              <p className="text-luxury-charcoal leading-relaxed">
                Eine der grössten Perlenliebhaberinnen der Geschichte. Sie liebte ihre Perlen so sehr, dass sie immer sieben Perlenketten trug, wovon einige bis zu ihren Knien reichten. Sie war stolze Besitzerin von 3000 mit Perlen bestickten Roben.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-1/2">
                <img 
                  src="/lovable-uploads/89842ada-de94-46cb-8a6d-77a00df4ecd3.png"
                  alt="Elisabeth I mit Perlen" 
                  className="w-full h-auto rounded-md shadow-md" 
                />
              </div>
              <div className="w-1/2 space-y-4">
                <p className="text-luxury-charcoal leading-relaxed">
                  Königin Kleopatra von Ägypten, besass zwei Perlen in Tropfenform von unermesslichem Wert. Anlässlich eines Banketts mit ihrem Liebhaber Marc Anton habe sie aus einer dieser Perlen den wohl teuersten Drink der Geschichte zubereitet, überliefert die Legende.
                </p>
                <p className="text-luxury-charcoal leading-relaxed">
                  Pracht und Prunk kennzeichnen die Geschichte der Römer. Deshalb überrascht es nicht, dass Caesar, Caligula und Nero begeisterte Perlenliebhaber waren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlsHistory;
