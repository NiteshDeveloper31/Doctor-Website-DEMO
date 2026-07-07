import React, { useState } from 'react';
import { HeartPulse, Sun, Moon, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'SPECIALITIES', id: 'specialties' },
    { label: 'FIND DOCTORS', id: 'doctors' },
    { label: 'BOOK APPOINTMENT', id: 'booking' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 transition-all duration-300 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Circular Blue Icon + Text */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            {/* Cyan Circle Logo */}
            <div className="bg-cyan-brand text-white p-2 rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center h-11 w-11">
              <HeartPulse className="h-6 w-6 animate-pulse-slow" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-cyan-brand transition-colors">
                AAROGYA
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-none">
                LIFE HOSPITAL
              </span>
            </div>
          </div>

          {/* Centered Navigation Links with Underlines */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-[11px] font-extrabold tracking-wider px-0.5 py-1.5 transition-all duration-200 border-b-2 ${isActive
                    ? 'border-cyan-brand text-cyan-brand dark:text-cyan-400'
                    : 'border-transparent text-slate-600 dark:text-slate-350 hover:text-cyan-brand'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Area: Helpline & Dark Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Light blue/grey hotline pill */}
            <a
              href="tel:18002006000"
              className="flex items-center gap-2 px-4 py-2 bg-[#e8f4fd] dark:bg-slate-800/80 text-[#436577] dark:text-[#93b3c3] rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span className="text-[10px] font-extrabold whitespace-nowrap">24/7 Helpline: 1800-200-6000</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5 text-amber-500" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5 text-amber-500" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 px-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded font-bold text-xs tracking-wide transition-all ${isActive
                    ? 'bg-cyan-brand text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Mobile Hotline */}
          <a
            href="tel:+919999999911"
            className="flex items-center justify-center gap-3.5 w-full py-3.5 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-450 border border-rose-200 dark:border-rose-900/50 rounded-xl font-extrabold text-xs"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Emergency: +91 99999-99911</span>
          </a>
        </div>
      )}
    </nav>
  );
}
