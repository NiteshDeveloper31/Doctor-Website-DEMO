import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DoctorSearch from './components/DoctorSearch';
import DoctorCard from './components/DoctorCard';
import DoctorModal from './components/DoctorModal';
import SuccessModal from './components/SuccessModal';
import LatestNews from './components/LatestNews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Specialties from './components/Specialties';
import WhyChooseUs from './components/WhyChooseUs';
import BookingFormPage from './components/BookingFormPage';
import SubPageHero from './components/SubPageHero';

import { doctorsData } from './data/doctors';
import { initialAppointments } from './data/appointments';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Doctors & Appointments State
  const [doctors, setDoctors] = useState(doctorsData);
  const [appointments, setAppointments] = useState(initialAppointments);
  
  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  // Selected Doctor states
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState(null);
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState(null);

  // Success Confirmation State
  const [successDetails, setSuccessDetails] = useState(null);

  // Navigation tracking
  const [activeSection, setActiveSection] = useState('home');

  // Sync dark mode class with HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Page Navigation / Router Handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter Doctors list based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialization === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  // Handle direct doctor selection from Card/Modal -> scrolls user directly to booking form input stripe
  const handleSelectDoctorForBooking = (doctor) => {
    setSelectedDoctorForBooking(doctor);
    scrollToSection('booking');
  };

  // Handle specialty routing from Latest News -> sets category filter and redirects to doctors directory
  const handleSelectSpecialtyFromNews = (specialty) => {
    setSelectedSpecialty(specialty);
    scrollToSection('doctors');
  };

  // Create appointment handler
  const handleCreateAppointment = (formData) => {
    const newAppointment = {
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: formData.patientName,
      email: formData.email,
      phone: formData.phone,
      doctorId: parseInt(formData.doctorId),
      doctorName: formData.doctorName,
      specialization: formData.specialization,
      date: formData.date,
      timeSlot: 'Any Time', // default fallback
      reason: formData.reason,
      status: "Confirmed" // auto-confirm on demo submit
    };

    setAppointments(prev => [newAppointment, ...prev]);
    setSuccessDetails(newAppointment);

    // Fetch targeted doctor's email for routing
    const targetDoctor = doctors.find(doc => doc.id === newAppointment.doctorId);
    const doctorEmail = targetDoctor ? targetDoctor.email : '';

    // Build a beautifully formatted multi-line appointment summary for the generic Message block
    const formattedMessage = `
--- APPOINTMENT DETAILS ---
Ticket ID: ${newAppointment.id}
Doctor: ${newAppointment.doctorName} (${newAppointment.specialization})
Date: ${newAppointment.date}
Patient Phone: ${newAppointment.phone}

Patient Symptoms / Reason:
${newAppointment.reason}
`.trim();

    // Prepare EmailJS dynamic template variables (mapping all standard default variables as fallbacks)
    const templateParams = {
      // 1. Patient Name variations (Covers every standard naming convention)
      from_name: newAppointment.patientName,
      name: newAppointment.patientName,
      Name: newAppointment.patientName,
      patient_name: newAppointment.patientName,
      patientName: newAppointment.patientName,
      user_name: newAppointment.patientName,
      userName: newAppointment.patientName,
      user: newAppointment.patientName,
      User: newAppointment.patientName,
      sender_name: newAppointment.patientName,
      senderName: newAppointment.patientName,
      sender: newAppointment.patientName,
      contact_name: newAppointment.patientName,
      contactName: newAppointment.patientName,
      client_name: newAppointment.patientName,
      clientName: newAppointment.patientName,
      visitor_name: newAppointment.patientName,
      visitorName: newAppointment.patientName,
      full_name: newAppointment.patientName,
      fullName: newAppointment.patientName,
      FullName: newAppointment.patientName,
      from: newAppointment.patientName,

      // 2. Email variations (Covers every standard naming convention)
      email: newAppointment.email,
      Email: newAppointment.email,
      patient_email: newAppointment.email,
      patientEmail: newAppointment.email,
      user_email: newAppointment.email,
      userEmail: newAppointment.email,
      reply_to: newAppointment.email,
      replyTo: newAppointment.email,
      ReplyTo: newAppointment.email,
      from_email: newAppointment.email,
      fromEmail: newAppointment.email,
      sender_email: newAppointment.email,
      senderEmail: newAppointment.email,
      contact_email: newAppointment.email,
      contactEmail: newAppointment.email,
      client_email: newAppointment.email,
      clientEmail: newAppointment.email,
      visitor_email: newAppointment.email,
      visitorEmail: newAppointment.email,

      // 3. Phone variations
      phone: newAppointment.phone,
      Phone: newAppointment.phone,
      patient_phone: newAppointment.phone,
      patientPhone: newAppointment.phone,

      // 4. Message variations
      message: formattedMessage,
      Message: formattedMessage,
      reason: newAppointment.reason,
      Reason: newAppointment.reason,

      // Doctor Info
      doctor_name: newAppointment.doctorName,
      doctor_email: doctorEmail,
      specialization: newAppointment.specialization,
      appointment_date: newAppointment.date,
      date: newAppointment.date,
      appointment_time: newAppointment.timeSlot,
      timeSlot: newAppointment.timeSlot,

      // Ticket ID
      ticket_id: newAppointment.id,
      id: newAppointment.id
    };

    // Dispatch email notification via EmailJS
    emailjs.send(
      'service_2typb8y', // EmailJS Service ID
      'template_k7z5b09', // EmailJS Template ID
      templateParams,
      'x1gSusWWDNmKOTWLi' // EmailJS Public Key
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
  };

  // Cancel appointment handler
  const handleCancelAppointment = (id) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, status: 'Cancelled' } : apt)
    );
  };

  // Confirm appointment (for Pending items)
  const handleConfirmAppointment = (id) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, status: 'Confirmed' } : apt)
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Navbar header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Conditionally render different pages */}
      {activeSection === 'home' && (
        <>
          {/* Hero Banner with Integrated Quick Booking stripe */}
          <Hero 
            doctors={doctors}
            selectedDoctor={selectedDoctorForBooking}
            setSelectedDoctor={setSelectedDoctorForBooking}
            onBookingSubmit={handleCreateAppointment}
            scrollToSection={scrollToSection}
          />

          {/* 4-column Services features directly under Hero */}
          <FeatureGrid />

          {/* Detailed Statistics and Advantages panel */}
          <WhyChooseUs />

          {/* Latest Health News Articles */}
          <LatestNews onSelectSpecialty={handleSelectSpecialtyFromNews} />
        </>
      )}

      {activeSection === 'specialties' && (
        <div className="min-h-[70vh] bg-slate-50/30 dark:bg-slate-955/20 pb-16">
          <SubPageHero 
            title="Clinical Specialties" 
            subtitle="Choose from our wide range of world-class medical departments staffed by board-certified consultants." 
            breadcrumb="Specialties"
          />
          {/* Specialties section */}
          <Specialties 
            onSelectSpecialty={handleSelectSpecialtyFromNews} 
            scrollToSection={scrollToSection} 
          />
        </div>
      )}

      {activeSection === 'booking' && (
        <div className="min-h-[70vh] bg-slate-50/30 dark:bg-slate-955/20 pb-16">
          <SubPageHero 
            title="Book Appointment" 
            subtitle="Schedule clinical checkups or virtual consultations with India's top medical practitioners." 
            breadcrumb="Book Appointment"
          />
          <BookingFormPage 
            doctors={doctors}
            selectedDoctor={selectedDoctorForBooking}
            setSelectedDoctor={setSelectedDoctorForBooking}
            onBookingSubmit={handleCreateAppointment}
          />
        </div>
      )}

      {activeSection === 'doctors' && (
        <div className="min-h-[70vh] bg-slate-50/30 dark:bg-slate-955/20">
          <SubPageHero 
            title="Find Doctors" 
            subtitle="Browse through our team of highly accredited medical consultants and schedule immediate visits." 
            breadcrumb="Find Doctors"
          />
          <section id="doctors" className="py-12 bg-slate-50/50 dark:bg-slate-955">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              
              {/* Search filters */}
              <DoctorSearch 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedSpecialty={selectedSpecialty}
                setSelectedSpecialty={setSelectedSpecialty}
              />

              {/* Doctors Grid */}
              {filteredDoctors.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded border border-dashed border-slate-200 dark:border-slate-800">
                  <p className="text-slate-550 dark:text-slate-400 font-semibold text-sm">
                    No specialists found matching your current filter criteria.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedSpecialty("All"); }}
                    className="mt-3 text-xs font-bold text-cyan-brand hover:underline"
                  >
                    Reset Search Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDoctors.map(doctor => (
                    <DoctorCard 
                      key={doctor.id}
                      doctor={doctor}
                      onSelectDoctor={handleSelectDoctorForBooking}
                      onViewProfile={(doc) => setSelectedDoctorForModal(doc)}
                    />
                  ))}
                </div>
              )}

            </div>
          </section>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="min-h-[70vh] bg-slate-50/30 dark:bg-slate-955/20 pb-16">
          <SubPageHero 
            title="Contact Us" 
            subtitle="Reach out to our emergency support networks or walk into our sector-62 Noida campus." 
            breadcrumb="Contact Us"
          />
          {/* Hospital Coordinates section */}
          <ContactSection />
        </div>
      )}

      {/* Footer disclaimer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Modals area */}
      <DoctorModal 
        doctor={selectedDoctorForModal}
        isOpen={selectedDoctorForModal !== null}
        onClose={() => setSelectedDoctorForModal(null)}
        onBookAppointment={handleSelectDoctorForBooking}
      />

      <SuccessModal 
        isOpen={successDetails !== null}
        onClose={() => setSuccessDetails(null)}
        appointmentDetails={successDetails}
        scrollToSection={scrollToSection}
      />

    </div>
  );
}
