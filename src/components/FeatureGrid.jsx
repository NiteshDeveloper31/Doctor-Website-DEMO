import React from 'react';
import { Microscope, HeartPulse, ShieldAlert, CalendarClock } from 'lucide-react';

export default function FeatureGrid() {
  const services = [
    {
      title: "Visual Diagnostics",
      description: "State-of-the-art diagnostic imaging, high-resolution scans, and rapid lab test processing.",
      icon: Microscope,
    },
    {
      title: "Specialist Consults",
      description: "Direct consultations with board-accredited doctors across all medical departments.",
      icon: HeartPulse,
    },
    {
      title: "Emergency Care",
      description: "Dedicated 24/7 trauma care, quick ambulance response, and immediate critical attention.",
      icon: ShieldAlert,
    },
    {
      title: "Easy Scheduling",
      description: "Fast digital appointment bookings, online calendar schedules, and slot reminders.",
      icon: CalendarClock,
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Grid (4 Column blocks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-cyan-brand text-white p-8 border border-cyan-400/20 shadow-sm hover:scale-[1.02] transition-transform duration-250 flex flex-col justify-between items-center text-center space-y-4"
              >
                {/* White Outlined Icon */}
                <div className="p-3 border-2 border-white rounded-full">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-xs text-cyan-50 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <hr className="w-16 border-white/40" />
                
                {/* Learn More Link */}
                <button className="text-[10px] font-black uppercase tracking-widest hover:underline hover:text-cyan-100 cursor-pointer">
                  LEARN MORE
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
