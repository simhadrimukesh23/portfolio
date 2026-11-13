import React from 'react';
import { Award, Trophy, Zap, ShieldCheck, ExternalLink, CheckCircle, Network, Cloud, Sparkles } from 'lucide-react';
import { achievementsData, certificationsData } from '../data/portfolioData';

export default function Achievements({ darkMode }) {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Recognition & Credentials
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
          <p className={`text-sm sm:text-base max-w-2xl mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Validation of technical rigor, competitive coding performance, and industry-standard cloud and networking credentials.
          </p>
        </div>

        {/* Part 1: Top Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-amber-500/10'
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  {idx === 0 ? <Award size={24} /> : idx === 1 ? <Zap size={24} /> : <Trophy size={24} />}
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {item.highlight}
                </span>
              </div>

              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.description}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group/link"
                >
                  <span>Verify Profile</span>
                  <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle size={13} /> Official Winner
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Part 2: Certifications Grid */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-indigo-500" size={24} />
            <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    : 'bg-white border-slate-200 hover:border-indigo-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-slate-800/80 border-slate-700/60 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                  }`}>
                    {index === 0 ? <Network size={22} /> : index === 1 ? <Cloud size={22} /> : <Sparkles size={22} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {cert.name}
                      </h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {cert.topics}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
