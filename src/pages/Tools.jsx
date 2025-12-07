import React from 'react';
import { Database, ExternalLink, Filter } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Tools({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj?.[lang] || obj?.en);
  const areaLabel = (key) => {
    const found = SITE_DATA.researchInterests.find((item) => item.key === key);
    return found ? t(found) : key;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <header className="flex items-start gap-3">
          <div className="p-2 bg-[rgba(255,255,255,0.06)] rounded-lg shadow-sm border border-[rgba(148,163,184,0.35)] text-cyan-200">
            <Database size={20} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-50 tracking-tight">
              {lang === 'zh' ? '开源工具与数据集' : 'Open Tools & Datasets'}
            </h1>
            <p className="text-slate-300 mt-1">
              {lang === 'zh'
                ? '公共资源、数据集、基准与文档链接。'
                : 'Public resources, datasets, benchmarks, and docs.'}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SITE_DATA.openResources.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group card card-hover rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-50 group-hover:text-cyan-200 transition-colors">
                  {t(item.name)}
                </h3>
                <span className="tag-ghost">{t(item.type)}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
                {item.version && (
                  <span className="tag-ghost">{item.version}</span>
                )}
                {item.updated && (
                  <span className="tag-ghost">
                    {lang === 'zh' ? '更新' : 'Updated'}: {item.updated}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-3">
                {t(item.desc)}
              </p>
              {item.stack && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.stack.map((tech) => (
                    <span key={tech} className="tag-ghost">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {item.useCases && (
                <div className="mb-3">
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    {lang === 'zh' ? '应用场景' : 'Use Cases'}
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {t(item.useCases).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.advantages && (
                <div className="mb-3">
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    {lang === 'zh' ? '核心优势' : 'Core Advantages'}
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {t(item.advantages).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.areas && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.areas.map((area) => (
                    <span key={area} className="tag-ghost">
                      {areaLabel(area)}
                    </span>
                  ))}
                </div>
              )}
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                <span className="text-cyan-200">{lang === 'zh' ? '查看资源' : 'View resource'}</span> <ExternalLink size={12} className="text-cyan-200" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Filter size={14} />
          {lang === 'zh' ? '可按领域标签浏览相关资源。' : 'Browse by area tags to find related resources.'}
        </div>
      </div>
    </div>
  );
}
