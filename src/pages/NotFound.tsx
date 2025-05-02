
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
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
    <section className="section-padding min-h-[80vh] flex items-center">
      <div className="container-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-serif text-black mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-black mb-8">
            Page Not Found
          </h2>
          <p className="text-black/70 mb-10">
            We apologize, but the page you are looking for does not exist. It might have been moved or removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/" 
              className="bg-black text-white border border-black hover:bg-white hover:text-black"
            >
              Return to Homepage
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
