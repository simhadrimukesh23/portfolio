import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow">
              SM
            </div>
            <div>
              <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Simhadri Mukesh
              </p>
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Icons: GitHub, LinkedIn, LeetCode, Email only */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-indigo-500'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
              }`}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-400 hover:text-blue-400 hover:border-blue-500'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-sm'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:border-amber-500'
                  : 'border-slate-200 bg-white text-amber-600 hover:border-amber-400 shadow-sm'
              }`}
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-400 hover:text-emerald-400 hover:border-emerald-500'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-emerald-300 shadow-sm'
              }`}
              title={`Email: ${personalInfo.email}`}
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              darkMode
                ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white'
                : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
}
