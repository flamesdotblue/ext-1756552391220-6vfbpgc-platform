import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-10 pt-12 md:grid-cols-2 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Reflect with ease.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sky-500" style={{ fontFamily: 'cursive' }}>Echo</span>{' '}listens.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Echo is an AI journaling companion that turns your voice notes into calm, thoughtful reflections. Track emotions, spot patterns, and grow—one day at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4" id="start">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-white shadow-sm transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              Start Journaling
            </a>
            <span className="text-sm text-slate-500">No sign-up required to try the demo.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-rose-200/60 via-white to-sky-200/60 blur-xl" />
            <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-slate-200" />
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-300" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-slate-100 bg-white/80 p-4">
                  <p className="text-sm text-slate-600">“Today felt heavy at first, but a walk helped me reset.”</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1 w-full rounded-full bg-gradient-to-r from-rose-300 via-sky-300 to-emerald-300" />
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white/80 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Emotions</span>
                    <span>This week</span>
                  </div>
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {["Calm","Happy","Anxious","Tired","Focused"].map((label, i) => (
                      <div key={label} className="rounded-lg bg-gradient-to-b from-slate-50 to-white p-2 text-center shadow-sm">
                        <div className={`mx-auto mb-1 h-12 w-2 rounded-full ${i===0?'bg-emerald-400/70':i===1?'bg-rose-400/70':i===2?'bg-amber-400/70':i===3?'bg-sky-400/70':'bg-violet-400/70'}`} />
                        <div className="text-[10px] text-slate-500">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white/80 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Voice note</span>
                    <span>00:42</span>
                  </div>
                  <div className="mt-2 h-16 w-full rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 p-2">
                    <div className="h-full w-full rounded-md bg-[repeating-linear-gradient(90deg,rgba(244,63,94,0.25)_0,rgba(244,63,94,0.25)_4px,transparent_4px,transparent_10px)]" />
                  </div>
                  <button className="mt-3 w-full rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800">Play demo</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
