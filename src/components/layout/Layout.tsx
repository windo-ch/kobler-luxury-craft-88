
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingScreen from "../ui/LoadingScreen";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  // Scroll to top on page change and show loading animation
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Skip loading animation on initial load as it's handled by Index.tsx
    if (location.key) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.key]);

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
