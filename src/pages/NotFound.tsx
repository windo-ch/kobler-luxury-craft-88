
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="luxury-container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-playfair text-luxury-charcoal mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-playfair text-luxury-navy mb-8">
              Page Not Found
            </h2>
            <p className="text-luxury-charcoal/80 mb-10">
              We apologize, but the page you are looking for does not exist. It might have been moved or removed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/" variant="primary" size="lg">
                Return to Homepage
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
