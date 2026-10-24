import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Terminal } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const AboutSection: React.FC = () => {
  const { personalInfo, education } = portfolioData;

  const stats = [
    { number: '3+', label: 'Years Experience', desc: 'Web & Machine Learning' },
    { number: '4+', label: 'Featured Systems', desc: 'Production Deployments' },
    { number: '94.6%', label: 'Model Accuracy', desc: 'Random Forest Classifier' },
    { number: '10+', label: 'Core Tech Stack', desc: 'Laravel, FastAPI, Python' },
    { number: '3.80', label: 'Academic GPA', desc: 'Scale 4.00, Cum Laude' },
    { number: '2nd', label: 'NASPO Honor', desc: 'National Applied Science' },
  ];

  return (
    <section id="about" className="relative bg-[#07080a] border-t border-white/[0.08] py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Section Header with Circular Orb (Slice 2 & 3 style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            {/* The Signature Behance Section Orb */}
            <div className="section-orb shrink-0">
              <span>ABOUT</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                About Me.
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>BACKEND &amp; ML ENGINEER</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Bio & Personal Details Spec */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Main Narrative Card */}
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#111317] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase mb-4">
                <Terminal className="w-4 h-4 text-white/80" />
                <span>CORE PROFILE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 font-display">
                Bridging backend reliability with artificial intelligence.
              </h3>

              <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                IT graduate from Politeknik Negeri Jember specializing in Laravel, FastAPI, and machine learning systems. Focused on clean architecture, structured databases, and practical digital solutions.
              </p>

              {/* Personal Details Table Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 uppercase">Location</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/60" />
                    {personalInfo.city}
                  </span>
                </div>

                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 uppercase">Education</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-white/60" />
                    Politeknik Negeri Jember
                  </span>
                </div>

                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 uppercase">Email</span>
                  <span className="text-white font-medium flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-white/60" />
                    {personalInfo.email}
                  </span>
                </div>

                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 uppercase">Availability</span>
                  <span className="text-white font-medium">
                    Full-time &amp; Project Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Education Highlights */}
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#111317] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">Formal Academic Background</span>
                <span className="text-xs font-mono text-white/80">GPA 3.80 / 4.00</span>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0 space-y-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <div className="text-xs text-white/60 font-mono">{edu.institution}, {edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Stat & Key Metric Showcase Cards (Slice 2 & 3 style) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl p-6 bg-[#111317] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
                    {stat.number}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-normal pt-3 border-t border-white/5 font-mono">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
