import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Navbar({ lang, setLang }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const items = [ ['/', '主页', 'Home'], ['/research', '研究', 'Research'], ['/tools', '工具', 'Tools'], ['/teaching', '教学', 'Teaching'], ['/blog', '博客', 'Blog'] ];
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="wordmark" aria-label={lang === 'zh' ? '李佳佳 · 首页' : 'Jiajia Li · Home'}>
          <span className="monogram">JL<span>.</span></span>
          <span className="wordmark-name">{SITE_DATA.profile.name[lang]}<small>ACADEMIC WEBSITE</small></span>
        </Link>
        <nav id="primary-navigation" aria-label={lang === 'zh' ? '主导航' : 'Main navigation'} className={`nav-links ${open ? 'is-open' : ''}`}>
          {items.map(([path, zh, en]) => {
            const active = path === '/' ? pathname === '/' : pathname.startsWith(path);
            return <Link key={path} to={path} aria-current={active ? 'page' : undefined} className={active ? 'active' : ''}>{lang === 'zh' ? zh : en}</Link>;
          })}
        </nav>
        <div className="nav-actions">
          <button className="language-button" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}><span className={lang === 'zh' ? 'selected' : ''}>中</span><span className="language-divider">/</span><span className={lang === 'en' ? 'selected' : ''}>EN</span></button>
          <a className="nav-contact" href={`mailto:${SITE_DATA.profile.email}`}>{lang === 'zh' ? '联系我' : 'Get in touch'}<ArrowUpRight size={14}/></a>
          <button className="menu-button" aria-expanded={open} aria-controls="primary-navigation" aria-label={lang === 'zh' ? '切换导航菜单' : 'Toggle navigation'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>
    </header>
  );
}
