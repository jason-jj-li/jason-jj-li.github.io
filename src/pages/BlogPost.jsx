import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Notebook as NotebookIcon, FileText, Download } from 'lucide-react';
import { getPostBySlug } from '../utils/posts';

const formatDateLabel = (value, lang) => {
  const date = new Date(value);
  if (Number.isNaN(date)) return '';
  return date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function BlogPost({ lang }) {
  const { slug } = useParams();
  const post = getPostBySlug(slug, lang);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <p className="text-slate-700 mb-4">
              {lang === 'zh' ? '未找到文章。' : 'Post not found.'}
            </p>
            <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 font-medium">
              <ArrowLeft size={16} />
              {lang === 'zh' ? '返回博客列表' : 'Back to blog'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const dateLabel = formatDateLabel(post.date, lang);
  const sourceLabel = post.source === 'notebook'
    ? lang === 'zh' ? '来自 Jupyter Notebook（本地已编译 HTML）' : 'From Jupyter Notebook (precompiled HTML)'
    : lang === 'zh' ? 'Markdown 文章' : 'Markdown Post';

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium"
          >
            <ArrowLeft size={16} />
            {lang === 'zh' ? '返回' : 'Back'}
          </Link>
        </div>

        <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
            {dateLabel && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {dateLabel}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Tag size={14} />
              {post.tag || (lang === 'zh' ? '文章' : 'Article')}
            </span>
            <span className="inline-flex items-center gap-1">
              {post.source === 'notebook' ? <NotebookIcon size={14} /> : <FileText size={14} />}
              {sourceLabel}
            </span>
            {post.notebookUrl && (
              <a
                href={post.notebookUrl}
                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium"
                download
              >
                <Download size={14} />
                {lang === 'zh' ? '下载 notebook' : 'Download notebook'}
              </a>
            )}
          </div>

          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {post.htmlUrl ? (
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <iframe
                src={post.htmlUrl}
                title={post.title}
                className="w-full"
                style={{ minHeight: '720px' }}
              />
            </div>
          ) : (
            <div
              className="space-y-4 leading-relaxed text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}
        </article>
      </div>
    </div>
  );
}
