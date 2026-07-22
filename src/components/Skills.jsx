import React from 'react';
import { Code2, Database, Cloud, Bot, Sparkles, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Proficiency across full-stack backend APIs, modern component architecture, database modeling, and AI-assisted workflows.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frameworks & Languages */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Frameworks & Languages</h3>
            </div>
            <div className="space-y-3">
              {skills.frameworks.map((fw, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-slate-200">
                    <span>{fw.name}</span>
                    <span className="font-mono text-cyan-400">{fw.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                      style={{ width: `${fw.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & ORM */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Databases & ORM</h3>
            </div>
            <div className="space-y-2">
              {skills.databases.map((db, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <span>{db.name}</span>
                  <span className="text-emerald-400">●</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-800">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Cloud & DevOps</h3>
            </div>
            <div className="space-y-2">
              {skills.cloudDevops.map((cloud, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <span>{cloud.name}</span>
                  <span className="text-purple-400">●</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI / ML Integrations */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">AI & ML Integration</h3>
            </div>
            <div className="space-y-2">
              {skills.aiMl.map((ai, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <span>{ai.name}</span>
                  <span className="text-indigo-400">★</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Special AI-Assisted Development Banner */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-[#0b1021]">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-extrabold text-white">
              AI-Assisted Accelerated Engineering Stack
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.aiAssistedDev.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400 font-bold mb-1">{item.tool}</div>
                <div className="text-xs text-slate-300 font-medium">{item.purpose}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
