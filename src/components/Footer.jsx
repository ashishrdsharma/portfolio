import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f171a]/95 py-8 text-center text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-base font-semibold text-white">Ashishd Dev</p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="rounded-md border border-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 hover:bg-accent/20 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="#"
            className="rounded-md border border-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition-all duration-300 hover:bg-accent/20 hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Ashishd Dev. All rights reserved.</p>
    </footer>
  );
}
