import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Search, Terminal, ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabs = ['All', 'Web', 'Mobile', 'Desktop'];

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
    const matchesTab = activeTab === 'All' || project.category === activeTab;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-[#f0f0f0] py-16 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>PROJECT_CATALOG // REPOSITORY</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              All Engineering Projects.
            </h1>
          </div>

          <p className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] max-w-sm">
            Comprehensive archive of full-stack web applications, machine learning architectures, and system dashboards.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#050505] rounded-[6px] border border-[#292d30] w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-[6px] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#292d30] text-white font-medium'
                    : 'text-[#a1a4a5] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Filter by keyword / tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#050505] border border-[#292d30] rounded-[6px] text-xs font-mono text-white placeholder-[#6e727a] focus:outline-none focus:border-white transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-[#6e727a] absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: {
              title: string;
              category: string;
              description: string;
              tags: string[];
              liveUrl: string;
              githubUrl: string;
              image: string;
            }, index: number) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="resend-card p-6 bg-[#000000] border border-[#292d30] hover:border-[#40464c] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#292d30]">
                    <span className="font-mono text-xs text-[#0A84FF] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <Terminal className="w-3.5 h-3.5 text-[#6e727a]" />
                  </div>

                  <h3 className="text-xl font-medium text-white tracking-tight mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#a1a4a5] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#292d30]/60">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="resend-badge text-[11px] py-0.5 px-2">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resend-btn-ghost flex-1 !text-xs !py-1.5 group"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-[#6e727a] group-hover:text-white" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resend-btn-ghost flex-1 !text-xs !py-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#0A84FF]" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="resend-card p-12 text-center border border-[#292d30] my-8">
            <p className="font-mono text-sm text-[#a1a4a5]">
              No projects found matching "{searchQuery}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
