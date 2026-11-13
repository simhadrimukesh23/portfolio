import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { educationData, personalInfo } from '../data/portfolioData';

export default function About({ darkMode }) {
  const highlights = [
    "AWS Academy AI-ML Virtual Intern (10-week lifecycle & cloud deployments)",
    "Consistent competitive programmer: 750+ solved challenges & LeetCode Knight",
    "Multimodal AI developer (Offline LLMs, Whisper, OCR, Google Gemini API)",
    "3D interactive web experiences using Three.js & Babylon.js",
    "Strong CS fundamentals: Networks (CCNA track), OS, DBMS, & Algorithms"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Background & Profile
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Passionate Engineer Bridging Systems, AI & Scalable Cloud
              </h3>
              
              <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I am a Computer Science undergraduate at <strong className="text-indigo-500 dark:text-indigo-400">Gayatri Vidya Parishad College of Engineering</strong> with a current CGPA of <strong>8.75</strong>. My passion lies in solving complex problems—from architecting end-to-end full-stack platforms and offline LLM interfaces to training machine learning models on AWS.
              </p>

              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                With over <strong>750+ algorithmic problems solved</strong> across LeetCode (Knight badge) and CodeChef (3-star), I bring a disciplined, analytical approach to software development, ensuring code is not just functional, but optimal, reliable, and scalable.
              </p>

              {/* Bullet highlights */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-mono">
                  <MapPin size={16} className="text-indigo-500" />
                  <span>{personalInfo.location}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 group"
                >
                  <span>Connect or collaborate</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`text-lg font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <GraduationCap className="text-indigo-500" size={20} />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:border-indigo-500/50 ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-900/90'
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-2">
                    {edu.degree}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick summary card */}
            <div className={`p-5 rounded-2xl border bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent ${
              darkMode ? 'border-indigo-900/50' : 'border-indigo-100'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Competitive Edge
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Knight Badge holder on LeetCode with 650+ solved challenges and top contest ranking.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
