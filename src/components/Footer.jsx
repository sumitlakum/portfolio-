import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050c] border-t border-slate-800/80 py-10 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-cyan-400 font-bold">SL</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-medium">
            Designed & Built for {personalInfo.name} • {new Date().getFullYear()}
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#works" className="hover:text-cyan-400 transition-colors">Works</a>
          <a href="#ai-simulator" className="hover:text-cyan-400 transition-colors">AI Demo</a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
