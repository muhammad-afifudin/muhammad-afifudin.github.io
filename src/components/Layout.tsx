import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on dedicated route navigation if no hash/anchor is targeted
  useEffect(() => {
    const stateTarget = (location.state as { scrollTo?: string })?.scrollTo;
    if (!stateTarget && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#f0f0f0] selection:bg-[#0A84FF]/25 selection:text-white antialiased">
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-grow flex flex-col justify-start">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
