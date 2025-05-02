
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-luxury-light/90">
              We'd be delighted to assist you with any questions or requests
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Visit Our Boutique"
                subtitle="We welcome you to visit our boutique in the heart of Zug, where our team of experts will be happy to assist you."
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1">
                    <MapPin className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-luxury-navy mb-1">Address</h4>
                    <address className="not-italic text-luxury-charcoal/80">
                      Kobler Goldschmied & Uhrmacher AG<br />
                      Neugasse 32<br />
                      6300 Zug<br />
                      Switzerland
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Clock className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-luxury-navy mb-1">Opening Hours</h4>
                    <div className="text-luxury-charcoal/80">
                      <div className="grid grid-cols-2 gap-2">
                        <span>Monday - Friday</span>
                        <span>9:00 - 18:30</span>
                        <span>Saturday</span>
                        <span>10:00 - 16:00</span>
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Phone className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-luxury-navy mb-1">Telephone</h4>
                    <p className="text-luxury-charcoal/80">
                      <a 
                        href="tel:+41417110633" 
                        className="hover:text-luxury-gold transition-colors"
                      >
                        +41 41 711 06 33
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Mail className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-luxury-navy mb-1">Email</h4>
                    <p className="text-luxury-charcoal/80">
                      <a 
                        href="mailto:info@kobler-zug.ch" 
                        className="hover:text-luxury-gold transition-colors"
                      >
                        info@kobler-zug.ch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="mt-10 h-64 bg-luxury-light relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.961971302737!2d8.51144721582902!3d47.17269847915881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7c56f868dd7%3A0x9ce8893be9c44f5f!2sNeugasse%2032%2C%206300%20Zug%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1651568298666!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  className="border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Contact Us"
                subtitle="We'd be delighted to hear from you. Please fill out the form below and we'll respond to your inquiry as soon as possible."
              />
              
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-luxury-charcoal mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-luxury-charcoal mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-luxury-charcoal mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-luxury-charcoal mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-charcoal mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-luxury-charcoal/80">
                    I consent to Kobler Goldschmied & Uhrmacher AG collecting and processing my data in accordance with the <a href="/privacy-policy" className="text-luxury-gold hover:underline">Privacy Policy</a>.
                  </label>
                </div>
                
                <div>
                  <Button variant="secondary" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Appointments Section */}
      <section className="section-padding bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Schedule an Appointment"
              subtitle="For personalized service and dedicated attention, we encourage you to schedule an appointment with our specialists."
              centered
              light
            />
            <p className="text-luxury-light/80 mt-6 mb-8">
              Whether you're seeking a specific timepiece, interested in custom jewelry design, or require expert watch servicing, our team will ensure your visit is tailored to your needs.
            </p>
            <Button variant="secondary" size="lg" href="mailto:appointments@kobler-zug.ch">
              Request Appointment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
