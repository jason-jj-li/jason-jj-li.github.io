import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Tools from './pages/Tools';
import Teaching from './pages/Teaching';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [lang, setLang] = useState('zh');

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-50">
        <Navbar lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/research" element={<Research lang={lang} />} />
          <Route path="/tools" element={<Tools lang={lang} />} />
          <Route path="/teaching" element={<Teaching lang={lang} />} />
          <Route path="/blog" element={<Blog lang={lang} />} />
          <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
}
