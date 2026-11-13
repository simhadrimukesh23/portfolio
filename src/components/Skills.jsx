import React, { useState } from 'react';
import { Code2, Brain, Globe, Cloud, Cpu, Sparkles, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Sparkles size={16} /> },
    { id: 'languages', label: 'Languages', icon: <Code2 size={16} /> },
    { id: 'aiml', label: 'AI/ML & Automation', icon: <Brain size={16} /> },
    { id: 'webBackend', label: 'Web & Backend', icon: <Globe size={16} /> },
    { id: 'cloudTools', label: 'Cloud & Infrastructure', icon: <Cloud size={16} /> },
    { id: 'coreCs', label: 'Core Computer Science', icon: <Cpu size={16} /> },
  ];

  const skillGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 className="text-cyan-400" size={20} />,
      skills: skillsData.languages
    },
    {
      id: 'aiml',
      title: 'AI/ML & Automation',
      icon: <Brain className="text-purple-400" size={20} />,
      skills: skillsData.aiml
    },
    {
      id: 'webBackend',
      title: 'Web & Backend Engineering',
      icon: <Globe className="text-emerald-400" size={20} />,
      skills: skillsData.webBackend
    },
    {
      id: 'cloudTools',
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="text-amber-400" size={20} />,
      skills: skillsData.cloudTools
    },
    {
      id: 'coreCs',
      title: 'Core CS Foundations',
      icon: <Cpu className="text-indigo-400" size={20} />,
      skills: skillsData.coreCs
    }
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Technical Proficiency
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">Tooling</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
          <p className={`text-sm sm:text-base max-w-2xl mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of my technical toolkit, ranging from algorithms and machine learning frameworks to full-stack web and cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : darkMode
                  ? 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200 shadow-sm'
              }`}
            >
              {/* Group Title */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className={`p-2.5 rounded-xl border ${
                  darkMode ? 'bg-slate-800/80 border-slate-700/60' : 'bg-slate-100 border-slate-200'
                }`}>
                  {group.icon}
                </div>
                <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {group.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 group/item ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/10'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/60'
                    }`}
                  >
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-400 font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
