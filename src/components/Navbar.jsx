import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Languages } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Navbar({ lang, setLang }) {
  const location = useLocation();
  const t = (obj) => (typeof obj === 'string' ? obj : obj[lang] || obj['en']);

  const navItems = [
    { path: '/', label: { zh: '主页', en: 'Home' } },
    { path: '/research', label: { zh: '研究', en: 'Research' } },
    { path: '/tools', label: { zh: '工具', en: 'Tools' } },
    { path: '/teaching', label: { zh: '教学', en: 'Teaching' } },
    { path: '/blog', label: { zh: '博客', en: 'Blog' } },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgba(10,12,26,0.82)] backdrop-blur-xl border-b border-[rgba(148,163,184,0.25)] z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/"
          className="font-serif font-bold text-xl tracking-tight text-slate-100 hover:text-cyan-200 transition-colors flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-cyan-400 text-white rounded-lg flex items-center justify-center font-sans text-sm shadow-[0_10px_30px_-16px_rgba(34,211,238,0.8)]">
            JL
          </div>
          <span className="hidden sm:inline">{t(SITE_DATA.profile.name)}</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-6 px-2 py-1.5 rounded-full border border-[rgba(148,163,184,0.4)] bg-[rgba(255,255,255,0.04)] shadow-[0_10px_30px_-20px_rgba(34,211,238,0.5)]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-[0_12px_30px_-16px_rgba(34,211,238,0.8)]'
                  : 'text-slate-300 hover:text-cyan-100'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')}
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(148,163,184,0.35)] hover:border-cyan-300 transition-colors text-cyan-200 shadow-[0_10px_30px_-20px_rgba(124,58,237,0.6)]"
          title="Switch Language"
          aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
        >
          <Languages size={18} />
        </button>
      </div>
    </nav>
  );
}
