import React from 'react';
import { X, Download, Printer, ExternalLink } from 'lucide-react';
import { personalInfo, experiences, projects, educationList } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0b0e17] border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-cyan-400">Curriculum Vitae</span>
            <span className="text-xs text-slate-500">• {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors flex items-center gap-1"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold mt-1 print:text-slate-800">
                {personalInfo.role}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 print:text-slate-700 space-y-1 sm:text-right">
              <div>📍 {personalInfo.location}</div>
              <div>✉️ {personalInfo.email}</div>
              <div>🔗 {personalInfo.linkedin}</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider print:text-slate-900 border-b border-slate-800/60 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-bold text-white text-base print:text-black">
                    {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1.5 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Highlighted Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider print:text-slate-900 border-b border-slate-800/60 pb-1">
              KEY PRODUCTION PROJECTS
            </h2>

            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-white print:text-black">
                    <span>{proj.title} ({proj.domain})</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{proj.badge}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider print:text-slate-900 border-b border-slate-800/60 pb-1">
              EDUCATION & QUALIFICATION
            </h2>

            <div className="space-y-2 text-xs">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-slate-300 print:text-slate-800">
                  <div>
                    <span className="font-bold text-white print:text-black">{edu.institution}</span> — {edu.degree}
                  </div>
                  <div className="font-mono text-slate-400 print:text-slate-600 text-[11px]">
                    {edu.period} | {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
