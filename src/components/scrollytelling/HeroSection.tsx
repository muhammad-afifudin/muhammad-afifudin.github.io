import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Pause,
  ChevronDown,
  X,
  Activity,
  CheckCircle2,
  Cpu,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import { TechLogo } from '../TechLogo';

export const HeroSection: React.FC = () => {
  const { personalInfo } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Track scroll position to fade out the scroll indicator
  const { scrollY } = useScroll();
  const indicatorOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const indicatorY = useTransform(scrollY, [0, 80], [0, 16]);

  const scrollToProjects = () => {
    const el = document.getElementById('featured-projects') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const featuredSystems = [
    {
      id: 'tempe-bangjae',
      title: 'Tempe Bang Jae',
      subtitle: 'Artisan Tempe, E-Commerce',
      tag: 'Live Prod',
      year: '2026',
      image: '/assets/img/portfolio/tempe-bangjae.png',
      badge: 'E-Commerce'
    }
  ];

  return (
    <section id="home" className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto select-none">
      
      {/* 
        ========================================================================
        SIDE CONTACT DOCK (GitHub, LinkedIn, Email)
        Kept accessible on desktop as requested: "kontak disamping jangan dihilangkan"
        ========================================================================
      */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 p-2 rounded-full bg-[#14161a]/85 backdrop-blur-2xl border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.7)]"
      >
        <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest py-1 [writing-mode:vertical-rl] select-none">
          CONNECT
        </span>
        <div className="w-4 h-[1px] bg-white/15 my-1" />
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <div className="w-4 h-[1px] bg-white/15 my-1" />
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Email"
          className="p-2.5 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
        >
          <Mail className="w-4 h-4" />
        </a>
      </motion.aside>

      {/* 
        ========================================================================
        MAIN SHOWCASE CANVAS: Dark Gray Luxury Framed Container
        Matches previous high-end design: deep radial gradient, faint background
        watermark display typography, central portrait, and glass widgets.
        ========================================================================
      */}
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-white/[0.12] bg-[#101216] shadow-[0_30px_100px_rgba(0,0,0,0.85)] min-h-[760px] lg:min-h-[820px] xl:min-h-[860px] flex flex-col justify-between">
        
        {/* Layer 0: Multi-Tier Dark Gray Luxury Radial Gradients */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(110% 85% at 50% 25%, #2a2d36 0%, #1a1c22 42%, #0e1013 100%)'
          }}
        />

        {/* Ambient Halo behind head/shoulders */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] lg:w-[800px] h-[500px] sm:h-[650px] lg:h-[800px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Top Rim Light */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

        {/* 
          ========================================================================
          LAYER 1: Giant Background Typographic Accent
          Reference: "ENGINEER" atmospheric display text.
          ========================================================================
        */}
        <div className="absolute top-[10%] sm:top-[8%] lg:top-[7%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
          <span className="font-extrabold text-[15vw] sm:text-[13vw] lg:text-[11vw] uppercase tracking-[-0.04em] leading-none text-white/[0.045] whitespace-nowrap block drop-shadow-sm font-display">
            ENGINEER
          </span>
        </div>

        {/* 
          ========================================================================
          LAYER 2: Central Figure (Muhammad Afifudin Cutout Photo)
          Placed centrally with seamless z-layering and soft bottom vignette.
          ========================================================================
        */}
        <div className="absolute inset-x-0 bottom-0 top-[6%] z-10 hidden lg:flex items-end justify-center pointer-events-none select-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full flex items-end justify-center"
          >
            <img 
              src="/afifudin-portrait.png" 
              alt="Muhammad Afifudin" 
              className="h-[76%] lg:h-[86%] xl:h-[90%] max-h-[750px] w-auto max-w-none object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            />
            {/* Soft bottom vignette to anchor torso gracefully */}
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* 
          ========================================================================
          LAYER 3: Foreground Grid Content
          Flanks the central portrait with Left Column & Right Column glass widgets
          ========================================================================
        */}
        <div className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 items-center lg:items-stretch pointer-events-none">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start pointer-events-auto h-full pt-2 lg:pt-4">
            <div>
              {/* Category & Status Kicker (Clean typography, no dot spans, no green) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-between w-full max-w-sm mb-4 sm:mb-6 text-xs font-mono text-white/60 tracking-wider uppercase"
              >
                <div className="border border-white/15 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-medium tracking-wide text-white/80">
                  <span>WEB &amp; AI ENGINEERING 2026</span>
                </div>
                <span className="text-white/40 font-mono text-[11px]">WARU, SIDOARJO</span>
              </motion.div>

              {/* Big Bold Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-[66px] xl:text-[72px] font-black uppercase tracking-[-0.04em] leading-[0.94] text-white mb-6 sm:mb-8 font-display"
              >
                SCALABLE<br />
                SYSTEMS
              </motion.h1>

              {/* Main Pill Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 mb-6 lg:mb-8"
              >
                <button
                  onClick={scrollToProjects}
                  className="rounded-full bg-white text-zinc-950 font-bold px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wider uppercase shadow-[0_15px_35px_rgba(255,255,255,0.18)] hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-medium px-6 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wider uppercase backdrop-blur-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>CONTACT ME</span>
                </button>
              </motion.div>

              {/* Primary Tech Badges with Authentic Logos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-2 mb-6"
              >
                {['Laravel 11', 'FastAPI', 'Python', 'Scikit-Learn', 'MySQL', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/[0.04] border border-white/10 text-white/80 hover:text-white transition-colors font-mono text-[11px] py-1 px-3 rounded-full inline-flex items-center gap-1.5"
                  >
                    <TechLogo name={tech} className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Mobile-Only Portrait Display */}
            <div className="lg:hidden w-full flex justify-center my-4 relative z-10 pointer-events-none">
              <img 
                src="/afifudin-portrait.png" 
                alt="Muhammad Afifudin" 
                className="h-64 sm:h-80 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Bottom Left Glassmorphism Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-xs sm:max-w-sm mt-auto pb-2"
            >
              <div 
                onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                className="rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 p-3 sm:p-3.5 flex items-center gap-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.6)] hover:border-white/25 transition-all group cursor-pointer"
              >
                {/* Round Play/Pause Icon Button */}
                <div className="w-11 h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all shrink-0 shadow-inner">
                  {isPlayingDemo ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </div>

                {/* Project Screenshot / Media Thumbnail */}
                <div className="w-28 sm:w-32 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shrink-0 relative">
                  <img 
                    src="/assets/img/portfolio/tempe-bangjae.png" 
                    alt="Tempe Bang Jae Artisan E-Commerce" 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-1 right-1.5 text-[9px] font-mono text-white/90 bg-black/70 px-1 py-0.5 rounded border border-white/10">
                    LIVE
                  </span>
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-white truncate">Tempe Bang Jae</span>
                  <span className="text-[10px] font-mono text-white/50 truncate">Artisan Tempe Waru</span>
                </div>
              </div>

              {/* Bottom Caption */}
              <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed font-normal mt-2.5 max-w-xs sm:max-w-sm">
                Boutique digital storefront and order simulation for Waru, Sidoarjo.
              </p>
            </motion.div>
          </div>

          {/* Center spacer column for portrait breathing room on desktop */}
          <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-4 flex flex-col justify-between items-end pointer-events-auto h-full pt-4 lg:pt-8 gap-6">
            
            {/* Top Right Glassmorphism Card: Featured Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[340px] rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.08]">
                <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">
                  Featured Systems
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  PRODUCTION ACTIVE
                </span>
              </div>

              {/* System Items List */}
              <div className="space-y-2">
                {featuredSystems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveProjectIndex(idx);
                      scrollToProjects();
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all cursor-pointer group ${
                      activeProjectIndex === idx
                        ? 'bg-white/10 border border-white/15'
                        : 'hover:bg-white/[0.05] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Thumbnail */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-800 border border-white/10 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>

                      {/* Title & Subtitle */}
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-medium text-white group-hover:text-white transition-colors truncate">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-white/50 truncate font-mono">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Direct Link Action */}
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <a
                        href="https://tempebangjae.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white hover:text-black text-white/80 text-[10px] font-mono inline-flex items-center gap-1 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                        title="Open live website"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Right Glassmorphism Card: Artisan E-Commerce with Direct Link */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="w-full max-w-[340px] rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all flex flex-col gap-2.5 mt-auto"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    Artisan E-Commerce
                  </h3>
                  <a
                    href="https://tempebangjae.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                    title="Open live web"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-white/60 leading-relaxed mt-1">
                  Interactive storefront &amp; order simulation system.
                </p>
              </div>

              {/* Preview Visual Banner with Direct Link */}
              <a
                href="https://tempebangjae.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-zinc-900 border border-white/10 relative block group cursor-pointer"
                title="Visit Tempe Bang Jae live website"
              >
                <img 
                  src="/assets/img/portfolio/tempe-bangjae.png" 
                  alt="Tempe Bang Jae Storefront" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-white/90 font-medium px-2 py-0.5 rounded-full bg-black/70 border border-white/10">
                    LIVE PRODUCTION WARU
                  </span>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-mono text-black bg-white font-bold px-2 py-0.5 rounded-full shadow-md group-hover:bg-zinc-200 transition-colors">
                  <span>Visit</span>
                  <ArrowUpRight className="w-2.5 h-2.5 text-black" />
                </div>
              </a>
            </motion.div>

          </div>

        </div>

        {/* 
          ========================================================================
          DYNAMIC SCROLL INDICATOR
          Subtle indicator at the base of the hero canvas
          ========================================================================
        */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : indicatorOpacity,
            y: shouldReduceMotion ? 0 : indicatorY,
          }}
          className="relative z-30 w-full flex flex-col items-center justify-center pb-4 select-none pointer-events-auto"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 text-[11px] font-mono text-white/50 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="tracking-widest uppercase">EXPLORE SYSTEMS</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
          </button>
        </motion.div>

      </div>

      {/* 
        ========================================================================
        INTERACTIVE DEMO MODAL
        Triggered when user clicks the play button on the bottom left media card
        ========================================================================
      */}
      <AnimatePresence>
        {isPlayingDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsPlayingDemo(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-[#14161a] border border-white/15 p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white">
                    <Activity className="w-4 h-4 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Tempe Bang Jae Storefront Simulation</h3>
                    <p className="text-[11px] font-mono text-white/50">Artisan Tempe E-Commerce, Waru, Sidoarjo</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPlayingDemo(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-[#0c0d10] border border-white/10 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/40 mb-2 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-white/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/80" />
                      HTTP 200 OK
                    </span>
                    <span>STORE: TEMPE-BANG-JAE</span>
                  </div>
                  <pre className="text-white/80 overflow-x-auto leading-relaxed">
{`{
  "store": "Tempe Bang Jae - Artisan Tempe Waru",
  "status": "Online, Production Active",
  "cart_summary": {
    "total_items": 3,
    "selected": ["Tempe Daun Pisang (x2)", "Tempe Daun Jati (x1)"],
    "total_amount_idr": 26000
  },
  "deployment": {
    "platform": "Vercel Edge Network",
    "live_url": "https://tempebangjae.vercel.app/"
  }
}`}
                  </pre>
                </div>

                <div className="flex items-center justify-between text-xs text-white/60 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-white/40" />
                    Deployed on Vercel
                  </span>
                  <a
                    href="https://tempebangjae.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline flex items-center gap-1 font-medium cursor-pointer"
                  >
                    Open Live Web Application &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
