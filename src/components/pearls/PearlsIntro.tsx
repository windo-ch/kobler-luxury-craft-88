
import React from "react";

const PearlsIntro = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light">Die Geschichte der Perlen</h2>
            <div className="h-px w-16 bg-black"></div>
            
            <p className="text-black/80 leading-relaxed">
              Perlen gehören zu den ältesten Kulturgütern der Menschheit. Die erste schriftliche 
              Erwähnung von Perlen geht auf das Jahr 2206 vor Christi Geburt zurück. 
              Bibel, Koran und Talmud preisen dieses Juwel des Meeres als Ideal himmlischer Schönheit.
            </p>
            
            <p className="text-black/80 leading-relaxed">
              Der Persische Golf war seinerzeit das berühmteste Perlengebiet, denn die Gewässer 
              des Persischen Golfs waren besonders reich an Perlenaustern. Perser galten als die 
              führenden Perlenfischer der Welt. Nach persischer Mythologie sind Perlen «Tränen der Götter».
            </p>
            
            <p className="text-black/80 leading-relaxed">
              Die Perle – vollendetes Bijou der Natur bedarf keiner Veredelung durch den Menschen 
              und unterscheidet sich darin entscheidend von anderen edlen Juwelen. Die Perle hat über 
              Jahrtausende die Aura des göttlichen Geschenkes bewahrt durch die Verkörperung natürlicher 
              Schönheit, ästhetischer Perfektion und edler Bescheidenheit.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] w-full h-full relative">
              <img 
                src="/lovable-uploads/89842ada-de94-46cb-8a6d-77a00df4ecd3.png"
                alt="Elisabeth I mit Perlen" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-6">
              <p className="text-sm text-black/60 italic">
                "Eine der grössten Perlenliebhaberinnen der Geschichte, Königin Elisabeth I. (1533-1603), 
                liebte ihre Perlen so sehr, dass sie immer sieben Perlenketten trug, wovon einige bis zu 
                ihren Knien reichten."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlsIntro;
