import React from 'react';
import { X, Star, Calendar, Clock, Award, Landmark, Stethoscope, Briefcase, IndianRupee } from 'lucide-react';
import DoctorImage from './DoctorImage';

export default function DoctorModal({ doctor, isOpen, onClose, onBookAppointment }) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/55 dark:bg-black/85 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative glass-panel w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800 transform transition-transform duration-200 scale-100 hover:scale-[1.01] flex flex-col max-h-[90vh]">

        {/* Header (Close Button) */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-350 rounded-full transition-all duration-200"
            aria-label="Close details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area - Scrollable */}
        <div className="overflow-y-auto p-5 md:p-8 space-y-5">

          {/* Main Info Row */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <DoctorImage
              src={doctor.image}
              name={doctor.name}
              specialty={doctor.specialization}
              className="w-full md:w-44 h-44 object-cover object-top rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
            />
            <div className="space-y-3 w-full">
              <span className="px-3 py-1 bg-medical-50 dark:bg-medical-950/40 text-medical-primary dark:text-medical-400 font-extrabold text-[10px] uppercase tracking-wider rounded-lg border border-medical-100 dark:border-medical-950">
                {doctor.specialization}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {doctor.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-medical-500" />
                {doctor.qualifications}
              </p>

              <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                <Star className="h-4.5 w-4.5 fill-current" />
                <span>{doctor.rating}</span>
                <span className="text-xs font-medium text-slate-400">({doctor.reviews} patient reviews)</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-150 dark:border-slate-800/80" />

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-2xl text-center">
              <Briefcase className="h-5 w-5 mx-auto text-medical-500 mb-1" />
              <span className="block text-[10px] text-slate-400 font-bold uppercase">Experience</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">{doctor.experience} Years</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-2xl text-center">
              <IndianRupee className="h-5 w-5 mx-auto text-emerald-500 mb-1" />
              <span className="block text-[10px] text-slate-400 font-bold uppercase">Consultation</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">₹{doctor.fee}</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-2xl text-center">
              <Calendar className="h-5 w-5 mx-auto text-indigo-500 mb-1" />
              <span className="block text-[10px] text-slate-400 font-bold uppercase">Availability</span>
              <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 whitespace-nowrap">{doctor.availability}</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-medical-500" />
              <span>About {doctor.name}</span>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Hospital Department timings */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Landmark className="h-4 w-4 text-medical-500" />
              <span>OPD Timings & Department</span>
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex justify-between text-xs text-slate-600 dark:text-slate-350">
              <div>
                <span className="block text-slate-400 font-bold uppercase tracking-wider">Department</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 block">{doctor.specialization} Medicine</span>
              </div>
              <div className="text-right">
                <span className="block text-slate-400 font-bold uppercase tracking-wider">Clinic Timing</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 block">09:00 AM - 05:00 PM</span>
              </div>
            </div>
          </div>

          {/* Time Slots Selection */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="h-4 w-4 text-medical-500" />
              <span>Available Time Slots</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.slots.map((slot, index) => (
                <span
                  key={index}
                  className="px-3.5 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-150 dark:border-slate-800 flex gap-4 mt-auto">
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-250 dark:border-slate-800 font-bold text-sm rounded-2xl hover:bg-slate-50 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => {
              onBookAppointment(doctor);
              onClose();
            }}
            className="flex-1 py-4 bg-medical-primary dark:bg-medical-500 hover:bg-medical-primaryDark dark:hover:bg-medical-600 text-white font-bold text-sm rounded-2xl shadow-xl shadow-medical-500/10 transition-colors"
          >
            Proceed to Book
          </button>
        </div>

      </div>
    </div>
  );
}
