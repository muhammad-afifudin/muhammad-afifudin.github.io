import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layers, Brain, Wrench, Users } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: '#0A84FF',
      description: 'Core languages used for backend logic, data processing, and enterprise application development.',
      skills: ['PHP', 'Python', 'Java', 'SQL'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: '#3ad389',
      description: 'Relational and real-time database management for reliable data storage and indexing.',
      skills: ['MySQL', 'Firebase'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: '#3b9eff',
      description: 'Full-stack web frameworks, reactive interfaces, and deep learning libraries.',
      skills: ['Laravel', 'Livewire', 'Bootstrap', 'Tailwind', 'TensorFlow', 'Scikit-Learn'],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: '#9d72ff',
      description: 'End-to-end machine learning lifecycle from data preparation to production evaluation.',
      skills: ['Data Preprocessing', 'Feature Engineering', 'Classification', 'Model Evaluation'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: '#ffca16',
      description: 'Developer environments, version control, API testing tools, and notebooks.',
      skills: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'Laragon', 'Google Colab'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: '#ff6b8b',
      description: 'Professional collaboration, cross-functional delivery, and analytical problem solving.',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="relative bg-[#0b0c0e] border-t border-white/[0.08] py-24 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>TECHNICAL_CAPABILITIES // MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
              Skills & Stacks.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-white/50 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>VERIFIED TECHNICAL PROFILE</span>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="resend-card p-6 md:p-8 bg-[#121418] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                        <Icon className="w-4 h-4" style={{ color: category.color }} />
                      </div>
                      <h3 className="text-base font-medium text-white">{category.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed mb-6 font-normal">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {category.skills.map((skill) => (
                    <span key={skill} className="resend-badge text-[11px] py-0.5 px-2.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
