
import React from "react";
import Layout from "../components/layout/Layout";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const journal = [
  {
    id: 1,
    title: "The Art of Watchmaking: From Movement to Masterpiece",
    excerpt:
      "Explore the intricate world of mechanical watches and discover how master watchmakers transform precision components into horological masterpieces.",
    image: "https://images.unsplash.com/photo-1495363156252-73026d44c868?q=80&w=2070&auto=format&fit=crop",
    date: "April 15, 2025",
    category: "Watches"
  },
  {
    id: 2,
    title: "Gemstone Journey: From Earth to Exquisite Jewelry",
    excerpt:
      "Follow the remarkable transformation of precious gemstones from rough minerals deep within the earth to dazzling centerpieces in fine jewelry.",
    image: "https://images.unsplash.com/photo-1589818975063-5e627e1aeb85?q=80&w=2070&auto=format&fit=crop",
    date: "March 22, 2025",
    category: "Gemstones"
  },
  {
    id: 3,
    title: "The Language of Diamonds: Understanding the Four Cs",
    excerpt:
      "A comprehensive guide to understanding diamond quality through cut, color, clarity, and carat weight—essential knowledge for discerning collectors.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2070&auto=format&fit=crop",
    date: "February 10, 2025",
    category: "Education"
  },
  {
    id: 4,
    title: "Preserving Your Timepiece: Essential Care for Luxury Watches",
    excerpt:
      "Discover expert tips and techniques for maintaining the beauty and functionality of your luxury watches for generations to come.",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1974&auto=format&fit=crop",
    date: "January 28, 2025",
    category: "Care & Maintenance"
  },
  {
    id: 5,
    title: "The Evolution of Engagement Rings Through the Centuries",
    excerpt:
      "A fascinating journey through the history of engagement rings, from ancient traditions to modern designs and changing symbolism.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1974&auto=format&fit=crop",
    date: "December 12, 2024",
    category: "Jewelry History"
  },
  {
    id: 6,
    title: "The Resurgence of Vintage Watches in Modern Collections",
    excerpt:
      "Explore the growing trend of vintage-inspired timepieces and why collectors are increasingly drawn to designs with historical significance.",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1964&auto=format&fit=crop",
    date: "November 5, 2024",
    category: "Trends"
  }
];

const Journal = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-luxury-navy text-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Journal</h1>
            <p className="text-xl text-luxury-light/90">
              Stories and insights from the world of fine watches and jewelry
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Journal Entries */}
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journal.map((entry) => (
              <article key={entry.id} className="group mb-8">
                <div className="relative overflow-hidden mb-4">
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-luxury-navy/80 backdrop-blur-sm text-white text-xs tracking-wider py-1 px-2 font-montserrat uppercase">
                    {entry.category}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-sm text-luxury-charcoal/60 font-montserrat">
                    {entry.date}
                  </span>
                </div>
                <h2 className="text-xl font-playfair font-medium text-luxury-navy mb-2">
                  {entry.title}
                </h2>
                <p className="text-luxury-charcoal/80 text-sm mb-4">
                  {entry.excerpt}
                </p>
                <span className="inline-block text-sm text-luxury-gold font-medium transition-all duration-300 group-hover:translate-x-2">
                  Read more
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
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-luxury-light">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Stay Informed"
              subtitle="Subscribe to our newsletter to receive the latest stories, insights, and announcements from Kobler Goldschmied & Uhrmacher AG."
              centered
            />
            <form className="max-w-lg mx-auto mt-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-4 py-3 border border-luxury-charcoal/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  required
                />
                <Button variant="secondary" size="md" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-luxury-charcoal/60 mt-4">
                By subscribing, you agree to receive email communications from Kobler Goldschmied & Uhrmacher AG.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journal;
