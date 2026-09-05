import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, Github, Linkedin, Terminal } from 'lucide-react';
import { ResendCube3D } from './ResendCube3D';
import portfolioData from '../../data/portfolioData.json';

export const HeroSection: React.FC = () => {
  const { personalInfo } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  
  // Track scroll position to fade out the scroll indicator
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const indicatorY = useTransform(scrollY, [0, 80], [0, 16]);

  const scrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-20 flex flex-col justify-between pt-20 md:pt-24 pb-6 md:pb-8 px-4 md:px-8 max-w-[1240px] mx-auto w-full overflow-hidden"
    >
      {/* Top Telemetry / Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full flex items-center justify-between pt-1 pb-4 border-b border-[#292d30]/50"
      >
        <div className="resend-pill text-xs">
          <span className="w-2 h-2 rounded-full bg-[#3ad389] animate-pulse" />
          <span className="font-mono text-[#f0f0f0]">SURABAYA, ID</span>
          <span className="text-[#292d30]">|</span>
          <span className="font-mono text-[#0A84FF]">LATENCY: 18ms</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-[#a1a4a5]">
          <Terminal className="w-3.5 h-3.5 text-[#0A84FF]" />
          <span>PHP • PYTHON • FASTAPI • SCIKIT-LEARN</span>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="my-auto py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Announcement Pill */}
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="resend-pill mb-6 group cursor-pointer"
          >
            <span className="text-xs font-mono text-[#f0f0f0]">
              Available for Full-time & Machine Learning Roles
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0A84FF] transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>

          {/* Large Headline with tight letter-spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-[-0.04em] leading-[1.05] text-[#ffffff] mb-6"
          >
            Engineering scalable backends & machine intelligence.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-[19px] text-[#a1a4a5] leading-relaxed max-w-2xl mb-8 font-normal"
          >
            I'm <span className="text-[#f0f0f0] font-medium">{personalInfo.name}</span>, a Web Application Developer and Machine Learning Practitioner building reliable REST architectures, predictive models, and high-throughput data pipelines.
          </motion.p>

          {/* Resend & Apple-style Ghost Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto"
          >
            <button
              onClick={scrollToProjects}
              className="resend-btn-ghost w-full sm:w-auto group !border-white/40 hover:!border-white hover:bg-white hover:text-black transition-all"
            >
              <span>Explore Featured Systems</span>
              <ArrowRight className="w-4 h-4 text-[#0A84FF] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resend-btn-ghost w-full sm:w-auto !border-white/15 hover:!border-white/50 text-[#a1a4a5] hover:text-white"
            >
              <Download className="w-4 h-4 text-[#a1a4a5] group-hover:text-white" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="resend-btn-ghost !px-3 !border-white/15 hover:!border-white/40 hover:bg-white/10 text-white"
              >
                <Github className="w-4 h-4 text-[#f0f0f0]" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="resend-btn-ghost !px-3 !border-white/15 hover:!border-white/40 hover:bg-white/10 text-white"
              >
                <Linkedin className="w-4 h-4 text-[#f0f0f0]" />
              </a>
            </div>
          </motion.div>

          {/* Code Spec telemetry bar - Apple Glass Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#292d30]/60 w-full"
          >
            <span className="text-xs font-mono text-[#6e727a] uppercase tracking-wider mr-2">Core Stack:</span>
            {['Laravel', 'FastAPI', 'Random Forest', 'Livewire', 'MySQL'].map((tech) => (
              <span
                key={tech}
                className="bg-white/[0.06] border border-white/10 text-zinc-200 hover:text-white hover:bg-white/10 transition-colors font-mono text-[11px] py-1 px-2.5 rounded-[6px]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Minimalist Geometric Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Subtle Hairline Frame Ring */}
          <div className="absolute w-72 h-72 rounded-full border border-[#292d30]/40 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-[#292d30]/20 pointer-events-none" />
          <ResendCube3D />
          
          <div className="mt-4 font-mono text-[11px] text-[#6e727a] tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>MODEL_RENDER // VERTEX_ISOMETRIC</span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Scroll Indicator - Disappears as user scrolls */}
      <motion.div
        style={{
          opacity: shouldReduceMotion ? 1 : indicatorOpacity,
          y: shouldReduceMotion ? 0 : indicatorY,
        }}
        className="w-full flex flex-col items-center justify-center pt-4 pb-2 select-none"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-xs font-mono text-[#6e727a] hover:text-[#f0f0f0] transition-colors cursor-pointer group"
        >
          <span className="tracking-widest uppercase text-[11px]">Scroll down to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/40 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-[#0A84FF]"
            />
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[#6e727a] group-hover:text-white transition-colors" />
        </button>
      </motion.div>
    </section>
  );
};
