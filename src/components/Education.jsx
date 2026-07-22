import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Building } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const highlights = education?.highlights || [
    "Specialized in Computer Engineering & Software Architecture",
    "Developed Capstone Projects in Web Systems and AI Automation",
    "Graduated with Distinction (8.40 / 10 CGPA)"
  ];

  return (
    <section id="education" className="py-20 relative bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualification
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all shadow-xl">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold mb-1">
                <Building className="w-4 h-4" />
                {education.institution}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {education.degree}
              </h3>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-mono text-sm font-extrabold">
                CGPA: {education.cgpa}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Graduated: {education.year}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
