
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Book } from "lucide-react";

const RubyStoryHeader = () => {
  return (
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
  );
};

export default RubyStoryHeader;
