import React from 'react';
import { GraduationCap, Award, Calendar, School, Building } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education-sec" className="space-y-8 pt-6">
      <h2 className="text-3xl font-black tracking-tight text-slate-100 uppercase">
        EDUCATION & QUALIFICATION.
      </h2>

      {/* Timeline List */}
      <div className="space-y-6 relative border-l-2 border-slate-800/90 pl-6 sm:pl-8 ml-2 sm:ml-4">
        {educationList.map((edu, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline Purple Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0b0e14] border-2 border-purple-500 group-hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/40"></div>

            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-purple-500/50 transition-all space-y-3">
              
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg flex-shrink-0">
                    🏫
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                      {edu.degree}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {edu.period}
                    </div>
                  </div>
                </div>

                <div className="px-3.5 py-1 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-300 font-mono text-xs font-bold">
                  {edu.grade}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {edu.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
