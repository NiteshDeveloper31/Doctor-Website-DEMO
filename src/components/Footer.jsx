import React, { useState } from 'react';
import { HeartPulse, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear();
  const [quickContact, setQuickContact] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuickContact(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!quickContact.name || !quickContact.email || !quickContact.message) {
      alert("Please fill all fields.");
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert(`Thank you ${quickContact.name}, your message has been sent to our desks!`);
      setQuickContact({ name: '', email: '', message: '' });
    }, 1000);
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

          {/* Column 2: Latest Posts */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Latest Posts
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-550 dark:text-slate-405">
              <li>
                <a href="#doctors" onClick={(e) => { e.preventDefault(); scrollToSection('doctors'); }} className="hover:text-cyan-brand transition-colors block py-0.5">
                  Update: OPD Schedule Changes
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-cyan-brand transition-colors block py-0.5">
                  Cardiac Health Seminar Noida
                </a>
              </li>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-cyan-brand transition-colors block py-0.5">
                  New Pediatric Care Wing Open
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (with Social Icons) */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-450 shrink-0 mt-0.5" />
                <span>Sector 62, Noida, UP, India</span>
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

            {/* Social Icons row (using inline SVGs for compatibility) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-cyan-brand text-white rounded hover:bg-cyan-600 transition-colors flex items-center justify-center">
                <svg className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Quick Contact (mini-form) */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider border-l-2 border-cyan-brand pl-2.5">
              Quick Contact
            </h4>
            <form onSubmit={handleQuickSend} className="space-y-2 flex flex-col items-end">
              <div className="grid grid-cols-2 gap-2 w-full">
                <input
                  type="text"
                  name="name"
                  value={quickContact.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full text-xs p-2.5 bg-white dark:bg-slate-900 border border-slate-350 dark:border-slate-850 rounded-sm focus:outline-none focus:border-cyan-brand text-slate-805 dark:text-slate-205"
                />
                <input
                  type="email"
                  name="email"
                  value={quickContact.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full text-xs p-2.5 bg-white dark:bg-slate-900 border border-slate-350 dark:border-slate-855 rounded-sm focus:outline-none focus:border-cyan-brand text-slate-805 dark:text-slate-205"
                />
              </div>
              <textarea
                name="message"
                value={quickContact.message}
                onChange={handleInputChange}
                rows={2}
                placeholder="Message"
                className="w-full text-xs p-2.5 bg-white dark:bg-slate-900 border border-slate-350 dark:border-slate-850 rounded-sm focus:outline-none focus:border-cyan-brand text-slate-805 dark:text-slate-205 resize-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className="px-4 py-2 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[10px] uppercase tracking-widest rounded-sm cursor-pointer transition-colors active:opacity-90 self-end"
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
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
