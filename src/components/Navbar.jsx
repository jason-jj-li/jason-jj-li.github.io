import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/"
          className="font-serif font-bold text-xl tracking-tight text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-sans text-sm">
            AC
          </div>
          <span className="hidden sm:inline">{t(SITE_DATA.profile.name)}</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-6 bg-slate-100/50 px-2 py-1.5 rounded-full border border-slate-200/50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-slate-900 bg-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')}
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600"
          title="Switch Language"
        >
          <Globe size={18} />
        </button>
      </div>
    </nav>
  );
}
