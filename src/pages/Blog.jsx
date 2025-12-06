import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Blog({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj[lang] || obj['en']);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 pb-4 mb-12">
          <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-500">
            <BookOpen size={20} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {lang === 'zh' ? '博客文章' : 'Blog Posts'}
          </h1>
        </div>
        
        <div className="grid gap-6">
          {SITE_DATA.posts.map((post, idx) => (
            <a 
              key={idx}
              href={post.link} 
              className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="shrink-0 flex md:flex-col items-center md:items-start gap-2 text-slate-400 md:w-24">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-300 group-hover:text-indigo-400 transition-colors">
                    {post.date.split('-')[2]}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold mt-1">
                    {new Date(post.date).toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 border-l-0 md:border-l-2 border-slate-100 md:pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {post.tag || "Article"}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-2xl mb-3 group-hover:text-indigo-600 transition-colors">
                  {t(post.title)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(post.desc)}
                </p>
              </div>
              
              <div className="self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400">
                <ExternalLink size={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
