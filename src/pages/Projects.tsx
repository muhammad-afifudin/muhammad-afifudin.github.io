import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import { TechLogo } from '../components/TechLogo';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dynamic categories based on available projects
  const availableCategories = Array.from(new Set(projects.map((p: any) => p.category)));
  const tabs = ['All', ...availableCategories];

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
      project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/4 -right-48 w-[700px] h-[700px] wireframe-circle opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-[600px] h-[600px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header without dots, green, or split layout */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <span className="font-mono text-xs text-white/50 tracking-wider uppercase block mb-2">
            Project Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
            Selected Projects
          </h1>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#111317] rounded-full border border-white/10 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer active:scale-[0.98] ${
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
              placeholder="Search tech stack or title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#111317] border border-white/10 focus:border-white/40 focus:outline-none text-xs font-mono text-white placeholder:text-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid: Focused strictly on Project visual, Title, Technology Stack, and Live View */}
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
                className="rounded-2xl p-6 bg-[#111317] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Thumbnail Banner with Direct View Link to Source Web */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-5 relative group-hover:border-white/30 transition-all cursor-pointer"
                    title={`Open ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/80 text-white/90 border border-white/10">
                      {project.category}
                    </span>

                    <span className="absolute top-2.5 right-2.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-black font-bold inline-flex items-center gap-1 shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                      <span>Visit Site</span>
                      <ArrowUpRight className="w-3 h-3 text-black" />
                    </span>
                  </a>

                  {/* Project Title with Direct Clickable Link */}
                  <h3 className="text-xl font-bold text-white mb-4 font-display">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white/80 transition-colors inline-flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </a>
                  </h3>
                </div>

                <div>
                  {/* Technologies Showcase */}
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block mb-2.5">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                          <TechLogo name={tag} className="w-3.5 h-3.5" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Single Prominent CTA to View Project Source Web */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-white text-black font-mono text-xs font-bold inline-flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer shadow-md"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.02] mt-6">
            <p className="font-mono text-sm text-white/60 mb-2">No projects found matching the filter.</p>
            <button
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="text-xs font-mono text-white underline underline-offset-4 cursor-pointer hover:text-white/80"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
