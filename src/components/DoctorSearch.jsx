import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function DoctorSearch({ searchQuery, setSearchQuery, selectedSpecialty, setSelectedSpecialty }) {
  const specialties = [
    "All",
    "Cardiology",
    "Pediatrics",
    "Orthopedics",
    "Gynecology",
    "Neurology",
    "Dermatology"
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by doctor name, specialty, or qualifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:border-medical-500 dark:focus:border-medical-500 focus:ring-2 focus:ring-medical-500/20 dark:focus:ring-medical-500/10 focus:outline-none transition-all duration-200 shadow-sm text-slate-850 dark:text-slate-100 placeholder:text-slate-400"
          />
        </div>

        {/* Filter Indicator for visual polish */}
        <div className="hidden md:flex items-center gap-2.5 px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-500 dark:text-slate-400 font-semibold shadow-sm text-sm">
          <Filter className="h-4 w-4" />
          <span>Filters Active</span>
        </div>
      </div>

      {/* Specialization Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-250 ${(selectedSpecialty === specialty)
                ? "bg-medical-primary dark:bg-medical-500 text-white shadow-lg shadow-medical-500/20"
                : "bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 border border-slate-250/60 dark:border-slate-800/80 hover:bg-slate-55 dark:hover:bg-slate-850 hover:text-slate-950 dark:hover:text-white"
              }`}
          >
            {specialty}
          </button>
        ))}
      </div>
    </div>
  );
}
