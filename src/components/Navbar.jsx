import React, { useState } from 'react';

function IconMoon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function IconSun({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function IconMenu({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export default function Navbar({ onHireMe }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex items-center justify-end gap-4">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setDarkMode((v) => !v)}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-200 shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
      >
        {darkMode ? <IconSun className="h-5 w-5 text-yellow-400" /> : <IconMoon className="h-5 w-5 text-slate-200" />}
      </button>

      <button
        type="button"
        onClick={onHireMe}
        className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 text-sm font-extrabold text-slate-900 shadow-[0_12px_25px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40"
      >
        <span>HIRE ME</span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-900/10 text-base leading-none">➔</span>
      </button>

      <button
        type="button"
        aria-label="Menu"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
      >
        <IconMenu className="h-5 w-5" />
      </button>
    </div>
  );
}

