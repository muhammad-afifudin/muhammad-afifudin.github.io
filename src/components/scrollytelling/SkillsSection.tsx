import React from 'react';
import { motion } from 'framer-motion';
import { Server, Brain, Layout, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: Server,
      color: '#0A84FF',
      description: 'Architecting robust MVC and microservice web systems with automated testing and secure REST APIs.',
      skills: ['PHP', 'Laravel', 'Python', 'FastAPI', 'Flask', 'MySQL', 'REST APIs', 'Laravel Breeze', 'Eloquent ORM'],
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      color: '#3ad389',
      description: 'Training predictive models, tabular data classification, and deploying inference microservices.',
      skills: ['Scikit-Learn', 'Random Forest', 'Computer Vision', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: 'Frontend & Reactive UI',
      icon: Layout,
      color: '#3b9eff',
      description: 'Building snappy, stateful user interfaces and responsive developer dashboards.',
      skills: ['Livewire', 'Alpine.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Blade Templates', 'HTML5/CSS3'],
    },
    {
      title: 'Tools & Infrastructure',
      icon: Wrench,
      color: '#ffca16',
      description: 'DevOps workflows, version control discipline, and API lifecycle tools.',
      skills: ['Git', 'GitHub', 'Postman', 'Laragon', 'VS Code', 'Google Colab', 'Firebase'],
    },
  ];

  return (
    <section id="skills" className="relative bg-[#000000] border-t border-[#292d30] py-24 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>TECHNICAL_CAPABILITIES // MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              Skills & Stacks.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0A84FF]" />
            <span>SPECIALIZED IN BACKEND & ML</span>
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="resend-card p-6 md:p-8 bg-[#000000] border border-[#292d30] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#292d30]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-[6px] border border-[#292d30] bg-[#0c0e12] flex items-center justify-center">
                        <Icon className="w-4 h-4" style={{ color: category.color }} />
                      </div>
                      <h3 className="text-lg font-medium text-white">{category.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-[#6e727a]">0{idx + 1}</span>
                  </div>

                  <p className="text-xs text-[#a1a4a5] leading-relaxed mb-6 font-normal">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#292d30]/60">
                  {category.skills.map((skill) => (
                    <span key={skill} className="resend-badge text-xs py-1 px-2.5">
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
