import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DoctorSearch from './components/DoctorSearch';
import DoctorCard from './components/DoctorCard';
import DoctorModal from './components/DoctorModal';
import SuccessModal from './components/SuccessModal';
import AppointmentList from './components/AppointmentList';
import LatestNews from './components/LatestNews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Specialties from './components/Specialties';

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

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  // Intersection Observer for smooth, lag-free active navigation tracking
  useEffect(() => {
    const sections = ['home', 'specialties', 'doctors', 'dashboard', 'contact'];
    
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '-30% 0px -60% 0px', // Focus middle region of the page
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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

  // Handle specialty routing from Latest News -> sets category filter and scrolls directly to booking form input stripe
  const handleSelectSpecialtyFromNews = (specialty) => {
    setSelectedSpecialty(specialty);
    scrollToSection('booking');
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

      {/* Hero Banner with Integrated Quick Booking stripe */}
      <Hero 
        doctors={doctors}
        selectedDoctor={selectedDoctorForBooking}
        setSelectedDoctor={setSelectedDoctorForBooking}
        onBookingSubmit={handleCreateAppointment}
      />

      {/* 4-column Services features directly under Hero */}
      <FeatureGrid />

      {/* Specialties section */}
      <Specialties 
        onSelectSpecialty={handleSelectSpecialtyFromNews} 
        scrollToSection={scrollToSection} 
      />

      {/* Core Doctors Directory Container */}
      <section id="doctors" className="py-16 bg-slate-50/50 dark:bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              Our Doctors
            </h2>
            <div className="h-1 w-16 bg-cyan-brand mx-auto"></div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Browse through our team of highly accredited medical consultants and schedule immediate visits.
            </p>
          </div>

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

      {/* Upcoming Bookings Section */}
      <div id="dashboard" className="bg-white dark:bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AppointmentList 
            appointments={appointments}
            onCancelAppointment={handleCancelAppointment}
            onConfirmAppointment={handleConfirmAppointment}
          />
        </div>
      </div>

      {/* Latest Health News Articles */}
      <LatestNews onSelectSpecialty={handleSelectSpecialtyFromNews} />

      {/* Hospital Coordinates section */}
      <ContactSection />

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
