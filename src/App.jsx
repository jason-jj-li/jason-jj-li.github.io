import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Tools from './pages/Tools';
import Teaching from './pages/Teaching';
import Blog from './pages/Blog';
import SeriesDetail from './pages/SeriesDetail';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [lang, setLang] = useState('zh');

  // Light parallax for particle layer: follows mouse when present, drifts when idle.
  useEffect(() => {
    const root = document.documentElement;
    let lastMove = Date.now();

    const updateOffset = (x, y) => {
      root.style.setProperty('--particle-translate-x', `${x}px`);
      root.style.setProperty('--particle-translate-y', `${y}px`);
    };

    const handleMove = (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * 18;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 18;
      updateOffset(x, y);
      lastMove = Date.now();
    };

    const drift = () => {
      const now = Date.now();
      if (now - lastMove > 1400) {
        const t = now * 0.00035;
        const x = Math.sin(t) * 10;
        const y = Math.cos(t * 1.1) * 10;
        updateOffset(x, y);
      }
      frame = requestAnimationFrame(drift);
    };

    window.addEventListener('mousemove', handleMove);
    let frame = requestAnimationFrame(drift);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen relative overflow-hidden bg-[var(--surface)]">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 particle-wave opacity-70"></div>
          <div className="absolute inset-0 bg-aurora opacity-65 mix-blend-screen"></div>
          <div className="absolute inset-0 grid-overlay"></div>
        </div>
        <Navbar lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/research" element={<Research lang={lang} />} />
          <Route path="/tools" element={<Tools lang={lang} />} />
          <Route path="/teaching" element={<Teaching lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />
          <Route path="/blog/series/:seriesId" element={<SeriesDetail lang={lang} />} />
          <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
}
