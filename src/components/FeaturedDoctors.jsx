import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DoctorCard from './DoctorCard';

const FEATURED_IDS = [1, 4, 5, 7, 10, 12];

export default function FeaturedDoctors({ doctors = [], onSelectDoctor, onViewProfile, scrollToSection }) {
  const [page, setPage] = useState(0);

  const featured = FEATURED_IDS
    .map((id) => doctors.find((d) => d.id === id))
    .filter(Boolean);

  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil(featured.length / perPage));
  const visible = featured.slice(page * perPage, page * perPage + perPage);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="text-center sm:text-left space-y-2 max-w-xl">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              MEET OUR SPECIALISTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Featured Doctors
            </h2>
            <div className="h-1 w-16 bg-cyan-brand mx-auto sm:mx-0"></div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2 self-center sm:self-auto">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous doctors"
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-brand text-slate-600 dark:text-slate-300 rounded-full shadow-sm transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next doctors"
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-brand text-slate-600 dark:text-slate-300 rounded-full shadow-sm transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelectDoctor={(doc) => { onSelectDoctor(doc); scrollToSection('booking'); }}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => scrollToSection('doctors')}
            className="px-6 py-3 bg-cyan-brand hover:bg-cyan-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
