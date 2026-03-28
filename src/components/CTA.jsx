import React from 'react';
import Card from './ui/Card';

export default function CTA() {
  return (
    <div className="group relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0f171a]/60 p-8 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-yellow-400/20 hover:scale-[1.01]">
      
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_55%)]" />

      <div className="flex items-center justify-between gap-6">

        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Lets Work Together
        </h3>

        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#0b1215]/60 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-white/5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12H7" />
            <path d="M14 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}