import React from 'react';
import { ArrowRight, MapPin, Bot, FileText, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ProfileAvatar from './ProfileAvatar';

export default function Hero({ onOpenResume }) {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/15 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Avatar */}
          <div className="flex flex-col items-center flex-shrink-0 text-center">
            <ProfileAvatar size="lg" />
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personalInfo.location}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Citrusbug Technolabs • {personalInfo.experienceYears} Experience
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {personalInfo.name} <br />
              <span className="text-gradient text-3xl sm:text-4xl font-bold">
                {personalInfo.role}
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#works"
                className="group flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              >
                Explore Production Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Get In Touch (Email)
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Download / View CV
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
