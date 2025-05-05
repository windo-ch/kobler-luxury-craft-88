
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

// This component is kept for backward compatibility but should not be used
// for new pages. Use KoblerLayout instead.
// This now simply renders the children without additional navigation elements
// to avoid double navigation with KoblerLayout
const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* No longer including Header component to avoid double navigation */}
      <main className="flex-grow">{children}</main>
      {/* No longer including Footer component to avoid double footer */}
    </div>
  );
};

export default Layout;
