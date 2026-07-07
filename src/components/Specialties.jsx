import React, { useState } from 'react';
import { Heart, Baby, Bone, Activity, Brain, Sparkles, AlertCircle, ArrowRight, Check, ShieldCheck, Settings, Microscope } from 'lucide-react';

const specialtiesData = [
  {
    id: 'Cardiology',
    name: 'Cardiology',
    icon: Heart,
    description: 'Comprehensive heart care including advanced diagnostic scans and heart failure management.',
    services: ['Coronary Angioplasty', 'Electrocardiogram (ECG)', 'Preventive Cardiac Care'],
    stats: '15+ Yrs Exp | 99% Success Rate',
    color: 'from-rose-500/10 to-rose-500/20 text-rose-500 border-rose-100 dark:border-rose-950/50'
  },
  {
    id: 'Pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    description: 'Expert medical care, child growth monitoring, and newborn screening programs.',
    services: ['Neonatal Intensive Care', 'Child Vaccinations', 'Developmental Pediatrics'],
    stats: '10+ Yrs Exp | 98% Happy Kids',
    color: 'from-amber-500/10 to-amber-500/20 text-amber-500 border-amber-100 dark:border-amber-950/50'
  },
  {
    id: 'Orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    description: 'Expert management of joint displacements, spinal disorders, and sports injury recovery.',
    services: ['Joint Replacement Surgery', 'Sports Injury Rehabilitation', 'Spinal Trauma Care'],
    stats: '12+ Yrs Exp | 96% Recovery Rate',
    color: 'from-emerald-500/10 to-emerald-500/20 text-emerald-500 border-emerald-100 dark:border-emerald-950/50'
  },
  {
    id: 'Gynecology',
    name: 'Gynecology',
    icon: Activity,
    description: 'Comprehensive women healthcare, pregnancy care, and infertility consultations.',
    services: ['High-Risk Obstetrics', 'Prenatal & Postnatal Care', 'Laparoscopic Surgery'],
    stats: '14+ Yrs Exp | 100% Patient Care',
    color: 'from-purple-500/10 to-purple-500/20 text-purple-500 border-purple-100 dark:border-purple-950/50'
  },
  {
    id: 'Neurology',
    name: 'Neurology',
    icon: Brain,
    description: 'Advanced neurological therapies for stroke, epilepsy, and neuromuscular conditions.',
    services: ['Stroke Management', 'Epilepsy & Seizure Care', 'Migraine Therapies'],
    stats: '18+ Yrs Exp | NIMHANS Accredited',
    color: 'from-blue-500/10 to-blue-500/20 text-blue-500 border-blue-100 dark:border-blue-950/50'
  },
  {
    id: 'Dermatology',
    name: 'Dermatology',
    icon: Sparkles,
    description: 'Clinical skincare solutions for rashes, acne, cosmetic concerns, and hair treatments.',
    services: ['Acne & Scar Laser Therapy', 'Skin Cancer Screenings', 'Clinical Hair Care'],
    stats: '8+ Yrs Exp | Holistic Skincare',
    color: 'from-cyan-500/10 to-cyan-500/20 text-cyan-500 border-cyan-100 dark:border-cyan-950/50'
  }
];

const symptomList = [
  { label: 'Chest Discomfort / Palpitations', value: 'chest_pain', department: 'Cardiology' },
  { label: 'Shortness of Breath', value: 'dyspnea', department: 'Cardiology' },
  { label: "Child's Fever / Infant Cough", value: 'kids_fever', department: 'Pediatrics' },
  { label: 'Child Growth / Nutrition Concerns', value: 'ped_growth', department: 'Pediatrics' },
  { label: 'Joint Stiffness / Back Pain', value: 'joint_stiffness', department: 'Orthopedics' },
  { label: 'Bone Injury / Fractures', value: 'fractures', department: 'Orthopedics' },
  { label: 'Pregnancy Consultation', value: 'pregnancy', department: 'Gynecology' },
  { label: 'Menstrual Irregularities', value: 'period_issues', department: 'Gynecology' },
  { label: 'Severe Headaches / Migraines', value: 'headaches', department: 'Neurology' },
  { label: 'Dizziness / Numbness', value: 'numbness', department: 'Neurology' },
  { label: 'Acne / Skin Rash / Eczema', value: 'skin_rash', department: 'Dermatology' },
  { label: 'Severe Hair Loss', value: 'hair_loss', department: 'Dermatology' }
];

