
import React from "react";

const PearlsCultivation = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Die Kunst der Perlenzucht</h2>
            <p className="text-black/60">Ein arbeitsintensiver und langwieriger Prozess</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="aspect-[4/3] w-full mb-8">
                <img 
                  src="/lovable-uploads/b002dbd2-827e-4ce4-bfbb-82cad2d68330.png" 
                  alt="Perlenfarm auf Lombok, Indonesien" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-black/80 leading-relaxed">
                  Die Zucht von Perlen ist ein arbeitsintensiver und langwieriger Prozess. Prächtige 
                  Zuchtperlen können erst nach Jahren harter Arbeit geerntet werden. Dabei ist aber der 
                  Erfolg noch nicht garantiert.
                </p>
                
                <p className="text-black/80 leading-relaxed">
                  Unter hundert geernteten Perlen ist etwa ein Drittel brauchbar. Aber nur eine oder zwei Perlen 
                  sind vollkommen. Ein beträchtlicher Teil jeder Ernte ist völlig unbrauchbar und muss ausgeschieden 
                  werden. So gesehen ist jede Perle, ob sie aus der freien Natur oder aus der Zucht stammt, nach wie 
                  vor ein grosses Wunder der Natur.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-8 text-black/90">So wird eine Kulturperle gezüchtet</h3>
              <ol className="space-y-8">
                <li className="flex gap-6">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">1</span>
                  <p className="text-black/80 leading-relaxed pt-1">
                    Baby-Austern werden gesammelt und in Muschelrahmen eingebracht. Diese werden dann in den 
                    Perlenfarmen in Wachstumsfeldern im Wasser ausgesetzt und während rund drei Jahren aufgezogen.
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">2</span>
                  <p className="text-black/80 leading-relaxed pt-1">
                    Wenn die Austern gross genug sind, werden sie aus dem Wasser geholt.
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">3</span>
                  <p className="text-black/80 leading-relaxed pt-1">
                    Die Austern werden sanft geöffnet und feinfühlig befruchtet. Mit einem Implantat 
                    (Salzwasseraustern) oder mit mehreren Implantaten gleichzeitig (Süsswasseraustern).
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">4</span>
                  <p className="text-black/80 leading-relaxed pt-1">
                    Nach dem Einsetzen des Implantats kommen die Perlenaustern zurück in die Wachstumsfelder.
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">5</span>
                  <p className="text-black/80 leading-relaxed pt-1">
                    In den Austernnetzen der Zuchtfarm müssen die Austern bis zu fünf Jahre weiter aufwendig 
                    gepflegt und gereinigt werden. Erst dann können Zuchtperlen geerntet werden.
                  </p>
                </li>
              </ol>
              
              <div className="mt-12">
                <div className="aspect-square w-full">
                  <img 
                    src="/lovable-uploads/f0f39f8c-c6f4-4636-9ed9-49bf9f1df152.png" 
                    alt="Geöffnete Auster Pinctada maxima" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlsCultivation;
