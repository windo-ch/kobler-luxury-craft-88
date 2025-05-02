
import React, { useState } from "react";
import Button from "../ui/Button";
import { Mail, Check, AlertCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus("error");
      return;
    }
    
    setIsAnimating(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-luxury-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      
      <div className="luxury-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 shadow-lg border border-luxury-gold/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-luxury-gold p-4 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8 pt-4">
              <h2 className="text-3xl md:text-4xl font-playfair text-luxury-navy mb-4">
                Stay Updated
              </h2>
              <p className="text-luxury-charcoal/80 max-w-2xl mx-auto">
                Melden Sie sich für unseren Newsletter an. Gerne versorgen wir Sie regelmässig mit Angeboten, 
                Events und Neuigkeiten aus dem Hause Kobler.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                    }}
                    placeholder="Your Email Address"
                    className={`w-full px-4 py-3 border transition-all duration-300 focus:outline-none focus:ring-1 
                      ${status === "error" 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-luxury-charcoal/30 focus:ring-luxury-gold"}`}
                    required
                  />
                  {status === "error" && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <Button 
                  variant="secondary" 
                  size="md" 
                  className={`whitespace-nowrap relative overflow-hidden ${isAnimating ? 'opacity-70 cursor-not-allowed' : ''}`}
                  type="submit"
                >
                  {status === "success" ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                  {isAnimating && (
                    <span className="absolute inset-0 flex items-center justify-center bg-luxury-gold/80">
                      <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="h-2 w-2 bg-white rounded-full animate-bounce mx-1" style={{ animationDelay: "150ms" }}></span>
                      <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </span>
                  )}
                </Button>
              </div>
              {status === "error" && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  Please enter a valid email address.
                </p>
              )}
              <p className="text-xs text-luxury-charcoal/60 mt-4 text-center">
                By subscribing, you agree to receive email communications from Kobler Goldschmied & Uhrmacher AG.
              </p>
            </form>
            
            <div className="mt-8 pt-8 border-t border-luxury-charcoal/10 text-center">
              <p className="text-sm text-luxury-charcoal/70">
                Already following us? Connect on social media for more updates.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                {["facebook", "instagram", "linkedin"].map((platform) => (
                  <a 
                    key={platform}
                    href={`#${platform}`} 
                    className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center transition-all hover:bg-luxury-gold hover:text-white hover:border-luxury-gold"
                  >
                    <span className="sr-only">{platform}</span>
                    <i className={`fa fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
