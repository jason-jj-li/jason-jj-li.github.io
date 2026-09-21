import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Tools({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj?.[lang] || obj?.en);
  const zh = lang === 'zh';

  return (
    <main id="main-content" className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 tools-page">

        <header className="research-opening tools-opening">
          <div>
            <p className="eyebrow">{zh ? '工具 / 开放资源' : 'TOOLS / OPEN RESOURCES'}</p>
            <h1>{zh ? '开源工具与资源' : 'Open Tools & Resources'}</h1>
          </div>
          <div className="research-opening-note">
            <p>
              {zh
                ? '目前维护两个开源项目：QualInsight（AI 辅助定性研究平台）与 auto_sim_ai（LLM 合成受访者仿真系统），代码与文档均在 GitHub 公开。'
                : 'Two open-source projects are maintained here: QualInsight (an AI-assisted qualitative research platform) and auto_sim_ai (an LLM-driven synthetic-respondent simulation system). Code and documentation are public on GitHub.'}
            </p>
          </div>
        </header>

        <div className="tools-list">
          {SITE_DATA.openResources.map((item, idx) => (
            <article key={t(item.name)} className="tool-entry">
              <div className="tool-identity">
                <p className="eyebrow">
                  {String(idx + 1).padStart(2, '0')} · {t(item.type)}
                </p>
                <h2>{t(item.name)}</h2>
                <p className="tool-meta">
                  {item.version} · {zh ? '更新于' : 'Updated'} {item.updated.replaceAll('-', '.')}
                </p>
                {item.stack && (
                  <p className="tool-stack">{item.stack.join(' · ')}</p>
                )}
                <div className="tool-links">
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-link">
                    GitHub <ArrowUpRight size={14} />
                  </a>
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noreferrer" className="text-link">
                      {zh ? '在线试用' : 'Live app'} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
              <div className="tool-body">
                <p className="tool-lede">{t(item.desc)}</p>
                <ul className="tool-features">
                  {t(item.features).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
