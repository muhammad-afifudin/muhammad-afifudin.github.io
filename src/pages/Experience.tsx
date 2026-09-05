import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Experience: React.FC = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      {/* Title */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          A history of my professional internships and engineering activities.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="max-w-3xl mx-auto relative pl-6 md:pl-10 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-12">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative group timeline-item"
          >
            {/* Custom timeline bullet logo */}
            <div className="absolute -left-[30px] md:-left-[42px] top-4 p-1.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm z-10">
              <Briefcase className="w-4 h-4 md:w-5 h-5" />
            </div>

            <div className="glass-panel p-6 rounded-2xl transition-all duration-300">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-850 dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-sm text-slate-550 dark:text-slate-405 mt-1">
                    <Building className="w-4 h-4 text-emerald-500" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-350 self-start md:self-center">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-2.5 text-slate-600 dark:text-slate-400">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
