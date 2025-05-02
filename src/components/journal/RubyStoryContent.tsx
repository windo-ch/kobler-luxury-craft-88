
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin } from "lucide-react";

const RubyStoryContent = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead text-xl mb-8">
        Gerne möchten wir die Geschichte einer unserer letzten Funde mit Ihnen teilen.
      </p>

      <p>
        An jenem Anfang stand das Angebot eines aussergewöhnlich grossen Rubins, – dieser, so sagte man uns, sei komplett unbehandelt und weise ein Gewicht von über 20 Karat auf. Es ist Mai 2024 und eigentlich keine Ausnahme für uns von Kobler Zug, wegen einer solchen Gelegenheit nach Asien zu fliegen. Bei über 20 Karat jedoch „kribbelt" es uns schon etwas mehr im Bauch als sonst: Was, wenn alles aufgeht? Sprich, werden wir mit dem Verkäufer einig?
      </p>

      <p>
        Bevor wir Ihnen exklusive Einblicke in diese abenteuerliche Reise geben, möchten wir folgendes präzisieren: Ein Rubin in dieser Grösse sehen auch wir Juweliere äusserst selten. Den Stein nun wirklich in unserem Besitz zu haben, fordert nicht nur unser Atelier hinsichtlich der Umsetzung für ein Schmuckstück, sondern auch unser „Marketing". Wie viel möchten wir darüber erzählen, wie viele Details bekannt geben? Haben wir doch den einen oder anderen Interessenten schon im Auge. Diskretion kann bei einem solchen Verkauf ausschlaggebend sein. Das Erlebte aber, und vor allem die Finalisierung im Film mit unseren einmaligen und authentischen Bildsequenzen, möchten wir Ihnen nicht vorenthalten.
      </p>

      <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Bangkok – globales Handelszentrum für Edelsteine</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div>
          <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/d36971d5-33a7-47d5-826e-21040bdc3817.png" 
              alt="Rubin in seiner natürlichen Form" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Rubin in seiner natürlichen Form - ein unvergesslicher Anblick</p>
        </div>
        <div>
          <p>
            Ein Foto erhalten wir vorher nicht, auch nicht von unserer Mitarbeiterin vor Ort in Bangkok, wo wir in unserem Büro täglich über die Funde in dieser kostbaren Region auf dem Laufenden gehalten werden.
          </p>
          <p className="mt-4">
            Bangkok ist ein bedeutendes Zentrum für den Handel mit Edelsteinen, insbesondere Rubinen. Die Stadt ist bekannt für ihre hoch entwickelte Edelsteinindustrie und ihre Expertise in der Verarbeitung und Veredelung von Edelsteinen. Viele der in Bangkok gehandelten Rubine stammen aus verschiedenen Ländern, darunter Myanmar, Thailand, Sri Lanka und Afrika.
          </p>
        </div>
      </div>

      <div className="bg-luxury-light/30 p-8 rounded-lg my-12 relative">
        <div className="absolute -top-5 left-8 bg-luxury-gold text-white px-4 py-2 rounded-sm">
          <MapPin className="w-4 h-4 inline-block mr-2" />
          <span className="text-sm font-medium">Highlight</span>
        </div>
        <p className="text-lg font-playfair text-luxury-navy italic">
          "Rubin 8.04ct aus Madagaskar, unbehandelte Naturfarbe Vibrant Pigeon Blood, Preis CHF 1'412'000.00"
        </p>
      </div>

      <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Ein wenig hoffnungsvoller 60er-Jahre Schliff</h2>
      <p>
        Das spezielle an diesem Rubin sei, so wurden wir im Vorhinein informiert, dass er die letzten 60 Jahre in einem Ring getragen wurde, und dementsprechend Spuren der Abnutzung aufweise. Es waren aber weniger die oberflächlichen Tragespuren, welche den ersten Eindruck vielleicht mindern würden, vielmehr verhiess der Schliff aus den 60er-Jahren für uns nichts Gutes.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/314e4f30-a728-4b8d-8709-631806d7b36c.png" 
            alt="Ring mit herzförmigen Rubinen" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Ring mit herzförmigen Rubinen - ein Beispiel für exzellente Verarbeitung</p>
      </div>

      <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Der Weg von Bangkok nach Zug</h2>
      <p>
        Wir liessen sofort unsere Kontakte spielen, und plötzlich ging alles sehr schnell. Wir fanden Kontakt zu einer Schleiferin in der Nähe von Bangkok, die schon einmal einem grossen Rubin von über 14 Karat auf beeindruckende Weise neues Leben einhauchte. Damals zauberte sie aus einem etwas blassen Rot ein Taubenblutrot auf den edlen Stein. Dies ist nur möglich durch das fachmännische Ändern gewisser Winkel/Facetten und einer perfekten Politur, ohne riskante Einschlüsse freizulegen. Hierzu ist unglaublich viel Erfahrung notwendig.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-lg border border-luxury-light/20">
          <video 
            controls
            poster="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/image-9.jpeg"
            src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/Journey-of-a-Ruby-.m4v"
            className="w-full h-full object-cover"
          ></video>
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Die faszinierende Reise des Rubins - vom Fund bis zur Fertigung</p>
      </div>

      <div className="bg-luxury-light/30 p-8 rounded-lg my-12 relative">
        <div className="absolute -top-5 left-8 bg-luxury-gold text-white px-4 py-2 rounded-sm">
          <MapPin className="w-4 h-4 inline-block mr-2" />
          <span className="text-sm font-medium">Highlight</span>
        </div>
        <p className="text-lg font-playfair text-luxury-navy italic">
          "Handgefertigter, eleganter Ohrschmuck in Rotgold mit Brillanten und feinsten Rubinen aus Myanmar total 6.37ct, geschliffen als Tropfen, Preis CHF 85'000.00"
        </p>
      </div>

      <p>
        Eine weitere Herausforderung war es, den Rubin nach dem Schleifen neu zu zertifizieren. Erst dann erhalten wir die Gewissheit unserer Vermutungen, zum Beispiel dass er unbehandelt ist sowie die genaue Herkunft etc. Wir wollten diese Gewissheit unbedingt noch vor Ort in Bangkok einholen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div>
          <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/002e1510-460c-4980-822a-2f008385ee11.png" 
              alt="Hände eines Handwerkers mit einem Rubin" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Präzision und Fingerspitzengefühl - entscheidend bei der Arbeit mit kostbaren Steinen</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/f5a901d7-2839-4841-925a-133973977d34.png" 
              alt="Experte begutachtet einen Edelstein mit dem Mikroskop" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Dr. Peretti bei der detaillierten Untersuchung im Labor in Bangkok</p>
        </div>
      </div>

      <p>
        Selbstverständlich führen wir im eigenen Labor vor Ort parallele Untersuchungen aus, und hatten bereits ein genaues Bild des Edelsteins. Wer sonst aber als Dr. Adolf Peretti, Gründer des Instituts GRS, GemResearch Swisslab AG (ehemalig am Institute of Mineralogy and Petrography, ETH Zurich), hätte uns zusätzlich besser unterstützen können.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/f4eddf44-b07a-4088-a5bc-18fe8487844b.png" 
            alt="Experte untersucht einen Edelstein mit der Lupe" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Die kritische Begutachtung - jedes Detail zählt bei einem Stein dieser Qualität</p>
      </div>

      <p>
        Als dann unser langjähriger Freund und Kameramann Max Hüttermann, der auch den Namibia-Film mit uns produzierte, sich spontan dazu bereit erklärte, mitzukommen, durfte eigentlich nichts mehr schiefgehen. Wir filmten alles über die gesamte Zeit, unabhängig vom Ausgang dieser Geschichte.
      </p>
      
      <p>
        Über insgesamt 7 Tage in und um Bangkok herum arbeiteten wir als Team von Kobler Zug mit unserem Kameramann die Termine ab. Schon nach ein paar Stunden begrüssten wir den Entscheid, Max mitgenommen zu haben. Wir haben ihn kaum noch bemerkt. Über 50 Stunden Filmmaterial waren es zum Schluss. „Commercial Documentary" nenne sich dies, lassen wir uns von Max belehren.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/cce5343f-2f03-40ab-9afb-144b5cead03c.png" 
            alt="Designer skizziert einen Entwurf für ein Schmuckstück" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Die kreative Phase - vom Rohstein zum Schmuckstück-Entwurf</p>
      </div>

      <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Das Resultat – ein 22-karätiges Meisterwerk</h2>
      <p>
        Das Resultat lässt sich sehen, wie wir meinen. Der Rubin mit der spektakulären Grösse von über 22 Karat hat sich inzwischen bei uns in Zug gut eingelebt und die Frage: „Was machen wir nun damit?" beschäftigt das Team von Kobler Zug tagtäglich und führt zu spannenden Diskussionen mit den Goldschmieden.
      </p>
      
      <p>
        Wird es ein Ring, ein Anhänger, oder lassen wir ihn wie er ist und legen ihn in unseren Tresor – quasi als unser ganz eigenes Investment?
      </p>

      <p>
        Was dieser umwerfende Stein die letzten 60 Jahre genau durchgemacht hat, wissen wir nicht, aber seit dem 13. Mai 2024 befindet er sich in unserer Obhut. Bestaunen lässt er sich immer gerne, kommen Sie vorbei! Es wäre uns eine Freude, Ihnen dieses Juwel vorstellen zu dürfen.
      </p>
      
      <p>
        Natürlich ist er inzwischen auch DNA-markiert und wird zusätzlich zum GRS- auch mit einem SSEF-Zertifikat begleitet. Kobler Zug liefert Ihnen, dem Endkunden, das gesamte Paket für diesen aussergewöhnlichen Rubin.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/82344e9a-27cc-41b8-8085-16087e71f15b.png" 
            alt="Elegante Rubinohrringe" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Handgefertigter, eleganter Ohrschmuck mit Rubinen und Diamanten</p>
      </div>

      <div className="bg-luxury-light/30 p-8 rounded-lg my-12 relative">
        <div className="absolute -top-5 left-8 bg-luxury-gold text-white px-4 py-2 rounded-sm">
          <MapPin className="w-4 h-4 inline-block mr-2" />
          <span className="text-sm font-medium">Highlight</span>
        </div>
        <p className="text-lg font-playfair text-luxury-navy italic">
          "Was ist bei einem intensiven, rotfarbenen Rubin naheliegender als eine Herzform? Bei diesem Ring vereinen sich zwei Herzen. Sinnbildlich für Ihr eigenes, und das Ihrer grossen Liebe. Handgefertigter Ring in Weissgold mit Brillanten und einem in Herzform geschliffenen Paar Rubine aus Mozambique, total 5.23ct. Preis CHF 168'600.00"
        </p>
      </div>

      <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">DNA-Markierung für Edelsteine</h2>
      <p>
        Die ausgewählten Preziosen werden in einem eigens dafür geschaffenen Prozess mit physischen DNA-Nanopartikeln versehen, die sich spezifisch an die Edelsteine heften. In der Provenance Proof-Blockchain festgehalten, geben diese ihren späteren Eigentümern, wie in einem Herkunftsregister, digital und unwiderruflich Auskunft über ihre Rückverfolgbarkeit. Festgehalten werden der genaue Zeitpunkt des Fundes, die Arbeitsbedingungen während der Schürfarbeiten, der Transportweg, die gesamte Verarbeitungs- und Produktionshistorie bis hin zur genauen Ankunftszeit beim Endkunden. 
      </p>
      
      <p>
        Darüber hinaus protokolliert die Blockchain sämtliche Edelsteinkriterien, wie z. B. Karat-Gewicht, Farbe, Form und Behandlung. Dies ist weltweit die erste und sicherste Methode, um Transparenz für die Wertschöpfungskette von Edelsteinen zu schaffen. Wir von Kobler Zug sind Vorreiter in der Schweiz und markierten bereits weit über 700 Preziosen mit einem solchen Herkunftsregister. Wir wissen genau, wo unsere Edelsteine herkommen und wie diese gehandelt werden. So verfügen wir über ein absolutes Alleinstellungsmerkmal in der Schmuck- und Edelsteinbranche.
      </p>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/0f2e457f-65a2-42d9-ba23-673d898b9475.png" 
            alt="Sammlung farbiger Edelsteine mit einem Ring" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Kostbare Edelsteine verschiedener Farben, allesamt mit DNA-Markierung</p>
      </div>

      <div className="my-12">
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/0ad3c6cf-89f4-4461-b46f-f5b85f20753b.png" 
            alt="Polieren eines Edelsteins" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Der Schliff- und Polierprozess - entscheidend für die Brillanz des Steins</p>
      </div>
    </div>
  );
};

export default RubyStoryContent;
