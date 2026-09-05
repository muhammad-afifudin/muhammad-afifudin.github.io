import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Certificates: React.FC = () => {
  const { certificates } = portfolioData;

  return (
    <div className="min-h-screen bg-[#000000] text-[#f0f0f0] py-16 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>CREDENTIALS_&_ACCREDITATIONS</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              Certifications & Awards.
            </h1>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3ad389]" />
            <span>VERIFIED ACADEMIC & INDUSTRY HONORS</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert: {
            title: string;
            issuer: string;
            date: string;
            description: string;
          }, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="resend-card p-6 md:p-8 bg-[#000000] border border-[#292d30] hover:border-[#40464c] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#292d30]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0A84FF]">
                    <Award className="w-4 h-4" />
                    <span>VERIFIED_CREDENTIAL</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#6e727a]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-medium text-white tracking-tight mb-2">
                  {cert.title}
                </h3>

                <div className="font-mono text-xs text-[#abafb4] mb-4">
                  Issued by: <span className="text-white">{cert.issuer}</span>
                </div>

                <p className="text-xs text-[#a1a4a5] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292d30]/60 flex items-center justify-between text-xs font-mono text-[#6e727a]">
                <span className="flex items-center gap-1.5 text-[#3ad389]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AUTHENTICATED</span>
                </span>
                <span>STATUS: ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
