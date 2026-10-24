import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layers, 
  Brain, 
  Server
} from 'lucide-react';
import { TechLogo } from '../TechLogo';

export const SkillsSection: React.FC = () => {
  const [activeOrbit, setActiveOrbit] = useState<string | null>(null);

  const skillMaturity = [
    {
      number: '01',
      title: 'Backend & Logic',
      score: '95%',
      desc: 'PHP, Python, REST APIs, Microservices',
      icon: Server,
      badge: 'Core Competency'
    },
    {
      number: '02',
      title: 'Frameworks & Systems',
      score: '92%',
      desc: 'Laravel 11, FastAPI, REST APIs, Tailwind CSS',
      icon: Layers,
      badge: 'Enterprise Stack'
    },
    {
      number: '03',
      title: 'Machine Learning & AI',
      score: '90%',
      desc: 'Scikit-learn, Random Forest, Model Serving',
      icon: Brain,
      badge: 'Data Intelligence'
    },
    {
      number: '04',
      title: 'Database & Cloud',
      score: '94%',
      desc: 'MySQL Modeling, Query Tuning, Git & Linux',
      icon: Database,
      badge: 'High Reliability'
    }
  ];

  const orbitalSkills = [
    // Inner Orbit (Radius 90px)
    { name: 'Python', orbit: 'inner', angle: 30, color: '#3b82f6', category: 'Language' },
    { name: 'PHP', orbit: 'inner', angle: 150, color: '#818cf8', category: 'Language' },
    { name: 'MySQL', orbit: 'inner', angle: 270, color: '#38bdf8', category: 'Database' },

    // Middle Orbit (Radius 160px)
    { name: 'Laravel', orbit: 'middle', angle: 45, color: '#f43f5e', category: 'Framework' },
    { name: 'FastAPI', orbit: 'middle', angle: 135, color: '#10b981', category: 'API' },
    { name: 'Scikit-Learn', orbit: 'middle', angle: 225, color: '#f59e0b', category: 'ML' },
    { name: 'Flask', orbit: 'middle', angle: 315, color: '#38bdf8', category: 'Backend' },

    // Outer Orbit (Radius 230px)
    { name: 'Git & GitHub', orbit: 'outer', angle: 20, color: '#ffffff', category: 'Tools' },
    { name: 'REST APIs', orbit: 'outer', angle: 90, color: '#a855f7', category: 'Architecture' },
    { name: 'Postman', orbit: 'outer', angle: 160, color: '#f97316', category: 'Testing' },
    { name: 'Tailwind CSS', orbit: 'outer', angle: 240, color: '#06b6d4', category: 'Styling' },
    { name: 'Docker & Linux', orbit: 'outer', angle: 320, color: '#0ea5e9', category: 'DevOps' }
  ];

  const devTools = [
    { name: 'Visual Studio Code', tag: 'IDE' },
    { name: 'Postman', tag: 'API Testing' },
    { name: 'Git & GitHub', tag: 'Version Control' },
    { name: 'Laragon & Composer', tag: 'Local Environment' },
    { name: 'Google Colab', tag: 'Jupyter Notebooks' },
    { name: 'MySQL Workbench', tag: 'Database GUI' },
    { name: 'TablePlus', tag: 'Data Browser' },
    { name: 'Ubuntu & WSL', tag: 'Linux Environment' }
  ];

  return (
    <section id="skills" className="relative bg-[#07080a] border-t border-white/[0.08] py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Decorative Arcs */}
      <div className="absolute top-1/2 -left-36 w-[600px] h-[600px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Section Header with Circular Orb (Slice 5 style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>SKILLS</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>SKILLS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Skills & Tech Stack.
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>ORBITAL RADAR MATRIX</span>
          </div>
        </div>

        {/* 2-Column Grid: Left (Stat Boxes) & Right (Iconic Orbital Radar Diagram) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: 4 Capability Highlight Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                Core Technical Specialization
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Backend architecture, machine learning model serving, and relational databases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillMaturity.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#111317] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xl font-bold text-white font-mono">{item.score}</span>
                      </div>
                      
                      <h4 className="text-base font-bold text-white mb-1 font-display">
                        {item.title}
                      </h4>
                      <span className="inline-block text-[10px] font-mono uppercase text-white/40 mb-3">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs text-white/50 leading-relaxed pt-3 border-t border-white/5">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: The Iconic Orbital Radar Diagram (Slice 5 style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-center justify-center py-6"
          >
            <div className="relative w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] flex items-center justify-center select-none">
              
              {/* Outer Orbit Ring */}
              <div className="absolute w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full border border-white/[0.08] flex items-center justify-center animate-spin-slow pointer-events-none" />

              {/* Middle Orbit Ring */}
              <div className="absolute w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full border border-white/[0.12] border-dashed flex items-center justify-center animate-reverse-spin pointer-events-none" />

              {/* Inner Orbit Ring */}
              <div className="absolute w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] rounded-full border border-white/[0.15] flex items-center justify-center pointer-events-none" />

              {/* Central Core Radar Sphere */}
              <div className="relative z-20 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-b from-[#222630] to-[#0e1014] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)] flex flex-col items-center justify-center text-center p-2">
                <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase truncate max-w-[80px]">
                  {activeOrbit || 'AFIFUDIN'}
                </span>
                <span className="text-[8px] font-mono text-white/50">
                  {activeOrbit ? 'ACTIVE_NODE' : 'TECH_RADAR'}
                </span>
              </div>

              {/* Orbital Nodes - Placed Geometrically */}
              {orbitalSkills.map((tech) => {
                // Determine radius based on orbit tier
                const radius = 
                  tech.orbit === 'inner' ? 70 : 
                  tech.orbit === 'middle' ? 120 : 175;

                // Adjust for mobile screens
                const scale = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.7 : 1;
                const r = radius * scale;

                const rad = (tech.angle * Math.PI) / 180;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;

                return (
                  <motion.div
                    key={tech.name}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveOrbit(tech.name)}
                    onMouseLeave={() => setActiveOrbit(null)}
                    className="absolute z-30 cursor-pointer group"
                  >
                    <div className="px-3 py-1 sm:py-1.5 rounded-full bg-[#14161b]/90 backdrop-blur-md border border-white/15 hover:border-white/40 shadow-lg hover:scale-110 transition-all duration-200 flex items-center gap-1.5">
                      <TechLogo name={tech.name} className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px] sm:text-[11px] text-white font-medium whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 font-mono text-xs text-white/40">
              <span>INTERACTIVE ORBITAL TECH RADAR - ROTATIONAL SPECIALIZATION</span>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM TOOLBAR: Development Tools Strip (Slice 5 bottom style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Developer Tooling & Workflows
            </span>
            <span className="text-xs font-mono text-white/50">
              8 Professional Developer Environments
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {devTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-2xl bg-[#111317] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all flex flex-col justify-between text-left group shadow-md"
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
        </motion.div>

      </div>
    </section>
  );
};
