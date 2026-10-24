import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';
import { TechLogo } from '../TechLogo';

export const PinnedHorizontalProjects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { featuredProjects, projects } = portfolioData;
  const projectCount = featuredProjects.length;
  const isMultiProject = projectCount > 1;

  // Responsive check: Disable horizontal pinning on mobile (< 768px)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Framer Motion scroll hook bound to targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Calculate translation: shift across cards only if multiple projects
  const shiftPct = isMultiProject ? `-${(projectCount - 1) * 35}%` : '0%';
  const x = useTransform(scrollYProgress, [0, 1], ['0%', shiftPct]);
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="featured-projects"
      ref={targetRef}
      style={{ position: 'relative' }}
      className={`w-full ${
        !isMultiProject || isMobile ? 'h-auto py-16 md:py-24' : 'h-[320vh]'
      } bg-[#07080a] border-t border-white/[0.08] overflow-hidden`}
    >
      {/* Background Wireframe Arcs */}
      <div className="absolute top-1/4 -right-48 w-[700px] h-[700px] wireframe-circle opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-[600px] h-[600px] wireframe-circle opacity-10 pointer-events-none" />

      {/* Sticky Viewport Container on Desktop for multi-project, Normal Flow otherwise */}
      <div
        style={
          !isMultiProject || isMobile
            ? { position: 'relative' }
            : { position: 'sticky', top: 0, height: '100vh' }
        }
        className={`${
          !isMultiProject || isMobile
            ? 'w-full'
            : 'overflow-hidden flex flex-col justify-between pt-20 pb-6'
        } max-w-[1400px] mx-auto px-4 md:px-8`}
      >
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-white/50 tracking-wider uppercase">Featured Systems</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white font-display">
              Production Architecture.
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <Link
              to="/projects"
              className="px-4 py-2 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white hover:text-black font-mono text-xs text-white transition-all inline-flex items-center gap-1.5 cursor-pointer active:scale-[0.98]"
            >
              <span>View Full Catalog ({projects.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Content Showcase */}
        {!isMultiProject ? (
          /* Single Featured System Grand Showcase */
          <div className="w-full max-w-[1100px] mx-auto my-auto">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        ) : isMobile ? (
          /* Mobile Vertical Fallback */
          <div className="flex flex-col gap-8 w-full">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        ) : (
          /* Desktop Scrollytelling Horizontal Track */
          <div className="relative w-full overflow-hidden my-auto py-2">
            <motion.div
              style={{ x }}
              className="flex gap-8 will-change-transform w-fit"
            >
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="w-[82vw] max-w-[900px] flex-shrink-0"
                >
                  <ProjectCard project={project} index={idx} />
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Bottom Status Ribbon */}
        {isMultiProject && !isMobile ? (
          <div className="pt-3 border-t border-[#292d30] flex items-center justify-between text-xs font-mono text-[#6e727a]">
            <span>SCROLL TO ADVANCE - SYSTEM 01 &rarr; {String(projectCount).padStart(2, '0')}</span>
            <div className="w-56 h-1.5 bg-[#292d30] rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: progressScaleX, transformOrigin: 'left' }}
                className="h-full bg-white/40"
              />
            </div>
            <span>HORIZONTAL TRACK ACTIVE</span>
          </div>
        ) : (
          <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-white/40">
            <span>LIVE PRODUCTION SERVICE</span>
            <span className="font-mono text-xs text-white/70 tracking-wider uppercase">
              ONLINE &amp; ACTIVE
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    number: string;
    title: string;
    category: string;
    badge: string;
    tags: string[];
    liveUrl: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="resend-card p-6 md:p-8 bg-[#121418] border border-white/10 hover:border-white/25 transition-all group">
      {/* Top Bar: Badge and Status */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
        <span className="font-mono text-xs text-white/70 uppercase tracking-wider">
          {project.badge}
        </span>
        <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
          PRODUCTION READY
        </span>
      </div>

      {/* Main Grid: Visual banner on left, Tech & Action on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Project Thumbnail Banner with Direct Link to Source Web */}
        <div className="lg:col-span-7">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 bg-[#050505] relative group/preview cursor-pointer transition-all shadow-2xl"
            title={`Visit ${project.title}`}
          >
            <img
              src="/assets/img/portfolio/tempe-bangjae.png"
              alt={project.title}
              className="w-full h-full object-cover group-hover/preview:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="text-[11px] font-mono text-white/90 bg-black/80 px-3 py-1 rounded-full border border-white/15">
                {project.category}
              </span>
            </div>

            <span className="absolute top-3 right-3 text-xs font-mono text-black bg-white font-bold px-3 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1.5 group-hover/preview:bg-zinc-200 transition-colors">
              <span>Visit Site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </span>
          </a>
        </div>

        {/* Project Details: Title, Technologies & Direct Action */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6 font-display">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors inline-flex items-center gap-2 group/title"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover/title:text-white transition-colors" />
              </a>
            </h3>

            {/* Technologies Showcase */}
            <div className="mb-8 pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40 block mb-3">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <TechLogo name={t} className="w-3.5 h-3.5" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA: Direct View to Source Web */}
          <div className="pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold inline-flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg"
            >
              <span>Visit Website</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
