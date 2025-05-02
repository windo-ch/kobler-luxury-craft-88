
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const PearlCultivation = () => {
  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <SectionTitle 
          title="Die Kunst der Perlenzucht" 
          subtitle="Ein arbeitsintensiver und langwieriger Prozess"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-luxury-charcoal leading-relaxed">
              Nach dem Zweiten Weltkrieg entwickelten Japaner ausserhalb Japans die Kunst der Perlenzucht weiter. 
              Nämlich in Australien, Burma, Indonesien und in den Philippinen. Sie fanden in diesen Ozeanen grössere 
              Perlenaustern von Hand- bis Tellergrösse. In diesen grossen Austern entwickeln sich auch grössere Perlen als in Akoya-Austern.
            </p>
            <p className="text-luxury-charcoal leading-relaxed">
              Die Zucht von Perlen ist ein arbeitsintensiver und langwieriger Prozess. Prächtige Zuchtperlen können erst 
              nach Jahren harter Arbeit geerntet werden. Dabei ist aber der Erfolg noch nicht garantiert.
            </p>
            <p className="text-luxury-charcoal leading-relaxed font-medium">
              Unter hundert geernteten Perlen ist etwa ein Drittel brauchbar. Aber nur eine oder zwei Perlen sind vollkommen. 
              Ein beträchtlicher Teil jeder Ernte ist völlig unbrauchbar und muss ausgeschieden werden. So gesehen ist jede Perle, 
              ob sie aus der freien Natur oder aus der Zucht stammt, nach wie vor ein grosses Wunder der Natur.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <img 
                  src="/lovable-uploads/b002dbd2-827e-4ce4-bfbb-82cad2d68330.png" 
                  alt="Perlenfarm" 
                  className="w-full h-auto rounded-md shadow-md" 
                />
                <p className="text-sm text-center mt-2 text-luxury-charcoal/80">
                  Perlenfarm auf Lombok, Indonesien
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/f0f39f8c-c6f4-4636-9ed9-49bf9f1df152.png" 
                  alt="Geöffnete Auster" 
                  className="w-full h-auto rounded-md shadow-md" 
                />
                <p className="text-sm text-center mt-2 text-luxury-charcoal/80">
                  Geöffnete Auster Pinctada maxima
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-luxury-light/5 p-8 rounded-md shadow-sm">
              <h3 className="font-playfair text-xl mb-6 text-luxury-navy text-center">So wird eine Kulturperle gezüchtet</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">1</span>
                  <p className="text-luxury-charcoal">
                    Baby-Austern werden gesammelt und in Muschelrahmen eingebracht. Diese werden dann in den Perlenfarmen in 
                    Wachstumsfeldern im Wasser ausgesetzt und während rund drei Jahren aufgezogen.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">2</span>
                  <p className="text-luxury-charcoal">
                    Wenn die Austern gross genug sind, werden sie aus dem Wasser geholt.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">3</span>
                  <p className="text-luxury-charcoal">
                    Die Austern werden sanft geöffnet und feinfühlig befruchtet. Mit einem Implantat (Salzwasseraustern) 
                    oder mit mehreren Implantaten gleichzeitig (Süsswasseraustern).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">4</span>
                  <p className="text-luxury-charcoal">
                    Salzwasseraustern erhalten einen feinen, rund polierten Perlmuttkern und ein 
                    Stück Mantelgewebe (Epithel) derselben Mutterauster.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">5</span>
                  <p className="text-luxury-charcoal">
                    Süsswasseraustern erhalten gleichzeitig mehrere Abschnitte Mantelgewebe (Epithel).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">6</span>
                  <p className="text-luxury-charcoal">
                    Nach dem Einsetzen des Implantats kommen die Perlenaustern zurück in die Wachstumsfelder.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">7</span>
                  <p className="text-luxury-charcoal">
                    Der Reiz der Implantate löst in den Austern die Bildung von Taschen (Perlensack) aus. In diese Taschen sondert 
                    die Auster hinterher Perlmuttschichten ab (feintafeliger Aragonit). Im besten Fall geschieht dies schön regelmässig und konzentrisch.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-luxury-gold text-white w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">8</span>
                  <p className="text-luxury-charcoal">
                    In den Austernnetzen der Zuchtfarm müssen die Austern bis zu fünf Jahre weiter aufwendig gepflegt und 
                    gereinigt werden. Erst dann können Zuchtperlen geerntet werden.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlCultivation;
