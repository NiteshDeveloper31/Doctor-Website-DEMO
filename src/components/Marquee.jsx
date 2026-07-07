import React from 'react';
import { Megaphone } from 'lucide-react';

const announcements = [
  "Now offering same-day OPD appointments across all 17 departments.",
  "Aarogya Cancer Institute now open with dedicated tumor board reviews.",
  "Free cardiac screening camp every first Saturday of the month.",
];

export default function Marquee() {
  const track = [...announcements, ...announcements];

  return (
    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-y border-cyan-100 dark:border-cyan-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="shrink-0 flex items-center gap-1.5 px-4 sm:px-6 py-2 bg-cyan-brand text-white text-[10px] font-black uppercase tracking-wider z-10">
          <Megaphone className="h-3.5 w-3.5" />
          <span>Announcements</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {track.map((text, index) => (
              <span
                key={index}
                className="mx-8 text-xs font-semibold text-slate-700 dark:text-slate-300 py-2"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
