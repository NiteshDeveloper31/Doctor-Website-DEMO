import React from 'react';
import { CalendarDays, ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { newsArticles } from '../data/news';

export default function NewsDetailPage({ slug, onBack, onConsultSpecialty }) {
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 py-20 text-center">
        <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
          This news article could not be found.
        </p>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-5 py-2.5 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to News</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-slate-50/30 dark:bg-slate-955/20 pb-16">
      {/* Top back bar (on plain background, always visible regardless of banner image) */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-brand dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to News</span>
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20"></div>
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 gap-3">
          <button
            onClick={onBack}
            className="w-fit flex items-center gap-1.5 text-[10px] font-black text-white/80 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to News</span>
          </button>
          <span className="w-fit px-2.5 py-1 bg-cyan-brand text-white rounded-md text-[10px] font-black uppercase tracking-wider">
            {article.specialty} Department
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-100">
            <CalendarDays className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        <p className="text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed font-medium">
          {article.fullContent}
        </p>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 md:p-6 border border-slate-200/50 dark:border-slate-800 space-y-3 shadow-sm">
          <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-cyan-brand" />
            Recommended Clinical Actions
          </h4>
          <ul className="space-y-2">
            {article.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-brand mt-1.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={onBack}
            className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-extrabold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Back to News
          </button>
          <button
            onClick={() => onConsultSpecialty(article.specialty)}
            className="px-5 py-2.5 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <span>Consult {article.specialty} Department</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
