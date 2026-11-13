import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, Box, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'AI/ML & 3D', 'Full Stack', 'AI & Extension'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Selected Works
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
          <p className={`text-sm sm:text-base max-w-2xl mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world projects combining cutting-edge AI pipelines, full-stack web platforms, 3D interactive graphics, and browser extensions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >
              <div>
                {/* Project Header Banner Preview */}
                <div className="relative h-44 w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                  
                  {/* Decorative subtle background pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Floating category badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold backdrop-blur-md">
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors border border-slate-700/60"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Banner Title Snippet */}
                  <div className="relative z-10">
                    <span className="text-xs font-mono text-cyan-400 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Gradient corner glow */}
                  <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/40 transition-colors" />
                </div>

                {/* Project Content Body */}
                <div className="p-6">
                  <p className={`text-xs font-medium mb-3 line-clamp-2 ${
                    darkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-sm leading-relaxed mb-5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.bullets.slice(0, 3).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tech Stack Tags & Actions */}
              <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${
                        darkMode
                          ? 'bg-slate-950 text-slate-300 border border-slate-800'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    <span>Discuss project</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
