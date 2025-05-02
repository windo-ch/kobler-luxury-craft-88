
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Book } from "lucide-react";

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
                Es begann mit einer Reise in die pulsierende Stadt Bangkok, wo die besten Edelsteine der Welt gehandelt werden. Hier, inmitten des geschäftigen Treibens des Edelsteinviertels, entdeckten wir etwas Außergewöhnliches – einen seltenen, 22-karatigen Rubin von außerordentlicher Qualität und Farbe.
              </p>

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
                  <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
                    <img 
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/rubypurchase-scaled.jpg" 
                      alt="Auswahl des Rubins" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Die sorgfältige Auswahl unseres 22-karatigen Rubins durch einen Experten</p>
                </div>
              </div>

              <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Die Selektion: Ein Stein von außergewöhnlicher Qualität</h2>
              <p>
                Die Auswahl eines solchen Edelsteins ist keine leichte Aufgabe. Unter hunderten von Steinen muss das perfekte Exemplar gefunden werden – einer, der nicht nur durch seine Größe, sondern auch durch seine Reinheit, seinen Schliff und vor allem seine charakteristische, tiefrote Farbe besticht.
              </p>
              <p>
                Unser 22-karatiger Rubin überzeugte durch seine besondere "Pigeon Blood"-Farbe, eine seltene und besonders geschätzte Farbvariante bei Rubinen, die an das intensive Rot von Taubenblut erinnert. Diese natürliche Farbgebung macht den Stein zu einem wahren Schatz.
              </p>

              <div className="my-12">
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                  <iframe 
                    width="100%" 
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Die Reise des Rubins" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Video: Vom Rohmaterial zum fertigen Schmuckstück - Ein Einblick in die handwerkliche Tradition</p>
              </div>

              <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Die Transformation: Von Bangkok nach Zug</h2>
              <p>
                Nach dem Erwerb des Rubins begann die nächste Phase seiner Reise: der Transport nach Zug und die Planung eines Schmuckstücks, das seiner Schönheit gerecht werden würde. In unserem Atelier begannen wir mit dem Entwurfsprozess, bei dem Tradition und modernes Design aufeinandertreffen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <Card className="border-luxury-light/20 shadow-sm">
                  <CardContent className="p-0">
                    <img 
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/design1-scaled.jpg" 
                      alt="Designprozess" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-playfair text-lg mb-2 text-luxury-navy">Entwurf</h3>
                      <p className="text-sm text-luxury-charcoal/70">Der Beginn jeder Kreation: Ein detaillierter Entwurf, der die Vision zum Leben erweckt.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-luxury-light/20 shadow-sm">
                  <CardContent className="p-0">
                    <img 
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/crafting-scaled.jpg" 
                      alt="Handwerkskunst" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-playfair text-lg mb-2 text-luxury-navy">Fertigung</h3>
                      <p className="text-sm text-luxury-charcoal/70">Präzision und Handwerkskunst vereint: Die meisterhafte Umsetzung des Entwurfs.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-luxury-light/20 shadow-sm">
                  <CardContent className="p-0">
                    <img 
                      src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/polishing-scaled.jpg" 
                      alt="Politur" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-playfair text-lg mb-2 text-luxury-navy">Vollendung</h3>
                      <p className="text-sm text-luxury-charcoal/70">Der letzte Schliff: Politur und Detailarbeit für ein perfektes Ergebnis.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Das Meisterwerk: Die Vereinigung von Tradition und Innovation</h2>
              <p>
                Nach Wochen akribischer Arbeit wurde der Rubin in eine exquisite Fassung aus 18-karätigem Weißgold eingebettet, umgeben von 24 handverlesenen Diamanten. Das Ergebnis ist ein Schmuckstück, das nicht nur die Schönheit des Rubins zur Geltung bringt, sondern auch die Geschichte seiner Reise und die Handwerkskunst unseres Ateliers verkörpert.
              </p>

              <div className="my-12">
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg">
                  <img 
                    src="https://goldschmied-uhrmacher.ch/wp-content/uploads/2024/08/finalpiece-scaled.jpg" 
                    alt="Fertiges Schmuckstück mit Rubin" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="text-sm text-luxury-charcoal/60 mt-2 italic">Das vollendete Meisterwerk: Der 22-karätige Rubin in seiner maßgefertigten Weißgoldfassung</p>
              </div>

              <h2 className="text-2xl font-playfair text-luxury-navy mt-12 mb-6">Die Geschichte geht weiter</h2>
              <p>
                Jeder Edelstein erzählt eine Geschichte – von seiner Entstehung tief in der Erde über seine Entdeckung bis hin zu seiner Transformation zu einem Schmuckstück. Die Geschichte dieses besonderen Rubins ist nun Teil unserer Tradition und Handwerkskunst bei Kobler Goldschmied & Uhrmacher AG.
              </p>
              <p>
                Wir laden Sie ein, Teil dieser Geschichte zu werden und die Schönheit dieses außergewöhnlichen Schmuckstücks persönlich zu erleben. Besuchen Sie unser Atelier in Zug und lassen Sie sich von der Magie dieses besonderen Rubins verzaubern.
              </p>
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
