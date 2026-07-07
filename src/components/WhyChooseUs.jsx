import React from 'react';
import { ShieldCheck, Truck, Users, Award, Star, Quote } from 'lucide-react';

const stats = [
  { value: "150K+", label: "Happy Patients" },
  { value: "50+", label: "Accredited Doctors" },
  { value: "15+", label: "Specialties" },
  { value: "24/7", label: "Ambulance Fleet" }
];

const advantages = [
  {
    title: "NABH Accredited Standards",
    description: "Aarogya Life Hospital complies with national healthcare quality standards, ensuring safe procedures and patient safety protocols.",
    icon: Award,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20"
  },
  {
    title: "15-Min Cardiac Response",
    description: "Our advanced cardiac ambulances are strategically deployed across Noida to provide instant response and emergency operations.",
    icon: Truck,
    color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20"
  },
  {
    title: "State-of-the-Art Labs",
    description: "Equipped with 3-Tesla MRI machines, 128-slice CT scanners, and fully automated diagnostic pathology analyzers.",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    title: "Accredited Specialists",
    description: "Our consultants have training from top-tier institutes like AIIMS, PGIMER, and NIMHANS to deliver accurate diagnostics.",
    icon: Users,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
  }
];

const reviews = [
  {
    name: "Arjun Verma",
    disease: "Cardiology Patient",
    content: "The cardiac response team at Aarogya Life saved my father's life during a sudden chest pain emergency. Dr. Rajesh Kumar is extremely skilled and compassionate.",
    rating: 5
  },
  {
    name: "Meera Nair",
    disease: "Pediatric Consultation",
    content: "Dr. Rohit Pawar is very friendly with kids. He made the vaccination process so easy for my 18-month-old child. The clean facilities are highly recommended.",
    rating: 5
  },
  {
    name: "Devendra Singh",
    disease: "Orthopedic Surgery",
    content: "I had my knee replacement surgery under Dr. Amit Patel. The post-op recovery planning and physiotherapy team helped me walk comfortably within weeks.",
    rating: 5
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Stats Counter Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 flex flex-col justify-center items-center">
              <span className="text-3xl md:text-4xl font-black text-cyan-brand dark:text-cyan-400 tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest block pt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Core Advantages Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              CLINICAL EXCELLENCE
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider leading-tight">
              Why Choose Aarogya Life Hospital?
            </h3>
            <div className="h-1 w-16 bg-cyan-brand"></div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium pt-1">
              We bring together India's top medical practitioners, advanced diagnostics, and compassionate clinical care protocols to serve our patients round-the-clock.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => {
              const IconComp = adv.icon;
              return (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-2.5 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center ${adv.color}`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider leading-none">
                      {adv.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {adv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. Patient Testimonials Slider */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              PATIENT FEEDBACK
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Real Recovery Testimonials
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-250/60 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-6 relative group hover:border-cyan-brand/20 dark:hover:border-cyan-brand/20 transition-all duration-300">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-slate-100 dark:text-slate-800/60 pointer-events-none" />
                
                <div className="space-y-3 z-10">
                  {/* Stars Row */}
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-350 italic font-semibold leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-white block">
                      {rev.name}
                    </span>
                    <span className="text-[9px] font-bold text-cyan-brand dark:text-cyan-400 uppercase tracking-wider block">
                      {rev.disease}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
