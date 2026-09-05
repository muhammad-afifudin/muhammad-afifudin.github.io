import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowUpRight, Cpu } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const PinnedHorizontalProjects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { featuredProjects } = portfolioData;

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

  // Calculate translation: shift by ~67% across 3 wide cards
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-67%']);
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="featured-projects"
      ref={targetRef}
      style={{ position: 'relative' }}
      className={`w-full ${
        isMobile ? 'h-auto py-16' : 'h-[300vh]'
      } bg-[#000000] border-t border-[#292d30]`}
    >
      {/* Sticky Viewport Container on Desktop, Normal Flow on Mobile */}
      <div
        style={
          isMobile
            ? { position: 'relative' }
            : { position: 'sticky', top: 0, height: '100vh' }
        }
        className={`${
          isMobile
            ? 'w-full'
            : 'overflow-hidden flex flex-col justify-between pt-20 pb-6'
        } max-w-[1400px] mx-auto px-4 md:px-8`}
      >
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-4 pb-4 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>SELECTED_ARCHITECTURE_SHOWCASE</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-medium tracking-[-0.04em] text-white">
              Featured Systems.
            </h2>
          </div>

          <div className="mt-3 md:mt-0 flex flex-wrap items-center gap-3 text-xs font-mono text-[#a1a4a5]">
            <Link
              to="/projects"
              className="resend-btn-ghost !text-xs !py-1 !px-2.5 font-mono text-white hover:!border-white group"
            >
              <span>VIEW FULL CATALOG (7+)</span>
              <span className="text-[#0A84FF] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-[6px] border border-[#292d30] text-[#f0f0f0]">
              <Cpu className="w-3.5 h-3.5 text-[#3ad389]" />
              <span>3 PRODUCTION CASE STUDIES</span>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal Motion Track | Mobile: Vertical Grid / Stack */}
        {isMobile ? (
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

        {/* Scrollytelling Progress Bar Indicator at bottom (Desktop only) */}
        {!isMobile && (
          <div className="pt-3 border-t border-[#292d30] flex items-center justify-between text-xs font-mono text-[#6e727a]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>SCROLL TO ADVANCE // SYSTEM 01 &rarr; 03</span>
            </span>
            <div className="w-56 h-1.5 bg-[#292d30] rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: progressScaleX, transformOrigin: 'left' }}
                className="h-full bg-gradient-to-r from-[#0A84FF] to-[#3b9eff]"
              />
            </div>
            <span>HORIZONTAL TRACK ACTIVE</span>
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
    description: string;
    metrics: string[];
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    codeSnippet: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="resend-card p-6 md:p-7 flex flex-col justify-between bg-[#000000] border border-[#292d30] hover:border-[#40464d] transition-colors group">
      {/* Top Bar: Number and Status Badge */}
      <div className="flex items-center justify-between border-b border-[#292d30] pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-[#6e727a]">
            [{project.number}]
          </span>
          <span className="font-mono text-xs text-[#0A84FF] uppercase tracking-wider">
            {project.badge}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-[#a1a4a5]">
          <span className="w-2 h-2 rounded-full bg-[#3ad389]" />
          <span>PRODUCTION READY</span>
        </div>
      </div>

      {/* Main Grid: Info on left, Code/Terminal Proof on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Title, Impact Summary, Metrics */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-[11px] font-mono text-[#a1a4a5] uppercase tracking-wider mb-0.5">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.02em] mb-2.5">
            {project.title}
          </h3>

          <p className="text-xs md:text-sm text-[#a1a4a5] leading-relaxed mb-4 font-normal">
            {project.description}
          </p>

          {/* System Metrics Telemetry Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="font-mono text-[11px] px-2 py-0.5 rounded-[6px] border border-[#292d30] text-[#f0f0f0] bg-[#0c0e12]"
              >
                {metric}
              </span>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="resend-badge text-[11px] py-0.5 px-2">
                {t}
              </span>
            ))}
          </div>

          {/* Action CTAs: Ghost Buttons */}
          <div className="flex items-center gap-3 mt-auto pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resend-btn-ghost !text-xs !py-1.5 !px-3 group"
            >
              <Github className="w-3.5 h-3.5 text-[#f0f0f0]" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3 h-3 text-[#a1a4a5] group-hover:text-white transition-colors" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resend-btn-ghost !text-xs !py-1.5 !px-3 group"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span>Live Service</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Terminal Window / Code Snippet Proof */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <div className="code-window overflow-hidden border border-[#292d30] rounded-[10px] bg-[#050505]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#292d30] bg-[#080808]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#292d30]" />
                <div className="w-2 h-2 rounded-full bg-[#292d30]" />
                <div className="w-2 h-2 rounded-full bg-[#292d30]" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#6e727a]">
                <Code2 className="w-3 h-3 text-[#0A84FF]" />
                <span>inference-telemetry.log</span>
              </div>
            </div>

            {/* Code Content */}
            <pre className="p-3 text-[11px] font-mono text-[#abafb4] overflow-x-auto leading-relaxed whitespace-pre-wrap selection:bg-[#0A84FF]/20">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
