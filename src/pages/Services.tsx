
import React from "react";
import Layout from "../components/layout/KoblerLayout";
import Button from "../components/ui/Button";
import { Diamond, Watch, Hammer, Scale } from "lucide-react";

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="relative pt-16 pb-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-normal mb-6">Dienstleistungen</h1>
            <p className="text-xl text-white/90">
              Aussergewöhnliche Handwerkskunst und Expertise für Ihre wertvollen Schmuckstücke und Uhren
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Umfassende Dienstleistungen</h2>
            <p className="text-lg text-black/80">
              Bei Kobler Goldschmied & Uhrmacher AG bieten wir eine Reihe von spezialisierten Dienstleistungen, die alle Ihre Anforderungen an feine Uhren, exquisiten Schmuck und hochwertige Edelsteine erfüllen.
            </p>
            <div className="prose max-w-none text-black/80 mt-8">
              <p>
                Ob Sie auf der Suche nach einer einzigartigen Uhr, einer maßgeschneiderten Schmuckkreation, professionellen Reparaturdiensten oder einer fachkundigen Bewertung sind – unser engagiertes Team kombiniert jahrzehntelange Erfahrung mit unerschütterlicher Leidenschaft, um außergewöhnliche Ergebnisse zu erzielen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold- und Silberschmied Section */}
      <section id="goldsmith" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Hammer className="w-8 h-8 text-black mr-3" />
                <h2 className="text-3xl font-serif">Gold- und Silberschmied</h2>
              </div>
              <div className="prose max-w-none text-black/80">
                <p className="mb-4">
                  Unsere Gold- und Silberschmiede vereinen traditionelles Handwerk mit modernem Design, um außergewöhnliche Schmuckstücke zu kreieren. Mit jahrelanger Erfahrung und höchster Präzision erfüllen wir Ihre individuellen Wünsche.
                </p>
                <p className="mb-4">
                  Unsere Dienstleistungen umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Anfertigungen - Maßgefertigter Schmuck nach Ihren Wünschen</li>
                  <li>Reparaturen - Fachgerechte Instandsetzung von Schmuckstücken</li>
                  <li>Umarbeitungen - Neugestaltung von vorhandenem Schmuck</li>
                  <li>Verkauf - Exklusive Schmuckkollektion</li>
                </ul>
                <p>
                  Von der ersten Skizze bis zum fertigen Schmuckstück begleiten wir Sie durch den gesamten Prozess und garantieren ein einzigartiges Ergebnis, das Ihre Persönlichkeit widerspiegelt.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/collections/jewelry" variant="primary">
                  Schmuckkollektion entdecken
                </Button>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617160895052-22d4d400f471?q=80&w=2070&auto=format&fit=crop"
                  alt="Goldschmiedearbeit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemmologe / Steinschleifer Section */}
      <section id="gemologist" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566977827083-6431c2e555f9?q=80&w=2070&auto=format&fit=crop"
                  alt="Edelsteine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Diamond className="w-8 h-8 text-black mr-3" />
                <h2 className="text-3xl font-serif">Gemmologe / Steinschleifer</h2>
              </div>
              <div className="prose max-w-none text-black/80">
                <p className="mb-4">
                  Unsere Gemmologen und Steinschleifer verfügen über tiefgreifendes Fachwissen und modernste Technologien zur Analyse und Bearbeitung von Edelsteinen. Ihr Engagement für Exzellenz spiegelt sich in jedem Edelstein wider, den sie bearbeiten.
                </p>
                <p className="mb-4">
                  Unsere Dienstleistungen umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Analysieren - Professionelle Bestimmung von Edelsteinen</li>
                  <li>Polieren - Auffrischen des Glanzes Ihrer Edelsteine</li>
                  <li>Umschleifen - Neugestaltung und Optimierung von Edelsteinen</li>
                  <li>Verkauf - Sorgfältig ausgewählte Edelsteine höchster Qualität</li>
                  <li>Zertifizieren - Offizielle Dokumentation der Echtheit und Qualität</li>
                </ul>
                <p>
                  Mit unserem gemmologischen Fachwissen garantieren wir, dass jeder Edelstein sein volles Potenzial entfaltet und seine natürliche Schönheit optimal zur Geltung kommt.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/collections/gemstones" variant="primary">
                  Edelsteinkollektion entdecken
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uhrmacher / Pendulier Section */}
      <section id="watchmaker" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Watch className="w-8 h-8 text-black mr-3" />
                <h2 className="text-3xl font-serif">Uhrmacher / Pendulier</h2>
              </div>
              <div className="prose max-w-none text-black/80">
                <p className="mb-4">
                  Unsere Uhrmacher kombinieren traditionelles Handwerk mit modernem Fachwissen, um Ihre Zeitmesser zu warten, zu reparieren und zu restaurieren. Mit Präzision und Sorgfalt kümmern sie sich um jedes Detail Ihrer kostbaren Uhr.
                </p>
                <p className="mb-4">
                  Unsere Uhrmacherdienste umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Bandwechsel - Professioneller Austausch von Armbändern</li>
                  <li>Batteriewechsel - Fachgerechter Wechsel von Batterien und Akkus</li>
                  <li>Reparaturen - Beseitigung von Defekten und technischen Problemen</li>
                  <li>Restaurationen - Fachgerechte Wiederherstellung historischer Uhren</li>
                  <li>Verkauf - Sorgfältig ausgewählte Qualitätsuhren</li>
                </ul>
                <p>
                  Ob routinemäßige Wartung oder komplexe Restaurierung historischer Zeitmesser – unsere Uhrmacher sorgen dafür, dass Ihre Uhr mit höchster Präzision weiterläuft.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/collections/watches" variant="primary">
                  Uhrenkollektion entdecken
                </Button>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop"
                  alt="Uhrmacherarbeit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schätzungen Section */}
      <section id="appraisals" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1620783770629-122b7f187703?q=80&w=2070&auto=format&fit=crop"
                  alt="Schätzungen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Scale className="w-8 h-8 text-black mr-3" />
                <h2 className="text-3xl font-serif">Schätzungen</h2>
              </div>
              <div className="prose max-w-none text-black/80">
                <p className="mb-4">
                  Unsere professionellen Bewertungsdienste bieten genaue und detaillierte Schätzungen von Uhren, Schmuck und losen Edelsteinen. Diese Bewertungen dienen verschiedenen Zwecken, darunter Versicherungsschutz, Nachlassplanung und Marktwertermittlung.
                </p>
                <p className="mb-4">
                  Unsere Bewertungsdienste umfassen:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Versicherungswert - Grundlage für angemessenen Versicherungsschutz</li>
                  <li>Erbteilungswert - Faire Bewertung für Nachlassregelungen</li>
                  <li>Handelswert - Aktuelle Marktbewertung für Kaufentscheidungen</li>
                  <li>Liquidationswert - Realistische Einschätzung für schnelle Verkäufe</li>
                </ul>
                <p>
                  Jede Schätzung wird von unseren zertifizierten Experten mit größter Sorgfalt durchgeführt, die über umfangreiches Wissen über den Markt und die technischen Aspekte feiner Zeitmesser und Schmuck verfügen.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Schätzung anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Erleben Sie aussergewöhnlichen Service
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Wir laden Sie ein, unsere Boutique in Zug zu besuchen, um unsere Kollektionen und Dienstleistungen aus erster Hand zu entdecken. Unser Expertenteam steht Ihnen bei allen Anliegen rund um Uhren und Schmuck zur Verfügung.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Kontaktieren Sie uns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
