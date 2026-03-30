import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FolderOpen, ChevronRight, FileText } from 'lucide-react';
import { getSeries } from '../utils/posts';

export default function Blog({ lang }) {
  const seriesList = getSeries(lang);

  // 筛选出有系列的和没系列的
  const categorizedSeries = seriesList.filter((s) => s.id !== 'uncategorized');
  const uncategorized = seriesList.find((s) => s.id === 'uncategorized');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 pb-4 mb-12">
          <div className="p-2 bg-[rgba(255,255,255,0.06)] rounded-lg shadow-sm border border-[rgba(148,163,184,0.35)] text-cyan-200">
            <BookOpen size={20} />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-50 tracking-tight">
              {lang === 'zh' ? '博客系列' : 'Blog Series'}
            </h1>
            <p className="text-slate-300 mt-1">
              {lang === 'zh'
                ? '按主题组织的文章集合，点击系列查看全部内容'
                : 'Collections organized by topic. Click a series to explore.'}
            </p>
          </div>
        </div>

        {/* 系列卡片网格 */}
        {categorizedSeries.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {categorizedSeries.map((series) => (
              <Link
                key={series.id}
                to={`/blog/series/${series.id}`}
                className="group card card-hover rounded-xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[rgba(255,255,255,0.06)] rounded-lg text-cyan-200 group-hover:text-cyan-300 transition-colors">
                    <FolderOpen size={28} />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-[rgba(255,255,255,0.04)] px-2 py-1 rounded-full">
                    {series.postCount} {lang === 'zh' ? '篇' : 'posts'}
                  </span>
                </div>

                <h3 className="font-bold text-slate-50 text-xl mb-2 group-hover:text-cyan-200 transition-colors">
                  {series.name}
                </h3>

                {series.description && (
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                    {series.description}
                  </p>
                )}

                <div className="flex items-center gap-1 text-sm text-cyan-200 font-medium mt-auto">
                  {lang === 'zh' ? '查看系列' : 'View series'}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 无系列文章 */}
        {uncategorized && uncategorized.posts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-50 mb-6">
              {lang === 'zh' ? '其他文章' : 'Other Articles'}
            </h2>
            <div className="grid gap-4">
              {uncategorized.posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-4 p-4 card card-hover rounded-lg group"
                >
                  <div className="p-2 bg-[rgba(255,255,255,0.06)] rounded text-cyan-200">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-slate-400">{post.date}</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-500 group-hover:text-cyan-200 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {seriesList.length === 0 && (
          <div className="card border-dashed text-center rounded-xl p-8 text-slate-300">
            {lang === 'zh'
              ? '暂无文章，添加 .md 或 .ipynb 即可出现这里。'
              : 'No posts yet. Add a .md or .ipynb and it will show up here.'}
          </div>
        )}
      </div>
    </div>
  );
}