const packages = [
  {
    title: "Basic Health Checkup",
    price: "₹999",
    tests: "24 Tests Included",
    details: "Complete Blood Count (CBC), Kidney Function Tests, Liver Profile, Thyroid (TSH), Blood Sugar, Urine Routine.",
    color: "from-blue-500/10 to-blue-500/20 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Cardiac Wellness Check",
    price: "₹2,499",
    tests: "32 Tests Included",
    details: "Lipid Profile, Electrocardiogram (ECG), Blood Sugar Fasting, Treadmill Test (TMT), Cardiologist Consultation.",
    color: "from-rose-500/10 to-rose-500/20 text-rose-600 dark:text-rose-455"
  },
  {
    title: "Women's Wellness Care",
    price: "₹1,999",
    tests: "28 Tests Included",
    details: "Pap Smear, Thyroid Profile (T3/T4/TSH), Complete Hemogram, Pelvic Ultrasound, Gynecologist Consultation.",
    color: "from-purple-500/10 to-purple-500/20 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Active Senior Citizen Check",
    price: "₹3,499",
    tests: "40 Tests Included",
    details: "Liver & Kidney Panels, Diabetic screening, Bone Mineral Density scan, Vitamin D3 & B12, Orthopedic Review.",
    color: "from-emerald-500/10 to-emerald-500/20 text-emerald-600 dark:text-emerald-400"
  }
];

const labs = [
  {
    title: "Advanced Radiology Lab",
    desc: "Equipped with 3-Tesla MRI machines and 128-slice CT scanners for quick, high-precision scans.",
    icon: Settings
  },
  {
    title: "NABH Accredited Pathology",
    desc: "24/7 fully automated laboratory testing for quick, verified blood reports under 4 hours.",
    icon: Microscope
  },
  {
    title: "Modular Clean OTs",
    desc: "Modular operation theatres with laminar air flows to maintain zero-infection surgical zones.",
    icon: ShieldCheck
  }
];

