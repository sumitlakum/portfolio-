import React from 'react';
import { Mail, Linkedin, MessageSquare, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  return (
    <section id="contact" className="py-20 relative bg-[#050811]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Ambient Circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 font-mono text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              GET IN TOUCH
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Connect & Work Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {personalInfo.closingNote}
            </p>
          </div>

          {/* Social / Direct Email Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Email Me Direct ({personalInfo.email})
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:border-indigo-500 hover:text-indigo-300 transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              LinkedIn Profile
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              View / Download Resume
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
