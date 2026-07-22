import React from 'react';
import { Calendar, CheckCircle2, Zap } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import CitrusbugLogo from './CitrusbugLogo';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#050811]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <CitrusbugLogo className="w-4 h-4" rounded="rounded" />
            PROFESSIONAL EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Building scalable full-stack web applications and AI-powered solutions at Citrusbug Technolabs.
          </p>
        </div>

        {/* Experience Cards */}
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <CitrusbugLogo className="w-12 h-12" rounded="rounded-2xl" />
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-0.5">
                    {exp.company} ({exp.companyTag})
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {exp.points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
