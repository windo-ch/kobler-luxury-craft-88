
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const PearlTypes = () => {
  return (
    <section className="section-padding bg-luxury-light/5">
      <div className="luxury-container">
        <SectionTitle 
          title="Naturperlen und Kulturperlen" 
          subtitle="Wunder der Natur in verschiedenen Formen"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white p-8 shadow-md mb-8">
              <h3 className="font-playfair text-2xl mb-4 text-luxury-navy">Naturperlen</h3>
              <p className="text-luxury-charcoal leading-relaxed mb-6">
                Naturperlen – Pure Magie ohne menschliche Eingriffe gewachsene Juwelen – sind eine zauberhafte und geheimnisvolle Laune der Natur. Sie bilden sich unter nicht völlig geklärten Umständen.
              </p>
              <p className="text-luxury-charcoal leading-relaxed mb-6">
                Wird eine Auster verletzt (beispielsweise durch ein anderes Tier), entwickelt sie eine Abwehrreaktion. Nach einer gewissen Zeit können sich an der verletzten Stelle Schichten von Aragonit bilden und so im Laufe der Jahre oder Jahrzehnte eine Naturperle formen.
              </p>
              
              <div className="flex items-center gap-6 mt-8">
                <div className="w-1/2">
                  <img 
                    src="/lovable-uploads/5cfd7755-8314-4523-80d6-22951b2e3cc3.png" 
                    alt="Querschnitt einer Naturperle" 
                    className="w-full h-auto rounded"
                  />
                  <p className="text-sm text-center mt-2 text-luxury-charcoal/80">Querschnitt Naturperle</p>
                </div>
                <div className="w-1/2 text-sm space-y-2 text-luxury-charcoal/80">
                  <p>Zentralbereich aus säuligem Calciumcarbonat (reich an organischem Material)</p>
                  <p>Perlmutt (feintafelige Aragonit-Plättchen)</p>
                </div>
              </div>
              
              <div className="border-t border-luxury-light/20 mt-8 pt-6">
                <p className="text-luxury-charcoal leading-relaxed">
                  Schätzungen gehen davon aus, dass in der Vergangenheit etwa 15'000 Austern geöffnet werden mussten, bis eine einzige Naturperle gefunden wurde.
                </p>
                <p className="text-luxury-charcoal leading-relaxed mt-4">
                  Naturperlen sind sehr rar und werden heute nur noch selten entdeckt. Dennoch gibt es nach wie vor einen kleinen exklusiven Markt. Zu kaufen sind Naturperlen oft in Form von antiken Schmuckstücken, welche an Auktionen stets Höchstpreise erzielen.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="font-playfair text-2xl mb-4 text-luxury-navy">Kulturperlen</h3>
              <p className="text-luxury-charcoal leading-relaxed mb-6">
                Kulturperlen, auch Zuchtperlen genannt, wachsen in Perlenaustern in einer natürlichen Umgebung. Von Japan aus nahm die Erfolgsgeschichte der Zuchtperle ihren Lauf.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-luxury-light/30">
                  <AccordionTrigger className="text-luxury-navy hover:text-luxury-gold">Salzwasser-Kulturperle</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center gap-4">
                      <div className="w-1/2">
                        <img 
                          src="/lovable-uploads/538248c1-9dc2-4b7f-94a5-ff04d0dd9b63.png" 
                          alt="Querschnitt einer Salzwasser-Kulturperle" 
                          className="w-full h-auto rounded"
                        />
                        <p className="text-sm text-center mt-2 text-luxury-charcoal/80">Querschnitt Salzwasser-Kulturperle</p>
                      </div>
                      <div className="w-1/2 text-sm space-y-2 text-luxury-charcoal/80">
                        <p>Fein polierter Kern aus der Mississippi-Muschelschale</p>
                        <p>Perlmutt feintafelige Aragonit-Plättchen konzentrisch abgelagert in 3 bis 5 Jahren</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-luxury-light/30">
                  <AccordionTrigger className="text-luxury-navy hover:text-luxury-gold">Süsswasser-Kulturperle</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center gap-4">
                      <div className="w-1/2">
                        <img 
                          src="/lovable-uploads/79fb9666-c154-431a-8f15-89c96f5196f7.png" 
                          alt="Querschnitt einer Süsswasser-Kulturperle" 
                          className="w-full h-auto rounded"
                        />
                        <p className="text-sm text-center mt-2 text-luxury-charcoal/80">Querschnitt Süsswasser-Kulturperle</p>
                      </div>
                      <div className="w-1/2 text-sm space-y-2 text-luxury-charcoal/80">
                        <p>Zentraler Bereich hohl (Kaverne) oft mit Wasser gefüllt</p>
                        <p>Perlmutt Die farblich nuancierten Ringe stellen eine Art «Jahrringe» dar. Sie weisen auf den «Mahlzeiten wechsel» der Auster im Verlauf des Perlenwachstums hin</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 border-t border-luxury-light/20 pt-6">
                <div className="flex items-center gap-6">
                  <div className="w-1/2">
                    <img 
                      src="/lovable-uploads/2833f407-d56b-4e75-a30b-7f0cf8f3ac61.png" 
                      alt="Kokichi Mikimoto" 
                      className="w-full h-auto rounded-md shadow-md" 
                    />
                    <p className="text-sm text-center mt-2 text-luxury-charcoal/80">Kokichi Mikimoto (1858-1954)</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-luxury-charcoal leading-relaxed text-sm">
                      Kokichi Mikimoto wird als eigentlicher Erfinder der Zuchtperle bezeichnet. Im Jahre 1898 konnte er seine erste kleine Ernte Akoya-Perlen einbringen. Sie bestand aus rund 4200 Zuchtperlen, welche der erfolgreiche Züchter gleich seinem Kaiser verehrte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl text-luxury-navy font-medium font-playfair italic">
            "Natur oder Kultur: Perlen sind ein Wunder der Natur – so oder so."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PearlTypes;
