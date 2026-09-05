import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/scrollytelling/HeroSection';
import { AboutSection } from '../components/scrollytelling/AboutSection';
import { SkillsSection } from '../components/scrollytelling/SkillsSection';
import { PinnedHorizontalProjects } from '../components/scrollytelling/PinnedHorizontalProjects';
import { TimelineExperience } from '../components/scrollytelling/TimelineExperience';
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
    <div className="w-full bg-[#000000] text-[#f0f0f0]">
      {/* 1. HOME: Hero Section with 3D Cube & Scroll Indicator (#home) */}
      <HeroSection />

      {/* 2. ABOUT: Journey, Philosophy, and Academic Background (#about) */}
      <AboutSection />

      {/* 3. SKILLS: Technical Capability Matrix (#skills) */}
      <SkillsSection />

      {/* 4. FEATURED PROJECTS: Pinned Horizontal Showcase (with link to /projects) */}
      <PinnedHorizontalProjects />

      {/* 5. EXPERIENCE: Timeline with Dynamic Scroll Line (#experience) */}
      <TimelineExperience />

      {/* 6. CONTACT CTA: Terminal Coordinates Bridge */}
      <ContactTerminal />
    </div>
  );
};

export default Home;
