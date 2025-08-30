import React from 'react';
import { Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <Mic className="h-5 w-5 text-rose-500" />
          </div>
          <div className="leading-none">
            <span className="text-2xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: 'cursive' }}>Echo</span>
            <div className="text-[11px] leading-none text-slate-500">AI Journaling</div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-slate-900">Features</a>
          <a href="#about" className="transition hover:text-slate-900">About</a>
          <a href="#start" className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800">Start Journaling</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
