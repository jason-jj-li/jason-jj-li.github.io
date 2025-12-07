import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Notebook as NotebookIcon, FileText } from 'lucide-react';
import { getPosts } from '../utils/posts';

const formatDate = (value, lang) => {
  const date = new Date(value);
  if (Number.isNaN(date)) return { day: '--', label: '' };
  return {
    day: String(date.getDate()).padStart(2, '0'),
    label: date.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short', year: 'numeric' })
  };
};

export default function Blog({ lang }) {
  const posts = getPosts(lang);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 pb-4 mb-12">
          <div className="p-2 bg-[rgba(255,255,255,0.06)] rounded-lg shadow-sm border border-[rgba(148,163,184,0.35)] text-cyan-200">
            <BookOpen size={20} />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-50 tracking-tight">
              {lang === 'zh' ? '博客文章' : 'Blog Posts'}
            </h1>
            <p className="text-slate-300 mt-1">
              {lang === 'zh'
                ? '每篇文章都是单独文件，支持 Markdown 与 Jupyter Notebook'
                : 'Each post is its own file—Markdown or Jupyter Notebook backed.'}
            </p>
          </div>
        </div>

        {posts.length === 0 && (
          <div className="card border-dashed text-center rounded-xl p-8 text-slate-300">
            {lang === 'zh' ? '暂无文章，添加 .md 或 .ipynb 即可出现这里。' : 'No posts yet. Add a .md or .ipynb and it will show up here.'}
          </div>
        )}

        <div className="grid gap-6">
          {posts.map((post) => {
            const date = formatDate(post.date, lang);
            const isNotebook = post.source === 'notebook';
            const sourceLabel = isNotebook
              ? lang === 'zh' ? 'Jupyter 笔记' : 'Jupyter Notebook'
              : lang === 'zh' ? 'Markdown 文章' : 'Markdown Post';

            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row gap-6 p-6 md:p-8 card hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="shrink-0 flex md:flex-col items-center md:items-start gap-2 text-slate-400 md:w-24">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-400 group-hover:text-cyan-200 transition-colors">
                      {date.day}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-bold mt-1">
                      {date.label}
                    </div>
                  </div>
                </div>

                <div className="flex-1 border-l-0 md:border-l-2 border-[rgba(148,163,184,0.25)] md:pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-300 to-indigo-300 px-3 py-1 rounded-full">
                      {post.tag || (lang === 'zh' ? '文章' : 'Article')}
                    </span>
                    <span className="text-xs font-semibold text-slate-100 bg-[rgba(255,255,255,0.06)] px-3 py-1 rounded-full flex items-center gap-1 border border-[rgba(148,163,184,0.35)]">
                      {isNotebook ? <NotebookIcon size={14} /> : <FileText size={14} />}
                      {sourceLabel}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-50 text-2xl mb-3 group-hover:text-cyan-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-200">
                  <ExternalLink size={24} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
