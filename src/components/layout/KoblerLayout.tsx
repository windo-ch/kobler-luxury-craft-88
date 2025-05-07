
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import KoblerHeader from "./KoblerHeader";
import KoblerFooter from "./KoblerFooter";
import LoadingScreen from "./LoadingScreen";
import { LanguageProvider } from "../../contexts/LanguageContext";

const KoblerLayout = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Check if loading has already been shown in this session
    const loadingShown = window.sessionStorage.getItem('loadingShown');
    if (loadingShown === 'true' && pathname !== '/') {
      setIsLoading(false);
    } else {
      // Mark loading as shown to prevent showing it again
      window.sessionStorage.setItem('loadingShown', 'true');
      
      // For better user experience, set a minimum loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
        <KoblerHeader />
        <main className="flex-grow">
          <Outlet />
        </main>
        <KoblerFooter />
      </div>
    </LanguageProvider>
  );
};

export default KoblerLayout;
