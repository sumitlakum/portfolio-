import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Works', href: '#works' },
    { name: 'AI Simulator', href: '#ai-simulator' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080c16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px]">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-mono font-extrabold text-xs text-cyan-400">
              SL
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1">
              Sumit Lakum
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-mono text-cyan-400/80">Full-Stack & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </button>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-xl text-xs"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-[#090d18]/95 border-b border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full text-center py-2.5 text-xs font-bold text-black bg-cyan-400 rounded-xl mt-2"
            >
              Get In Touch (Email)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
