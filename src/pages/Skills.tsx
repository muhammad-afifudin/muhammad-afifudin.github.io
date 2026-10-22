import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, Brain, Server } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import { TechLogo } from '../components/TechLogo';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const skillMaturity = [
    { number: '01', title: 'Backend & Logic', score: '95%', desc: 'PHP 8.x, Python 3.x, OOP, RESTful API Design, Microservices, MVC Architecture', icon: Server },
    { number: '02', title: 'Frameworks & Systems', score: '92%', desc: 'Laravel 11, FastAPI, Alpine.js, Tailwind CSS, Blade Templates', icon: Layers },
    { number: '03', title: 'Machine Learning & AI', score: '90%', desc: 'Scikit-learn, Random Forest, Feature Engineering, Classification, Model Evaluation', icon: Brain },
    { number: '04', title: 'Database & Cloud', score: '94%', desc: 'Structured MySQL, Query Tuning, Relational Modeling, Firebase, Postman Testing', icon: Database },
  ];

  const devTools = [
    { name: 'Visual Studio Code', tag: 'IDE' },
    { name: 'Postman', tag: 'API Testing' },
    { name: 'Git & GitHub', tag: 'Version Control' },
    { name: 'Laragon & Composer', tag: 'Local Environment' },
    { name: 'Google Colab', tag: 'Jupyter Notebooks' },
    { name: 'MySQL Workbench', tag: 'Database GUI' },
    { name: 'TablePlus', tag: 'Data Browser' },
    { name: 'Ubuntu / WSL', tag: 'Linux Environment' }
  ];

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/4 -right-36 w-[600px] h-[600px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-[500px] h-[500px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header with Behance Signature Orb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>SKILLS</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>TECHNICAL CAPABILITIES</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Skills & Stacks.
              </h1>
            </div>
          </div>

          <p className="font-mono text-xs text-white/50 max-w-sm">
            Curated matrix of languages, backend frameworks, machine learning libraries, and database engineering stacks.
          </p>
        </div>

        {/* 4 Stat Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillMaturity.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-[#111317] border border-white/10 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-2xl font-black text-white font-mono">{item.score}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{item.title}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pt-3 border-t border-white/5">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div
              key={category}
              className="p-8 rounded-3xl bg-[#111317] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 font-display">
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-1.5 shrink-0">
                          <TechLogo name={skill.name} className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-white block truncate">{skill.name}</span>
                          <span className="text-[10px] font-mono text-white/50 block">ACTIVE • VERIFIED</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Toolbar Strip */}
        <div className="rounded-3xl p-8 bg-[#111317] border border-white/10 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-4 font-display">
            Developer Environments & Tooling
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {devTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between text-left group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 mb-3 group-hover:scale-110 group-hover:border-white/25 transition-all">
                  <TechLogo name={tool.name} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white truncate" title={tool.name}>{tool.name}</div>
                  <div className="text-[10px] font-mono text-white/50">{tool.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
