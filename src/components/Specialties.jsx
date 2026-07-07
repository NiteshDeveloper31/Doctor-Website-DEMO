import React, { useState } from 'react';
import {
  Heart, Baby, Bone, Activity, Brain, Sparkles, Award, ShieldCheck, Settings, Microscope,
  Check, ArrowRight, ChevronDown, ChevronUp, Ribbon, Ear, Eye, Thermometer, BrainCircuit,
  Smile, Syringe, FlaskConical, Dumbbell, Siren, Stethoscope, Building2
} from 'lucide-react';

const specialtiesData = [
  {
    id: 'Cardiology',
    name: 'Cardiology',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop',
    description: 'Comprehensive heart care including advanced diagnostic scans, coronary interventions, and heart failure management for patients of every age group.',
    opdDays: 'Mon - Sat, 09:00 AM - 05:00 PM',
    services: ['Coronary Angioplasty', 'Electrocardiogram (ECG)', 'Preventive Cardiac Care', 'Holter Monitoring (24h)'],
    doctors: [
      { name: 'Dr. Rajesh Kumar', qualifications: 'MD, DM (Cardiology) - AIIMS New Delhi' },
      { name: 'Dr. Sanjana Verma', qualifications: 'MD (Medicine), Fellowship in Cardiology' }
    ],
    color: 'from-rose-500/10 to-rose-500/20 text-rose-500 border-rose-100 dark:border-rose-950/50'
  },
  {
    id: 'Oncology',
    name: 'Oncology',
    icon: Ribbon,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600&auto=format&fit=crop',
    description: 'Multi-disciplinary cancer care spanning medical, surgical, and radiation oncology, delivered through our dedicated Cancer Institute with survivorship support.',
    opdDays: 'Mon - Sat, 09:00 AM - 05:00 PM',
    services: ['Chemotherapy Protocols', 'Surgical Tumor Resection', 'Radiation Therapy Planning', 'Cancer Survivorship Care'],
    doctors: [
      { name: 'Dr. Ananya Kulkarni', qualifications: 'MD, DM (Medical Oncology) - Tata Memorial Centre' },
      { name: 'Dr. Karan Mehta', qualifications: 'MS, M.Ch (Surgical Oncology) - RGCI Delhi' }
    ],
    color: 'from-violet-500/10 to-violet-500/20 text-violet-500 border-violet-100 dark:border-violet-950/50'
  },
  {
    id: 'Neurosurgery',
    name: 'Neurosurgery',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=600&auto=format&fit=crop',
    description: 'Advanced neurosurgical and neurosciences care for brain tumors, spine disorders, stroke intervention, and complex neuro-trauma.',
    opdDays: 'Tue, Thu, Sat, 10:30 AM - 04:30 PM',
    services: ['Brain Tumor Surgery', 'Spine Surgery', 'Stroke Intervention', 'Minimally Invasive Neurosurgery'],
    doctors: [
      { name: 'Dr. Vikram Malhotra', qualifications: 'MS, M.Ch (Neurosurgery) - NIMHANS Bangalore' },
      { name: 'Dr. Ishaan Bedi', qualifications: 'MBBS, MS (General Surgery), Fellowship in Neurosurgery' }
    ],
    color: 'from-indigo-500/10 to-indigo-500/20 text-indigo-500 border-indigo-100 dark:border-indigo-950/50'
  },
  {
    id: 'Gastroenterology',
    name: 'Gastroenterology',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=600&auto=format&fit=crop',
    description: 'Diagnostic and therapeutic endoscopy, liver disease management, and comprehensive care for digestive and pancreatic disorders.',
    opdDays: 'Mon - Fri, 09:30 AM - 03:30 PM',
    services: ['Therapeutic Endoscopy', 'Liver Disease Management', 'Inflammatory Bowel Disease Care', 'Pancreatic Disorder Treatment'],
    doctors: [
      { name: 'Dr. Neha Kapoor', qualifications: 'MD, DM (Gastroenterology) - PGIMER Chandigarh' },
      { name: 'Dr. Rohan Ahluwalia', qualifications: 'MD (Medicine), Fellowship in Gastroenterology' }
    ],
    color: 'from-lime-500/10 to-lime-500/20 text-lime-600 border-lime-100 dark:border-lime-950/50'
  },
  {
    id: 'Gynaecology & Obstetrics',
    name: 'Gynaecology & Obstetrics',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=600&auto=format&fit=crop',
    description: 'Comprehensive women\'s healthcare, pre-pregnancy counseling, high-risk obstetrics, and laparoscopic surgeries under one roof.',
    opdDays: 'Mon - Sat, 09:00 AM - 05:30 PM',
    services: ['High-Risk Obstetrics', 'Prenatal & Postnatal Care', 'Laparoscopic Hysterectomy', 'Infertility Consultations'],
    doctors: [
      { name: 'Dr. Priya Nair', qualifications: 'MD (Obstetrics & Gynecology) - Madras Medical College' },
      { name: 'Dr. Fatima Sheikh', qualifications: 'MBBS, DGO (Obstetrics & Gynecology)' }
    ],
    color: 'from-purple-500/10 to-purple-500/20 text-purple-500 border-purple-100 dark:border-purple-950/50'
  },
  {
    id: 'Orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop',
    description: 'Expert management of joint displacements, complex fractures, spinal disorders, and sports injury rehabilitation.',
    opdDays: 'Mon, Wed, Fri, 09:30 AM - 05:30 PM',
    services: ['Joint Replacement Surgery', 'Sports Injury Rehabilitation', 'Spinal Trauma Care', 'Arthroscopic Surgery'],
    doctors: [
      { name: 'Dr. Amit Patel', qualifications: 'MS, M.Ch (Orthopedics) - KGMU Lucknow' },
      { name: 'Dr. Harpreet Sandhu', qualifications: 'MS (Orthopedics), Fellowship in Joint Replacement' }
    ],
    color: 'from-emerald-500/10 to-emerald-500/20 text-emerald-500 border-emerald-100 dark:border-emerald-950/50'
  },
  {
    id: 'Pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop',
    description: 'Expert medical care, pediatric critical care, newborn screening, and developmental monitoring programs for children of all ages.',
    opdDays: 'Mon - Fri, 10:00 AM - 05:00 PM',
    services: ['Neonatal Intensive Care', 'Child Vaccinations', 'Developmental Pediatrics', 'Pediatric Pulmonology'],
    doctors: [
      { name: 'Dr. Rohit Pawar', qualifications: 'MBBS, DCH (Pediatrics) - PGIMER Chandigarh' },
      { name: 'Dr. Simran Kaur', qualifications: 'MD (Pediatrics), Neonatology Fellowship' }
    ],
    color: 'from-amber-500/10 to-amber-500/20 text-amber-500 border-amber-100 dark:border-amber-950/50'
  },
  {
    id: 'ENT & Head-Neck Surgery',
    name: 'ENT & Head-Neck Surgery',
    icon: Ear,
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=600&auto=format&fit=crop',
    description: 'Endoscopic sinus surgery, cochlear implants, voice disorder treatment, and head-neck oncologic surgery for all age groups.',
    opdDays: 'Mon - Sat, 09:00 AM - 03:30 PM',
    services: ['Endoscopic Sinus Surgery', 'Cochlear Implants', 'Head & Neck Oncology', 'Voice Disorder Treatment'],
    doctors: [
      { name: 'Dr. Suresh Iyer', qualifications: 'MS (ENT) - Madras Medical College' },
      { name: 'Dr. Naveen Reddy', qualifications: 'MS (ENT), Fellowship in Head-Neck Surgery' }
    ],
    color: 'from-sky-500/10 to-sky-500/20 text-sky-500 border-sky-100 dark:border-sky-950/50'
  },
  {
    id: 'Dermatology',
    name: 'Dermatology',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    description: 'Clinical skincare solutions for allergy tests, acne scar revisions, hair treatments, and cosmetic dermatology concerns.',
    opdDays: 'Mon - Fri, 09:30 AM - 04:30 PM',
    services: ['Acne & Scar Laser Therapy', 'Skin Cancer Screenings', 'Clinical Hair Care', 'Laser Resurfacing'],
    doctors: [
      { name: 'Dr. Sunita Rao', qualifications: 'MD (Dermatology, Venereology & Leprosy) - GMC Mumbai' },
      { name: 'Dr. Aisha Khan', qualifications: 'MD (Skin & VD), Fellowship in Cosmetic Dermatology' }
    ],
    color: 'from-cyan-500/10 to-cyan-500/20 text-cyan-550 border-cyan-100 dark:border-cyan-950/50'
  },
  {
    id: 'Ophthalmology',
    name: 'Ophthalmology',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=600&auto=format&fit=crop',
    description: 'Cataract surgery, refractive procedures, glaucoma management, and comprehensive eye care using advanced micro-surgical techniques.',
    opdDays: 'Mon - Fri, 09:30 AM - 04:30 PM',
    services: ['Cataract Surgery', 'Refractive Surgery', 'Glaucoma Management', 'Retina Screening'],
    doctors: [
      { name: 'Dr. Anjali Desai', qualifications: 'MS (Ophthalmology) - Seth GS Medical College' },
      { name: 'Dr. Yusuf Merchant', qualifications: 'MS (Ophthalmology), Fellowship in Retina' }
    ],
    color: 'from-blue-500/10 to-blue-500/20 text-blue-500 border-blue-100 dark:border-blue-950/50'
  },
  {
    id: 'Internal Medicine',
    name: 'Internal Medicine',
    icon: Thermometer,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop',
    description: 'General physician care managing diabetes, hypertension, infectious diseases, and complex multi-system disorders in adults.',
    opdDays: 'Mon - Sat, 08:30 AM - 05:30 PM',
    services: ['Diabetes Management', 'Hypertension Care', 'Infectious Disease Treatment', 'Geriatric Medicine'],
    doctors: [
      { name: 'Dr. Manoj Tiwari', qualifications: 'MBBS, MD (Internal Medicine) - MAMC Delhi' },
      { name: 'Dr. Vidya Krishnan', qualifications: 'MBBS, MD (General Medicine)' }
    ],
    color: 'from-teal-500/10 to-teal-500/20 text-teal-500 border-teal-100 dark:border-teal-950/50'
  },
  {
    id: 'Psychiatry',
    name: 'Psychiatry',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=600&auto=format&fit=crop',
    description: 'Compassionate mental health care spanning mood disorders, anxiety, adolescent counselling, and de-addiction support.',
    opdDays: 'Mon, Wed, Fri, 10:00 AM - 05:00 PM',
    services: ['Mood Disorder Treatment', 'Anxiety & Stress Care', 'Adolescent Counselling', 'De-Addiction Programs'],
    doctors: [
      { name: 'Dr. Ritu Bhatia', qualifications: 'MD (Psychiatry) - NIMHANS Bangalore' },
      { name: 'Dr. Gaurav Malik', qualifications: 'MD (Psychiatry), Fellowship in Child & Adolescent Psychiatry' }
    ],
    color: 'from-pink-500/10 to-pink-500/20 text-pink-500 border-pink-100 dark:border-pink-950/50'
  },
  {
    id: 'Dental Surgery',
    name: 'Dental Surgery',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    description: 'Comprehensive dental care including root canal therapy, dental implants, and maxillofacial trauma management.',
    opdDays: 'Mon - Sat, 09:00 AM - 05:00 PM',
    services: ['Dental Implants', 'Root Canal Therapy', 'Maxillofacial Trauma Care', 'Cosmetic Dentistry'],
    doctors: [
      { name: 'Dr. Sameer Khanna', qualifications: 'BDS, MDS (Oral & Maxillofacial Surgery)' },
      { name: 'Dr. Pooja Malhotra', qualifications: 'BDS, MDS (Prosthodontics)' }
    ],
    color: 'from-orange-500/10 to-orange-500/20 text-orange-500 border-orange-100 dark:border-orange-950/50'
  },
  {
    id: 'Anaesthesia & Critical Care',
    name: 'Anaesthesia & Critical Care',
    icon: Syringe,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop',
    description: 'Peri-operative anaesthesia, ICU protocols, ventilator management, and life-support care for critically ill patients around the clock.',
    opdDays: 'Available 24/7 - ICU & Emergency On-Call',
    services: ['Peri-operative Anaesthesia', 'Critical Care Medicine', 'Ventilator Management', 'Pain Management'],
    doctors: [
      { name: 'Dr. Alok Sinha', qualifications: 'MD (Anaesthesiology) - AIIMS New Delhi' },
      { name: 'Dr. Meenal Joshi', qualifications: 'MD (Anaesthesiology), Fellowship in Critical Care' }
    ],
    color: 'from-red-500/10 to-red-500/20 text-red-500 border-red-100 dark:border-red-950/50'
  },
  {
    id: 'Pathology & Radiology',
    name: 'Pathology & Radiology',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=600&auto=format&fit=crop',
    description: 'Histopathology, molecular diagnostics, and advanced radiology imaging including MRI, CT, and interventional radiology.',
    opdDays: 'Mon - Sat, By Appointment (Reports & Consultation)',
    services: ['Histopathology', 'Molecular Diagnostics', 'MRI & CT Reporting', 'Interventional Radiology'],
    doctors: [
      { name: 'Dr. Deepak Chawla', qualifications: 'MD (Pathology), Fellowship in Radiodiagnosis' },
      { name: 'Dr. Nikita Shah', qualifications: 'MD (Radiodiagnosis)' }
    ],
    color: 'from-slate-500/10 to-slate-500/20 text-slate-500 border-slate-200 dark:border-slate-800/50'
  },
  {
    id: 'Physiotherapy',
    name: 'Physiotherapy',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    description: 'Personalized rehabilitation programs for post-surgical recovery, sports injuries, and chronic musculoskeletal pain.',
    opdDays: 'Mon - Sat, 09:00 AM - 05:00 PM',
    services: ['Post-Surgical Rehabilitation', 'Sports Injury Recovery', 'Chronic Pain Management', 'Neuro-Rehabilitation'],
    doctors: [
      { name: 'Dr. Kavita Joshi', qualifications: 'BPT, MPT (Orthopedic Physiotherapy)' },
      { name: 'Dr. Ansh Kapadia', qualifications: 'BPT, MPT (Sports Physiotherapy)' }
    ],
    color: 'from-yellow-500/10 to-yellow-500/20 text-yellow-600 border-yellow-100 dark:border-yellow-950/50'
  },
  {
    id: 'Emergency & Trauma',
    name: 'Emergency & Trauma',
    icon: Siren,
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=600&auto=format&fit=crop',
    description: 'A 24/7 emergency and trauma department coordinating rapid trauma response, resuscitation, and multi-disciplinary critical care.',
    opdDays: 'Available 24/7 - Emergency Walk-in & Trauma Bay',
    services: ['Trauma Resuscitation', 'Emergency Triage', 'Critical Care Transport', 'Mass Casualty Management'],
    doctors: [
      { name: 'Dr. Arvind Rathore', qualifications: 'MD (Emergency Medicine) - CMC Vellore' },
      { name: 'Dr. Farhan Ali', qualifications: 'MBBS, Diploma in Emergency Medicine' }
    ],
    color: 'from-rose-600/10 to-rose-600/20 text-rose-600 border-rose-200 dark:border-rose-950/50'
  }
];

