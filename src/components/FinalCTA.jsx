import React from 'react';
import { CalendarPlus, PhoneCall } from 'lucide-react';

export default function FinalCTA({ scrollToSection }) {
  return (
    <section className="bg-gradient-to-r from-cyan-brand to-[#0097a7] py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
            Book Your Appointment Today
          </h2>
          <p className="text-sm text-cyan-50 font-medium max-w-xl">
            Skip the waiting room. Schedule your consultation online in under two minutes and get confirmed instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={() => scrollToSection('booking')}
            className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-cyan-50 text-cyan-700 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            <CalendarPlus className="h-4 w-4" />
            <span>Book Appointment</span>
          </button>
          <a
            href="tel:+919999999911"
            className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Emergency Line</span>
          </a>
        </div>
      </div>
    </section>
  );
}
