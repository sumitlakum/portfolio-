import React from 'react';

export default function TechIcon({ name, className = "w-4 h-4" }) {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#3776AB" d="M62.6 0c-16.8 0-15.7 7.3-15.7 7.3l.1 7.6h16.1v2.3H20.7s-7.4-.8-7.4 16.5c0 17.3 6.4 16.6 6.4 16.6h3.8v-8.2s-.4-9.9 9.9-9.9h16.7s9.5.1 9.5-9.3V7.4s1.3-7.4-17-7.4zm-9 4.9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z"/>
          <path fill="#FFD43B" d="M65.4 68.2c16.8 0 15.7-7.3 15.7-7.3l-.1-7.6H64.9v-2.3h42.4s7.4.8 7.4-16.5c0-17.3-6.4-16.6-6.4-16.6h-3.8v8.2s.4 9.9-9.9 9.9H77.9s-9.5-.1-9.5 9.3v15.5s-1.3 7.4 17 7.4zm9-4.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
        </svg>
      );
    case 'django':
    case 'django / drf':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#0C4B33"/>
          <path fill="#FFFFFF" d="M42 34h12v42c0 10-5 16-16 16-3 0-6 0-8-1v-10c2 1 4 1 6 1 4 0 6-2 6-7V34zm22 17h12v41H64V51zm0-17h12v12H64V34z"/>
        </svg>
      );
    case 'fastapi':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="60" fill="#059669"/>
          <path fill="#FFFFFF" d="M72 16L32 72h32l-8 40 40-56H64l8-40z"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
          <path fill="#000000" d="M67.3 98.4c2.8 4.6 6.5 8.1 13 8.1 5.5 0 9.1-2.7 9.1-6.6 0-4.6-3.7-6.3-9.9-8.9l-3.4-1.5c-9.9-4.2-16.5-9.4-16.5-20.5 0-11.4 8.9-20.1 23-20.1 10.1 0 17 3.5 21.6 11.5l-10.4 6.7c-2.3-4.1-5.3-6-11.1-6-4.5 0-7.3 2.6-7.3 5.7 0 3.9 2.5 5.5 8.1 7.9l3.4 1.5c11.7 5 18.4 9.8 18.4 21.2 0 13.1-10.3 21.2-25.2 21.2-14 0-22.9-6.6-27.4-15l10.2-6.2zM28.4 97.4c2.3 4 5 7.2 9.5 7.2 4.8 0 7.8-1.9 7.8-9.4V49.7h13.8v45.8c0 15-8.8 21.5-21.7 21.5-11.2 0-18.4-5.8-22-13.6l12.6-6.0z"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="16" fill="#3178C6"/>
          <path fill="#FFFFFF" d="M70.3 103.5c3.2 4.3 8.3 6.5 14.7 6.5 11.5 0 18.3-6.1 18.3-15.6 0-9.6-6.6-13.6-16.9-17.5l-3.4-1.3c-6.1-2.3-8.8-4.2-8.8-7.7 0-3.3 2.9-5.5 7.7-5.5 5.3 0 8.7 2.3 11 6.8l9.6-6.1c-3.9-6.7-10.3-9.9-20.4-9.9-11.1 0-18.5 6.4-18.5 15.7 0 9.2 6 13.3 15.6 17l3.4 1.3c6.7 2.6 9.9 4.6 9.9 8.2 0 4-3.6 6.3-9 6.3-6.5 0-10.8-3.4-13.4-8.8l-9.5 5.6zM21 54.2h18.2v54.8h13.7V54.2h18.2V42.6H21v11.6z"/>
        </svg>
      );
    case 'react':
    case 'react.js':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="6.5" fill="none">
            <ellipse cx="64" cy="64" rx="48" ry="18.5"/>
            <ellipse cx="64" cy="64" rx="48" ry="18.5" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="48" ry="18.5" transform="rotate(120 64 64)"/>
          </g>
        </svg>
      );
    case 'next':
    case 'next.js':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="60" fill="#000000" stroke="#FFFFFF" strokeWidth="4"/>
          <path fill="#FFFFFF" d="M78 40h12v48H78V40zM38 40h12l26 36V40h10v48H74L48 52v36H38V40z"/>
        </svg>
      );
    case 'postgres':
    case 'postgresql':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#336791" d="M63.5 16C37.3 16 16 37.3 16 63.5S37.3 111 63.5 111 111 89.7 111 63.5 89.7 16 63.5 16zm23.2 38.3c-2.3 8.9-8.4 19.3-17.7 26.2-4.5 3.3-9.5 5.5-14.7 6.4 2.8 1.9 5.8 2.8 9.1 2.8 9.9 0 19.1-5.7 23.3-14.8l.1-.2z"/>
        </svg>
      );
    case 'mongo':
    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#47A248" d="M64 12c-2.8 0-5.1 14.5-5.1 32.4 0 25.1 1.7 49 5.1 71.6 3.4-22.6 5.1-46.5 5.1-71.6C69.1 26.5 66.8 12 64 12z"/>
          <path fill="#47A248" d="M64 12C41.3 27 26 51 26 73c0 23.2 16.7 43 38 43V12z"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#3ECF8E" d="M72.9 122.9c-2.1 2.8-6.6.9-5.9-2.6l9.6-47.5H19.7c-3.7 0-5.8-4.2-3.7-7.2L72.9 5.1c2.1-2.8 6.6-.9 5.9 2.6l-9.6 47.5h56.9c3.7 0 5.8 4.2 3.7 7.2L72.9 122.9z"/>
        </svg>
      );
    case 'sqlalchemy':
    case 'sqlalchemy / alembic':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#D7191C"/>
          <path fill="#FFFFFF" d="M34 38h60v12H34V38zm0 20h60v12H34V58zm0 20h40v12H34V78z"/>
        </svg>
      );
    case 'openai':
    case 'openai agents sdk':
    case 'agents sdk':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="24" fill="#10A37F"/>
          <path fill="#FFFFFF" d="M64 28a36 36 0 100 72 36 36 0 000-72zm0 12a24 24 0 110 48 24 24 0 010-48z"/>
        </svg>
      );
    case 'ocr':
    case 'ocr document pipeline':
    case 'ocr pipeline':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#6366F1"/>
          <path fill="#FFFFFF" d="M40 32h48v64H40V32zm12 16h24v8H52v-8zm0 16h24v8H52v-8zm0 16h16v8H52v-8z"/>
        </svg>
      );
    case 'playwright':
    case 'playwright automation':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#2EAD33"/>
          <path fill="#FFFFFF" d="M44 32l48 32-48 32V32z"/>
        </svg>
      );
    case 'claude':
    case 'claude & mcp':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#D97706"/>
          <path fill="#FFFFFF" d="M64 24l12 28 28 12-28 12-12 28-12-28-28-12 28-12 12-28z"/>
        </svg>
      );
    default:
      return <span className="text-cyan-400">⚡</span>;
  }
}
