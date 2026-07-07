import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Award, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const contactDetails = [
    {
      title: "Hospital Address",
      info: "Aarogya Life Campus, Block B, Sector 62, Noida, Uttar Pradesh - 201301, India",
      icon: MapPin,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
    },
    {
      title: "Emergency Care (24/7)",
      info: "+91 999 999 9911 / +91 120 4455 6677",
      icon: ShieldAlert,
      color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20"
    },
    {
      title: "General OPD Enquiries",
      info: "1800-200-6000 (Toll-Free Helpline)",
      icon: Phone,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      title: "Support & Records",
      info: "opd.support@aarogyalife.in / records@aarogyalife.in",
      icon: Mail,
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  return (
    <section id="contact" className="py-12 relative">
      {/* Decorative Orbs */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-medical-50 dark:bg-medical-950/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className={`p-3 rounded-xl w-fit ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-4 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                      {item.info}
                    </p>
                  </div>
                  
                  {item.title.includes("Address") && (
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-1.5 text-[10px] font-extrabold text-medical-primary dark:text-medical-400 hover:underline uppercase tracking-wider"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              );
            })}

            {/* Operating Hours card */}
            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl border border-slate-205/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-500 rounded-xl">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    General OPD Hours
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Monday to Saturday OPD runs daily.
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="block text-xs font-extrabold text-slate-800 dark:text-slate-200">08:00 AM - 08:00 PM</span>
                <span className="text-[10px] text-rose-500 font-bold block mt-0.5">Emergency Trauma Desk: 24/7 Active</span>
              </div>
            </div>
          </div>

          {/* Right Simulated Map Frame */}
          <div className="lg:col-span-6 glass-panel p-4 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg flex flex-col min-h-[18rem]">
            {/* Title */}
            <div className="flex justify-between items-center px-2 pb-3 mb-2 border-b border-slate-100 dark:border-slate-850">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Award className="h-4.5 w-4.5 text-medical-500" />
                <span>Aarogya Life Campus Guide</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            {/* Visual map placeholder with medical styling */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 flex items-center justify-center p-6 text-center">
              {/* Abstract Blueprint Grid */}
              <div className="absolute inset-0 opacity-15 dark:opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="space-y-4 max-w-sm z-10">
                <div className="p-4.5 bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800 w-fit mx-auto animate-float">
                  <MapPin className="h-8 w-8 text-medical-primary dark:text-medical-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    Sector 62 Metro Station Near
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our hospital campus is located just 500 meters from Noida Sector 62 metro station (Blue Line).
                  </p>
                </div>
                
                {/* Simulated Map Markers */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-450 rounded-lg text-[10px] font-bold border border-blue-150">
                    🚗 Visitor Parking
                  </span>
                  <span className="px-2.5 py-1 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 rounded-lg text-[10px] font-bold border border-rose-150">
                    🏥 Trauma Gate
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
