import React from 'react';
import { X, Printer, Mail, MapPin, Linkedin, Sparkles, Briefcase, GraduationCap, Download } from 'lucide-react';
import { personalInfo, experiences, projects, techStack, education } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#090d18] border border-slate-700/90 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Curriculum Vitae • Sumit Lakum
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all text-white font-bold"
            >
              <Printer className="w-3.5 h-3.5" />
              Download / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#080c16] text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-lg font-mono font-semibold text-cyan-400 mt-1">
              {personalInfo.role}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-cyan-400">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                LinkedIn Profile
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">
              SUMMARY
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {personalInfo.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              PROFESSIONAL EXPERIENCES
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white">{exp.role} | {exp.company}</h3>
                  </div>
                  <div className="text-xs font-mono text-slate-400">{exp.period}</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 list-disc pl-4 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4">
              KEY PROJECTS & IMPACT
            </h2>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white">{proj.title} ({proj.domain})</h3>
                    <span className="text-[11px] font-mono text-emerald-400">{proj.badge}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc pl-4 leading-relaxed">
                    {proj.details.map((dt, dIdx) => (
                      <li key={dIdx}>{dt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
              TECHNICAL SKILLS & TOOLING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">Frameworks & Libraries:</span>
                <span className="text-slate-300">{techStack.frameworks.join(', ')}</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">Databases & ORM:</span>
                <span className="text-slate-300">{techStack.databases.join(', ')}</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">Cloud & DevOps:</span>
                <span className="text-slate-300">{techStack.cloudDevops.join(', ')}</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-white block mb-1">AI / ML Integrations:</span>
                <span className="text-slate-300">{techStack.aiMl.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              EDUCATION
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <div className="font-bold text-white">{education.institution}</div>
                <div className="text-slate-300">{education.degree}</div>
              </div>
              <div className="text-right font-mono">
                <div className="text-cyan-300">{education.year}</div>
                <div className="text-emerald-400 font-bold">CGPA: {education.cgpa}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
