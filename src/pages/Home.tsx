import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/scrollytelling/HeroSection';
import { AboutSection } from '../components/scrollytelling/AboutSection';
import { SkillsSection } from '../components/scrollytelling/SkillsSection';
import { TimelineExperience } from '../components/scrollytelling/TimelineExperience';
import { PinnedHorizontalProjects } from '../components/scrollytelling/PinnedHorizontalProjects';
import { CertificatesSection } from '../components/scrollytelling/CertificatesSection';
import { ContactTerminal } from '../components/scrollytelling/ContactTerminal';

const Home: React.FC = () => {
  const location = useLocation();

  // Handle smooth scroll when landing with a target state or hash
  useEffect(() => {
    const stateTarget = (location.state as { scrollTo?: string })?.scrollTo;
    const hashTarget = window.location.hash.replace('#', '');
    const targetId = stateTarget || hashTarget;

    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="w-full bg-[#07080a] text-[#f1f5f9] behance-mesh-bg">
      {/* 1. HERO: Showcase with Framed Portrait & Social Dock (#home) */}
      <HeroSection />

      {/* 2. ABOUT: Profile, Specs & Stat Cards (#about) */}
      <AboutSection />

      {/* 3. SKILLS: Orbital Radar Diagram & Dev Tools Strip (#skills) */}
      <SkillsSection />

      {/* 4. CERTIFICATES: Accredited Credentials (#certificates-section) */}
      <CertificatesSection />

      {/* 5. EXPERIENCE: Milestone Timeline (#experience) */}
      <TimelineExperience />

      {/* 6. PROJECTS: Featured Systems Showcase (#featured-projects) */}
      <PinnedHorizontalProjects />

      {/* 7. CONTACT: Direct Dispatch Form & Coordinates (#contact-section) */}
      <ContactTerminal />
    </div>
  );
};

export default Home;
