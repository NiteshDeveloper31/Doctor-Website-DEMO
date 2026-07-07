import React from 'react';
import surgeonHero from '../assets/surgeon_hero.jpg';

export default function SubPageHero({ title, subtitle, breadcrumb }) {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Image - Full Opacity */}
      <img
        src={surgeonHero}
        alt={title}
        className="w-full h-full object-cover object-top absolute inset-0"
      />
      
      {/* Left-restricted gradient overlay matching the Home page banner */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent dark:from-slate-950/95 dark:via-slate-955/50 dark:to-transparent"></div>

      {/* Text overlays container */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-left z-10 pb-28">
        <div className="max-w-[85%] md:max-w-[48%] space-y-2.5">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-300 dark:text-cyan-400 uppercase tracking-widest leading-none">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </div>

          {/* Bold Title */}
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-black text-white uppercase tracking-wider leading-none">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 dark:text-slate-355 font-semibold">
            {subtitle}
          </p>

        </div>
      </div>
    </div>
  );
}
