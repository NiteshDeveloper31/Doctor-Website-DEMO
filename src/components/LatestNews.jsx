import React, { useState } from 'react';
import { CalendarDays, ArrowRight, X, Heart, ShieldAlert, Award, FileText } from 'lucide-react';

export default function LatestNews({ onSelectSpecialty }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Cardiovascular Wellness in Summer",
      date: "July 05, 2026",
      snippet: "Discover cardiologist guidelines to maintain heart health during high humidity and summer waves.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400&auto=format&fit=crop",
      specialty: "Cardiology",
      fullContent: "As summer temperatures soar, keeping your cardiovascular system safe is critical. High heat and humidity cause the body to radiate heat to keep its temperature stable, forcing the heart to beat faster and pump more blood. Cardiologists recommend staying hydrated, avoiding peak heat hours, and recognizing early warning signs of cardiac heat stress like excessive sweating, dizziness, and palpitations.",
      tips: [
        "Drink at least 3 to 4 liters of water daily to maintain blood volume.",
        "Limit strenuous outdoor activities between 11:00 AM and 04:00 PM.",
        "Monitor blood pressure levels regularly if you have a prior cardiac history."
      ]
    },
    {
      id: 2,
      title: "Childhood Immunization Calendars",
      date: "July 02, 2026",
      snippet: "A simple guide for parents to trace primary vaccine schedules and childhood booster timings.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&auto=format&fit=crop",
      specialty: "Pediatrics",
      fullContent: "Following a pediatric immunization schedule is key to protecting children from preventable infectious diseases. This clinical guide covers essential vaccines from infancy through adolescence, highlighting booster timings and detailing why keeping records updated is vital for preschool registrations. Routine immunizations build defense shields against viral and bacterial pathogens.",
      tips: [
        "Stick strictly to the scheduled weeks recommended by your pediatrician.",
        "Consult a specialist immediately if you miss a booster slot to design a catch-up plan.",
        "Keep digital backups of immunization cards for quick school access."
      ]
    },
    {
      id: 3,
      title: "Advances in Joint Replacements",
      date: "June 28, 2026",
      snippet: "How robotic-assisted orthopedics surgery speeds up recovery and rehabilitation guidelines.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop",
      specialty: "Orthopedics",
      fullContent: "Robotic-assisted joint replacement surgery is transforming orthopedic recovery. By mapping out custom bone structures in 3D prior to incisions, surgeons can align implants with sub-millimeter precision. This technology leads to less surrounding tissue damage, reduced postoperative pain, and a faster return to active daily living.",
      tips: [
        "Pre-surgery physical conditioning helps build muscle support beforehand.",
        "Follow the post-op mobilization plan on day 1 to prevent joint stiffness.",
        "Regular physical therapy is crucial to regain full range of motion."
      ]
    },
    {
      id: 4,
      title: "Clinical Skin Care Routines",
      date: "June 25, 2026",
      snippet: "Aesthetic skin procedures and daily routines curated by specialists for skin type optimization.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop",
      specialty: "Dermatology",
      fullContent: "Developing a clinical skin care routine goes beyond aesthetics; it is vital for long-term health and preventing skin diseases. Curated by top dermatologists, this guide outlines the correct order of product application, how to identify your skin type (oily, dry, combination, sensitive), and why UV protection is the ultimate anti-aging tool.",
      tips: [
        "Always apply broad-spectrum sunscreen SPF 30+ daily, even indoors.",
        "Avoid harsh chemical scrubs that damage the natural moisture barrier.",
        "Keep skin hydrated to maintain its natural defense barrier."
      ]
    }
  ];

  const handleConsultClick = (specialty) => {
    setSelectedArticle(null);
    if (onSelectSpecialty) {
      onSelectSpecialty(specialty);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex justify-between items-center">
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            Latest News
          </h2>
          <div className="h-1.5 w-12 bg-cyan-brand"></div>
        </div>

        {/* 4 Column Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col h-full rounded"
            >
              {/* Article Image */}
              <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-4.5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <CalendarDays className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedArticle(article)}
                    className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug hover:text-cyan-brand transition-colors cursor-pointer"
                  >
                    {article.title}
                  </h3>
                  
                  {/* Snippet */}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                {/* Read More button (Solid Cyan) */}
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="w-fit px-4 py-2 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[10px] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer transition-colors rounded-sm"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Article Modal overlay */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Dark Overlay */}
            <div 
              className="fixed inset-0 bg-slate-900/55 dark:bg-black/85 transition-opacity" 
              onClick={() => setSelectedArticle(null)}
            />

            {/* Modal Box */}
            <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transform transition-transform duration-200 scale-100 flex flex-col max-h-[90vh]">
              
              {/* Header Close button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-350 rounded-full transition-colors"
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                
                {/* Visual Banner */}
                <div className="h-56 w-full rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Header info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-brand uppercase tracking-wider">
                    <CalendarDays className="h-4 w-4" />
                    <span>{selectedArticle.date}</span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span className="px-2 py-0.5 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 rounded-md text-[10px]">
                      {selectedArticle.specialty} Department
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>

                {/* Full Article Content */}
                <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-normal">
                  {selectedArticle.fullContent}
                </p>

                {/* Clinical Checklists / Tips */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-cyan-brand" />
                    Recommended Clinical Actions
                  </h4>
                  <ul className="space-y-2">
                    {selectedArticle.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-brand mt-1.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button routing to booking */}
                <div className="pt-2 flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-extrabold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    Close Article
                  </button>
                  <button
                    onClick={() => handleConsultClick(selectedArticle.specialty)}
                    className="px-5 py-2.5 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Consult {selectedArticle.specialty} Department</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
