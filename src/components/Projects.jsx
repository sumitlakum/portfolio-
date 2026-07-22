import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-20 relative bg-[#060a14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            SOME OF MY WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Production Engineering Projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Healthcare operational platforms, AI document automation pipelines, and multi-agent AI SDK systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/40 glass-card-hover group flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Number & Domain */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-extrabold text-cyan-400">
                    {proj.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    {proj.domain}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Badge */}
                <div className="mb-4 inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                  ⚡ {proj.badge}
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-xs mb-5 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Highlights preview */}
                <div className="space-y-1.5 mb-6">
                  {proj.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5 leading-relaxed">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span className="line-clamp-2">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div>
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-all"
                >
                  Deep Dive & Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
