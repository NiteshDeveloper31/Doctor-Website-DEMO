import dr1 from '../assets/dr1.jpg';
import dr2 from '../assets/dr2.jpg';
import dr3 from '../assets/dr3.jpg';
import dr4 from '../assets/dr4.jpg';
import dr5 from '../assets/dr5.jpg';
import dr6 from '../assets/dr6.jpg';
import dr7 from '../assets/dr7.jpg';

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiology",
    designation: "Senior Consultant & HOD - Cardiology",
    experience: 15,
    fee: 800,
    rating: 4.9,
    reviews: 124,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "10:30 AM", "11:00 AM", "02:30 PM", "04:00 PM"],
    image: dr1,
    bio: "Dr. Rajesh Kumar is a senior consultant cardiologist at Aarogya Life Hospital with over 15 years of experience in interventional cardiology. He completed his DM in Cardiology from AIIMS New Delhi and specializes in coronary angioplasty and preventive cardiac care.",
    qualifications: "MD (Medicine), DM (Cardiology) - AIIMS New Delhi",
    email: "np370768@gmail.com",
    previousHospitals: ["AIIMS New Delhi", "Fortis Escorts Heart Institute, Delhi"],
    expertiseAreas: ["Coronary Angioplasty", "Cardiac Catheterization", "Preventive Cardiology", "Heart Failure Management"],
    publications: [
      "Outcomes of Primary PCI in Rural North India - Indian Heart Journal, 2021",
      "Preventive Strategies for Early-Onset Coronary Artery Disease - JACC India, 2019"
    ],
    opdSchedule: [
      { day: "Mon, Wed, Fri", time: "09:00 AM - 01:00 PM" },
      { day: "Tue, Thu, Sat", time: "02:00 PM - 05:00 PM" }
    ]
  },
  {
    id: 2,
    name: "Dr. Rohit Pawar",
    specialization: "Pediatrics",
    designation: "Consultant Pediatrician",
    experience: 10,
    fee: 600,
    rating: 4.8,
    reviews: 98,
    availability: "Mon - Fri",
    slots: ["10:00 AM", "11:30 AM", "12:00 PM", "03:00 PM", "04:30 PM"],
    image: dr2,
    bio: "Dr. Rohit Pawar is a compassionate pediatrician specializing in neonatal intensive care and general childhood developmental health. With post-graduate training from PGIMER Chandigarh, he has spent a decade caring for children of all ages.",
    qualifications: "MBBS, DCH (Pediatrics) - PGIMER Chandigarh",
    email: "dr.rohit@aarogyalife.in",
    previousHospitals: ["PGIMER Chandigarh", "Rainbow Children's Hospital, Delhi"],
    expertiseAreas: ["Neonatal Intensive Care", "Childhood Immunization", "Growth & Development", "Pediatric Infections"],
    publications: [
      "Immunization Coverage Trends in Urban NCR - Indian Pediatrics, 2020",
      "NICU Outcomes in Low Birth Weight Infants - PGIMER Case Series, 2018"
    ],
    opdSchedule: [
      { day: "Mon - Fri", time: "10:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "03:00 PM - 05:00 PM" }
    ]
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    specialization: "Orthopedics",
    designation: "Senior Consultant - Orthopedics",
    experience: 12,
    fee: 700,
    rating: 4.7,
    reviews: 85,
    availability: "Mon, Wed, Fri",
    slots: ["09:30 AM", "10:00 AM", "11:30 AM", "03:30 PM", "05:00 PM"],
    image: dr7,
    bio: "Dr. Amit Patel specializes in joint replacement surgery, sports medicine, and advanced orthopedic trauma. He is highly regarded for his emphasis on non-surgical rehabilitation techniques and post-operation physical recovery planning.",
    qualifications: "MS (Orthopedics), M.Ch (Orthopedics) - KGMU Lucknow",
    email: "dr.amit@aarogyalife.in",
    previousHospitals: ["KGMU Lucknow", "Max Super Speciality Hospital, Saket"],
    expertiseAreas: ["Joint Replacement", "Sports Medicine", "Arthroscopy", "Trauma Reconstruction"],
    publications: [
      "Functional Outcomes after Total Knee Replacement - Indian Journal of Orthopedics, 2021",
      "Arthroscopic Management of Sports Injuries - KGMU Review, 2017"
    ],
    opdSchedule: [
      { day: "Mon, Wed, Fri", time: "09:30 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "03:30 PM - 05:30 PM" }
    ]
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    specialization: "Gynaecology & Obstetrics",
    designation: "Senior Consultant - Gynaecology & Obstetrics",
    experience: 14,
    fee: 750,
    rating: 4.9,
    reviews: 142,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "11:00 AM", "02:00 PM", "03:30 PM", "05:30 PM"],
    image: dr4,
    bio: "Dr. Priya Nair is an expert in high-risk obstetrics, infertility management, and advanced laparoscopic gynecology. She is passionate about empowering women through health education and providing comprehensive prenatal and postnatal care.",
    qualifications: "MD (Obstetrics & Gynecology) - Madras Medical College",
    email: "dr.priya@aarogyalife.in",
    previousHospitals: ["Madras Medical College", "Cloudnine Hospital, Bengaluru"],
    expertiseAreas: ["High-Risk Obstetrics", "Laparoscopic Gynecology", "Infertility Management", "Prenatal Care"],
    publications: [
      "Managing High-Risk Pregnancies in Tier-2 Cities - Journal of Obstetrics India, 2020",
      "Laparoscopic Approaches to Fibroid Management - MMC Clinical Notes, 2016"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "09:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:00 PM - 05:30 PM" }
    ]
  },
  {
    id: 5,
    name: "Dr. Vikram Malhotra",
    specialization: "Neurosurgery",
    designation: "HOD - Neurosurgery",
    experience: 18,
    fee: 1000,
    rating: 4.9,
    reviews: 110,
    availability: "Tue, Thu, Sat",
    slots: ["10:30 AM", "11:30 AM", "02:00 PM", "04:00 PM"],
    image: dr5,
    bio: "Dr. Vikram Malhotra is a world-class neurosurgeon with extensive experience in brain tumor surgery, spine surgery, and stroke intervention. Formerly a research fellow at NIMHANS Bangalore, he leads the hospital's neurosciences board.",
    qualifications: "MS (Surgery), M.Ch (Neurosurgery) - NIMHANS Bangalore",
    email: "dr.vikram@aarogyalife.in",
    previousHospitals: ["NIMHANS Bangalore", "Medanta - The Medicity, Gurugram"],
    expertiseAreas: ["Brain Tumor Surgery", "Spine Surgery", "Stroke Intervention", "Minimally Invasive Neurosurgery"],
    publications: [
      "Minimally Invasive Approaches to Spinal Tumors - NIMHANS Annals, 2019",
      "Endovascular Management of Acute Stroke - Neurology India, 2015"
    ],
    opdSchedule: [
      { day: "Tue, Thu, Sat", time: "10:30 AM - 01:00 PM" },
      { day: "Tue, Thu", time: "02:00 PM - 04:30 PM" }
    ]
  },
  {
    id: 6,
    name: "Dr. Sunita Rao",
    specialization: "Dermatology",
    designation: "Consultant Dermatologist",
    experience: 8,
    fee: 650,
    rating: 4.6,
    reviews: 76,
    availability: "Mon - Fri",
    slots: ["09:30 AM", "10:30 AM", "12:00 PM", "03:00 PM", "04:00 PM"],
    image: dr6,
    bio: "Dr. Sunita Rao specializes in clinical dermatology, skin cancer screenings, and aesthetic skincare procedures. She takes a holistic approach to skin health, designing customized skincare regimens that address root conditions.",
    qualifications: "MD (Dermatology, Venereology & Leprosy) - GMC Mumbai",
    email: "dr.sunita@aarogyalife.in",
    previousHospitals: ["GMC Mumbai", "Kaya Skin Clinic, Mumbai"],
    expertiseAreas: ["Clinical Dermatology", "Skin Cancer Screening", "Cosmetic Dermatology", "Allergy & Patch Testing"],
    publications: [
      "Patterns of Skin Cancer Presentation in Western India - Indian Journal of Dermatology, 2020",
      "Patch Testing Protocols for Contact Dermatitis - GMC Mumbai Review, 2014"
    ],
    opdSchedule: [
      { day: "Mon - Fri", time: "09:30 AM - 12:30 PM" },
      { day: "Mon, Wed, Fri", time: "03:00 PM - 04:30 PM" }
    ]
  },
  {
    id: 7,
    name: "Dr. Ananya Kulkarni",
    specialization: "Oncology",
    designation: "Senior Consultant - Medical Oncology",
    experience: 13,
    fee: 900,
    rating: 4.8,
    reviews: 92,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "10:00 AM", "12:00 PM", "02:30 PM", "04:30 PM"],
    image: dr3,
    bio: "Dr. Ananya Kulkarni leads the Medical Oncology division at Aarogya Life Hospital's Cancer Institute, focused on chemotherapy protocols, targeted therapy, and long-term survivorship care for adult cancer patients.",
    qualifications: "MD (Medicine), DM (Medical Oncology) - Tata Memorial Centre, Mumbai",
    email: "dr.ananya@aarogyalife.in",
    previousHospitals: ["Tata Memorial Centre, Mumbai", "Rajiv Gandhi Cancer Institute, Delhi"],
    expertiseAreas: ["Chemotherapy Protocols", "Targeted Therapy", "Breast & GI Cancers", "Survivorship Care"],
    publications: [
      "Targeted Therapy Outcomes in HER2-Positive Breast Cancer - Tata Memorial Series, 2021",
      "Chemotherapy Protocol Adherence in Tier-2 Cancer Centres - Indian Journal of Oncology, 2018"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "09:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:30 PM - 05:00 PM" }
    ]
  },
  {
    id: 8,
    name: "Dr. Karan Mehta",
    specialization: "Oncology",
    designation: "Consultant - Surgical Oncology",
    experience: 11,
    fee: 950,
    rating: 4.7,
    reviews: 64,
    availability: "Tue, Thu, Sat",
    slots: ["10:00 AM", "11:00 AM", "02:00 PM", "03:30 PM"],
    image: null,
    bio: "Dr. Karan Mehta is a surgical oncologist specializing in complex tumor resections, breast conservation surgery, and minimally invasive oncologic procedures at the Cancer Institute.",
    qualifications: "MS (Surgery), M.Ch (Surgical Oncology) - Rajiv Gandhi Cancer Institute, Delhi",
    email: "dr.karan@aarogyalife.in",
    previousHospitals: ["Rajiv Gandhi Cancer Institute, Delhi", "AIIMS New Delhi"],
    expertiseAreas: ["Tumor Resection", "Breast Conservation Surgery", "Laparoscopic Oncology", "Reconstructive Surgery"],
    publications: [
      "Breast Conservation Surgery Outcomes in Indian Women - Annals of Surgical Oncology India, 2020",
      "Minimally Invasive Techniques in GI Oncologic Surgery - RGCI Review, 2017"
    ],
    opdSchedule: [
      { day: "Tue, Thu, Sat", time: "10:00 AM - 01:00 PM" },
      { day: "Tue, Thu", time: "02:00 PM - 04:00 PM" }
    ]
  },
  {
    id: 9,
    name: "Dr. Neha Kapoor",
    specialization: "Gastroenterology",
    designation: "Consultant Gastroenterologist",
    experience: 9,
    fee: 800,
    rating: 4.6,
    reviews: 58,
    availability: "Mon - Fri",
    slots: ["09:30 AM", "11:00 AM", "01:00 PM", "03:30 PM"],
    image: null,
    bio: "Dr. Neha Kapoor specializes in diagnostic and therapeutic endoscopy, liver disease management, and inflammatory bowel disease, offering comprehensive digestive health care.",
    qualifications: "MD (Medicine), DM (Gastroenterology) - PGIMER Chandigarh",
    email: "dr.neha@aarogyalife.in",
    previousHospitals: ["PGIMER Chandigarh", "Sir Ganga Ram Hospital, Delhi"],
    expertiseAreas: ["Therapeutic Endoscopy", "Liver Disease", "Inflammatory Bowel Disease", "Pancreatic Disorders"],
    publications: [
      "Endoscopic Management of Upper GI Bleeds - Indian Journal of Gastroenterology, 2019",
      "IBD Prevalence Trends in North India - PGIMER Study, 2016"
    ],
    opdSchedule: [
      { day: "Mon - Fri", time: "09:30 AM - 12:30 PM" },
      { day: "Mon, Wed, Fri", time: "01:00 PM - 03:30 PM" }
    ]
  },
  {
    id: 10,
    name: "Dr. Suresh Iyer",
    specialization: "ENT & Head-Neck Surgery",
    designation: "Senior Consultant - ENT",
    experience: 16,
    fee: 700,
    rating: 4.8,
    reviews: 88,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "10:30 AM", "12:30 PM", "03:00 PM"],
    image: null,
    bio: "Dr. Suresh Iyer is an ENT and head-neck surgeon with expertise in endoscopic sinus surgery, cochlear implants, and head-neck oncologic surgery, serving patients across all age groups.",
    qualifications: "MS (ENT) - Madras Medical College",
    email: "dr.suresh@aarogyalife.in",
    previousHospitals: ["Madras Medical College", "Apollo Hospitals, Chennai"],
    expertiseAreas: ["Endoscopic Sinus Surgery", "Cochlear Implants", "Head & Neck Oncology", "Voice Disorders"],
    publications: [
      "Outcomes of Cochlear Implantation in Pediatric Patients - Indian Journal of Otolaryngology, 2018",
      "Endoscopic Sinus Surgery: A 10-Year Review - MMC Surgical Series, 2015"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "09:00 AM - 12:30 PM" },
      { day: "Mon, Wed, Fri", time: "01:30 PM - 03:30 PM" }
    ]
  },
  {
    id: 11,
    name: "Dr. Anjali Desai",
    specialization: "Ophthalmology",
    designation: "Consultant Ophthalmologist",
    experience: 10,
    fee: 600,
    rating: 4.7,
    reviews: 71,
    availability: "Mon - Fri",
    slots: ["09:30 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    image: null,
    bio: "Dr. Anjali Desai specializes in cataract surgery, refractive procedures, and comprehensive eye care, with a focus on restoring vision through advanced micro-surgical techniques.",
    qualifications: "MS (Ophthalmology) - Seth GS Medical College, Mumbai",
    email: "dr.anjali@aarogyalife.in",
    previousHospitals: ["Seth GS Medical College, Mumbai", "Aravind Eye Hospital, Madurai"],
    expertiseAreas: ["Cataract Surgery", "Refractive Surgery", "Glaucoma Management", "Retina Screening"],
    publications: [
      "Phacoemulsification Outcomes in High-Volume Eye Camps - Indian Journal of Ophthalmology, 2019",
      "Glaucoma Screening in Rural Populations - Aravind Eye Care Study, 2016"
    ],
    opdSchedule: [
      { day: "Mon - Fri", time: "09:30 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:00 PM - 04:30 PM" }
    ]
  },
  {
    id: 12,
    name: "Dr. Manoj Tiwari",
    specialization: "Internal Medicine",
    designation: "Senior Consultant - Internal Medicine",
    experience: 20,
    fee: 550,
    rating: 4.8,
    reviews: 156,
    availability: "Mon - Sat",
    slots: ["08:30 AM", "10:00 AM", "12:00 PM", "02:30 PM", "05:00 PM"],
    image: null,
    bio: "Dr. Manoj Tiwari is a general physician with two decades of experience managing diabetes, hypertension, infectious diseases, and complex multi-system disorders in adults.",
    qualifications: "MBBS, MD (Internal Medicine) - Maulana Azad Medical College, Delhi",
    email: "dr.manoj@aarogyalife.in",
    previousHospitals: ["Maulana Azad Medical College, Delhi", "Safdarjung Hospital, Delhi"],
    expertiseAreas: ["Diabetes Management", "Hypertension", "Infectious Diseases", "Geriatric Medicine"],
    publications: [
      "Long-Term Glycemic Control Strategies in Urban India - Journal of Association of Physicians of India, 2020",
      "Comorbidity Patterns in Elderly Inpatients - Safdarjung Clinical Review, 2014"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "08:30 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:30 PM - 05:30 PM" }
    ]
  },
  {
    id: 13,
    name: "Dr. Ritu Bhatia",
    specialization: "Psychiatry",
    designation: "Consultant Psychiatrist",
    experience: 9,
    fee: 700,
    rating: 4.7,
    reviews: 49,
    availability: "Mon, Wed, Fri",
    slots: ["10:00 AM", "11:30 AM", "03:00 PM", "04:30 PM"],
    image: null,
    bio: "Dr. Ritu Bhatia provides compassionate mental health care spanning mood disorders, anxiety, adolescent counselling, and de-addiction support, in a stigma-free clinical environment.",
    qualifications: "MD (Psychiatry) - NIMHANS Bangalore",
    email: "dr.ritu@aarogyalife.in",
    previousHospitals: ["NIMHANS Bangalore", "Institute of Human Behaviour and Allied Sciences, Delhi"],
    expertiseAreas: ["Mood Disorders", "Anxiety & Stress", "Adolescent Counselling", "De-Addiction"],
    publications: [
      "Adolescent Anxiety Trends Post-Pandemic - Indian Journal of Psychiatry, 2022",
      "De-Addiction Program Outcomes in North India - NIMHANS Report, 2017"
    ],
    opdSchedule: [
      { day: "Mon, Wed, Fri", time: "10:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "03:00 PM - 05:00 PM" }
    ]
  },
  {
    id: 14,
    name: "Dr. Sameer Khanna",
    specialization: "Dental Surgery",
    designation: "Senior Consultant - Dental & Maxillofacial Surgery",
    experience: 12,
    fee: 500,
    rating: 4.6,
    reviews: 67,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"],
    image: null,
    bio: "Dr. Sameer Khanna offers comprehensive dental care including root canal therapy, dental implants, and maxillofacial trauma management with a gentle, patient-first approach.",
    qualifications: "BDS, MDS (Oral & Maxillofacial Surgery) - Manipal College of Dental Sciences",
    email: "dr.sameer@aarogyalife.in",
    previousHospitals: ["Manipal College of Dental Sciences", "Clove Dental, Delhi NCR"],
    expertiseAreas: ["Dental Implants", "Root Canal Therapy", "Maxillofacial Trauma", "Cosmetic Dentistry"],
    publications: [
      "Implant Survival Rates in Indian Patients - Journal of Indian Dental Association, 2019",
      "Management of Maxillofacial Trauma in Road Accident Victims - Manipal Case Series, 2015"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "09:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:30 PM - 05:00 PM" }
    ]
  },
  {
    id: 15,
    name: "Dr. Alok Sinha",
    specialization: "Anaesthesia & Critical Care",
    designation: "HOD - Anaesthesia & Critical Care",
    experience: 17,
    fee: 0,
    rating: 4.9,
    reviews: 40,
    availability: "24/7 On-Call",
    slots: ["On-Call Rotation"],
    image: null,
    bio: "Dr. Alok Sinha heads the Anaesthesia and Critical Care unit, overseeing peri-operative anaesthesia, ICU protocols, and life-support management for critically ill patients around the clock.",
    qualifications: "MD (Anaesthesiology) - AIIMS New Delhi",
    email: "dr.alok@aarogyalife.in",
    previousHospitals: ["AIIMS New Delhi", "Fortis Hospital, Noida"],
    expertiseAreas: ["Peri-operative Anaesthesia", "Critical Care Medicine", "Ventilator Management", "Pain Management"],
    publications: [
      "ICU Protocol Standardization Across Tier-2 Hospitals - Indian Journal of Critical Care Medicine, 2021",
      "Peri-operative Outcomes in High-Risk Surgical Patients - AIIMS Anaesthesia Review, 2016"
    ],
    opdSchedule: [
      { day: "Available 24/7", time: "ICU & Emergency On-Call" }
    ]
  },
  {
    id: 16,
    name: "Dr. Deepak Chawla",
    specialization: "Pathology & Radiology",
    designation: "Senior Consultant - Pathology & Radiology",
    experience: 15,
    fee: 0,
    rating: 4.7,
    reviews: 33,
    availability: "Mon - Sat",
    slots: ["Report Consultation by Appointment"],
    image: null,
    bio: "Dr. Deepak Chawla leads the diagnostic services division, overseeing histopathology, molecular diagnostics, and advanced radiology imaging including MRI and CT reporting.",
    qualifications: "MD (Pathology), Fellowship in Radiodiagnosis - GMC Mumbai",
    email: "dr.deepak@aarogyalife.in",
    previousHospitals: ["GMC Mumbai", "Metropolis Healthcare, Mumbai"],
    expertiseAreas: ["Histopathology", "Molecular Diagnostics", "MRI & CT Reporting", "Interventional Radiology"],
    publications: [
      "Standardizing Histopathology Reporting Templates - Indian Journal of Pathology, 2020",
      "Advances in MRI-Guided Biopsy Techniques - GMC Radiology Bulletin, 2017"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "By Appointment (Reports & Consultation)" }
    ]
  },
  {
    id: 17,
    name: "Dr. Kavita Joshi",
    specialization: "Physiotherapy",
    designation: "Senior Consultant Physiotherapist",
    experience: 11,
    fee: 400,
    rating: 4.8,
    reviews: 52,
    availability: "Mon - Sat",
    slots: ["09:00 AM", "10:30 AM", "12:00 PM", "03:00 PM", "04:30 PM"],
    image: null,
    bio: "Dr. Kavita Joshi designs personalized rehabilitation programs for post-surgical recovery, sports injuries, and chronic musculoskeletal pain using evidence-based physiotherapy techniques.",
    qualifications: "BPT, MPT (Orthopedic Physiotherapy) - Manipal College of Allied Health Sciences",
    email: "dr.kavita@aarogyalife.in",
    previousHospitals: ["Manipal College of Allied Health Sciences", "Sports Injury Centre, Safdarjung Hospital"],
    expertiseAreas: ["Post-Surgical Rehabilitation", "Sports Injury Recovery", "Chronic Pain Management", "Neuro-Rehabilitation"],
    publications: [
      "Rehabilitation Protocols after Total Joint Replacement - Indian Journal of Physiotherapy, 2019",
      "Physiotherapy Outcomes in Chronic Lower Back Pain - Manipal Clinical Study, 2015"
    ],
    opdSchedule: [
      { day: "Mon - Sat", time: "09:00 AM - 01:00 PM" },
      { day: "Mon, Wed, Fri", time: "02:30 PM - 05:00 PM" }
    ]
  },
  {
    id: 18,
    name: "Dr. Arvind Rathore",
    specialization: "Emergency & Trauma",
    designation: "HOD - Emergency & Trauma Medicine",
    experience: 14,
    fee: 0,
    rating: 4.9,
    reviews: 61,
    availability: "24/7 Emergency",
    slots: ["Walk-in / On-Call"],
    image: null,
    bio: "Dr. Arvind Rathore heads the 24/7 Emergency and Trauma department, coordinating rapid trauma response, resuscitation protocols, and multi-disciplinary emergency care for critical patients.",
    qualifications: "MD (Emergency Medicine) - Christian Medical College, Vellore",
    email: "dr.arvind@aarogyalife.in",
    previousHospitals: ["Christian Medical College, Vellore", "AIIMS Trauma Centre, Delhi"],
    expertiseAreas: ["Trauma Resuscitation", "Emergency Triage", "Critical Care Transport", "Mass Casualty Management"],
    publications: [
      "Golden Hour Response Times in Urban Trauma Centres - Journal of Emergency Medicine India, 2021",
      "Triage Protocol Efficacy During Mass Casualty Events - CMC Vellore Report, 2018"
    ],
    opdSchedule: [
      { day: "Available 24/7", time: "Emergency Walk-in & Trauma Bay" }
    ]
  }
];
