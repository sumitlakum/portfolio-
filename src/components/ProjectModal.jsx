import React from 'react';
import { X, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#090e1a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
              {project.domain}
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              {project.badge}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              PROJECT DETAILS & ACHIEVEMENTS
            </h4>
            <div className="space-y-3">
              {project.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
