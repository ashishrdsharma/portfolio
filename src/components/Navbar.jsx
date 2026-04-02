import React from 'react';
import Button from './ui/Button';

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
  return (
    <div className="flex items-center justify-end gap-4">
      <Button
        variant="primary"
        onClick={onHireMe}
        className="gap-2 px-6 py-2 text-sm font-extrabold shadow-lg shadow-primary/35"
      >
        <span>HIRE ME</span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-900/10 text-base leading-none">➔</span>
      </Button>

      <Button
        variant="icon"
        aria-label="Menu"
        className=""
      >
        <IconMenu className="h-5 w-5" />
      </Button>
    </div>
  );
}