const institutes = [
  {
    name: 'Aarogya Cancer Institute',
    icon: Ribbon,
    description: 'A dedicated multi-disciplinary cancer care center bringing together medical, surgical, and radiation oncology under one roof, with tumor board reviews for every patient.',
    facilities: ['Day-Care Chemotherapy Suites', 'Linear Accelerator Radiotherapy', 'Surgical Oncology Theatres', 'Palliative & Survivorship Care'],
    color: 'from-violet-500/10 to-violet-500/20 text-violet-500 border-violet-100 dark:border-violet-950/50'
  },
  {
    name: 'Aarogya Cardiac Institute',
    icon: Heart,
    description: 'A round-the-clock cardiac care unit with a dedicated cath lab, offering rapid response for cardiac emergencies alongside long-term preventive heart programs.',
    facilities: ['24/7 Cardiac Catheterization Lab', 'Cardiac ICU (CCU)', 'Non-Invasive Cardiology Suite', '15-Min Emergency Response Fleet'],
    color: 'from-rose-500/10 to-rose-500/20 text-rose-500 border-rose-100 dark:border-rose-950/50'
  }
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

export default function Specialties({ onSelectSpecialty, scrollToSection }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleAction = (deptId) => {
    onSelectSpecialty(deptId);
    scrollToSection('doctors');
  };

  const handleBookPackage = () => {
    scrollToSection('booking');
  };

  return (
    <section id="specialties" className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">
            CLINICAL SPECIALTIES
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            17 Specialized Departments, One Campus
          </h1>
          <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Aarogya Life Hospital brings together 17 clinical departments and over 50 accredited consultants under one campus in Sector 62, Noida.
            From routine OPD consultations to complex surgical care, every department is backed by NABH-certified protocols, modern diagnostic
            infrastructure, and a patient-first approach to treatment. Browse each department below for services offered, OPD timings, and
            the consultants leading that unit.
          </p>
        </div>

        {/* Institute highlight blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutes.map((inst, i) => {
            const InstIcon = inst.icon;
            return (
              <div key={i} className={`rounded-2xl p-6 sm:p-8 border bg-gradient-to-br ${inst.color} flex flex-col gap-4`}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/70 dark:bg-slate-900/50 flex items-center justify-center shrink-0">
                    <InstIcon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 opacity-70" />
                    <h3 className="text-base font-black uppercase tracking-wide">{inst.name}</h3>
                  </div>
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                  {inst.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-2 border-t border-slate-900/5 dark:border-white/10">
                  {inst.facilities.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-600 dark:text-slate-300">
                      <Check className="h-3 w-3 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Departments card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialtiesData.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={specialty.id}
                className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Photo banner */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"></div>
                  <div className={`absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-gradient-to-br ${specialty.color} border shadow-sm flex items-center justify-center`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="absolute bottom-3 left-16 right-3 text-sm font-black text-white uppercase tracking-wide truncate">
                    {specialty.name}
                  </h3>
                </div>

                <div className="p-5 flex-1 flex flex-col space-y-4">
                  <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-semibold">
                    {specialty.opdDays}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {specialty.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest block">Services Offered</span>
                    <ul className="space-y-1">
                      {specialty.services.slice(0, 3).map((service, index) => (
                        <li key={index} className="flex items-center gap-1.5 text-[10.5px] font-bold text-slate-650 dark:text-slate-350">
                          <div className="h-1 w-1 bg-cyan-brand rounded-full shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[9px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest block">Consultants</span>
                    <ul className="space-y-1.5">
                      {specialty.doctors.map((doc, index) => (
                        <li key={index} className="text-[10.5px]">
                          <span className="font-bold text-slate-700 dark:text-slate-200 block">{doc.name}</span>
                          <span className="text-slate-500 dark:text-slate-450 font-medium">{doc.qualifications}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 mt-auto border-t border-slate-200/50 dark:border-slate-800/50">
                    <button
                      onClick={() => handleAction(specialty.id)}
                      className="flex items-center gap-1 text-[10px] font-black text-cyan-brand dark:text-cyan-400 uppercase tracking-widest hover:text-cyan-600 transition-colors group/btn cursor-pointer pt-3"
                    >
                      <span>Consult Department</span>
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
                    onClick={handleBookPackage}
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
    </section>
  );
}

export { specialtiesData };
