import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const TimelineExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { experiences } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for filling the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-[#000000] border-t border-[#292d30] py-24 px-4 md:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>CAREER_&_ENGINEERING_MILESTONES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              Experience & Timeline.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3b9eff]" />
            <span>SCROLL DRIVES SYSTEM TIMELINE</span>
          </div>
        </div>

        {/* Timeline Container with Dynamic Progress Line */}
        <div className="relative pl-6 md:pl-10">
          {/* Base Static Hairline */}
          <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-[1px] bg-[#292d30]" />

          {/* Active Dynamic Progress Hairline */}
          <motion.div
            style={{
              height: shouldReduceMotion ? '100%' : lineHeight,
              willChange: 'height',
            }}
            className="absolute left-[7px] md:left-[11px] top-4 w-[1px] bg-gradient-to-b from-[#0A84FF] via-[#3b9eff] to-[#3ad389]"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <TimelineCard key={exp.id || idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  exp: {
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    tech: string[];
    highlights: string[];
  };
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ exp, index }) => {
  const isEducation = exp.role.includes('Bachelor') || exp.role.includes('Informatics');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% enters viewport
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      style={{ willChange: 'transform, opacity' }}
      className="relative flex items-start gap-4 md:gap-8 group"
    >
      {/* Node Dot attached to the vertical line */}
      <div className="absolute -left-[24px] md:-left-[40px] top-1.5 flex items-center justify-center">
        <div className="w-[15px] h-[15px] rounded-full border border-[#292d30] bg-[#000000] flex items-center justify-center group-hover:border-[#0A84FF] transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] group-hover:scale-125 transition-transform" />
        </div>
      </div>

      {/* Card Body */}
      <div className="resend-card w-full p-6 md:p-8 bg-[#000000] border border-[#292d30] hover:border-[#40464c] transition-colors">
        {/* Header: Period & Type Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#292d30]/70 pb-4 mb-5">
          <div className="flex items-center gap-2 font-mono text-xs text-[#a1a4a5]">
            <Calendar className="w-3.5 h-3.5 text-[#0A84FF]" />
            <span>{exp.period}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-[6px] border border-[#292d30] text-[#f0f0f0] bg-[#0c0e12]">
              {exp.type}
            </span>
          </div>
        </div>

        {/* Title & Company */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.02em] flex items-center gap-2">
            {isEducation ? (
              <Award className="w-5 h-5 text-[#3ad389] flex-shrink-0" />
            ) : (
              <Briefcase className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
            )}
            <span>{exp.role}</span>
          </h3>

          <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-[#f0f0f0]">
            <span className="font-medium text-[#ffffff]">{exp.company}</span>
            <span className="text-[#292d30]">•</span>
            <span className="text-xs text-[#a1a4a5] flex items-center gap-1 font-mono">
              <MapPin className="w-3 h-3 text-[#6e727a]" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5 mb-6 text-sm text-[#a1a4a5] leading-relaxed">
          {exp.highlights.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0A84FF] flex-shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#292d30]/50">
          {exp.tech.map((t) => (
            <span key={t} className="resend-badge text-[11px] py-0.5 px-2">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
