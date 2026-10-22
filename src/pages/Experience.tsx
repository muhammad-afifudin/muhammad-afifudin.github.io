import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import { TechLogo } from '../components/TechLogo';

const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/4 -right-36 w-[600px] h-[600px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-[500px] h-[500px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header with Behance Signature Orb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>CAREER</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>CAREER</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Work Experience.
              </h1>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>INTERNSHIPS & PRODUCTION ROLES</span>
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-8">
          {experiences.map((exp: any, idx: number) => (
            <motion.div
              key={exp.id || idx}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#111317] border border-white/10 hover:border-white/25 transition-all shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-white/80 uppercase tracking-wider block mb-1">
                    {exp.type || 'Professional Role'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="text-sm text-white/60 font-mono mt-1 flex items-center gap-2">
                    <span className="text-white font-medium">{exp.company}</span>
                    <span className="text-white/20">/</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70">
                  {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((item: string, hIdx: number) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/65 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-white/40 mr-1">Technologies:</span>
                {exp.tech.map((t: string) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/80 inline-flex items-center gap-1.5"
                  >
                    <TechLogo name={t} className="w-3 h-3" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
