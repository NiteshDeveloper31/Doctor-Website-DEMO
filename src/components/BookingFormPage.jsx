import React, { useState, useEffect } from 'react';
import { Calendar, ShieldAlert, FileText, Clock, CreditCard, Video, User, Phone, Upload, CheckCircle } from 'lucide-react';

export default function BookingFormPage({ doctors = [], selectedDoctor, setSelectedDoctor, onBookingSubmit }) {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientName: '',
    email: '',
    phone: '',
    date: '',
    reason: '',
    consultationMode: 'In-Person', // In-Person vs Video
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Prescription Scanner OCR states
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanMessage, setScanMessage] = useState('');
  const [scanSuccess, setScanSuccess] = useState(false);

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

  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const handlePrescriptionScan = () => {
    setIsScanning(true);
    setScanProgress(10);
    setScanMessage('Connecting to Aarogya OCR Cloud...');

    setTimeout(() => {
      setScanProgress(35);
      setScanMessage('Uploading prescription file structure...');
    }, 700);

    setTimeout(() => {
      setScanProgress(60);
      setScanMessage('Extracting handwritten patient profiles & clinic details...');
    }, 1400);

    setTimeout(() => {
      setScanProgress(85);
      setScanMessage('Matching recommended Orthopedic consultant (Dr. Rohit Pawar)...');
    }, 2100);

    setTimeout(() => {
      setScanProgress(100);
      setScanMessage('Form populated successfully!');
      
      setFormData(prev => ({
        ...prev,
        patientName: 'Rohan Verma',
        phone: '9876543210',
        email: 'rohan.verma@gmail.com',
        doctorId: '2', // Dr. Rohit Pawar (Orthopedics)
        reason: 'Severe chronic knee pain and joint stiffness advised for immediate orthopedic clinical review.',
        date: getTomorrowDateString(),
        fileName: 'prescription_noida_verma.jpg'
      }));

      // Automatically sync the doctor selection callback
      const orthodoc = doctors.find(doc => doc.id === 2);
      if (orthodoc && setSelectedDoctor) {
        setSelectedDoctor(orthodoc);
      }

      setScanSuccess(true);
    }, 2800);

    setTimeout(() => {
      setIsScanning(false);
      setScanSuccess(false);
    }, 4500);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.doctorId) newErrors.doctorId = "Select doctor.";
    if (!formData.patientName.trim()) newErrors.patientName = "Name required.";
    
    if (!formData.email.trim()) {
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
        reason: '',
        consultationMode: 'In-Person',
        fileName: ''
      });
      setSelectedDoctor(null);
    }, 1200);
  };

  const faqData = [
    {
      q: "What are the general consultation fees?",
      a: "General OPD fees vary from ₹600 to ₹1000 depending on the specialist. This fee is payable at the desk prior to consultation."
    },
    {
      q: "Can I reschedule or cancel my booking?",
      a: "Yes, appointments can be rescheduled or cancelled up to 2 hours before the slot via SMS/WhatsApp confirmation links."
    },
    {
      q: "Is insurance accepted for OPD visits?",
      a: "Yes, we accept major corporate insurance policies and TPA plans. Please visit our TPA assistance desk on the ground floor."
    }
  ];

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-955 transition-colors duration-300 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Detailed Booking Form (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
            
            {/* Prescription Scanning Overlay */}
            {isScanning && (
              <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xs z-30 flex flex-col items-center justify-center text-center p-6 space-y-4">
                <style>{`
                  @keyframes scan-beam {
                    0% { top: 0%; opacity: 0.8; }
                    50% { top: 100%; opacity: 1; }
                    100% { top: 0%; opacity: 0.8; }
                  }
                `}</style>
                <div 
                  className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-brand to-transparent shadow-[0_0_12px_#00bcd4]" 
                  style={{
                    animation: 'scan-beam 2.2s ease-in-out infinite',
                  }}
                ></div>

                <div className="p-4 bg-cyan-950/40 border border-cyan-800/40 rounded-full text-cyan-brand animate-pulse">
                  <Upload className="h-8 w-8" />
                </div>

                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  Prescription OCR Scanner Active
                </h3>

                <div className="w-56 bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
                  <div 
                    className="bg-cyan-brand h-full transition-all duration-300 shadow-[0_0_8px_#00bcd4]" 
                    style={{ width: `${scanProgress}%` }}
                  ></div>
                </div>

                <span className="text-[10px] font-bold text-cyan-455 uppercase tracking-widest block max-w-xs leading-relaxed">
                  {scanMessage}
                </span>

                {scanSuccess && (
                  <div className="p-2 bg-emerald-950/40 border border-emerald-800/40 rounded-lg text-emerald-450 text-[9px] font-bold uppercase tracking-wider">
                    Success! Checkup data parsed & populated.
                  </div>
                )}
              </div>
            )}

            {/* OCR Auto-Fill banner */}
            <div className="mb-5 p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-150/80 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
                  ⚡ Smart Registration
                </span>
                <p className="text-[9.5px] text-slate-500 dark:text-slate-400 font-semibold leading-tight">
                  Have a doctor's prescription? Auto-fill the entire booking form in one click.
                </p>
              </div>
              <button
                type="button"
                onClick={handlePrescriptionScan}
                className="px-3 py-2 bg-gradient-to-r from-cyan-brand to-[#0097a7] hover:from-cyan-600 hover:to-[#00838f] text-white font-extrabold text-[9px] uppercase tracking-widest rounded-lg transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                Scan Prescription
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Section: consultation Mode selection */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Select Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Option 1: In-person */}
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, consultationMode: 'In-Person' }))}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                      formData.consultationMode === 'In-Person'
                        ? 'bg-cyan-brand border-cyan-brand text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <User className="h-4.5 w-4.5" />
                    <span>In-Person Visit</span>
                  </button>

                  {/* Option 2: Telehealth */}
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, consultationMode: 'Telehealth' }))}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                      formData.consultationMode === 'Telehealth'
                        ? 'bg-cyan-brand border-cyan-brand text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <Video className="h-4.5 w-4.5" />
                    <span>Video Consult</span>
                  </button>

                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Field: Choose Doctor */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Choose Doctor</label>
                  <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={(e) => {
                      handleInputChange(e);
                      const selected = doctors.find(doc => doc.id === parseInt(e.target.value));
                      setSelectedDoctor(selected || null);
                    }}
                    className={`w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                      errors.doctorId ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <option value="">Choose Doctor</option>
                    {doctors.map(doc => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.specialization})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field: Patient Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Patient Full Name</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="Patient Full Name"
                    className={`w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                      errors.patientName ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                </div>

                {/* Field: Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    maxLength={10}
                    className={`w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                      errors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                </div>

                {/* Field: Select Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Select Date</label>
                  <input
                    type="date"
                    name="date"
                    min={getTodayDateString()}
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                      errors.date ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                </div>

              </div>

              {/* Field: Reason for Booking */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Reason for Booking</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="e.g., Monthly checkup, sudden joint pain, prescription renewal"
                  className={`w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all ${
                    errors.reason ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                  }`}
                />
              </div>

              {/* Field: Upload reports (Simulated) */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Upload Clinical Records / Prescriptions (Optional)
                </label>
                <div className="border border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-900/60 flex flex-col items-center justify-center text-center relative group hover:border-cyan-brand/40 dark:hover:border-cyan-brand/40 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="h-5 w-5 text-slate-450 group-hover:text-cyan-brand transition-colors mb-1.5" />
                  
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    {formData.fileName ? formData.fileName : "Select PDF or Image file"}
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest pt-0.5">
                    Max size: 5MB (Simulated)
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-cyan-brand to-[#0097a7] hover:from-cyan-600 hover:to-[#00838f] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-cyan-500/10 active:scale-[0.99] transition-all cursor-pointer"
              >
                {isLoading ? (
                  <span>Processing Appointment...</span>
                ) : (
                  <>
                    <CheckCircle className="h-4.5 w-4.5 opacity-90" />
                    <span>CONFIRM APPOINTMENT BOOKING</span>
                  </>
                )}
              </button>

              {/* Errors Display */}
              {Object.keys(errors).length > 0 && (
                <div className="text-[9px] font-bold text-rose-500 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                  {Object.keys(errors).map(key => (
                    <span key={key}>* {errors[key]}</span>
                  ))}
                </div>
              )}

            </form>
          </div>

          {/* Column 2: Booking Assistance & Info Sidebar (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Emergency Hotline Banner */}
            <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 p-5 rounded-2xl space-y-3.5">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <ShieldAlert className="h-5 w-5 shrink-0" />
                <h3 className="text-xs font-black uppercase tracking-wider leading-none">Emergency Trauma Line</h3>
              </div>
              <p className="text-[10px] text-rose-500 dark:text-rose-405 leading-relaxed font-semibold">
                Facing a severe clinical issue or emergency? Do not wait. Call our trauma response network immediately.
              </p>
              <a
                href="tel:18002006000"
                className="block text-center py-2 bg-rose-600 hover:bg-rose-700 text-white font-black text-[10px] uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                Call: 1800-200-6000
              </a>
            </div>

            {/* Visit Guidelines */}
            <div className="bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800/80 p-5 rounded-2xl space-y-4">
              <h3 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
                First-Visit Protocols
              </h3>
              
              <ul className="space-y-3.5">
                <li className="flex gap-2.5 items-start">
                  <Clock className="h-4.5 w-4.5 text-cyan-brand shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wide">Arrival Protocol</span>
                    <p className="text-[9.5px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                      Arrive at least 15 minutes before your schedule slot to complete registrations.
                    </p>
                  </div>
                </li>

                <li className="flex gap-2.5 items-start">
                  <FileText className="h-4.5 w-4.5 text-cyan-brand shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wide">Documents to Carry</span>
                    <p className="text-[9.5px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                      Carry physical copies of past prescriptions, imaging reports, and valid Government ID.
                    </p>
                  </div>
                </li>

                <li className="flex gap-2.5 items-start">
                  <CreditCard className="h-4.5 w-4.5 text-cyan-brand shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wide">OPD Registration Desk</span>
                    <p className="text-[9.5px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                      Pay consultation charges and verify TPA health cards at General OPD Reception.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800/80 p-5 rounded-2xl space-y-4">
              <h3 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
                Booking Assistance FAQs
              </h3>

              <div className="space-y-2.5">
                {faqData.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div key={index} className="border-b border-slate-100 dark:border-slate-800 pb-2.5 last:border-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full flex justify-between items-center text-left text-[11px] font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-brand transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="text-xs font-black">{isOpen ? "−" : "+"}</span>
                      </button>
                      
                      {isOpen && (
                        <p className="text-[9.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mt-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
