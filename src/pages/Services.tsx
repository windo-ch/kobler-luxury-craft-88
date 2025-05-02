
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { Clock, Gem, Watch } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Services</h1>
            <p className="text-xl text-luxury-light/90">
              Exceptional craftsmanship and expertise for your fine watches and jewelry
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Comprehensive Services"
              subtitle="At Kobler Goldschmied & Uhrmacher AG, we offer a range of specialized services designed to fulfill all your requirements for fine watches, exquisite jewelry, and investment-grade gemstones."
              centered
            />
            <div className="prose max-w-none text-luxury-charcoal/80 mt-8">
              <p>
                Whether you are seeking a unique timepiece, a bespoke jewelry creation, professional repair services, or expert appraisal, our dedicated team combines decades of experience with unwavering passion to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Watches Section */}
      <section id="watches" className="section-padding bg-luxury-light">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Watch className="w-8 h-8 text-luxury-gold mr-3" />
                <SectionTitle
                  title="Fine Watches"
                  subtitle=""
                />
              </div>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our curated collection of fine timepieces represents the pinnacle of watchmaking craftsmanship. As authorized dealers for select luxury watch brands, we offer an exquisite range of classic and contemporary models.
                </p>
                <p className="mb-4">
                  For those seeking something unique, our bespoke watch services allow you to commission a timepiece tailored to your specific preferences and requirements. Our experts will guide you through every step of the process, from initial design to final creation.
                </p>
                <p className="mb-4">
                  Services include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Selection of premium watch brands</li>
                  <li>Custom timepiece creation</li>
                  <li>Watch sourcing for rare and limited editions</li>
                  <li>Expert guidance and consultation</li>
                </ul>
                <p>
                  Whether you are adding to your collection or purchasing your first luxury timepiece, our knowledgeable team is committed to helping you find the perfect watch that aligns with your style and requirements.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/creations/watches" variant="primary">
                  Explore Our Watch Collection
                </Button>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop"
                  alt="Luxury watches"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewelry & Gemstones Section */}
      <section id="jewelry" className="section-padding bg-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617160895052-22d4d400f471?q=80&w=2070&auto=format&fit=crop"
                  alt="Fine jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Gem className="w-8 h-8 text-luxury-gold mr-3" />
                <SectionTitle
                  title="Jewelry & Gemstones"
                  subtitle=""
                />
              </div>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our jewelry collection showcases the artistic vision and technical mastery of our goldsmiths. From elegant engagement rings to statement necklaces and everything in between, each piece is crafted with meticulous attention to detail and using only the finest materials.
                </p>
                <p className="mb-4">
                  We specialize in bespoke jewelry creation, working closely with clients to bring their vision to life. Whether reimagining a family heirloom or creating a completely new design, our team provides personalized guidance throughout the entire process.
                </p>
                <p className="mb-4">
                  Our gemstone expertise includes:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Diamond selection and grading</li>
                  <li>Colored gemstone curation</li>
                  <li>Ethical and responsible sourcing practices</li>
                  <li>Investment-grade stone consultation</li>
                </ul>
                <p>
                  Each gemstone in our collection is carefully selected for its exceptional quality, color, and brilliance, ensuring that your jewelry piece will be treasured for generations to come.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/creations/jewelry" variant="primary">
                  View Our Jewelry Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Repairs Section */}
      <section id="repairs" className="section-padding bg-luxury-light">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-luxury-gold mr-3" />
                <SectionTitle
                  title="Expert Repairs & Maintenance"
                  subtitle=""
                />
              </div>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our master watchmakers and goldsmiths provide comprehensive repair and restoration services for timepieces and jewelry of all kinds. With a focus on precision and quality, we ensure that each item is handled with the utmost care and expertise.
                </p>
                <p className="mb-4">
                  Our watch repair services include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Complete servicing and overhauls</li>
                  <li>Mechanical movement repairs</li>
                  <li>Water resistance testing</li>
                  <li>Crystal replacement</li>
                  <li>Restoration of vintage timepieces</li>
                </ul>
                <p className="mb-4">
                  For jewelry, our services include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Ring resizing and adjustments</li>
                  <li>Stone replacement and resetting</li>
                  <li>Chain and clasp repairs</li>
                  <li>Antique jewelry restoration</li>
                  <li>Rhodium plating and metal refinishing</li>
                </ul>
                <p>
                  We use only genuine parts and materials, ensuring that your treasured possessions are restored to their original beauty and functionality.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Inquire About Repair Services
                </Button>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556597130-ef7fe8856386?q=80&w=1974&auto=format&fit=crop"
                  alt="Watch repair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appraisals Section */}
      <section id="appraisals" className="section-padding bg-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1620783770629-122b7f187703?q=80&w=2070&auto=format&fit=crop"
                  alt="Jewelry appraisal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <svg 
                  className="w-8 h-8 text-luxury-gold mr-3" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/>
                </svg>
                <SectionTitle
                  title="Appraisals & Valuations"
                  subtitle=""
                />
              </div>
              <div className="prose max-w-none text-luxury-charcoal/80">
                <p className="mb-4">
                  Our professional appraisal services provide accurate and detailed valuations of watches, jewelry, and loose gemstones. These appraisals serve various purposes, including insurance coverage, estate planning, and market value assessment.
                </p>
                <p className="mb-4">
                  Each appraisal is conducted with meticulous attention to detail by our certified experts, who have extensive knowledge of the market and technical aspects of fine timepieces and jewelry.
                </p>
                <p className="mb-4">
                  Our appraisal services include:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Full documentation with detailed descriptions</li>
                  <li>High-resolution photography</li>
                  <li>Current market valuation</li>
                  <li>Authentication of period pieces</li>
                  <li>Assessment of gemstone quality and characteristics</li>
                </ul>
                <p>
                  Whether for insurance purposes, estate valuation, or personal knowledge, our appraisal services provide you with comprehensive documentation of your valuable possessions.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Schedule an Appraisal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Experience Exceptional Service
            </h2>
            <p className="text-luxury-light/90 text-lg mb-8">
              We invite you to visit our boutique in Zug to discover our collections and services firsthand. Our team of experts is ready to assist you with all your watch and jewelry needs.
            </p>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
