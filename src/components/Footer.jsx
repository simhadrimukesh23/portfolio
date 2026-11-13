import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
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

          {/* Centered Note */}
          <div className="text-xs text-center flex items-center gap-1.5 font-mono">
            <span>Engineered with React, Vite & Tailwind CSS</span>
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
