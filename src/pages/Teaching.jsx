import React from 'react';
import { School, Users, Calendar } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Teaching({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj[lang] || obj['en']);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 pb-4 mb-12">
          <div className="p-2 bg-[rgba(255,255,255,0.06)] rounded-lg shadow-sm border border-[rgba(148,163,184,0.35)] text-cyan-200">
            <School size={20} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-50 tracking-tight">
            {lang === 'zh' ? '教学经历' : 'Teaching'}
          </h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {SITE_DATA.teaching.map((course, idx) => (
            <div key={idx} className="card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 w-full group-hover:from-indigo-400 group-hover:to-cyan-300 transition-colors"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm font-bold bg-[rgba(255,255,255,0.06)] text-cyan-100 px-3 py-1.5 rounded-lg border border-[rgba(148,163,184,0.35)]">
                    {course.code}
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <Calendar size={14} /> {course.year}
                  </span>
                </div>
                <h3 className="font-bold text-slate-50 text-2xl mb-2 group-hover:text-cyan-200 transition-colors">
                  {t(course.name)}
                </h3>
                <p className="text-slate-300 text-sm flex items-center gap-2 mb-4">
                  <Users size={14} /> {t(course.role)}
                </p>
                <p className="text-slate-200 leading-relaxed">
                  {t(course.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
