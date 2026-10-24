import React from 'react';
import { ArrowUp } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080a] py-20 px-4 sm:px-8 overflow-hidden select-none">
      {/* Background Wireframe Hairline Arcs */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[850px] h-[850px] wireframe-circle opacity-15 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Clean, Bold Closing Statement */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-[-0.04em] text-white leading-none font-display mb-4">
            Thank you<br />
            <span className="text-white/60">for visiting.</span>
          </h2>

          <p className="font-mono text-xs text-white/40 uppercase tracking-widest max-w-md">
            Engineered with React 18, Vite, Tailwind CSS, & Framer Motion.
          </p>
        </div>

        {/* Bottom Coordinates Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-white/50">
          <div>
            <span className="text-white font-medium">MUHAMMAD AFIFUDIN</span> &copy; {new Date().getFullYear()}, SIDOARJO, INDONESIA
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <span className="text-white/20">/</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <span className="text-white/20">/</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full border border-white/20 hover:border-white text-white transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
