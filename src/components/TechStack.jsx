import React from 'react';
import { Code2, Server, Database, Cloud, Bot, Sparkles } from 'lucide-react';
import { techStack } from '../data/portfolioData';

export default function TechStack() {
  return (
    <section id="skills" className="py-16 relative bg-[#060a14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            TECHNICAL SKILLS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frameworks, Databases & AI Tooling
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frameworks */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold pb-2 border-b border-slate-800">
              <Server className="w-4 h-4" />
              FRAMEWORKS
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.frameworks.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold pb-2 border-b border-slate-800">
              <Database className="w-4 h-4" />
              DATABASES & ORM
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.databases.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold pb-2 border-b border-slate-800">
              <Cloud className="w-4 h-4" />
              CLOUD & DEVOPS
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.cloudDevops.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI / ML */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold pb-2 border-b border-slate-800">
              <Bot className="w-4 h-4" />
              AI / ML INTEGRATION
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.aiMl.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* AI-Assisted Development Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/30">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold mb-3">
            <Sparkles className="w-4 h-4" />
            AI-ASSISTED DEVELOPMENT TOOLING:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {techStack.aiAssisted.map((ai, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                <span className="font-mono text-cyan-300 font-bold block">{ai.tool}</span>
                <span className="text-slate-400 text-[11px]">{ai.role}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
