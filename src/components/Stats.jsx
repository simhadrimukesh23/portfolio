import React from 'react';
import { Code, Award, Zap, GraduationCap, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Stats({ darkMode }) {
  const statIcons = [
    <Code className="text-cyan-400" size={24} />,
    <Award className="text-amber-400" size={24} />,
    <Zap className="text-purple-400" size={24} />,
    <GraduationCap className="text-indigo-400" size={24} />,
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >
              {/* Top Accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100" />

              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-xl border ${
                  darkMode ? 'bg-slate-800/80 border-slate-700/60' : 'bg-slate-100 border-slate-200'
                }`}>
                  {statIcons[idx]}
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
                  {stat.suffix}
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>

              <h4 className={`text-sm font-semibold mt-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
