import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  // Group skills by category
  const categories = Array.from(new Set(skills.map(s => s.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
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
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          My toolbox containing frameworks, programming languages, and developers tools.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="glass-panel p-6 rounded-2xl flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              {category}
            </h3>
            
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-white dark:hover:bg-slate-900/60 shadow-sm hover:shadow transition-all duration-300 group cursor-default"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-2 overflow-hidden rounded-lg bg-white p-1.5 shadow-sm group-hover:scale-115 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-350 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
