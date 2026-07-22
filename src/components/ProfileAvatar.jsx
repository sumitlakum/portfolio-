import React, { useState } from 'react';
import CitrusbugLogo from './CitrusbugLogo';

export default function ProfileAvatar({ imageSrc = '/profile.jpg', size = 'lg' }) {
  const [imageError, setImageError] = useState(false);

  const dimensionClass = size === 'lg' ? 'w-36 h-36 sm:w-44 sm:h-44' : 'w-12 h-12';

  return (
    <div className="relative group inline-block">
      {/* Outer Glowing Ring */}
      <div className={`relative rounded-full overflow-hidden p-[3px] bg-gradient-to-tr from-cyan-400 via-emerald-400 to-indigo-500 shadow-2xl shadow-cyan-500/25 ${dimensionClass}`}>
        <div className="w-full h-full bg-[#0b0f19] rounded-full overflow-hidden flex items-center justify-center relative">
          {!imageError ? (
            <img
              src={imageSrc}
              alt="Sumit Lakum"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-[#12192c] flex flex-col items-center justify-center text-center p-2">
              <span className="font-extrabold text-2xl sm:text-3xl text-gradient font-mono">SL</span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">Sumit Lakum</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Citrusbug Badge */}
      <div className="absolute bottom-0 right-1 bg-slate-900/95 border border-slate-700 text-slate-200 text-[11px] font-mono px-3 py-1 rounded-full shadow-xl flex items-center gap-1.5 backdrop-blur-md">
        <CitrusbugLogo className="w-3.5 h-3.5" rounded="rounded-sm" />
        Citrusbug
      </div>
    </div>
  );
}
