import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, ExternalLink, Terminal, Sparkles, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border mb-6 transition-colors ${
              darkMode
                ? 'bg-indigo-950/50 border-indigo-800/60 text-indigo-300 shadow-inner'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono font-medium">B.Tech CSE Undergraduate</span>
              <span className="text-slate-400">•</span>
              <span className="text-amber-500 dark:text-amber-400 font-semibold flex items-center gap-1">
                <Award size={13} /> LeetCode Knight
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
              <span className={darkMode ? 'text-slate-100' : 'text-slate-900'}>Hi, I'm </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Simhadri Mukesh
              </span>
            </h1>

            {/* Dynamic Animated Subtitle / Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="font-mono text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
                <span className="mr-2 text-slate-400">&gt;</span>
                {displayText}
                <span className="w-2.5 h-6 ml-1 bg-indigo-500 inline-block animate-pulse"></span>
              </span>
            </div>

            {/* Summary Bio */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              B.Tech CSE student at <span className="font-semibold text-indigo-600 dark:text-indigo-400">Gayatri Vidya Parishad College of Engineering</span> (8.75 CGPA). Experienced in building offline AI assistants, multimodal systems, and cloud-native solutions with AWS, PyTorch, FastAPI, and React. Passionate competitive programmer with <span className="font-semibold text-slate-900 dark:text-white">750+ solved algorithmic challenges</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all duration-200 transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Mail size={18} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Profiles:
              </span>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 shadow-sm'
                }`}
                title="GitHub - @simhadrimukesh23"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 shadow-sm'
                }`}
                title="LinkedIn - Simhadri Mukesh"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10'
                    : 'border-slate-200 bg-white text-amber-600 hover:border-amber-400 hover:bg-amber-50 shadow-sm'
                }`}
                title="LeetCode Knight (650+ Solved)"
              >
                <LeetCodeIcon className="w-[18px] h-[18px]" />
              </a>

              {/* CodeChef */}
              <a
                href={personalInfo.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-orange-400 hover:border-orange-500 hover:bg-orange-500/10'
                    : 'border-slate-200 bg-white text-orange-600 hover:border-orange-400 hover:bg-orange-50 shadow-sm'
                }`}
                title="CodeChef 3-Star Coder"
              >
                <CodeChefIcon className="w-[18px] h-[18px]" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2.5 rounded-lg border transition-all duration-200 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10'
                    : 'border-slate-200 bg-white text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 shadow-sm'
                }`}
                title={`Email: ${personalInfo.email}`}
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Developer Card / Visual Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className={`w-full max-w-md rounded-2xl border transition-all duration-300 shadow-2xl relative group ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800/90 shadow-indigo-950/20 backdrop-blur-xl'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60 backdrop-blur-xl'
            }`}>
              
              {/* Window Header */}
              <div className={`flex items-center justify-between px-4 py-3 border-b ${
                darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-100 bg-slate-50/80'
              } rounded-t-2xl`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Terminal size={13} className="text-indigo-400" />
                  <span>mukesh@engineer:~</span>
                </div>
                <div className="w-8"></div>
              </div>

              {/* Code / Profile Preview Content */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>whoami --full-profile</span>
                </div>

                <div className={`p-4 rounded-xl border leading-relaxed ${
                  darkMode ? 'bg-slate-950/70 border-slate-800/60 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <p><span className="text-indigo-400 font-semibold">name</span>: <span className="text-emerald-400">"Simhadri Mukesh"</span>,</p>
                  <p><span className="text-indigo-400 font-semibold">university</span>: <span className="text-emerald-400">"GVP College of Engg."</span>,</p>
                  <p><span className="text-indigo-400 font-semibold">degree</span>: <span className="text-emerald-400">"B.Tech CSE"</span>,</p>
                  <p><span className="text-indigo-400 font-semibold">cgpa</span>: <span className="text-amber-400">8.75</span>,</p>
                  <p><span className="text-indigo-400 font-semibold">internship</span>: <span className="text-emerald-400">"AWS Academy (AI/ML)"</span>,</p>
                  <p><span className="text-indigo-400 font-semibold">coding</span>: &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">leetcode</span>: <span className="text-amber-400">"Knight (650+ solved)"</span>,</p>
                  <p className="pl-4"><span className="text-purple-400">codechef</span>: <span className="text-amber-400">"3-Star Rated"</span>,</p>
                  <p className="pl-4"><span className="text-purple-400">totalDSA</span>: <span className="text-cyan-400">"750+ Solved"</span></p>
                  <p>&#125;,</p>
                  <p><span className="text-indigo-400 font-semibold">coreStack</span>: [</p>
                  <p className="pl-4 text-cyan-400">"FastAPI", "PyTorch", "React", "AWS", "Three.js"</p>
                  <p>]</p>
                </div>

                {/* Live Activity indicator */}
                <div className={`flex items-center justify-between pt-2 text-xs border-t ${
                  darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Status: Available for SDE / AI Roles</span>
                  </span>
                  <span className="text-indigo-400 font-mono">2025-2026</span>
                </div>
              </div>

              {/* Bottom Subtle Glow Accent */}
              <div className="absolute -bottom-1 -right-1 -left-1 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-b-2xl opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
