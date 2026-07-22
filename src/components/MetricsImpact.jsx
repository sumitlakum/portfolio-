import React, { useState } from 'react';
import { Database, Zap, TrendingUp, CheckCircle, Clock, ShieldCheck, BarChart3, Activity } from 'lucide-react';
import { crossProjectImpacts } from '../data/portfolioData';

export default function MetricsImpact() {
  const [sliderVal, setSliderVal] = useState(85); // Interactive visualizer

  return (
    <section id="impact" className="py-24 relative bg-[#060912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            MEASURABLE ENGINEERING IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Performance & System Optimization
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Tangible results achieved by optimizing database queries, building AI document pipelines, and streamlining workflow logistics.
          </p>
        </div>

        {/* ORM Query Optimization Visual Card */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 mb-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Database className="w-4 h-4" />
                BACKEND DATABASE PERFORMANCE
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Django ORM Query Optimization
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-extrabold shadow-lg">
              🚀 90% Query Reduction
            </div>
          </div>

          {/* Interactive Before & After Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Before Box */}
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">Before Optimization</span>
                <span className="text-xs font-mono text-red-300 bg-red-950 px-2 py-0.5 rounded border border-red-800">100+ DB Queries / Req</span>
              </div>
              <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-full animate-pulse"></div>
              </div>
              <p className="text-xs text-slate-400">
                Multiple unindexed N+1 ORM queries, duplicated table joins, high latency under heavy request loads.
              </p>
            </div>

            {/* After Box */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">After Sumit's Refactor</span>
                <span className="text-xs font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">15-20 DB Queries / Req</span>
              </div>
              <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[18%]"></div>
              </div>
              <p className="text-xs text-slate-400">
                Optimized Django select_related & prefetch_related, query indexing, Redis caching, 90% DB round-trip cut.
              </p>
            </div>

          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {crossProjectImpacts[0].description}
          </p>

        </div>

        {/* 3 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white mb-2">
              95% Cut
            </div>
            <div className="text-sm font-bold text-slate-200 mb-2">
              Manual Appointment Work
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated 10,000+ monthly appointments via Gmail API parsing for structured TPA email extraction.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white mb-2">
              99% Automated
            </div>
            <div className="text-sm font-bold text-slate-200 mb-2">
              Lab Document Data Entry
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              OCR + OpenAI document processing pipeline eliminating manual keying across 500+ laboratory reports.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white mb-2">
              30-40% Saved
            </div>
            <div className="text-sm font-bold text-slate-200 mb-2">
              Field Staff Auto-Assignment
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Intelligent geolocation & PIN code auto-mapping algorithm matching field staff with patient appointments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
