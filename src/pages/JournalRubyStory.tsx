
import React from "react";
import Layout from "../components/layout/Layout";
import RubyStoryHero from "../components/journal/RubyStoryHero";
import RubyStoryHeader from "../components/journal/RubyStoryHeader";
import RubyStoryContent from "../components/journal/RubyStoryContent";
import RelatedArticles from "../components/journal/RelatedArticles";
import CallToAction from "../components/journal/CallToAction";

const JournalRubyStory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <RubyStoryHero />

      {/* Main Content */}
      <article className="bg-white py-16">
        <div className="luxury-container">
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
    </Layout>
  );
};

export default JournalRubyStory;
