import React, { useState } from 'react';
import { HeartPulse, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import { specialtiesData } from './Specialties';

export default function Footer({ scrollToSection, onSelectSpecialty }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Specialties', id: 'specialties' },
    { label: 'Find Doctors', id: 'doctors' },
    { label: 'Book Appointment', id: 'booking' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const footerDepartments = specialtiesData.slice(0, 8);

  const handleDeptClick = (deptId) => {
    onSelectSpecialty(deptId);
    scrollToSection('doctors');
  };

  return (
    <footer className="bg-slate-55 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300 py-16 text-slate-600 dark:text-slate-400 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 mb-10 border-b border-slate-200 dark:border-slate-800">
          
          {/* Column 1: About Us (Brand details) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-cyan-brand text-white p-2 rounded-full h-9 w-9 flex items-center justify-center">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
                AAROGYA
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Aarogya Life Hospital is committed to providing outstanding medical treatments, advanced diagnostics, and compassionate clinical care. Certified by NABH India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-550 dark:text-slate-405">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="hover:text-cyan-brand transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Departments
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-550 dark:text-slate-405">
              {footerDepartments.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => handleDeptClick(dept.id)}
                    className="hover:text-cyan-brand transition-colors block py-0.5 text-left cursor-pointer"
                  >
                    {dept.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info + Map thumbnail */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-450 shrink-0 mt-0.5" />
                <span>Aarogya Life Campus, Block B, Sector 62, Noida, UP - 201301</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-450 shrink-0" />
                <span>1800-200-6000 (Toll-Free)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-450 shrink-0" />
                <span>info@aarogyalife.in</span>
              </li>
            </ul>

            {/* Static map thumbnail */}
            <div
              onClick={() => scrollToSection('contact')}
              className="relative h-24 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 cursor-pointer group"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0,188,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,0.08) 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            >
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 group-hover:bg-slate-150 dark:group-hover:bg-slate-850 transition-colors" style={{ opacity: 0.6 }} />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 text-cyan-brand dark:text-cyan-400 font-bold text-[10px] uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                <span>View Map & Directions</span>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" aria-label="Facebook" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium">
          <div>
            &copy; {currentYear} Aarogya Life Hospital. All rights reserved.
          </div>
          
          <div className="flex items-center gap-3">
            <span>Designed for Hospital Demo</span>
            <span>•</span>
            <span>Noida, UP</span>
          </div>
        </div>

      </div>

      {/* Scroll-to-Top Button (Rotated arrow in black square in bottom right) */}
      <div className="absolute bottom-5 right-5 z-20">
        <button
          onClick={() => scrollToSection('home')}
          className="p-3 bg-slate-950 hover:bg-cyan-brand text-white transition-colors duration-200 shadow shadow-black/20 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

    </footer>
  );
}
