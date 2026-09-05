import React from 'react';
import { MapPin, Mail, Phone, Calendar, GraduationCap } from 'lucide-react';
import { motion as m } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

const About: React.FC = () => {
  const { personalInfo, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      {/* Title */}
      <m.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Get to know my background, education, and career aspirations.
        </p>
      </m.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Biography Column */}
        <m.div
          variants={itemVariants}
          className="lg:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
              I focus on creating high-quality, maintainable software and love collaborating in cross-functional teams to solve technical challenges. On campus, I participate actively in hands-on labs and team projects to solidify my web development skills.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">Location</p>
                <p className="text-sm font-medium">{personalInfo.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">Email Address</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium hover:text-emerald-500 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">Phone</p>
                <p className="text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-350">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500">Availability</p>
                <p className="text-sm font-medium">Open for Internships / Freelance</p>
              </div>
            </div>
          </div>
        </m.div>

        {/* Education Column */}
        <m.div
          variants={itemVariants}
          className="glass-panel p-8 rounded-2xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-emerald-500" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Education
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute w-3.5 h-3.5 bg-emerald-500 rounded-full -left-[8px] top-1.5 border-2 border-white dark:border-slate-900 shadow-sm" />
                <span className="text-xs font-semibold text-emerald-500 dark:text-emerald-450 uppercase tracking-wider block mb-1">
                  {edu.period}
                </span>
                <h4 className="text-base font-bold text-slate-850 dark:text-white leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default About;
