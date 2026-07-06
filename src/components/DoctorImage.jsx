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

  // Select customized medical background color based on department
  const getBgColorClass = (dept) => {
    switch (dept) {
      case 'Cardiology':
        return 'bg-rose-500 text-white';
      case 'Pediatrics':
        return 'bg-sky-500 text-white';
      case 'Orthopedics':
        return 'bg-amber-500 text-white';
      case 'Gynecology':
        return 'bg-purple-500 text-white';
      case 'Neurology':
        return 'bg-indigo-500 text-white';
      case 'Dermatology':
        return 'bg-teal-500 text-white';
      default:
        return 'bg-cyan-500 text-white';
    }
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
