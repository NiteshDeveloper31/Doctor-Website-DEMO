import React, { useState, useEffect } from 'react';
import hospitalHero from '../assets/surgeon_hero.jpg';

export default function Hero({ doctors = [], selectedDoctor, setSelectedDoctor, onBookingSubmit }) {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    email: '',
    phone: '',
    date: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Sync selected doctor from cards/modal
  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctorId: selectedDoctor.id
      }));
    }
  }, [selectedDoctor]);

  const activeDoctor = doctors.find(doc => doc.id === parseInt(formData.doctorId));

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.doctorId) newErrors.doctorId = "Select doctor.";
    if (!formData.patientName.trim()) newErrors.patientName = "Name required.";
    
    if (!formData.email.trim()) {
      // Auto-fill email for demo requirements
      formData.email = `${formData.patientName.toLowerCase().replace(/\s+/g, '') || 'patient'}@example.com`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "10-digit Indian phone.";
    }

    if (!formData.date) {
      newErrors.date = "Select date.";
    } else {
      const selected = new Date(formData.date);
      const today = new Date(getTodayDateString());
      if (selected < today) newErrors.date = "No past dates.";
    }

    if (!formData.reason.trim()) newErrors.reason = "Reason required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onBookingSubmit({
        ...formData,
        doctorName: activeDoctor.name,
        specialization: activeDoctor.specialization
      });
      // Reset form
      setFormData({
        doctorId: '',
        patientName: '',
        email: '',
        phone: '',
        date: '',
        reason: ''
      });
      setSelectedDoctor(null);
    }, 1200);
  };

  return (
    <section id="home" className="w-full relative bg-slate-50 dark:bg-slate-955 pb-20">
      
      {/* 1. Full-Width Surgeon Banner Image */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        {/* Background Image */}
        <img
          src={hospitalHero}
          alt="Medico Hospital Building"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        {/* Light/Dark horizontal gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-gradient-to-r from-slate-50/85 via-slate-50/40 to-transparent dark:from-slate-900/85 dark:via-slate-900/40 dark:to-transparent"></div>

        {/* Text Overlays */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start gap-2.5 z-10 pb-16">
          
          <span className="text-[10px] font-bold text-cyan-brand dark:text-cyan-400 uppercase tracking-widest leading-none">
            EXCELLENCE IN CARE & HEALING
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-black text-[#132d43] dark:text-white leading-tight max-w-xl">
            ADVANCED HEALTHCARE AND COMPASSIONATE TREATMENT.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-lg font-medium">
            Empowering Lives Through Latest Medical Expertise and Personalized Care.
          </p>

        </div>
      </div>

      {/* 2. Floating white booking card overlay (Clean 3x2 Grid) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-20">
        <div 
          id="booking" 
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.35)] border border-slate-100 dark:border-slate-800 p-5 md:p-7 scroll-mt-24"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            
            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 items-end">
              
              {/* Row 1, Col 1: Choose Doctor */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Choose Doctor</label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={(e) => {
                    handleInputChange(e);
                    const selected = doctors.find(doc => doc.id === parseInt(e.target.value));
                    setSelectedDoctor(selected || null);
                  }}
                  className={`w-full h-11 px-3.5 bg-white dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.doctorId ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <option value="">Choose Doctor</option>
                  {doctors.map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 1, Col 2: Patient Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Patient Full Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Patient Full Name"
                  className={`w-full h-11 px-3.5 bg-white dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.patientName ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
              </div>

              {/* Row 1, Col 3: Phone Number */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  maxLength={10}
                  className={`w-full h-11 px-3.5 bg-white dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
              </div>

              {/* Row 2, Col 1: Select Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Select Date</label>
                <input
                  type="date"
                  name="date"
                  min={getTodayDateString()}
                  value={formData.date}
                  onChange={handleInputChange}
                  className={`w-full h-11 px-3.5 bg-white dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.date ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
              </div>

              {/* Row 2, Col 2: Reason for Booking */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Reason for Booking</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Reason for Booking"
                  className={`w-full h-11 px-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.reason ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
              </div>

              {/* Row 2, Col 3: MAKE AN APPOINTMENT Submit Button */}
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-gradient-to-r from-cyan-brand to-[#0097a7] hover:from-cyan-600 hover:to-[#00838f] text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-500/10 active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      {/* Clinical Calendar Icon */}
                      <svg className="w-4 h-4 opacity-95" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                      <span>MAKE AN APPOINTMENT</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Error logs */}
            {(errors.doctorId || errors.patientName || errors.phone || errors.date || errors.reason) && (
              <div className="text-[9px] font-bold text-rose-500 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                {errors.doctorId && <span>* {errors.doctorId}</span>}
                {errors.patientName && <span>* {errors.patientName}</span>}
                {errors.phone && <span>* {errors.phone}</span>}
                {errors.date && <span>* {errors.date}</span>}
                {errors.reason && <span>* {errors.reason}</span>}
              </div>
            )}

          </form>
        </div>
      </div>
      
    </section>
  );
}
