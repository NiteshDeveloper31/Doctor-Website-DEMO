import React from 'react';
import { Check, Calendar, Clock, User, UserCheck, X } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose, appointmentDetails, scrollToSection }) {
  if (!isOpen || !appointmentDetails) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative glass-panel w-full max-w-md rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-250 text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-white rounded-full transition-colors"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Success Icon Animation */}
        <div className="mx-auto h-20 w-20 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250/50 rounded-full flex items-center justify-center success-ring">
          <Check className="h-10 w-10 text-emerald-500 stroke-[3]" />
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Appointment Requested!
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Your booking request has been registered under ticket ID
            <span className="font-mono font-bold text-slate-800 dark:text-slate-200 block text-sm mt-1 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg w-fit mx-auto">
              {appointmentDetails.id || "APT-XXXX"}
            </span>
          </p>
        </div>

        {/* Booking summary info */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-250/50 dark:border-slate-800/50 rounded-2xl p-4.5 text-left text-xs space-y-3.5">
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-slate-400" />
            <div>
              <span className="block text-[10px] text-slate-400 font-bold uppercase leading-none">Patient Name</span>
              <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">{appointmentDetails.patientName}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <UserCheck className="h-4 w-4 text-slate-400" />
            <div>
              <span className="block text-[10px] text-slate-400 font-bold uppercase leading-none">Consultant Doctor</span>
              <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">{appointmentDetails.doctorName} ({appointmentDetails.specialization})</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1.5 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase leading-none">Date</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">{appointmentDetails.date}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-slate-400" />
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase leading-none">Slot</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-200 mt-0.5 inline-block">{appointmentDetails.timeSlot}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-450 border border-amber-100 dark:border-amber-900/50 text-[11px] font-semibold rounded-xl text-left">
          ⚠️ Note: A SMS & WhatsApp confirmation containing the consultation link will be dispatched shortly to {appointmentDetails.phone}.
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 border border-slate-200 dark:border-slate-800 font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors"
          >
            Close Dialog
          </button>
          
          <button
            onClick={() => {
              scrollToSection('dashboard');
              onClose();
            }}
            className="flex-1 py-3 bg-medical-primary dark:bg-medical-500 hover:bg-medical-primaryDark dark:hover:bg-medical-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            View Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
