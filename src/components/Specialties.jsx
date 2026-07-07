import React, { useState } from 'react';
import { Heart, Baby, Bone, Activity, Brain, Sparkles, AlertCircle, ArrowRight, Check, ShieldCheck, Settings, Microscope, Award, FileSpreadsheet, ChevronDown, ChevronUp, Calculator, Clock, X, UserCheck, MessageSquare, Info, ShieldAlert, Search, Apple, Download, TrendingUp } from 'lucide-react';

const specialtiesData = [
  {
    id: 'Cardiology',
    name: 'Cardiology',
    icon: Heart,
    description: 'Comprehensive heart care including advanced diagnostic scans and heart failure management.',
    services: ['Coronary Angioplasty', 'Electrocardiogram (ECG)', 'Preventive Cardiac Care'],
    tests: ['Echocardiogram (2D Echo)', 'Treadmill Test (TMT)', 'Holter Monitoring (24h)'],
    stats: '15+ Yrs Exp | 99% Success Rate',
    color: 'from-rose-500/10 to-rose-500/20 text-rose-500 border-rose-100 dark:border-rose-950/50',
    procedures: [
      { name: 'Angioplasty (PTCA)', baseCost: 150000, stay: '2 Days', rehab: '2 Weeks' },
      { name: 'Pacemaker Implantation', baseCost: 220000, stay: '3 Days', rehab: '4 Weeks' },
      { name: 'Coronary Artery Bypass (CABG)', baseCost: 350000, stay: '7 Days', rehab: '8 Weeks' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. Amit Patel', status: 'Available', time: '10:00 AM - 04:00 PM' },
      { name: 'Dr. S. K. Sharma', status: 'In Surgery', time: '02:00 PM - 06:00 PM' }
    ]
  },
  {
    id: 'Pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    description: 'Expert medical care, child growth monitoring, and newborn screening programs.',
    services: ['Neonatal Intensive Care', 'Child Vaccinations', 'Developmental Pediatrics'],
    tests: ['Newborn Hearing Screenings', 'Pediatric Pulmonary Tests', 'Immunization Trackers'],
    stats: '10+ Yrs Exp | 98% Happy Kids',
    color: 'from-amber-500/10 to-amber-500/20 text-amber-500 border-amber-100 dark:border-amber-950/50',
    procedures: [
      { name: 'Newborn Wellness Screening', baseCost: 4500, stay: '0 Days (OPD)', rehab: 'Immediate' },
      { name: 'Pediatric Asthma Management Plan', baseCost: 8000, stay: '1 Day', rehab: '1 Week' },
      { name: 'Developmental Assessment Profile', baseCost: 6500, stay: '0 Days (OPD)', rehab: 'Ongoing' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. Priya Rao', status: 'Available', time: '09:00 AM - 01:00 PM' },
      { name: 'Dr. Neha Gupta', status: 'Available', time: '04:00 PM - 08:00 PM' }
    ]
  },
  {
    id: 'Orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    description: 'Expert management of joint displacements, spinal disorders, and sports injury recovery.',
    services: ['Joint Replacement Surgery', 'Sports Injury Rehabilitation', 'Spinal Trauma Care'],
    tests: ['Digital Bone X-Rays', 'Bone Mineral Density (BMD)', 'Rheumatoid Factor screening'],
    stats: '12+ Yrs Exp | 96% Recovery Rate',
    color: 'from-emerald-500/10 to-emerald-500/20 text-emerald-500 border-emerald-100 dark:border-emerald-950/50',
    procedures: [
      { name: 'Total Knee Replacement (TKR)', baseCost: 195000, stay: '4 Days', rehab: '6 Weeks' },
      { name: 'Arthroscopic Ligament Repair (ACL)', baseCost: 125000, stay: '1 Day', rehab: '4 Weeks' },
      { name: 'Spinal Disc Decompression', baseCost: 240000, stay: '3 Days', rehab: '8 Weeks' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. Rohit Pawar', status: 'In OPD Consultation', time: '11:00 AM - 05:00 PM' }
    ]
  },
  {
    id: 'Gynecology',
    name: 'Gynecology',
    icon: Activity,
    description: 'Comprehensive women healthcare, pregnancy care, and infertility consultations.',
    services: ['High-Risk Obstetrics', 'Prenatal & Postnatal Care', 'Laparoscopic Surgery'],
    tests: ['Mammography screening', 'Pap Smear Diagnostics', '3D/4D Obstetric Ultrasound'],
    stats: '14+ Yrs Exp | 100% Patient Care',
    color: 'from-purple-500/10 to-purple-500/20 text-purple-500 border-purple-100 dark:border-purple-950/50',
    procedures: [
      { name: 'Laparoscopic Hysterectomy', baseCost: 110000, stay: '2 Days', rehab: '3 Weeks' },
      { name: 'Normal Delivery Package', baseCost: 65000, stay: '3 Days', rehab: '2 Weeks' },
      { name: 'Cesarean Section (C-Section)', baseCost: 95000, stay: '4 Days', rehab: '4 Weeks' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. Anjali Mehta', status: 'Available', time: '10:00 AM - 03:00 PM' }
    ]
  },
  {
    id: 'Neurology',
    name: 'Neurology',
    icon: Brain,
    description: 'Advanced neurological therapies for stroke, epilepsy, and neuromuscular conditions.',
    services: ['Stroke Management', 'Epilepsy & Seizure Care', 'Migraine Therapies'],
    tests: ['EEG (Electroencephalography)', 'Nerve Conduction Velocity (NCV)', 'Electromyography (EMG)'],
    stats: '18+ Yrs Exp | NIMHANS Accredited',
    color: 'from-blue-500/10 to-blue-500/20 text-blue-500 border-blue-100 dark:border-blue-950/50',
    procedures: [
      { name: 'Deep Brain Stimulation (DBS) Assessment', baseCost: 15000, stay: '1 Day', rehab: '1 Week' },
      { name: 'Intravenous Thrombolysis (Stroke Care)', baseCost: 180000, stay: '5 Days', rehab: '12 Weeks' },
      { name: 'Neuromuscular Rehab Protocol', baseCost: 35000, stay: '0 Days (OPD)', rehab: 'Ongoing' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. Vikram Seth', status: 'In Surgery', time: '09:00 AM - 02:00 PM' }
    ]
  },
  {
    id: 'Dermatology',
    name: 'Dermatology',
    icon: Sparkles,
    description: 'Clinical skincare solutions for rashes, acne, cosmetic concerns, and hair treatments.',
    services: ['Acne & Scar Laser Therapy', 'Skin Cancer Screenings', 'Clinical Hair Care'],
    tests: ['Wood\'s Lamp Examinations', 'Skin Patch testing (Allergies)', 'Digital Dermoscopy'],
    stats: '8+ Yrs Exp | Holistic Skincare',
    color: 'from-cyan-500/10 to-cyan-500/20 text-cyan-550 border-cyan-100 dark:border-cyan-950/50',
    procedures: [
      { name: 'Skin Biopsy & Lab Analysis', baseCost: 5500, stay: '0 Days (OPD)', rehab: '3 Days' },
      { name: 'Laser Scar Resurfacing Session', baseCost: 12000, stay: '0 Days (OPD)', rehab: '5 Days' },
      { name: 'Platelet-Rich Plasma (PRP) Hair Therapy', baseCost: 15000, stay: '0 Days (OPD)', rehab: '1 Day' }
    ],
    doctorsOnDuty: [
      { name: 'Dr. K. K. Sen', status: 'Available', time: '02:00 PM - 07:00 PM' }
    ]
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

const accreditations = [
  { name: "NABH Accredited", detail: "National Accreditation Board for Hospitals (Safety Standards Certificate)", standard: "Accreditation No: H-2026-0811" },
  { name: "NABL Laboratories", detail: "Accredited Pathology Diagnostics & Clinical Biochemistry Laboratories", standard: "Certificate No: MC-2544" },
  { name: "ISO 9001:2015 Certified", detail: "Standardized Care Quality & Healthcare Operations Management", standard: "System Standard Registration" }
];

const clinicalFaqs = [
  {
    q: "When should I consult a Cardiologist instead of a General Physician?",
    a: "You should see a cardiologist immediately if you experience chest pain, breathlessness, irregular heartbeats, persistent high blood pressure, or if you have a strong family history of heart disease."
  },
  {
    q: "Are clinical diagnostic scans covered by corporate TPA health insurance policies?",
    a: "Yes, diagnostic scans (like MRIs, CT scans, and Ultrasounds) are eligible for cashless insurance benefits if they are advised as part of an inpatient procedure (IPD) or pre-authorized under OPD allowances."
  },
  {
    q: "Do I need prior fasting before scheduling my preventive wellness checks?",
    a: "For wellness checks containing blood sugar fasting and lipid profiles, it is highly recommended to observe a minimum of 10 to 12 hours of overnight water-only fasting before report collection."
  }
];

const dietPlans = {
  cardiac: {
    title: "Cardiac Care Diet (Low Sodium)",
    cal: "1,600 kcal",
    breakfast: "Oatmeal with almonds & flax seeds + 1 cup Green Tea",
    lunch: "Brown Rice (1 cup), steamed broccoli, Dal Tadka, cucumber salad",
    dinner: "Grilled Tofu/Paneer salad + half cup boiled quinoa + vegetable soup",
    tip: "Limit table salt usage. Choose high-potassium foods like spinach and bananas."
  },
  diabetic: {
    title: "Diabetes Management (Low Glycemic)",
    cal: "1,500 kcal",
    breakfast: "Multigrain vegetable Upma + 2 egg whites (or boiled sprouts)",
    lunch: "Whole wheat Roti (2), Mixed vegetable curry, curd (low fat), raw sprouts",
    dinner: "Sautéed Paneer/Chicken with bell peppers and green beans + tomato soup",
    tip: "Maintain 3-hour gaps between small meals to prevent sudden glucose peaks."
  },
  weight: {
    title: "Weight Management (High Protein)",
    cal: "1,400 kcal",
    breakfast: "Sprouted Moong chilla with mint chutney + 1 glass Butter milk",
    lunch: "Quinoa Pulav with paneer cubes, roasted beetroot, curd",
    dinner: "Clear vegetable broth + steamed fish/paneer salad with lemon olive oil",
    tip: "Drink at least 3 liters of water daily to support higher protein metabolism."
  },
  general: {
    title: "General Vigor & Wellness",
    cal: "1,800 kcal",
    breakfast: "Fruit bowl (Apple, Papaya) + handful of soaked almonds & walnuts",
    lunch: "Wheat Roti (2), yellow Moong Dal, Palak Sabzi, fresh salad",
    dinner: "Stir-fried seasonal vegetables + lentil soup + roasted pumpkin seeds",
    tip: "Include seasonal fruits and anti-inflammatory spices like turmeric daily."
  }
};

const mockReport = {
  id: "AR-5022",
  patient: "Rohan Verma",
  age: 42,
  gender: "Male",
  date: "07-Jul-2026",
  status: "Verified & NABL Signed",
  pathologist: "Dr. S. Sen (MD, Pathology)",
  parameters: [
    { name: "HbA1c (Glycated Hemoglobin)", value: "5.8 %", range: "4.5 - 5.6 % (Normal)", status: "borderline", color: "text-amber-600" },
    { name: "Fasting Blood Sugar", value: "112 mg/dL", range: "70 - 100 mg/dL (Normal)", status: "high", color: "text-rose-600 font-extrabold" },
    { name: "Total Cholesterol", value: "242 mg/dL", range: "120 - 200 mg/dL (Desirable)", status: "high", color: "text-rose-600 font-extrabold" },
    { name: "Serum Creatinine (Kidney)", value: "0.9 mg/dL", range: "0.6 - 1.2 mg/dL (Normal)", status: "normal", color: "text-emerald-600" }
  ],
  summary: "Borderline hyperglycemia and moderate hypercholesterolemia detected. Patient is advised to restrict refined sugar, lower dietary sodium/fats, and schedule a diagnostic Cardiology follow-up."
};

export default function Specialties({ onSelectSpecialty, scrollToSection }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [recommendedDept, setRecommendedDept] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Dynamic Drawer Details state
  const [drawerSpecialty, setDrawerSpecialty] = useState(null);
  const [selectedProcedureIdx, setSelectedProcedureIdx] = useState(0);
  const [callbackRequested, setCallbackRequested] = useState(false);

  // Health Calculator state
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [heartHistory, setHeartHistory] = useState(false);
  const [bmiResult, setBmiResult] = useState(null);
  const [recommendedPackage, setRecommendedPackage] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  // Smart Wellness Hub states
  const [dietGoal, setDietGoal] = useState('cardiac');
  const [reportSearchId, setReportSearchId] = useState('');
  const [activeReport, setActiveReport] = useState(mockReport);
  const [reportError, setReportError] = useState('');
  const [loadingReport, setLoadingReport] = useState(false);

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

    const counts = {};
    selectedSymptoms.forEach(symptomValue => {
      const match = symptomList.find(s => s.value === symptomValue);
      if (match) {
        counts[match.department] = (counts[match.department] || 0) + 1;
      }
    });

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

  const openSpecialtyDrawer = (specialty) => {
    setDrawerSpecialty(specialty);
    setSelectedProcedureIdx(0);
    setCallbackRequested(false);
  };

  const closeSpecialtyDrawer = () => {
    setDrawerSpecialty(null);
  };

  const handleRequestCallback = () => {
    setCallbackRequested(true);
    setTimeout(() => {
      setCallbackRequested(false);
    }, 4000);
  };

  const handleActionFromDrawer = () => {
    if (drawerSpecialty) {
      onSelectSpecialty(drawerSpecialty.id);
      closeSpecialtyDrawer();
      scrollToSection('doctors');
    }
  };

  const handleCalculateHealth = (e) => {
    e.preventDefault();
    if (!weight || !height || !age) return;

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    const bmi = (w / (h * h)).toFixed(1);
    
    let classification = '';
    if (bmi < 18.5) classification = 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) classification = 'Healthy';
    else if (bmi >= 25 && bmi < 29.9) classification = 'Overweight';
    else classification = 'Obese';

    setBmiResult({ bmi, classification });

    const ageVal = parseInt(age);
    if (heartHistory) {
      setRecommendedPackage(packages.find(p => p.title.includes("Cardiac")));
    } else if (ageVal >= 60) {
      setRecommendedPackage(packages.find(p => p.title.includes("Senior")));
    } else if (classification === 'Overweight' || classification === 'Obese') {
      setRecommendedPackage(packages.find(p => p.title.includes("Cardiac") || p.title.includes("Women")));
    } else {
      setRecommendedPackage(packages.find(p => p.title.includes("Basic")));
    }
  };

  const handleCopyCoupon = () => {
    setCopiedCoupon(true);
    navigator.clipboard.writeText("AAROGYA-SAVE-20");
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  const handleAction = (deptId) => {
    onSelectSpecialty(deptId);
    scrollToSection('doctors');
  };

  const handleBookPackage = (pkgTitle) => {
    scrollToSection('booking');
  };

  // Report search logic
  const handleReportSearch = (e) => {
    e.preventDefault();
    if (!reportSearchId) return;

    setLoadingReport(true);
    setReportError('');
    setActiveReport(null);

    setTimeout(() => {
      setLoadingReport(false);
      const query = reportSearchId.trim().toUpperCase();
      if (query === 'AR-5022') {
        setActiveReport(mockReport);
      } else {
        setReportError('Report ID not found. Try searching AR-5022 for demo.');
      }
    }, 1200);
  };

  const loadDemoReportId = () => {
    setReportSearchId('AR-5022');
    setLoadingReport(true);
    setReportError('');
    setActiveReport(null);

    setTimeout(() => {
      setLoadingReport(false);
      setActiveReport(mockReport);
    }, 850);
  };

  return (
    <section id="specialties" className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Bento Box Grid & Symptom Finder wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Bento Box: Grid of 6 Specialties (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialtiesData.map((specialty) => {
              const IconComponent = specialty.icon;
              return (
                <div
                  key={specialty.id}
                  onClick={() => openSpecialtyDrawer(specialty)}
                  className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer hover:-translate-y-0.5 active:scale-[0.99]"
                >
                  <div className="space-y-4">
                    {/* Header: Icon + Name */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${specialty.color} border flex items-center justify-center`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wide">
                            {specialty.name}
                          </h3>
                          <span className="text-[8px] font-black bg-cyan-100 dark:bg-cyan-950/40 text-cyan-brand dark:text-cyan-400 px-1.5 py-0.5 rounded uppercase tracking-wider">
                            Interactive
                          </span>
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider block">
                          {specialty.stats}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {specialty.description}
                    </p>

                    {/* Services Sub-list */}
                    <div className="grid grid-cols-2 gap-x-4 pt-2">
                      <div className="space-y-1.5">
                        <span className="text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block mb-0.5">Clinical Services</span>
                        <ul className="space-y-1">
                          {specialty.services.slice(0, 2).map((service, index) => (
                            <li key={index} className="flex items-center gap-1.5 text-[9.5px] font-bold text-slate-600 dark:text-slate-350">
                              <div className="h-1 w-1 bg-cyan-brand rounded-full shrink-0"></div>
                              <span className="truncate">{service}</span>
                            </li>
                          ))}
                          <li className="text-[8.5px] font-semibold text-cyan-brand uppercase tracking-wider pl-2.5">
                            + More Services
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-1.5">
                        <span className="text-[8px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block mb-0.5">Advanced Diagnostics</span>
                        <ul className="space-y-1">
                          {specialty.tests.slice(0, 2).map((test, index) => (
                            <li key={index} className="flex items-center gap-1.5 text-[9.5px] font-semibold text-slate-500 dark:text-slate-400 italic">
                              <Check className="h-2.5 w-2.5 text-cyan-brand shrink-0" />
                              <span className="truncate">{test}</span>
                            </li>
                          ))}
                          <li className="text-[8.5px] font-semibold text-slate-450 italic pl-4">
                            + Procedures
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 mt-4 flex items-center justify-between">
                    <span className="text-[9.5px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                      Explore Surgery Estimator
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
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
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider block pt-0.5">
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

        {/* Interactive BMI & Health Package Calculator */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              DIAGNOSTIC RECOMMENDER
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Interactive Health Quotient Calculator
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-semibold">
              Enter your vitals to calculate BMI and receive personalized diagnostic checkup recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Input Form */}
            <form onSubmit={handleCalculateHealth} className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-cyan-brand" />
                  Vitals Input Board
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">Weight (kg)</label>
                    <input
                      type="number"
                      placeholder="e.g. 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-lg focus:outline-none focus:border-cyan-brand dark:text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">Height (cm)</label>
                    <input
                      type="number"
                      placeholder="e.g. 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-lg focus:outline-none focus:border-cyan-brand dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest">Age (Years)</label>
                  <input
                    type="number"
                    placeholder="e.g. 45"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-lg focus:outline-none focus:border-cyan-brand dark:text-white"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={heartHistory}
                      onChange={(e) => setHeartHistory(e.target.checked)}
                      className="rounded border-slate-300 dark:border-slate-800 text-cyan-brand focus:ring-cyan-brand h-3.5 w-3.5"
                    />
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-350 select-none">
                      Family history of hypertension / heart illness?
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[10px] uppercase tracking-widest rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer mt-6"
              >
                Calculate Diagnostics Plan
              </button>
            </form>

            {/* Right Column: Calculator Output */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[300px]">
              
              {!bmiResult ? (
                <div className="space-y-3.5 max-w-sm">
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-brand dark:text-cyan-400 rounded-2xl border border-cyan-100 dark:border-cyan-950 inline-block">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                    Awaiting Calculations
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    Submit your vitals details on the left form. Our demo health metric engine will dynamically display your BMI classification, wellness advice, and checkup discount key.
                  </p>
                </div>
              ) : (
                <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-white dark:bg-slate-900 border border-slate-150/80 dark:border-slate-800 rounded-xl p-3.5 shadow-sm">
                      <span className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">Your Body Mass Index</span>
                      <span className="text-2xl font-black text-cyan-brand dark:text-cyan-400">{bmiResult.bmi}</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-150/80 dark:border-slate-800 rounded-xl p-3.5 shadow-sm">
                      <span className="text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block mb-0.5">Classification</span>
                      <span className="text-base font-black text-slate-700 dark:text-slate-200 block mt-1 uppercase tracking-wide">{bmiResult.classification}</span>
                    </div>
                  </div>

                  {recommendedPackage && (
                    <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-150/80 dark:border-slate-800 rounded-2xl p-5 text-left space-y-4 shadow-sm relative">
                      <div className="flex items-start justify-between">
                        <div className="space-y-0.5">
                          <span className="text-[8px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">Recommended Package:</span>
                          <h5 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                            {recommendedPackage.title}
                          </h5>
                        </div>
                        <span className="text-base font-black text-slate-800 dark:text-white">
                          {recommendedPackage.price}
                        </span>
                      </div>
                      
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        {recommendedPackage.details}
                      </p>

                      <div className="bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-dashed border-slate-200 dark:border-slate-750 flex items-center justify-between gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">Checkup Coupon Key:</span>
                          <code className="text-[11px] font-black text-cyan-brand dark:text-cyan-400 select-all">AAROGYA-SAVE-20</code>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyCoupon}
                          className="px-2.5 py-1 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          {copiedCoupon ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>

                      <button
                        onClick={() => handleBookPackage(recommendedPackage.title)}
                        className="w-full py-2 bg-gradient-to-r from-cyan-brand to-[#0097a7] hover:from-cyan-600 hover:to-[#00838f] text-white font-extrabold text-[9px] uppercase tracking-widest rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      >
                        <span>Claim checkup with 20% discount</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW ADD-ON BLOCK: PATIENT SMART WELLNESS HUB (Diet Recommender + Lab Reports) */}
        {/* ========================================================================= */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              PATIENT SMART TOOLS
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Smart Wellness Utilities Hub
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-semibold">
              Explore your diet profiles dynamically or inspect digital verified laboratory report files.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Tool 1: Interactive Nutrition meal plan recommender (Spans 6 cols) */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-950 rounded-xl">
                    <Apple className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                      Dynamic Nutrition Planner
                    </h4>
                    <span className="text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">
                      Custom 1-Day Clinical Meal Plans
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-555 dark:text-slate-400 font-semibold leading-relaxed">
                  Select your medical target profile to generate a customized diet chart compiled by Aarogya Life Clinical Nutritionists:
                </p>

                {/* Diet selector dropdown */}
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(dietPlans).map((key) => (
                    <button
                      key={key}
                      onClick={() => setDietGoal(key)}
                      className={`p-2 rounded-lg border text-[9.5px] font-black uppercase tracking-wide transition-all ${
                        dietGoal === key
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {key} Profile
                    </button>
                  ))}
                </div>

                {/* Render Selected diet plan */}
                <div className="bg-white dark:bg-slate-900 border border-slate-150/80 dark:border-slate-800 rounded-xl p-4 space-y-3 shadow-inner">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[10.5px] font-black text-slate-800 dark:text-white uppercase tracking-wider leading-none">
                      {dietPlans[dietGoal].title}
                    </span>
                    <span className="text-[9.5px] font-black text-emerald-600 dark:text-emerald-450 uppercase">
                      {dietPlans[dietGoal].cal}
                    </span>
                  </div>

                  <div className="space-y-2 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                    <div>
                      <span className="text-[8.5px] font-black text-slate-400 dark:text-slate-550 uppercase block">Breakfast Plan</span>
                      <p className="pt-0.5">{dietPlans[dietGoal].breakfast}</p>
                    </div>
                    <div>
                      <span className="text-[8.5px] font-black text-slate-400 dark:text-slate-550 uppercase block">Lunch Plan</span>
                      <p className="pt-0.5">{dietPlans[dietGoal].lunch}</p>
                    </div>
                    <div>
                      <span className="text-[8.5px] font-black text-slate-400 dark:text-slate-550 uppercase block">Dinner Plan</span>
                      <p className="pt-0.5">{dietPlans[dietGoal].dinner}</p>
                    </div>
                  </div>

                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg text-[9px] text-emerald-800 dark:text-emerald-400 leading-normal border border-emerald-100 dark:border-emerald-950/40">
                    <strong>Dietician Clinical Tip:</strong> {dietPlans[dietGoal].tip}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => scrollToSection('booking')}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Apple className="h-3.5 w-3.5" />
                  <span>Consult Clinical Dietician</span>
                </button>
              </div>
            </div>

            {/* Tool 2: Pathology Laboratory Report search & Tracker (Spans 6 cols) */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-450 border border-blue-100 dark:border-blue-950 rounded-xl">
                    <FileSpreadsheet className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                      Pathology Report Tracker
                    </h4>
                    <span className="text-[8px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">
                      Live Digital NABL Lab Files
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-555 dark:text-slate-400 font-semibold leading-relaxed">
                  Enter your laboratory billing code to query your online verified blood values.
                </p>

                {/* Search Bar Input */}
                <form onSubmit={handleReportSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter Report ID (Demo: AR-5022)"
                      value={reportSearchId}
                      onChange={(e) => setReportSearchId(e.target.value)}
                      className="w-full h-9 px-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold rounded-lg focus:outline-none focus:border-cyan-brand dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-9 px-4 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Search className="h-3.5 w-3.5" />
                    <span>Track</span>
                  </button>
                </form>

                {/* Fetch suggestion link */}
                <button
                  type="button"
                  onClick={loadDemoReportId}
                  className="text-[9px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-wider text-left hover:text-cyan-600 block pl-1 cursor-pointer"
                >
                  ⚡ Auto-load Demo ID: AR-5022
                </button>

                {/* Display reports loader / errors */}
                {loadingReport && (
                  <div className="text-center py-6 text-slate-400 font-semibold text-[10px] animate-pulse">
                    Querying Aarogya pathology server systems...
                  </div>
                )}

                {reportError && (
                  <div className="p-3 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 border border-rose-100 dark:border-rose-950/40 rounded-xl text-[9.5px] font-bold text-center">
                    {reportError}
                  </div>
                )}

                {/* Display Digital NABL Report File */}
                {activeReport && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-150/80 dark:border-slate-800 rounded-xl p-4 space-y-3.5 shadow-inner text-left max-h-56 overflow-y-auto custom-scrollbar">
                    
                    {/* File header */}
                    <div className="flex justify-between items-start pb-2 border-b border-slate-100 dark:border-slate-800 text-[9px] font-bold uppercase tracking-wider">
                      <div>
                        <span className="text-slate-400 block text-[7.5px]">PATIENT NAME:</span>
                        <span className="text-slate-800 dark:text-white">{activeReport.patient} ({activeReport.gender})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block text-[7.5px]">LAB FILE ID:</span>
                        <span className="text-cyan-brand">{activeReport.id}</span>
                      </div>
                    </div>

                    {/* Parameter values checklist */}
                    <div className="space-y-2">
                      <span className="text-[7.5px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">TEST ANALYSIS</span>
                      <div className="space-y-1.5">
                        {activeReport.parameters.map((param, idx) => (
                          <div key={idx} className="flex justify-between items-center text-[9.5px] font-semibold">
                            <span className="text-slate-600 dark:text-slate-350">{param.name}</span>
                            <div className="text-right flex items-center gap-2">
                              <span className="text-slate-400 italic text-[8.5px]">({param.range})</span>
                              <span className={param.color}>{param.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clinical summary */}
                    <div className="p-2.5 bg-rose-50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-950/20 text-[9px] text-rose-800 dark:text-rose-400 leading-normal rounded-lg">
                      <strong>Pathology Summary:</strong> {activeReport.summary}
                    </div>

                    {/* Pathology sign footer */}
                    <div className="flex justify-between items-center text-[8px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span>Status: {activeReport.status}</span>
                      <span>Verified: {activeReport.pathologist}</span>
                    </div>

                  </div>
                )}

              </div>

              {/* Consult follow-up button based on report analysis */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                {activeReport ? (
                  <button
                    onClick={() => handleAction('Cardiology')}
                    className="w-full py-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-extrabold text-[9px] uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer animate-pulse"
                  >
                    <Heart className="h-3.5 w-3.5" />
                    <span>Follow-Up: Consult Aarogya Cardiologist</span>
                  </button>
                ) : (
                  <div className="py-2 text-center text-slate-400 font-bold text-[9px] uppercase tracking-widest bg-slate-100/50 dark:bg-slate-800/50 rounded-lg border border-transparent">
                    Awaiting report loading
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Diagnostic & Health Packages Grid */}
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

        {/* 3. Clinical Accreditations & Quality Trust Seals */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              QUALITY ACCREDITATIONS
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Accredited Medical Operations
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accreditations.map((acc, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800/20 border border-slate-150/50 dark:border-slate-800/50 p-5 rounded-2xl flex gap-4 items-start shadow-sm">
                <div className="p-2.5 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-brand dark:text-cyan-400 rounded-xl border border-cyan-100 dark:border-cyan-950 shrink-0 flex items-center justify-center h-10 w-10">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wide block leading-none">
                    {acc.name}
                  </span>
                  <span className="text-[8px] font-bold text-cyan-brand dark:text-cyan-455 uppercase tracking-wider block">
                    {acc.standard}
                  </span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-normal pt-1">
                    {acc.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. OPD Clinical FAQs */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
              FAQ ASSISTANCE
            </span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              OPD Consultation Guidelines
            </h3>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {clinicalFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="bg-slate-50 dark:bg-slate-800/20 border border-slate-150/40 dark:border-slate-800/40 rounded-xl overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-4 text-left text-xs font-black text-slate-850 dark:text-slate-200 uppercase tracking-wider hover:text-cyan-brand transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xs font-black">{isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed font-semibold">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Technology & Infrastructure Showcase */}
        <div className="pt-10 space-y-8 border-t border-slate-100 dark:border-slate-800/80 pb-6">
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
                    <h4 className="text-xs font-black text-slate-855 dark:text-white uppercase tracking-wider leading-none">
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

      {/* ========================================================================= */}
      {/* INTERACTIVE RIGHT SIDE SLIDE DRAWER (Specialty Detailed Explorer & Costs) */}
      {/* ========================================================================= */}
      {drawerSpecialty && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          <div 
            onClick={closeSpecialtyDrawer}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          ></div>

          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-850">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-brand dark:text-cyan-400 border border-cyan-100 dark:border-cyan-950 rounded-lg flex items-center justify-center">
                  {React.createElement(drawerSpecialty.icon, { className: "h-4 w-4" })}
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wide">
                    {drawerSpecialty.name} Center
                  </h3>
                  <span className="text-[8px] font-bold text-cyan-brand dark:text-cyan-400 uppercase tracking-wider block">
                    Interactive Estimator Portal
                  </span>
                </div>
              </div>
              <button 
                onClick={closeSpecialtyDrawer}
                className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="p-6 flex-1 space-y-6">
              
              <div className="space-y-3 bg-slate-50 dark:bg-slate-800/40 p-4 border border-slate-150/60 dark:border-slate-800/60 rounded-2xl">
                <h4 className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="h-3.5 w-3.5 text-cyan-brand" />
                  Surgery Cost & IPD Estimator
                </h4>
                <p className="text-[9.5px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  Select a clinical surgery package to calculate average hospital stay guidelines and billing:
                </p>

                <div className="relative">
                  <select
                    value={selectedProcedureIdx}
                    onChange={(e) => setSelectedProcedureIdx(parseInt(e.target.value))}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 rounded-lg text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-cyan-brand"
                  >
                    {drawerSpecialty.procedures.map((proc, idx) => (
                      <option key={idx} value={idx}>{proc.name}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-150 dark:border-slate-800 shadow-sm text-center">
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest block mb-0.5">Est. Bill</span>
                    <span className="text-xs font-black text-slate-800 dark:text-white">
                      ₹{drawerSpecialty.procedures[selectedProcedureIdx].baseCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-150 dark:border-slate-800 shadow-sm text-center">
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest block mb-0.5">Stay Period</span>
                    <span className="text-xs font-black text-slate-855 dark:text-white flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3 text-cyan-brand" />
                      {drawerSpecialty.procedures[selectedProcedureIdx].stay}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-150 dark:border-slate-800 shadow-sm text-center">
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest block mb-0.5">Recovery</span>
                    <span className="text-xs font-black text-slate-855 dark:text-white">
                      {drawerSpecialty.procedures[selectedProcedureIdx].rehab}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 items-start p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-100 dark:border-emerald-950/40 text-[9.5px] text-emerald-700 dark:text-emerald-400 font-semibold leading-relaxed">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span>95%+ Insurance TPA Cashless claims pre-approved. Standard pre-authorization approval time: 4 Hours.</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-850 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="h-3.5 w-3.5 text-cyan-brand" />
                  OPD Consultants On Duty Today
                </h4>
                
                <div className="space-y-2.5">
                  {drawerSpecialty.doctorsOnDuty.map((doc, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black text-slate-800 dark:text-white block uppercase tracking-wide">{doc.name}</span>
                        <span className="text-[8.5px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">{doc.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${
                          doc.status === 'Available' 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400' 
                            : doc.status === 'In Surgery' 
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/30 dark:text-rose-455' 
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  {!callbackRequested ? (
                    <button
                      onClick={handleRequestCallback}
                      className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-extrabold text-[9px] uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-cyan-brand" />
                      <span>Request Instant Duty Doctor Callback</span>
                    </button>
                  ) : (
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-brand dark:text-cyan-400 rounded-xl border border-cyan-100 dark:border-cyan-950 text-[10px] font-bold text-center animate-pulse">
                      Callback request registered! A medical representative will phone you at your registered number in 10 minutes.
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-slate-850 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-cyan-brand" />
                  Treated Clinical Illnesses
                </h4>
                <div className="grid grid-cols-2 gap-2 bg-slate-50/50 dark:bg-slate-800/20 p-3 rounded-xl border border-slate-150/40 dark:border-slate-800/40">
                  {drawerSpecialty.services.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[9.5px] font-bold text-slate-600 dark:text-slate-350">
                      <Check className="h-3 w-3 text-cyan-brand shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex gap-4 bg-slate-50 dark:bg-slate-850">
              <button
                onClick={closeSpecialtyDrawer}
                className="w-1/3 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-extrabold text-[9.5px] uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                Close Portal
              </button>
              <button
                onClick={handleActionFromDrawer}
                className="w-2/3 py-3 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[9.5px] uppercase tracking-widest rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                Consult {drawerSpecialty.name} Doctor
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
