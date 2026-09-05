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
    <footer className="border-t border-[#292d30] bg-[#000000] py-10 mt-auto">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#6e727a]">
        <div>
          <span className="text-[#f0f0f0]">MUHAMMAD AFIFUDIN</span> &copy; {new Date().getFullYear()} — SURABAYA, ID
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a4a5] hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <span className="text-[#292d30]">/</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a4a5] hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <span className="text-[#292d30]">/</span>
          <button
            onClick={scrollToTop}
            className="text-[#0A84FF] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
