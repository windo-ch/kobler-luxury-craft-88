
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import { Watch } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Story</h1>
            <p className="text-xl text-luxury-light/90">
              A legacy of precision, artistry, and unparalleled craftsmanship
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Kobler Heritage */}
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Kobler Heritage"
                subtitle="A tradition of excellence in watchmaking and jewelry craftsmanship."
              />
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  For generations, the name Kobler has been synonymous with exceptional craftsmanship and quality in the world of fine jewelry and watches. Our story begins with a passion for precision and an unwavering commitment to creating pieces that stand the test of time.
                </p>
                <p className="mb-4">
                  Established in Zug, Switzerland, Kobler Goldschmied & Uhrmacher AG combines traditional techniques passed down through generations with contemporary design and innovation. Our heritage is built on the foundation of skilled artisans who have dedicated their lives to perfecting their craft.
                </p>
                <p>
                  Today, we continue to honor this rich legacy while embracing modern advancements in technology and design. Each piece that bears the Kobler name reflects our history of excellence and our commitment to creating treasures that will be cherished for generations to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://images.unsplash.com/photo-1529330261237-e0140eab2852?q=80&w=2070&auto=format&fit=crop"
                  alt="Kobler Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="section-padding bg-luxury-light">
        <div className="luxury-container">
          <SectionTitle
            title="The Art of Craftsmanship"
            subtitle="Where skill, precision, and artistry come together to create true masterpieces."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://images.unsplash.com/photo-1629581678313-36cf745a9af9?q=80&w=1964&auto=format&fit=crop"
                  alt="Watch craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-playfair text-luxury-navy mb-4">
                Watchmaking Excellence
              </h3>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our master watchmakers bring decades of experience to their craft, ensuring that each timepiece meets the exacting standards that Swiss watchmaking is renowned for. From routine maintenance to complex repairs and restorations, our team approaches each project with meticulous attention to detail.
                </p>
                <p>
                  We work with precision tools and authentic parts, respecting the integrity of each timepiece while ensuring its optimal performance. Whether servicing a contemporary luxury watch or restoring a valuable vintage piece, our watchmakers combine technical expertise with profound respect for the art of horology.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <h3 className="text-2xl font-playfair text-luxury-navy mb-4">
                Jewelry Creation
              </h3>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our goldsmiths are artists who transform precious metals and gemstones into wearable works of art. Each piece of jewelry begins as a concept, carefully developed through sketches and consultations to capture the essence of the client's vision.
                </p>
                <p className="mb-4">
                  From there, our artisans employ traditional techniques alongside modern technology to craft pieces of exceptional beauty and quality. Whether creating a bespoke engagement ring, restoring an heirloom piece, or designing a statement necklace, our team infuses each creation with passion and expertise.
                </p>
                <p>
                  Every gemstone is carefully selected for its quality, color, and brilliance, ensuring that each finished piece meets our rigorous standards of excellence.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://images.unsplash.com/photo-1617160895052-22d4d400f471?q=80&w=2070&auto=format&fit=crop"
                  alt="Jewelry craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <SectionTitle
            title="Our Expertise"
            subtitle="Meet the passionate professionals behind our exceptional creations and services."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-luxury-light p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="Andreas Kobler"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-playfair text-luxury-navy mb-2">
                  Andreas Kobler
                </h3>
                <p className="text-luxury-gold font-medium mb-4">
                  Master Goldsmith & Watchmaker
                </p>
                <div className="prose text-luxury-charcoal/80">
                  <p>
                    With over 25 years of experience in fine jewelry and watch craftsmanship, Andreas leads our team with passion and uncompromising standards. His expertise spans from creating bespoke jewelry pieces to restoring complex timepieces from renowned Swiss manufacturers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-luxury-charcoal/80 max-w-2xl mx-auto">
                Our team consists of dedicated professionals who share a common passion for watchmaking and jewelry craftsmanship. Each member brings unique expertise and perspective, contributing to our reputation for excellence and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-luxury-navy text-white">
        <div className="luxury-container">
          <SectionTitle
            title="Why Choose Kobler"
            subtitle="What sets us apart in the world of fine watches and jewelry."
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Watch className="w-10 h-10 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-playfair mb-3">Expertise</h3>
              <p className="text-luxury-light/80">
                Decades of experience and continuous education ensure our team provides the highest level of service and craftsmanship.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg 
                  className="w-10 h-10 text-luxury-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.5 5.5l-8.5 8.5-4.5-4.5-2.5 2.5 7 7 11-11z"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Quality</h3>
              <p className="text-luxury-light/80">
                We source only the finest materials and uphold the strictest quality standards in all our creations and services.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg 
                  className="w-10 h-10 text-luxury-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Heritage</h3>
              <p className="text-luxury-light/80">
                Our rich tradition of excellence is reflected in every piece that bears the Kobler name.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <svg 
                  className="w-10 h-10 text-luxury-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Personalized Service</h3>
              <p className="text-luxury-light/80">
                We take the time to understand your unique preferences and requirements, providing tailored solutions for every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
