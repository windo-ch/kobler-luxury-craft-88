
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Book, MapPin } from "lucide-react";

const JournalRubyStory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubycleaned-scaled.jpg"
            alt="22-karätiger Rubin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-navy/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="luxury-container">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-luxury-gold/90 text-white px-3 py-1 mb-6 backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider font-medium">30. August 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                Journey of a Ruby: Der Weg eines aussergewöhnlichen 22-karatigen Rubins
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Von Bangkok bis nach Zug – die faszinierende Reise eines seltenen Edelsteins und seine Transformation zu einem Meisterwerk der Schmuckkunst.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <article className="bg-white py-16">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-12 border-b border-luxury-light pb-8">
              <div className="flex items-center space-x-4 mb-8">
                <Link 
                  to="/journal" 
                  className="text-luxury-charcoal/70 hover:text-luxury-gold flex items-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                  <span className="text-sm uppercase tracking-wider">Zurück zum Journal</span>
                </Link>
                <span className="text-luxury-charcoal/30">|</span>
                <div className="flex items-center text-luxury-charcoal/70">
                  <Book className="w-4 h-4 mr-2" />
                  <span className="text-sm uppercase tracking-wider">Edelsteine</span>
                </div>
              </div>
              <p className="text-xl text-luxury-charcoal/80 italic font-playfair">
                Ein besonderer Einblick in die Welt der Edelsteine und des handgefertigten Schmucks – folgen Sie der Reise eines außergewöhnlichen 22-karatigen Rubins von Bangkok bis in unser Atelier in Zug.
              </p>
            </div>

            {/* Article Content */}
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
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/bangkokmarket-scaled.jpg" 
                      alt="Edelsteinmarkt in Bangkok" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Der pulsierende Edelsteinmarkt in Bangkok - Ausgangspunkt unserer Rubin-Geschichte</p>
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
                    src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubypurchase-scaled.jpg" 
                    alt="Übergabe des 22ct. Rubins in unserem Büro in Bangkok" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Übergabe des 22ct. Rubins in unserem Büro in Bangkok.</p>
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
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/crafting-scaled.jpg" 
                      alt="Schleiferin bei der Arbeit in Bangkok" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Schleiferin bei der Arbeit in Bangkok.</p>
                </div>
                <div>
                  <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/design1-scaled.jpg" 
                      alt="Dr. Peretti bei der Arbeit im Labor in Bangkok" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Dr. Peretti bei der Arbeit im Labor in Bangkok.</p>
                </div>
              </div>

              <p>
                Selbstverständlich führen wir im eigenen Labor vor Ort parallele Untersuchungen aus, und hatten bereits ein genaues Bild des Edelsteins. Wer sonst aber als Dr. Adolf Peretti, Gründer des Instituts GRS, GemResearch Swisslab AG (ehemalig am Institute of Mineralogy and Petrography, ETH Zurich), hätte uns zusätzlich besser unterstützen können.
              </p>

              <p>
                Als dann unser langjähriger Freund und Kameramann Max Hüttermann, der auch den Namibia-Film mit uns produzierte, sich spontan dazu bereit erklärte, mitzukommen, durfte eigentlich nichts mehr schiefgehen. Wir filmten alles über die gesamte Zeit, unabhängig vom Ausgang dieser Geschichte.
              </p>
              
              <p>
                Über insgesamt 7 Tage in und um Bangkok herum arbeiteten wir als Team von Kobler Zug mit unserem Kameramann die Termine ab. Schon nach ein paar Stunden begrüssten wir den Entscheid, Max mitgenommen zu haben. Wir haben ihn kaum noch bemerkt. Über 50 Stunden Filmmaterial waren es zum Schluss. „Commercial Documentary" nenne sich dies, lassen wir uns von Max belehren.
              </p>

              <div className="my-12">
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                  <img 
                    src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/polishing-scaled.jpg" 
                    alt="Zeichnen in unserem Büro in Bangkok" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Zeichnen in unserem Büro in Bangkok.</p>
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
                    src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/finalpiece-scaled.jpg" 
                    alt="Fertiges Schmuckstück mit Rubin" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Der perfekt geschliffene Rubin in seiner vollen Pracht</p>
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
                    src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubycleaned-scaled.jpg" 
                    alt="Kostbare Edelsteine von Kobler Zug, allesamt mit DNA-Markierung" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Kostbare Edelsteine von Kobler Zug, allesamt mit DNA-Markierung.</p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-luxury-light/30">
              <h3 className="text-2xl font-playfair text-luxury-navy mb-8">Weitere Artikel, die Sie interessieren könnten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="relative overflow-hidden mb-4">
                    <div className="aspect-[16/10]">
                      <img
                        src="https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop"
                        alt="Edelsteinreise"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
                      Edelsteine
                    </div>
                  </div>
                  <span className="text-sm text-luxury-charcoal/60 font-montserrat">
                    22. März 2025
                  </span>
                  <h4 className="text-xl font-playfair font-medium text-luxury-navy mt-2 mb-2">
                    Edelsteinreise: Von der Erde zum exquisiten Schmuck
                  </h4>
                  <Link
                    to="#"
                    className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2"
                  >
                    Weiterlesen
                    <svg
                      className="inline-block ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="group">
                  <div className="relative overflow-hidden mb-4">
                    <div className="aspect-[16/10]">
                      <img
                        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop"
                        alt="Die Sprache der Diamanten"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
                      Bildung
                    </div>
                  </div>
                  <span className="text-sm text-luxury-charcoal/60 font-montserrat">
                    10. Februar 2025
                  </span>
                  <h4 className="text-xl font-playfair font-medium text-luxury-navy mt-2 mb-2">
                    Die Sprache der Diamanten: Die vier C verstehen
                  </h4>
                  <Link
                    to="#"
                    className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2"
                  >
                    Weiterlesen
                    <svg
                      className="inline-block ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTAs */}
      <section className="bg-luxury-light py-16">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-luxury-navy mb-8">
              Entdecken Sie unsere einzigartigen Kreationen
            </h2>
            <p className="text-luxury-charcoal/80 mb-10 max-w-2xl mx-auto">
              Besuchen Sie uns in unserem Atelier in Zug und erleben Sie die Schönheit unserer handgefertigten Schmuckstücke und Uhren. Oder vereinbaren Sie einen persönlichen Termin für eine individuelle Beratung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-luxury-navy text-white px-8 py-3 transition-colors hover:bg-luxury-navy/90 uppercase tracking-wider text-sm font-medium">
                Kontakt aufnehmen
              </Link>
              <Link to="/creations" className="bg-transparent border border-luxury-navy text-luxury-navy px-8 py-3 transition-colors hover:bg-luxury-navy/10 uppercase tracking-wider text-sm font-medium">
                Kreationen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JournalRubyStory;
