import React from 'react';
import { Mic, Heart, BarChart3, Calendar } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-rose-100 to-sky-100 p-3 text-rose-600 ring-1 ring-white">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: 'cursive' }}>{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Your voice, your patterns, your growth</h2>
          <p className="mt-3 text-slate-600">Echo turns moments into meaning with gentle prompts and insightful summaries.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Mic}
            title="Voice-first journaling"
            desc="Capture thoughts hands-free. Echo transcribes and organizes your reflections in seconds."
          />
          <FeatureCard
            icon={Heart}
            title="Emotion tracking"
            desc="Spot mood trends over time and understand the moments that move the needle."
          />
          <FeatureCard
            icon={BarChart3}
            title="Gentle insights"
            desc="Weekly summaries and highlights surface patterns without the pressure."
          />
          <FeatureCard
            icon={Calendar}
            title="Daily rhythm"
            desc="Soft reminders and calming prompts help you keep a steady routine."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#start"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white shadow-sm transition hover:bg-slate-800"
          >
            Start Journaling
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
