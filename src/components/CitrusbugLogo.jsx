import React from 'react';

export default function CitrusbugLogo({ className = "w-6 h-6", rounded = "rounded-lg" }) {
  return (
    <div className={`relative inline-flex items-center justify-center bg-[#f05a36] text-white overflow-hidden shadow-md ${rounded} ${className}`}>
      {/* Citrusbug Stylized 'C' / Chevron Icon SVG */}
      <svg viewBox="0 0 100 100" className="w-[70%] h-[70%] fill-current">
        <path d="M 25,20 C 25,20 60,20 70,20 C 75,20 78,25 75,30 L 52,50 L 75,70 C 78,75 75,80 70,80 L 25,80 C 20,80 20,75 20,70 L 20,30 C 20,25 20,20 25,20 Z M 35,35 L 35,65 C 45,60 52,54 52,50 C 52,46 45,40 35,35 Z" />
      </svg>
    </div>
  );
}
