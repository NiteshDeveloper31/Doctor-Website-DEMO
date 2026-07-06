import React, { useState } from 'react';
import { CalendarDays, Clock, User, Phone, Trash2, CheckCircle2, AlertTriangle, XCircle, Search } from 'lucide-react';

export default function AppointmentList({ appointments = [], onCancelAppointment, onConfirmAppointment }) {
  const [filterQuery, setFilterQuery] = useState("");

  const filteredApts = appointments.filter(apt => 
    apt.patientName.toLowerCase().includes(filterQuery.toLowerCase()) ||
    apt.doctorName.toLowerCase().includes(filterQuery.toLowerCase()) ||
    apt.id.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50';
      case 'Cancelled':
        return 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50';
      case 'Pending':
      default:
        return 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed':
        return <CheckCircle2 className="h-3.5 w-3.5" />;
      case 'Cancelled':
        return <XCircle className="h-3.5 w-3.5" />;
      case 'Pending':
      default:
        return <AlertTriangle className="h-3.5 w-3.5" />;
    }
  };

  return (
    <div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-slate-205/50 dark:border-slate-800/50 shadow-xl space-y-6">
      
      {/* List Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Scheduled Appointments Log
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Displaying live registrations registered in system memory.
          </p>
        </div>

        {/* Filter Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Filter by patient, doctor..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-medical-500 focus:outline-none text-xs text-slate-800 dark:text-slate-200"
          />
        </div>
      </div>

      {/* List Data */}
      {filteredApts.length === 0 ? (
        <div className="text-center py-12 bg-slate-50/50 dark:bg-slate-900/10 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl space-y-4">
          <CalendarDays className="h-12 w-12 text-slate-350 dark:text-slate-600 mx-auto animate-pulse" />
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              No Appointments Found
            </p>
            <p className="text-xs text-slate-400">
              Try adjusting filters or submit a booking above to add new records.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredApts.map((apt) => (
            <div 
              key={apt.id} 
              className={`p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                apt.status === 'Cancelled'
                  ? 'bg-slate-100/30 dark:bg-slate-900/10 border-slate-150 dark:border-slate-900'
                  : 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 hover:shadow-md'
              }`}
            >
              
              {/* Ticket ID & Badge row */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono font-bold text-[11px] text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                  {apt.id}
                </span>
                
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${getStatusBadgeClass(apt.status)}`}>
                  {getStatusIcon(apt.status)}
                  <span>{apt.status}</span>
                </span>
              </div>

              {/* Booking Body Details */}
              <div className="space-y-3 mb-4">
                
                {/* Patient Name */}
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-slate-50 dark:bg-slate-850 rounded-lg text-slate-400">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase leading-none">Patient Name</span>
                    <span className={`text-sm font-bold mt-0.5 inline-block ${apt.status === 'Cancelled' ? 'line-through text-slate-400' : 'text-slate-850 dark:text-slate-100'}`}>
                      {apt.patientName}
                    </span>
                  </div>
                </div>

                {/* Doctor Consult Details */}
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-slate-50 dark:bg-slate-850 rounded-lg text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5 text-medical-500" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-slate-400 font-bold uppercase leading-none">Consultation Doctor</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-350">
                      {apt.doctorName} <span className="text-slate-400 text-[10px]">({apt.specialization})</span>
                    </span>
                  </div>
                </div>

                {/* Date & Time slots */}
                <div className="grid grid-cols-2 gap-4 pt-1.5 border-t border-slate-100 dark:border-slate-850/60">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase leading-none">Date</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{apt.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase leading-none">Time Slot</span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{apt.timeSlot}</span>
                    </div>
                  </div>
                </div>

                {/* Reason description */}
                <div className="p-2.5 bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-slate-900 rounded-xl">
                  <span className="block text-[8px] text-slate-400 font-bold uppercase leading-none">Reason for visit</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal italic">
                    "{apt.reason}"
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              {apt.status !== 'Cancelled' && (
                <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-850/60 mt-auto">
                  {apt.status === 'Pending' && (
                    <button
                      onClick={() => onConfirmAppointment(apt.id)}
                      className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Confirm</span>
                    </button>
                  )}
                  <button
                    onClick={() => onCancelAppointment(apt.id)}
                    className="flex-1 py-2 bg-slate-100 hover:bg-rose-50 dark:bg-slate-850 dark:hover:bg-rose-950/20 text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Cancel Appointment</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
