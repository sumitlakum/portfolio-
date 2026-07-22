import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo, techStack, experiences, projects } from './data/portfolioData';
import CitrusbugLogo from './components/CitrusbugLogo';
import ProfileAvatar from './components/ProfileAvatar';
import TechIcon from './components/TechIcons';
import EducationSection from './components/EducationSection';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrintResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="bg-[#0b0e14] text-slate-200 min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-[#080c16]/95 border-b border-slate-800/90 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-mono text-xl font-black text-cyan-400">SL</div>
          <span className="text-xs font-bold text-white">Sumit Lakum</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintResume}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[53px] z-30 bg-[#090d18]/95 border-b border-slate-800 backdrop-blur-xl p-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href="#about-sec" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200">About</a>
            <a href="#exp-sec" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200">Experience</a>
            <a href="#works-sec" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200">Works</a>
            <a href="#education-sec" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200">Education</a>
            <a href="#contact-sec" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200">Contact</a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full text-center py-2.5 rounded-xl bg-cyan-400 text-black font-extrabold text-xs"
            >
              Get In Touch (Email)
            </a>
          </div>
        </div>
      )}

      {/* Container Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* ================= LEFT SIDEBAR (STICKY HERO & BRAND) ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto space-y-6 sm:space-y-7 pr-0 lg:pr-6 border-b lg:border-b-0 border-slate-800/80 pb-8 lg:pb-0 scrollbar-thin">
            
            {/* Top Logo / Signature (Desktop only) */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="font-mono text-3xl font-extrabold tracking-tighter text-white font-serif italic">
                <span className="text-cyan-400">S</span>L
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold tracking-wide">
              Ohh you found me?. Howdy! I am
            </div>

            {/* BIG BOLD NAME */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-sans">
                SUMIT
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cyan-400 uppercase font-sans">
                LAKUM
              </h1>
            </div>

            {/* Nickname note */}
            <p className="text-xs font-mono text-slate-400">
              Or you could call me Sumit. That works too . . .
            </p>

            {/* Role & Bio */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {personalInfo.role}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hey! How nice of you to look at my personal site, <span className="text-cyan-400 font-semibold">Thank you!</span> <br />
                I am a software engineer that specializes in backend APIs, frontend integration, and recently found myself deep diving into AI systems and production workflows.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-cyan-500/80 text-cyan-300 hover:bg-cyan-500 hover:text-black font-bold text-xs transition-all shadow-lg shadow-cyan-500/10"
              >
                Get in touch!
              </a>

              <button
                onClick={handlePrintResume}
                className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-xs transition-all bg-slate-900/60 flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 pt-1 text-slate-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16 lg:pl-4">
            
            {/* Desktop Navigation Links */}
            <header className="hidden lg:flex items-center justify-end gap-6 text-xs font-mono border-b border-slate-800/80 pb-4">
              <nav className="flex items-center gap-6">
                <a href="#about-sec" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
                <a href="#exp-sec" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
                <a href="#works-sec" className="text-slate-300 hover:text-cyan-400 transition-colors">Works</a>
                <a href="#education-sec" className="text-slate-300 hover:text-cyan-400 transition-colors">Education</a>
                <a href="#contact-sec" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
              </nav>
              <button
                onClick={handlePrintResume}
                className="p-2 rounded-full border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </header>

            {/* SECTION 1: WHAT I DO */}
            <section id="about-sec" className="space-y-6 sm:space-y-8 pt-2">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-100 uppercase">
                WHAT I DO.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I've been coding professionally for <span className="text-white font-bold">2+ years</span> now and currently working as a <span className="text-cyan-400 font-bold">Software Engineer</span> that focuses on architecture, APIs, frontend integration, and production AI applications!
              </p>

              <div className="text-xs font-mono text-cyan-400 font-semibold">
                Here are few technologies that are cup of my tea!
              </div>

              {/* Grid of Tech Stack + Character Avatar */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Tech Categories Grid */}
                <div className="md:col-span-8 grid grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Backend */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">BACKEND</div>
                    <ul className="space-y-2 text-xs text-slate-200 font-medium">
                      {techStack.backend.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <TechIcon name={t.icon} className="w-4 h-4 flex-shrink-0" />
                          <span>{t.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frontend */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">FRONTEND</div>
                    <ul className="space-y-2 text-xs text-slate-200 font-medium">
                      {techStack.frontend.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <TechIcon name={t.icon} className="w-4 h-4 flex-shrink-0" />
                          <span>{t.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Databases */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">DATABASES</div>
                    <ul className="space-y-2 text-xs text-slate-200 font-medium">
                      {techStack.databases.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <TechIcon name={t.icon} className="w-4 h-4 flex-shrink-0" />
                          <span>{t.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Integration */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">AI INTEGRATION</div>
                    <ul className="space-y-2 text-xs text-slate-200 font-medium">
                      {techStack.aiIntegration.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <TechIcon name={t.icon} className="w-4 h-4 flex-shrink-0" />
                          <span>{t.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Character Avatar Box */}
                <div className="md:col-span-4 flex flex-col items-center justify-center text-center pt-4 md:pt-0 border-t md:border-t-0 border-slate-800/60">
                  <ProfileAvatar size="lg" />
                  <span className="text-[11px] font-mono text-slate-400 mt-3">
                    Created by <span className="text-cyan-400 font-bold">Sumit Lakum</span>
                  </span>
                </div>

              </div>
            </section>

            {/* SECTION 2: PLACES I'VE WORKED */}
            <section id="exp-sec" className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">
                PLACES I'VE WORKED.
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Since 2024, had a privilege to work with company that enables me to improve & showcase my skills and talents. Currently working with <span className="text-cyan-400 font-bold">Citrusbug Technolabs</span>.
              </p>

              {/* Citrusbug Experience Card */}
              <div className="glass-card p-5 sm:p-8 rounded-3xl border border-slate-800 space-y-5 sm:space-y-6">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <CitrusbugLogo className="w-12 h-12 sm:w-14 sm:h-14" rounded="rounded-2xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Software Engineer</h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                      #Citrusbug Technolabs <span className="text-slate-400 font-normal">Software Development Company</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      May 2024 - Present
                    </div>
                  </div>
                </div>

                {/* Bullet Points with ▷ indicator */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-base leading-none flex-shrink-0">▷</span>
                    <div>
                      <span className="font-bold text-white">Full-Stack & REST APIs:</span> Designed and developed scalable full-stack web applications and AI-powered solutions using FastAPI, Django, Python, React.js, and Next.js.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-base leading-none flex-shrink-0">▷</span>
                    <div>
                      <span className="font-bold text-white">HealthTech Automation:</span> Automated appointment creation using Gmail API & TPA email formats (10,000+ appts/mo, 95% manual reduction).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-base leading-none flex-shrink-0">▷</span>
                    <div>
                      <span className="font-bold text-white">AI Document Processing:</span> OCR + OpenAI pipeline automating 500+ patient reports & Playwright framework for 10+ lab test workflows (99% data entry cut).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-base leading-none flex-shrink-0">▷</span>
                    <div>
                      <span className="font-bold text-white">Multi-Agent AI Systems:</span> 5-Agent OpenAI SDK workflow for e-commerce query classification & product recommendation.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-base leading-none flex-shrink-0">▷</span>
                    <div>
                      <span className="font-bold text-white">Django ORM Optimization:</span> Optimized queries across projects, reducing 100+ queries per request down to 15-20 queries (~90% duplicate query cut).
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION 3: SOME OF MY WORKS */}
            <section id="works-sec" className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">
                SOME OF MY WORKS.
              </h2>

              <p className="text-xs sm:text-sm text-slate-400">
                Check out some of the works I made across production projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-mono text-lg sm:text-xl font-extrabold text-cyan-400 mb-2">
                        {proj.number}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {proj.title}
                      </h3>
                      <div className="text-[11px] font-mono text-slate-400 mb-3">
                        {proj.domain}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {proj.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-all flex items-center justify-center gap-1"
                    >
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: EDUCATION & QUALIFICATION */}
            <EducationSection />

            {/* SECTION 5: SAY HI! */}
            <section id="contact-sec" className="space-y-6 pt-6 pb-12 border-t border-slate-800/80">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 uppercase">
                Say hi! (⁀ᗢ⁀)
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                While I tend to be focused on engineering, I enjoy engaging in good technical conversations. Please feel free to reach out via email or LinkedIn. I look forward to connecting!
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-center px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs transition-all shadow-lg shadow-cyan-500/20"
                >
                  Say Hi via Email ({personalInfo.email})
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-indigo-400 font-bold text-xs transition-all"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="pt-8 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Designed & Built for Sumit Lakum • {new Date().getFullYear()}</span>
                <a href="#about-sec" className="hover:text-cyan-400">Back to Top ↑</a>
              </div>
            </section>

          </div>

        </div>
      </div>

      {/* Modals */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
