import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Research = lazy(() => import('./pages/Research'));
const Tools = lazy(() => import('./pages/Tools'));
const Teaching = lazy(() => import('./pages/Teaching'));
const Blog = lazy(() => import('./pages/Blog'));
const SeriesDetail = lazy(() => import('./pages/SeriesDetail'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

export default function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('academic-site-language') === 'en' ? 'en' : 'zh'; } catch { return 'zh'; } });

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('academic-site-language', lang); } catch {}
  }, [lang]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen relative overflow-hidden bg-[var(--surface)]">
        <a className="skip-link" href="#main-content">{lang === 'zh' ? '跳转到正文' : 'Skip to content'}</a>
        <RouteEffects />
        <Navbar lang={lang} setLang={setLang} />
        <div className="route-content" id="page-content">
        <ErrorBoundary lang={lang}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/research" element={<Research lang={lang} />} />
              <Route path="/tools" element={<Tools lang={lang} />} />
              <Route path="/teaching" element={<Teaching lang={lang} />} />
              <Route path="/blog" element={<Blog lang={lang} />} />
              <Route path="/blog/series/:seriesId" element={<SeriesDetail lang={lang} />} />
              <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
              <Route path="*" element={<main id="main-content" className="min-h-screen pt-40 px-6 text-center"><p className="eyebrow justify-center">404</p><h1 className="text-4xl my-6">{lang === 'zh' ? '这一页尚未写下。' : 'This page has yet to be written.'}</h1><Link to="/" className="btn-primary">{lang === 'zh' ? '返回首页' : 'Back to home'}</Link></main>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        </div>
        <footer className="site-footer"><Link className="footer-signature" to="/">Jiajia Li.</Link><span>{lang === 'zh' ? '健康社会学 · 疾病与健康的社会生产' : 'Sociology of Health · Illness & Health'}</span><span>© {new Date().getFullYear()} {lang === 'zh' ? '李佳佳' : 'Jiajia Li'}</span></footer>
      </div>
    </Router>
  );
}

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
