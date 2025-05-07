
import React, { useEffect } from "react";
import RubyStoryHero from "../components/journal/RubyStoryHero";
import RubyStoryHeader from "../components/journal/RubyStoryHeader";
import RubyStoryContent from "../components/journal/RubyStoryContent";
import RelatedArticles from "../components/journal/RelatedArticles";
import CallToAction from "../components/journal/CallToAction";

const JournalRubyStory = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Ruby Story | Kobler Journal';
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <RubyStoryHero />

      {/* Main Content */}
      <article className="bg-white py-16">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <RubyStoryHeader />

            {/* Article Content */}
            <RubyStoryContent />

            {/* Related Articles */}
            <RelatedArticles />
          </div>
        </div>
      </article>

      {/* CTAs */}
      <CallToAction />
    </>
  );
};

export default JournalRubyStory;
