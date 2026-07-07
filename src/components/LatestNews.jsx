import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { newsArticles } from '../data/news';

export default function LatestNews({ onOpenArticle }) {
  return (
    <section className="py-16 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex justify-between items-center">
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
            News & Events
          </h2>
          <div className="h-1.5 w-12 bg-cyan-brand"></div>
        </div>

        {/* 3 Column Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
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
                    onClick={() => onOpenArticle(article.slug)}
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
                  onClick={() => onOpenArticle(article.slug)}
                  className="w-fit px-4 py-2 bg-cyan-brand hover:bg-cyan-600 text-white font-extrabold text-[10px] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer transition-colors rounded-sm"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
