import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Award, Terminal } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const AboutSection: React.FC = () => {
  const { personalInfo, education } = portfolioData;

  return (
    <section id="about" className="relative bg-[#000000] border-t border-[#292d30] py-24 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>SYSTEM_PROFILE // BIOGRAPHY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              About & Trajectory.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ad389]" />
            <span>ACADEMIC GPA: 3.80 / 4.00</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="resend-card p-6 md:p-8 bg-[#000000] border border-[#292d30]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6e727a] uppercase mb-4">
                <Terminal className="w-4 h-4 text-[#0A84FF]" />
                <span>ENGINEERING BACKGROUND</span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-4">
                Building practical software that bridges backend reliability with artificial intelligence.
              </h3>

              <p className="text-sm md:text-base text-[#a1a4a5] leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

              <p className="text-sm md:text-base text-[#a1a4a5] leading-relaxed mb-6">
                My work centers around software engineering best practices: architecting high-throughput REST APIs using Laravel & FastAPI, optimizing relational schemas in MySQL, and training machine learning pipelines with Scikit-Learn that solve real operational bottlenecks.
              </p>

              {/* Developer Metadata Spec */}
              <div className="pt-4 border-t border-[#292d30] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#abafb4]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>{personalInfo.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3ad389]" />
                  <span>Available for Full-time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Academic Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="resend-card p-6 md:p-8 bg-[#000000] border border-[#292d30]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6e727a] uppercase mb-4">
                <GraduationCap className="w-4 h-4 text-[#3b9eff]" />
                <span>FORMAL EDUCATION</span>
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className={`${idx !== 0 ? 'pt-6 border-t border-[#292d30]' : ''}`}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-base font-medium text-white">{edu.degree}</h4>
                      <span className="font-mono text-[11px] text-[#6e727a] flex-shrink-0">{edu.period}</span>
                    </div>
                    <div className="text-xs text-[#0A84FF] font-mono mb-2">{edu.institution}</div>
                    <p className="text-xs text-[#a1a4a5] leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>

              {/* Honors Badge */}
              <div className="mt-6 pt-5 border-t border-[#292d30] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#ffca16]" />
                  <span className="text-xs font-mono text-[#f0f0f0]">2nd Place NASPO UGM 2026</span>
                </div>
                <span className="text-[11px] font-mono text-[#6e727a]">HONOR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
