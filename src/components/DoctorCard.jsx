import React from 'react';
import { Star, Clock, IndianRupee, Briefcase, Award } from 'lucide-react';
import DoctorImage from './DoctorImage';

export default function DoctorCard({ doctor, onSelectDoctor, onViewProfile }) {
  return (
    <div className="glass-panel rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col h-full group">
      
      {/* 1. Doctor Portrait */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <DoctorImage
          src={doctor.image}
          name={doctor.name}
          specialty={doctor.specialization}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
        {/* Specialization Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-slate-900/80 text-white font-extrabold text-[9px] uppercase tracking-wider rounded border border-white/10">
            {doctor.specialization}
          </span>
        </div>
      </div>

      {/* 2. Cyan Name Bar with Upward Pointing Arrow Pointer (Matches Reference Template) */}
      <div className="bg-cyan-brand relative py-3.5 text-center shrink-0 shadow-inner">
        {/* Rotated square making an upward triangle pointer */}
        <div className="arrow-up"></div>
        <h3 className="text-xs font-black text-white uppercase tracking-widest">
          {doctor.name}
        </h3>
        {doctor.designation && (
          <p className="text-[9px] font-bold text-white/85 uppercase tracking-wider mt-0.5">
            {doctor.designation}
          </p>
        )}
      </div>

      {/* 3. Card Body Details */}
      <div className="p-5 flex-1 flex flex-col space-y-4">
        
        {/* Qualifications & Specialty details */}
        <div className="text-center">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Qualifications & Department
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-350 font-semibold mt-0.5">
            {doctor.qualifications}
          </p>
        </div>

        {/* Rating and review summary */}
        <div className="flex justify-center items-center gap-1.5 text-xs text-amber-500 font-bold">
          <Star className="h-4 w-4 fill-current" />
          <span>{doctor.rating}</span>
          <span className="text-[10px] text-slate-450 font-normal">({doctor.reviews} reviews)</span>
        </div>

        {/* Experience and Fee details */}
        <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 dark:border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded">
              <Briefcase className="h-3.5 w-3.5" />
            </div>
            <div>
              <span className="block text-[8px] text-slate-400 font-bold uppercase leading-none">Experience</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">{doctor.experience} Yrs</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded text-emerald-500">
              <IndianRupee className="h-3.5 w-3.5" />
            </div>
            <div>
              <span className="block text-[8px] text-slate-400 font-bold uppercase leading-none">OPD Fee</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">₹{doctor.fee}</span>
            </div>
          </div>
        </div>

        {/* Time slots preview */}
        <div>
          <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>OPD Days: {doctor.availability}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {doctor.slots.slice(0, 3).map((slot, idx) => (
              <span 
                key={idx} 
                className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
              >
                {slot}
              </span>
            ))}
            {doctor.slots.length > 3 && (
              <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-50 dark:bg-slate-850 text-slate-400 rounded">
                +{doctor.slots.length - 3} More
              </span>
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2 pt-2 mt-auto">
          <button
            onClick={() => onViewProfile(doctor)}
            className="flex-1 py-2.5 bg-slate-150 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-[10px] uppercase tracking-wider rounded cursor-pointer transition-colors"
          >
            Profile
          </button>
          
          <button
            onClick={() => onSelectDoctor(doctor)}
            className="flex-1 py-2.5 bg-cyan-brand hover:bg-cyan-600 text-white font-bold text-[10px] uppercase tracking-wider rounded cursor-pointer transition-colors shadow-sm"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}
