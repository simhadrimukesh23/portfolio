import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Career Journey
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
          <p className={`text-sm sm:text-base max-w-2xl mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on technical exposure in machine learning workflows, cloud deployments, and software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto space-y-8 relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800" />

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative sm:pl-20"
            >
              {/* Timeline Node Icon */}
              <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center text-indigo-400 shadow-md shadow-indigo-500/30 z-10">
                <Briefcase size={16} />
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 shadow-black/20'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                      <Award size={12} />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-indigo-500 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                    <span className="flex items-center gap-1.5 bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/50">
                      <Calendar size={13} className="text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-1" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium ${
                        darkMode
                          ? 'bg-slate-950/80 text-slate-300 border border-slate-800'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
