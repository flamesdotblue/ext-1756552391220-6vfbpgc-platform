import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200/60 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-slate-700" style={{ fontFamily: 'cursive' }}>Echo</span>
          <span>— Find calm in your reflections.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="transition hover:text-slate-800">About</a>
          <a href="#features" className="transition hover:text-slate-800">Features</a>
          <a href="#start" className="transition hover:text-slate-800">Start Journaling</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
