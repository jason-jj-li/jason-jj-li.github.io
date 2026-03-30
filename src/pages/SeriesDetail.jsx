import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FolderOpen, ExternalLink, FileText, Notebook as NotebookIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { getSeriesById } from '../utils/posts';

const formatDate = (value, lang) => {
  const date = new Date(value);
  if (Number.isNaN(date)) return { day: '--', label: '' };
  return {
    day: String(date.getDate()).padStart(2, '0'),
    label: date.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short', year: 'numeric' }),
  };
};

export default function SeriesDetail({ lang }) {
  const { seriesId } = useParams();
  const series = getSeriesById(seriesId, lang);

  if (!series) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card rounded-xl p-8">
            <p className="text-slate-300 mb-4">
              {lang === 'zh' ? '未找到该系列。' : 'Series not found.'}
            </p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-cyan-200 font-medium">
              <ArrowLeft size={16} />
              {lang === 'zh' ? '返回博客' : 'Back to blog'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const posts = series.posts || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* 返回导航 */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-200 transition-colors"
          >
            <ChevronLeft size={18} />
            {lang === 'zh' ? '返回所有系列' : 'Back to all series'}
          </Link>
        </div>

        {/* 系列标题 */}
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-[rgba(255,255,255,0.06)] rounded-xl text-cyan-200">
            <FolderOpen size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-50">
              {series.name}
            </h1>
            <p className="text-slate-400 mt-1">
              {series.postCount} {lang === 'zh' ? '篇文章' : 'posts'}
            </p>
          </div>
        </div>

        {/* 系列描述 */}
        {series.description && (
          <div className="card rounded-xl p-6 mb-10">
            <p className="text-slate-200 leading-relaxed">{series.description}</p>
          </div>
        )}

        {/* 文章列表 */}
        <div className="grid gap-6">
          {posts.length === 0 ? (
            <div className="card border-dashed text-center rounded-xl p-8 text-slate-400">
              {lang === 'zh' ? '该系列暂无文章' : 'No posts in this series'}
            </div>
          ) : (
            posts.map((post, index) => {
              const date = formatDate(post.date, lang);
              const isNotebook = post.source === 'notebook';
              const sourceLabel = isNotebook
                ? lang === 'zh' ? 'Jupyter 笔记' : 'Jupyter Notebook'
                : lang === 'zh' ? 'Markdown 文章' : 'Markdown Post';

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row gap-6 p-6 md:p-8 card card-hover rounded-xl group"
                >
                  {/* 序号 */}
                  <div className="shrink-0 flex items-center justify-center md:w-16">
                    <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-xl font-bold text-cyan-200 group-hover:bg-cyan-200 group-hover:text-slate-900 transition-colors">
                      {index + 1}
                    </div>
                  </div>

                  {/* 日期 */}
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

                  {/* 内容 */}
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

                  {/* 箭头 */}
                  <div className="self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-200">
                    <ExternalLink size={24} />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
