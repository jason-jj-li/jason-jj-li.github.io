import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink, Award, ArrowDown } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Research({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj?.[lang] || obj?.['en']);
  const location = useLocation();
  const initialPubYear = (SITE_DATA.publications || []).reduce((max, p) => Math.max(max, p.year || 0), 0) || new Date().getFullYear();
  const [selectedPubYear, setSelectedPubYear] = useState(initialPubYear);
  const [showOlderPubYears, setShowOlderPubYears] = useState(false);

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [location.hash]);

  const pubLinkLabel = {
    paper: lang === 'zh' ? 'DOI/链接' : 'DOI/Link',
    pdf: 'PDF',
    code: 'Code',
    project: lang === 'zh' ? '项目' : 'Project',
  };
  const renderPubLinks = (links = {}) => {
    const keys = Object.keys(links || {}).filter((k) => links[k] && links[k] !== '#');
    if (!keys.length) return null;
    return keys.map((key) => (
      <a
        key={key}
        href={links[key]}
        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--steel)] hover:text-[var(--steel-strong)] transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        {pubLinkLabel[key] || key} <ExternalLink size={11} />
      </a>
    ));
  };

  const sortedPublications = useMemo(
    () => [...(SITE_DATA.publications || [])].sort((a, b) => b.year - a.year),
    []
  );
  const publicationYears = useMemo(
    () => Array.from(new Set(sortedPublications.map((p) => p.year))).sort((a, b) => b - a),
    [sortedPublications]
  );
  const visibleYears = showOlderPubYears ? publicationYears : publicationYears.slice(0, 5);
  const displayedPublications = sortedPublications.filter((pub) => pub.year === selectedPubYear);

  const zh = lang === 'zh';

  return (
    <main id="main-content" className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 research-page">

        <section className="research-overview" aria-labelledby="research-title">
          <header className="research-opening">
            <div>
              <p className="eyebrow">{zh ? '研究 / 健康社会学' : 'RESEARCH / SOCIOLOGY OF HEALTH'}</p>
              <h1 id="research-title">
                {zh ? <>社会经历如何<br /><span>塑造疾病与健康？</span></> : <>How do social experiences<br /><span>shape illness & health?</span></>}
              </h1>
              <p className="research-perspective">
                {zh ? '生命历程视角' : 'A life-course perspective'}
              </p>
            </div>
            <div className="research-opening-note">
              <p>
                {zh
                  ? '我关注疾病与健康在生命历程中的社会生产过程：社会结构与制度环境如何塑造个体的生活经历，早期条件与成年轨迹又如何累积、传递或补偿，形成疾病风险、健康及其社会差异。'
                  : 'I study how illness and health are socially produced across the life course: how social structures and institutions shape lived experiences, and how early conditions and adult trajectories accumulate, transmit, or offset disadvantage to shape disease risk, health, and social differences.'}
              </p>
              <a href="#pubs" className="text-link">
                {zh ? '直接浏览发表论文' : 'Go to publications'} <ArrowDown size={15} />
              </a>
            </div>
          </header>

          <div className="research-programmes" aria-labelledby="programmes-title">
            <div className="research-programmes-heading">
              <h2 id="programmes-title">{zh ? '贯穿生命历程的研究' : 'Research across the life course'}</h2>
              <span>{zh ? '三个相互关联的研究切入点' : 'Three connected lines of inquiry'}</span>
            </div>
            <div className="research-programmes-grid">
              {SITE_DATA.researchDirections.map((dir) => (
                <article key={dir.key} id={dir.key} className="research-programme">
                  <p className="research-programme-stage">
                    <span>{dir.number}</span> {t(dir.stage)}
                  </p>
                  <h3>{t(dir.title)}</h3>
                  <p className="research-programme-description">{t(dir.desc)}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="research-methods" aria-labelledby="methods-title">
            <h2 id="methods-title">{zh ? '数据与方法' : 'Data & methods'}</h2>
            <p>
              {zh
                ? '依托中国及国际纵向调查与出生队列，结合生命史与序列分析、跨队列数据协调和跨国比较，追踪社会经历与疾病、健康之间的长期联系。'
                : 'Drawing on longitudinal surveys and birth cohorts in China and internationally, I combine life-history and sequence analysis, cross-cohort harmonization, and cross-national comparisons to trace the long-term links between social experiences, illness, and health.'}
            </p>
          </aside>
        </section>

        {/* ============ 04 PUBLICATIONS ============ */}
        <section id="pubs" className="scroll-mt-24">
          <SectionHeader
            title={lang === 'zh' ? '发表论文' : 'Publications'}
            subtitle={lang === 'zh' ? '按年份浏览论文与链接。' : 'Browse papers by year with links.'}
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-500">
                {lang === 'zh' ? '展示（发表年份）' : 'Show (Publication Year)'}
              </span>
              <div className="flex gap-2 flex-wrap">
                {visibleYears.map((year) => (
                  <button
                    key={year}
                    aria-pressed={selectedPubYear === year}
                    onClick={() => setSelectedPubYear(year)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                      selectedPubYear === year
                        ? 'bg-[var(--steel-bg)] text-[var(--steel)] border-[var(--steel-border)]'
                        : 'border-[var(--border)] text-slate-200 hover:border-[var(--steel-border)]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
                {publicationYears.length > 5 && (
                  <button
                    onClick={() => setShowOlderPubYears((v) => !v)}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-[var(--border)] text-slate-200 hover:border-[var(--steel-border)] transition-all"
                  >
                    {showOlderPubYears ? (lang === 'zh' ? '收起' : 'Less') : (lang === 'zh' ? '更多年份' : 'More years')}
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {SITE_DATA.profile?.scholar && (
                <a
                  href={SITE_DATA.profile.scholar}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] text-slate-100 hover:border-[var(--steel-border)] hover:text-[var(--steel)] transition-colors bg-[var(--panel)]"
                >
                  Scholar <ExternalLink size={12} />
                </a>
              )}
              {SITE_DATA.profile?.orcid && (
                <a
                  href={SITE_DATA.profile.orcid}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--border)] text-slate-100 bg-[var(--panel)] hover:border-[var(--steel-border)] hover:text-[var(--steel)] transition-colors"
                >
                  ORCID <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          <div className="border-t border-[var(--border)]">
            {displayedPublications.map((pub, idx) => {
              const isFirstAuthor = (pub.authors || '').trim().startsWith('Jiajia Li') || (pub.authors || '').trim().startsWith('李佳佳');
              return (
                <article key={idx} className="py-5 border-b border-[var(--border)]">
                  <h4 className="font-semibold text-slate-50 leading-snug text-[15px] md:text-base">
                    {isFirstAuthor && <Award size={14} className="inline mr-1.5 -mt-0.5 text-[var(--steel)]" />}
                    {pub.title}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2">
                    <span className="italic text-sm text-slate-300">{pub.venue}</span>
                    {isFirstAuthor && (
                      <span className="px-2 py-0.5 rounded-full bg-[var(--steel-bg)] text-[var(--steel)] text-[11px] font-semibold border border-[var(--steel-border)]">
                        {lang === 'zh' ? '一作' : 'First author'}
                      </span>
                    )}
                    {renderPubLinks(pub.links)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

const SectionHeader = ({ title, subtitle }) => (
  <header className="mb-8 md:mb-10">
    <div className="flex items-baseline gap-4 flex-wrap">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-50 tracking-tight">{title}</h2>
      {subtitle && <span className="text-xs md:text-sm text-slate-500">{subtitle}</span>}
    </div>
    <div className="mt-4 h-px bg-[rgba(148,163,184,0.2)]"></div>
  </header>
);
