import React, { useState } from 'react';

export default function DoctorImage({ src, name = '', specialty = '', className }) {
  const [error, setError] = useState(false);

  // Compute initials (e.g., "Dr. Rajesh Kumar" -> "RK")
  const getInitials = (doctorName) => {
    if (!doctorName) return "MD";
    const cleanName = doctorName.replace(/^Dr\.\s+/i, '').trim();
    const parts = cleanName.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return cleanName.slice(0, 2).toUpperCase();
  };

  // Deterministically map any department name to a stable color, so new
  // specialities added to doctors.js never need a manual switch-case entry.
  const DEPT_COLORS = [
    'bg-rose-500 text-white', 'bg-sky-500 text-white', 'bg-amber-500 text-white',
    'bg-purple-500 text-white', 'bg-indigo-500 text-white', 'bg-teal-500 text-white',
    'bg-cyan-500 text-white', 'bg-emerald-500 text-white', 'bg-orange-500 text-white',
    'bg-violet-500 text-white', 'bg-pink-500 text-white', 'bg-lime-600 text-white',
  ];

  const getBgColorClass = (dept) => {
    if (!dept) return DEPT_COLORS[0];
    let hash = 0;
    for (let i = 0; i < dept.length; i++) {
      hash = (hash * 31 + dept.charCodeAt(i)) >>> 0;
    }
    return DEPT_COLORS[hash % DEPT_COLORS.length];
  };

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center font-bold tracking-wider select-none ${getBgColorClass(specialty)} ${className}`}>
        {/* Doctor Initials */}
        <span className="text-3xl font-black">{getInitials(name)}</span>
        {/* Dept subtitle */}
        <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-80">{specialty}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={altName(name)}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

// helper to clean alt tag
const altName = (name) => name || 'Doctor Portrait';