export default function Specialties({ onSelectSpecialty, scrollToSection }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [recommendedDept, setRecommendedDept] = useState(null);

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(prev => prev.filter(item => item !== symptom));
    } else {
      setSelectedSymptoms(prev => [...prev, symptom]);
    }
  };

  const handleFindDepartment = () => {
    if (selectedSymptoms.length === 0) {
      setRecommendedDept(null);
      return;
    }

    // Tally recommended departments
    const counts = {};
    selectedSymptoms.forEach(symptomValue => {
      const match = symptomList.find(s => s.value === symptomValue);
      if (match) {
        counts[match.department] = (counts[match.department] || 0) + 1;
      }
    });

    // Find the department with the highest match count
    let bestDept = null;
    let maxCount = 0;
    Object.keys(counts).forEach(deptName => {
      if (counts[deptName] > maxCount) {
        maxCount = counts[deptName];
        bestDept = deptName;
      }
    });

    const deptDetails = specialtiesData.find(s => s.id === bestDept);
    setRecommendedDept(deptDetails || null);
  };

  const handleAction = (deptId) => {
    onSelectSpecialty(deptId);
    scrollToSection('doctors');
  };

  const handleBookPackage = (pkgTitle) => {
    scrollToSection('booking');
    // Autofill reason or doctor selector if possible can be done, but scrolling to booking form is primary
  };

  return (
    <section id="specialties" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest leading-none">
            OUR DEPARTMENTS
          </span>
          <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            Medical Specialties
          </h2>
          <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
            Choose from our wide range of world-class medical departments staffed by board-certified consultants.
          </p>
        </div>

        {/* Bento Box Grid & Symptom Finder wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Bento Box: Grid of 6 Specialties (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialtiesData.map((specialty) => {
              const IconComponent = specialty.icon;
              return (
                <div
                  key={specialty.id}
                  className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    {/* Header: Icon + Name */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${specialty.color} border flex items-center justify-center`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wide">
                          {specialty.name}
                        </h3>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider block">
                          {specialty.stats}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {specialty.description}
                    </p>

                    {/* Services Sub-list */}
                    <ul className="space-y-1.5 pt-2">
                      {specialty.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-350">
                          <div className="h-1 w-1 bg-cyan-brand rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-5 border-t border-slate-200/50 dark:border-slate-800/50 mt-4 flex items-center justify-between">
                    <button
                      onClick={() => handleAction(specialty.id)}
                      className="flex items-center gap-1 text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest hover:text-cyan-600 transition-colors group/btn cursor-pointer"
                    >
                      <span>View Consultants</span>
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bento Box: Symptom-to-Specialty Finder Card */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 lg:sticky lg:top-24 space-y-5">
            <div>
              <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wide flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4 text-cyan-brand" />
                Specialty Finder
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block pt-0.5">
                Not sure whom to consult? Select symptoms:
              </p>
            </div>

            {/* Checklist of symptoms */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
              {symptomList.map((symptom) => {
                const isSelected = selectedSymptoms.includes(symptom.value);
                return (
                  <button
                    key={symptom.value}
                    onClick={() => toggleSymptom(symptom.value)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-left text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-cyan-brand border-cyan-brand text-white shadow-sm'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span>{symptom.label}</span>
                    {isSelected && <Check className="h-3.5 w-3.5" />}
                  </button>
                );
              })}
            </div>

            {/* Find Button */}
            <button
              onClick={handleFindDepartment}
              disabled={selectedSymptoms.length === 0}
              className={`w-full py-3 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                selectedSymptoms.length === 0
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-transparent'
                  : 'bg-gradient-to-r from-cyan-brand to-[#0097a7] text-white hover:from-cyan-600 hover:to-[#00838f] shadow-md hover:shadow-cyan-500/10 cursor-pointer active:scale-[0.99]'
              }`}
            >
              Find Recommended Department
            </button>

            {/* Recommended Department Output Display */}
            {recommendedDept && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4.5 space-y-3 shadow-inner animate-in fade-in zoom-in-95 duration-200">
                <div className="space-y-1">
                  <span className="text-[8px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest">
                    Recommended Specialty:
                  </span>
                  <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wide">
                    {recommendedDept.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {recommendedDept.description}
                  </p>
                </div>
                
                <button
                  onClick={() => handleAction(recommendedDept.id)}
                  className="w-full py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 text-cyan-brand dark:text-cyan-400 font-extrabold text-[9px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Meet {recommendedDept.name} Doctors</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            )}

          </div>

        </div>

        {/* 2. Diagnostic & Health Packages Grid (Detailed addition) */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              PREVENTIVE HEALTHCARE
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Diagnostic & Wellness Packages
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
              Schedule preventive laboratory checks and comprehensive screening sessions with special pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-150/60 dark:border-slate-800/60 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-brand dark:text-cyan-400 font-black text-[9px] uppercase tracking-wider rounded-md border border-cyan-100 dark:border-cyan-950">
                      {pkg.tests}
                    </span>
                    <span className="text-lg font-black text-slate-800 dark:text-white">
                      {pkg.price}
                    </span>
                  </div>
                  
                  <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider leading-none">
                    {pkg.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {pkg.details}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/50 dark:border-slate-800/50 mt-4">
                  <button
                    onClick={() => handleBookPackage(pkg.title)}
                    className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-cyan-brand/20 dark:hover:border-cyan-brand/20 text-cyan-brand dark:text-cyan-400 font-extrabold text-[9px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Schedule Checkup</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Technology & Infrastructure Showcase */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              OUR INFRASTRUCTURE
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Diagnostic & Clinical Facilities
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labs.map((lab, i) => {
              const LabIcon = lab.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-950 text-cyan-brand dark:text-cyan-400 shrink-0 h-10 w-10 flex items-center justify-center">
                    <LabIcon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider leading-none">
                      {lab.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {lab.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
