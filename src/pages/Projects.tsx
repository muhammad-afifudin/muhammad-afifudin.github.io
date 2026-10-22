import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Search, ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import { TechLogo } from '../components/TechLogo';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabs = ['All', 'Web', 'Machine Learning', 'Systems'];

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project: {
    title: string;
    category: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
  }) => {
    const matchesTab = activeTab === 'All' || project.category.toLowerCase().includes(activeTab.toLowerCase());
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/4 -right-48 w-[700px] h-[700px] wireframe-circle opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-[600px] h-[600px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header with Behance Signature Orb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>PROJECTS</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>PROJECT CATALOG</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                All Engineering Projects.
              </h1>
            </div>
          </div>

          <p className="font-mono text-xs text-white/50 max-w-sm">
            Comprehensive archive of full-stack web applications, machine learning architectures, and system dashboards.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#111317] rounded-full border border-white/10 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stacks or projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#111317] border border-white/10 focus:border-white/40 focus:outline-none text-xs font-mono text-white placeholder:text-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: any, idx: number) => (
              <motion.div
                key={project.id || idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl sm:rounded-3xl p-6 bg-[#111317] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Thumbnail Banner */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-5 relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/70 text-white/90 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed font-normal mb-5 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 inline-flex items-center gap-1.5"
                      >
                        <TechLogo name={tag} className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-white hover:text-white/70 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-white/40">INTERNAL CASE</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Projects;
