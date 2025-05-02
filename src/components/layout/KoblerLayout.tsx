
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import KoblerHeader from "./KoblerHeader";
import KoblerFooter from "./KoblerFooter";
import LoadingScreen from "./LoadingScreen";

const KoblerLayout = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen />
      <KoblerHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <KoblerFooter />
    </div>
  );
};

export default KoblerLayout;
