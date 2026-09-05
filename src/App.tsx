import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

// Restrained, sleek page transition without transform containing-block interference
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full flex-grow flex flex-col justify-start bg-[#000000]"
    >
      {children}
    </motion.div>
  );
};

// Animated route transitions switcher
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main continuous scroll page */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {/* Dedicated Pages */}
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/certificates"
          element={
            <PageWrapper>
              <Certificates />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

        {/* Legacy route redirects to sections on main page */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;
