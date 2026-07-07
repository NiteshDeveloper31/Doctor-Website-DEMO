import React, { useState, useEffect } from 'react';
import { BedDouble, Siren, Users, Building2, CalendarClock, Cpu, Ambulance, Wallet, HeartPulse, ShieldCheck, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  { value: "300+", label: "Beds", icon: BedDouble },
  { value: "40+", label: "ICU Beds", icon: Siren },
  { value: "50+", label: "Accredited Doctors", icon: Users },
  { value: "12", label: "Operation Theatres", icon: Building2 },
  { value: "15+", label: "Years of Service", icon: CalendarClock },
];

const advantages = [
  {
    title: "Experienced Doctors",
    description: "50+ consultants trained at AIIMS, PGIMER, and NIMHANS across 17 clinical departments.",
    icon: Users,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "Modern Equipment",
    description: "3-Tesla MRI, 128-slice CT scanners, and fully automated pathology diagnostics on campus.",
    icon: Cpu,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/20"
  },
  {
    title: "24/7 Emergency",
    description: "Round-the-clock emergency and trauma care backed by a dedicated ambulance fleet across Noida.",
    icon: Ambulance,
    color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20"
  },
  {
    title: "Affordable Cost",
    description: "Transparent OPD fees, cashless insurance support, and subsidized wellness packages for every family.",
    icon: Wallet,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    title: "Advanced ICU",
    description: "40+ critical care beds with continuous monitoring, ventilator support, and round-the-clock intensivists.",
    icon: HeartPulse,
    color: "text-red-500 bg-red-50 dark:bg-red-950/20"
  },
  {
    title: "Trusted Care",
    description: "NABH and NABL accredited protocols ensuring safety, hygiene, and consistent quality of treatment.",
    icon: ShieldCheck,
    color: "text-amber-500 bg-amber-50 dark:bg-amber-950/20"
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
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goNext = () => setActiveReview((prev) => (prev + 1) % reviews.length);
  const current = reviews[activeReview];

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. Stats Counter Section (5 boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="glass-panel p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 flex flex-col justify-center items-center">
                <StatIcon className="h-5 w-5 text-cyan-brand dark:text-cyan-400 mb-2" />
                <span className="text-2xl md:text-3xl font-black text-cyan-brand dark:text-cyan-400 tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest block pt-1.5">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* 2. Core Advantages Layout (6 boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-4 space-y-4">
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

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* 3. Patient Testimonials Carousel */}
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

          <div className="max-w-2xl mx-auto relative">
            <div className="bg-white dark:bg-slate-900 border border-slate-250/60 dark:border-slate-800/80 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-5 relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-slate-100 dark:text-slate-800/60 pointer-events-none" />

              <div className="flex gap-0.5 text-amber-500">
                {[...Array(current.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-350 italic font-semibold leading-relaxed max-w-lg">
                "{current.content}"
              </p>
              <div>
                <span className="text-sm font-black text-slate-800 dark:text-white block">
                  {current.name}
                </span>
                <span className="text-[10px] font-bold text-cyan-brand dark:text-cyan-400 uppercase tracking-wider block">
                  {current.disease}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-brand text-slate-600 dark:text-slate-300 rounded-full shadow transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-brand text-slate-600 dark:text-slate-300 rounded-full shadow transition-colors cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${index === activeReview ? 'w-6 bg-cyan-brand' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
