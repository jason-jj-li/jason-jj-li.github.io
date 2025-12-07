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
  const htmlScopedStyles = `
    .post-html { overflow-x: auto; color: #0f172a; }
    .post-html pre {
      overflow-x: auto;
      white-space: pre;
      background: #f8fafc;
      color: #0f172a;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px;
    }
    .post-html code {
      white-space: pre-wrap;
      word-break: break-word;
      background: #f8fafc;
      color: #0f172a;
      border-radius: 6px;
      padding: 2px 5px;
    }
    .post-html table {
      width: 100%;
      display: block;
      overflow-x: auto;
      border-collapse: collapse;
    }
    .post-html th, .post-html td {
      padding: 8px;
      border: 1px solid #e2e8f0;
    }
    .post-html img, .post-html iframe {
      max-width: 100%;
      height: auto;
    }
    .post-html * { box-sizing: border-box; max-width: 100%; }
  `;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-xl p-8 shadow-sm border border-slate-200 bg-white text-slate-900">
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 article-shell rounded-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium"
          >
            <ArrowLeft size={16} />
            {lang === 'zh' ? '返回' : 'Back'}
          </Link>
        </div>

        <article className="rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200 bg-white text-slate-900">
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

          {post.htmlContent ? (
            <div className="post-html space-y-4 leading-relaxed text-slate-800" style={{ overflowX: 'auto' }}>
              <style>
                {htmlScopedStyles}
                {(post.htmlStyles || []).join('\n')}
              </style>
              <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
            </div>
          ) : post.htmlUrl ? (
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <iframe
                src={post.htmlUrl}
                title={post.title}
                className="w-full min-h-[1200px] border-0"
                style={{ height: '100vh' }}
              />
            </div>
          ) : (
            <div
              className="space-y-4 leading-relaxed text-slate-800"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}
        </article>
      </div>
    </div>
  );
}
