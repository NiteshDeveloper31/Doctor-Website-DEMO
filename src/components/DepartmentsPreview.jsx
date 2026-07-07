import React from 'react';
import { ArrowRight } from 'lucide-react';
import { specialtiesData } from './Specialties';

// A curated subset of the full 17-department list for the homepage preview grid.
const PREVIEW_IDS = [
  'Cardiology', 'Oncology', 'Neurosurgery', 'Gastroenterology', 'Gynaecology & Obstetrics',
  'Orthopedics', 'Pediatrics', 'ENT & Head-Neck Surgery', 'Dermatology', 'Ophthalmology'
];

export default function DepartmentsPreview({ onSelectSpecialty, scrollToSection }) {
  const departments = PREVIEW_IDS
    .map((id) => specialtiesData.find((d) => d.id === id))
    .filter(Boolean);

  const handleClick = (deptId) => {
    onSelectSpecialty(deptId);
    scrollToSection('doctors');
  };

  return (
    <section className="py-14 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
            OUR DEPARTMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            Clinical Specialties
          </h2>
          <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            A glimpse of our 17 specialized departments &mdash; explore the full list on our Specialties page.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <button
                key={dept.id}
                onClick={() => handleClick(dept.id)}
                className="group bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800 rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md hover:border-cyan-brand/30 transition-all cursor-pointer"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${dept.color} border flex items-center justify-center`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10.5px] font-black text-slate-800 dark:text-white uppercase tracking-wide leading-tight">
                  {dept.name}
                </span>
                <span className="flex items-center gap-1 text-[9px] font-bold text-cyan-brand dark:text-cyan-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View <ArrowRight className="h-2.5 w-2.5" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => scrollToSection('specialties')}
            className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-brand text-cyan-brand dark:text-cyan-400 font-black text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            View All 17 Departments
          </button>
        </div>
      </div>
    </section>
  );
}
