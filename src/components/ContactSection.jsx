import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { specialtiesData } from './Specialties';

const contactDetails = [
  {
    title: "Address",
    info: "Aarogya Life Campus, Block B, Sector 62, Noida, Uttar Pradesh - 201301",
    icon: MapPin,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "Phone (Emergency 24/7)",
    info: "1800-200-6000 | +91 99999-99911",
    icon: Phone,
    color: "text-rose-500 bg-rose-50 dark:bg-rose-950/20"
  },
  {
    title: "Email",
    info: "opd.support@aarogyalife.in",
    icon: Mail,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-950/20"
  },
  {
    title: "Working Hours",
    info: "OPD: 08:00 AM - 08:00 PM (Mon - Sat)",
    icon: Clock,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
  }
];

// A fictitious department-wise contact extension list for the demo hospital.
const departmentExtensions = specialtiesData.map((dept, index) => ({
  name: dept.name,
  ext: `EXT-${2100 + index * 5}`
}));

const MAP_EMBED_SRC = "https://www.google.com/maps?q=Sector+62,+Noida,+Uttar+Pradesh&output=embed";

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-12 relative">
      {/* Decorative Orbs */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-medical-50 dark:bg-medical-950/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Top info cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-lg transition-shadow"
              >
                <div className={`p-3 rounded-xl w-fit ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-4 uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  {item.info}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two-column: Contact form + Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Contact Form */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg">
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6">
              Have a question about a department, billing, or general enquiry? Drop us a message and our desk will get back to you.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                <p className="text-sm font-bold text-slate-800 dark:text-white">
                  Thank you! Your message has been received.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Our support desk will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full h-11 px-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-11 px-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full h-11 px-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full px-3.5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand/35 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-12 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Google Map Embed */}
          <div className="lg:col-span-6 glass-panel p-3 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg min-h-[22rem]">
            <iframe
              title="Aarogya Life Hospital Location"
              src={MAP_EMBED_SRC}
              className="w-full h-full min-h-[22rem] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Department-wise contact extension numbers */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">
            Department-Wise Contact Extensions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[420px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-left">
                  <th className="py-2 pr-4 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Department</th>
                  <th className="py-2 font-bold text-slate-400 uppercase tracking-wider text-[10px] text-right">Extension</th>
                </tr>
              </thead>
              <tbody>
                {departmentExtensions.map((dept, idx) => (
                  <tr key={idx} className="border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                    <td className="py-2 pr-4 font-semibold text-slate-700 dark:text-slate-300">{dept.name}</td>
                    <td className="py-2 font-bold text-slate-800 dark:text-slate-200 text-right">{dept.ext}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
