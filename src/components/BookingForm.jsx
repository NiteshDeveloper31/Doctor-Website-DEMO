import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, Clock, Edit3, Shield, Info, Loader2 } from 'lucide-react';

export default function BookingForm({ doctors = [], selectedDoctor, setSelectedDoctor, onBookingSubmit }) {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // If a doctor is pre-selected (e.g. from the Doctor Card CTA), pre-fill the form
  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctorId: selectedDoctor.id,
        timeSlot: '' // reset slot when doctor changes
      }));
    }
  }, [selectedDoctor]);

  const activeDoctor = doctors.find(doc => doc.id === parseInt(formData.doctorId));

  // Get today's date in YYYY-MM-DD for min validation
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as the user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const selectTimeSlot = (slot) => {
    setFormData(prev => ({ ...prev, timeSlot: slot }));
    if (errors.timeSlot) {
      setErrors(prev => ({ ...prev, timeSlot: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.doctorId) newErrors.doctorId = "Please select a consultant doctor.";
    if (!formData.patientName.trim()) newErrors.patientName = "Patient name is required.";
    
    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone Validation (Indian 10-digit format starting with 6-9)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number (starts with 6-9).";
    }

    // Date Validation
    if (!formData.date) {
      newErrors.date = "Please choose an appointment date.";
    } else {
      const selected = new Date(formData.date);
      const today = new Date(getTodayDateString());
      if (selected < today) {
        newErrors.date = "Appointment date cannot be in the past.";
      }
    }

    // Slot Validation
    if (!formData.timeSlot) newErrors.timeSlot = "Please pick a preferred time slot.";
    
    if (!formData.reason.trim()) newErrors.reason = "Please enter the reason for your visit.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate network latency (1.5 seconds) for premium client-demo feel
    setTimeout(() => {
      setIsLoading(false);
      onBookingSubmit({
        ...formData,
        doctorName: activeDoctor.name,
        specialization: activeDoctor.specialization
      });
      // Clear form
      setFormData({
        doctorId: '',
        patientName: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: '',
        reason: ''
      });
      setSelectedDoctor(null);
    }, 1500);
  };

  return (
    <section id="booking" className="py-16 relative">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-emerald-100 dark:bg-emerald-950/15 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/50 shadow-2xl relative">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Request An Appointment
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fill out the medical booking request below. Our desk will confirm your schedule within 1 hour.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Doctor Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Select Specialist Doctor *
              </label>
              <div className="relative">
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={(e) => {
                    handleInputChange(e);
                    const selected = doctors.find(doc => doc.id === parseInt(e.target.value));
                    setSelectedDoctor(selected || null);
                  }}
                  className={`w-full glass-input appearance-none py-3.5 ${
                    errors.doctorId ? "border-rose-500 dark:border-rose-800 focus:ring-rose-500" : ""
                  }`}
                >
                  <option value="">-- Choose Speciality & Consultant Doctor --</option>
                  {doctors.map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} ({doc.specialization} - {doc.experience} Yrs Exp) - ₹{doc.fee}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  ▼
                </div>
              </div>
              {errors.doctorId && (
                <span className="text-xs font-semibold text-rose-500 mt-1">{errors.doctorId}</span>
              )}

              {/* Dynamic Doctor Preview Card */}
              {activeDoctor && (
                <div className="mt-3 flex items-center gap-3 p-3 bg-medical-50 dark:bg-medical-950/20 border border-medical-100 dark:border-medical-900/40 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <img
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    className="h-12 w-12 object-cover rounded-xl shadow-sm"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      {activeDoctor.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase mt-0.5">
                      {activeDoctor.specialization} • OPD OPD Consultation Fee: ₹{activeDoctor.fee}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Row 2: Patient Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="Arjun Verma"
                    className={`w-full pl-12 glass-input ${
                      errors.patientName ? "border-rose-500 dark:border-rose-800" : ""
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <span className="text-xs font-semibold text-rose-500">{errors.patientName}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="arjun.verma@example.com"
                    className={`w-full pl-12 glass-input ${
                      errors.email ? "border-rose-500 dark:border-rose-800" : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className="text-xs font-semibold text-rose-500">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Row 3: Phone & Appointment Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Contact Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength={10}
                    className={`w-full pl-12 glass-input ${
                      errors.phone ? "border-rose-500 dark:border-rose-800" : ""
                    }`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-xs font-semibold text-rose-500">{errors.phone}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Appointment Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    min={getTodayDateString()}
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full pl-12 glass-input select-none ${
                      errors.date ? "border-rose-500 dark:border-rose-800" : ""
                    }`}
                  />
                </div>
                {errors.date && (
                  <span className="text-xs font-semibold text-rose-500">{errors.date}</span>
                )}
              </div>
            </div>

            {/* Row 4: Time Slot Selection (Interactive slots loaded dynamically based on doctor selection) */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Preferred Time Slot *</span>
              </label>
              
              {activeDoctor ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 pt-1.5">
                  {activeDoctor.slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => selectTimeSlot(slot)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                        formData.timeSlot === slot
                          ? "bg-medical-primary dark:bg-medical-500 text-white border-medical-500 shadow-md shadow-medical-500/10"
                          : "bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-350 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-350"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-250/50 dark:border-slate-800/50 rounded-2xl flex items-center gap-2.5 text-xs text-slate-400 dark:text-slate-500 font-semibold">
                  <Info className="h-4.5 w-4.5" />
                  <span>Choose a doctor above to inspect available OPD schedules.</span>
                </div>
              )}
              {errors.timeSlot && (
                <span className="text-xs font-semibold text-rose-500 mt-1">{errors.timeSlot}</span>
              )}
            </div>

            {/* Row 5: Reason for Visit */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Edit3 className="h-4 w-4" />
                <span>Reason for Visit / Main Symptoms *</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={3}
                placeholder="Mention key complaints e.g., Chest discomfort, general checkup, childhood vaccination schedules..."
                className={`w-full glass-input resize-none py-3.5 ${
                  errors.reason ? "border-rose-500 dark:border-rose-800" : ""
                }`}
              />
              {errors.reason && (
                <span className="text-xs font-semibold text-rose-500">{errors.reason}</span>
              )}
            </div>

            {/* Emergency & Safe badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 text-xs">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-450 font-medium">
                <Shield className="h-4 w-4 text-medical-500" />
                <span>All patient records are highly encrypted and HIPAA compliant.</span>
              </div>
              <div className="text-slate-400">
                Fields marked with (*) are required.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4.5 bg-medical-primary hover:bg-medical-primaryDark dark:bg-medical-500 dark:hover:bg-medical-600 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-medical-500/10 hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:opacity-75 transition-all duration-200 flex items-center justify-center gap-3 relative cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Requesting Appointment Slot...</span>
                </>
              ) : (
                <span>Confirm & Request Booking</span>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
