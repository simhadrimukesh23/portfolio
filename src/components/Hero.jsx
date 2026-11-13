import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, ExternalLink, Sparkles, Award, GraduationCap, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [profileImg, setProfileImg] = useState(personalInfo.profileImage || '/profile.png');

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

          {/* Right Column: Profile Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md flex justify-center">
              
              {/* Ambient Glow behind Image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 -z-10" />

              {/* Main Photo Card Frame */}
              <div className={`relative p-2 rounded-3xl border transition-all duration-300 shadow-2xl ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 backdrop-blur-xl shadow-indigo-950/30'
                  : 'bg-white/95 border-slate-200 backdrop-blur-xl shadow-xl shadow-slate-200'
              }`}>
                
                {/* Photo Container with rounded corners */}
                <div className="relative overflow-hidden rounded-2xl w-72 sm:w-80 h-96 sm:h-[420px] bg-slate-950 flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    onError={() => {
                      if (profileImg.endsWith('.png')) {
                        setProfileImg('/profile.jpg');
                      } else if (profileImg.endsWith('.jpg')) {
                        setProfileImg('/profile.jpeg');
                      } else if (!profileImg.endsWith('.svg')) {
                        setProfileImg('/profile.svg');
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle inner shadow gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Name badge at bottom inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                    <p className="text-white font-bold text-lg leading-tight drop-shadow-md">
                      {personalInfo.name}
                    </p>
                    <p className="text-indigo-300 text-xs font-mono drop-shadow">
                      Software & AI Engineer
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: LeetCode Knight */}
                <div className={`absolute -top-3 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-xl border shadow-lg flex items-center gap-2 text-xs font-semibold backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-900/95 border-amber-500/40 text-amber-400 shadow-black/40'
                    : 'bg-white/95 border-amber-300 text-amber-600 shadow-slate-300'
                }`}>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <Award size={14} className="text-amber-500" />
                  <span>LeetCode Knight</span>
                </div>

                {/* Floating Badge 2: GVPCE Education */}
                <div className={`absolute -bottom-3 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl border shadow-lg flex items-center gap-2 text-xs font-semibold backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-900/95 border-indigo-500/40 text-indigo-300 shadow-black/40'
                    : 'bg-white/95 border-indigo-200 text-indigo-700 shadow-slate-300'
                }`}>
                  <GraduationCap size={15} className="text-indigo-500" />
                  <span>GVPCE (8.75 CGPA)</span>
                </div>

                {/* Floating Badge 3: AWS Intern */}
                <div className={`absolute bottom-16 -right-3 sm:-right-5 px-3 py-1.5 rounded-xl border shadow-lg flex items-center gap-1.5 text-xs font-semibold backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-900/95 border-cyan-500/40 text-cyan-400 shadow-black/40'
                    : 'bg-white/95 border-cyan-300 text-cyan-700 shadow-slate-300'
                }`}>
                  <Cloud size={14} className="text-cyan-500" />
                  <span>AWS Academy</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
