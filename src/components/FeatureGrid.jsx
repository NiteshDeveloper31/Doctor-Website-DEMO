import React from 'react';
import { Scan, ScanLine, BedDouble, Ambulance, Pill, FlaskConical } from 'lucide-react';

export default function FeatureGrid() {
  const facilities = [
    {
      title: "MRI Imaging",
      description: "3-Tesla MRI machines delivering high-resolution scans for accurate, fast diagnosis.",
      icon: Scan,
    },
    {
      title: "CT Scan",
      description: "128-slice CT scanners for rapid, detailed cross-sectional imaging across departments.",
      icon: ScanLine,
    },
    {
      title: "ICU",
      description: "40+ critical care beds with continuous monitoring and round-the-clock intensivists.",
      icon: BedDouble,
    },
    {
      title: "Ambulance",
      description: "A dedicated 24/7 ambulance fleet with rapid emergency response across Noida.",
      icon: Ambulance,
    },
    {
      title: "Pharmacy",
      description: "An in-house 24/7 pharmacy stocked with genuine medicines at hospital rates.",
      icon: Pill,
    },
    {
      title: "Diagnostic Lab",
      description: "NABL accredited pathology lab delivering verified reports in under 4 hours.",
      icon: FlaskConical,
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
            OUR FACILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            Built For Every Stage Of Care
          </h2>
          <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="bg-cyan-brand text-white p-6 rounded-2xl border border-cyan-400/20 shadow-sm hover:scale-[1.02] transition-transform duration-250 flex flex-col items-center text-center space-y-3"
              >
                {/* White Outlined Icon */}
                <div className="p-3 border-2 border-white rounded-full">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xs font-black uppercase tracking-wider">
                    {facility.title}
                  </h3>
                  <p className="text-[10px] text-cyan-50 font-medium leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
