
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import KoblerHeader from "./KoblerHeader";
import KoblerFooter from "./KoblerFooter";
import LoadingScreen from "./LoadingScreen";

const KoblerLayout = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <KoblerHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <KoblerFooter />
    </div>
  );
};

export default KoblerLayout;
