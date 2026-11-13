import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo, contactConfig } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendMethod, setSendMethod] = useState(''); // 'direct' or 'mailto'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Check if Web3Forms key is present
    if (contactConfig?.web3formsKey && contactConfig.web3formsKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: contactConfig.web3formsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New message from ${formData.name} via Portfolio`,
            message: formData.message,
            from_name: formData.name,
          })
        });

        const data = await response.json();
        if (data.success) {
          setIsSubmitting(false);
          setSubmitted(true);
          setSendMethod('direct');
          return;
        } else {
          throw new Error(data.message || 'Direct transmission failed');
        }
      } catch (err) {
        console.warn('Direct send failed, opening default mail client:', err);
      }
    }

    // Default Fallback: Open mailto link so the message is never lost
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Simhadri,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setSubmitted(true);
    setSendMethod('mailto');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400 mb-2">
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>
          <p className={`text-sm sm:text-base max-w-2xl mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm currently seeking software engineering, AI/ML, and cloud internship or full-time opportunities. Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Details
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 group p-3 rounded-xl transition-colors hover:bg-indigo-500/10"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-slate-800/80 border-slate-700/60 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <span className={`text-sm font-semibold group-hover:text-indigo-400 transition-colors ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 group p-3 rounded-xl transition-colors hover:bg-indigo-500/10"
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-slate-800/80 border-slate-700/60 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                  }`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Phone
                    </span>
                    <span className={`text-sm font-semibold group-hover:text-indigo-400 transition-colors ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-slate-800/80 border-slate-700/60 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Find me online
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-500/10 text-slate-300 border border-slate-500/20 hover:bg-slate-500/20 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                  >
                    <Mail size={14} />
                    <span>Email</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-indigo-500" size={20} />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 size={48} className="mx-auto mb-4 animate-bounce text-emerald-400" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    {sendMethod === 'direct' ? 'Message Sent Directly!' : 'Message Prepared!'}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    {sendMethod === 'direct'
                      ? <>Your message has been delivered straight to my inbox (<strong>{personalInfo.email}</strong>). I will get back to you shortly!</>
                      : <>Your default email app has opened with your message prefilled for <strong>{personalInfo.email}</strong>.</>}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineering Opportunity / Collaboration"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-600'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Mukesh, I came across your portfolio and wanted to discuss..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-600'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-md shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <span className="text-[11px] text-slate-500 font-mono">
                      ✉️ Directly to {personalInfo.email}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
