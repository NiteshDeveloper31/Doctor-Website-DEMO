import React from 'react';
import { CalendarClock, Building2, ShieldCheck, MapPin } from 'lucide-react';
import aboutImage from '../assets/surgeon_hero.jpg';
import hospital from '../assets/OIP (13).jpg';

const highlights = [
  { icon: CalendarClock, text: "Founded in 2011, serving the National Capital Region for over a decade." },
  { icon: Building2, text: "17 clinical departments and 300+ beds under a single campus." },
  { icon: ShieldCheck, text: "NABH & NABL accredited care, safety, and diagnostic standards." },
  { icon: MapPin, text: "Serving patients across Noida, Ghaziabad, Delhi NCR, and Western UP." },
];

export default function AboutHospital() {
  return (
    <section className="py-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src={hospital}
            alt="Aarogya Life Hospital Campus"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800"
          />
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-cyan-brand text-white rounded-2xl px-5 py-4 shadow-xl">
            <span className="block text-2xl font-black leading-none">15+</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider mt-1">Years of Service</span>
          </div>
        </div>

        <div className="space-y-5">
          <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
            About Aarogya Life Hospital
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            Caring for Noida and the NCR since 2011
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Aarogya Life Hospital was founded with a single mission: to bring advanced, affordable, and compassionate
            healthcare to Sector 62, Noida and the surrounding NCR community. Over the past 15 years, our campus has
            grown into a full-fledged multi-specialty institution, combining modern diagnostic technology with a
            patient-first philosophy of care. Every department on our campus, from Emergency & Trauma to our
            dedicated Cancer and Cardiac Institutes, is staffed by accredited consultants committed to the same
            standard of clinical excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-150/60 dark:border-slate-800/60 rounded-xl hover:border-cyan-brand/30 dark:hover:border-cyan-brand/30 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 text-cyan-brand dark:text-cyan-400 shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-350 leading-relaxed pt-0.5">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
