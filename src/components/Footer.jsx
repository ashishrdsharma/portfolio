import React from 'react';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f171a]/95 py-8 text-center text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-base font-semibold text-white">Ashishd Dev</p>
        <div className="flex items-center gap-4">
          <Button
            as="a"
            variant="outline"
            href="#"
            className="!px-3 !py-1 !text-xs !min-h-[30px]"
          >
            GitHub
          </Button>
          <Button
            as="a"
            variant="outline"
            href="#"
            className="!px-3 !py-1 !text-xs !min-h-[30px]"
          >
            LinkedIn
          </Button>
        </div>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Ashishd Dev. All rights reserved.</p>
    </footer>
  );
}
