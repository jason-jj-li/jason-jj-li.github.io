import React, { useMemo, useState } from 'react';
import { Brain, ExternalLink, FileText, Award, Code, GitBranch, ArrowDownRight, ArrowDownLeft, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Research({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj?.[lang] || obj?.['en']);
  const initialPubYear = (SITE_DATA.publications || []).reduce((max, p) => Math.max(max, p.year || 0), 0) || new Date().getFullYear();
  const [selectedPubYear, setSelectedPubYear] = useState(initialPubYear);
  const [showOlderPubYears, setShowOlderPubYears] = useState(false);

  const linkLabels = {
    code: lang === 'zh' ? '代码' : 'Code',
    paper: lang === 'zh' ? '论文' : 'Paper',
    dataset: lang === 'zh' ? '数据集' : 'Dataset',
    website: lang === 'zh' ? '网站' : 'Website',
    video: lang === 'zh' ? '视频' : 'Video',
    benchmark: lang === 'zh' ? '基准' : 'Benchmark',
  };

  const renderLinks = (links = {}) => {
    const keys = Object.keys(links || {}).filter((k) => links[k]);
    if (!keys.length) return null;
    return (
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <a
            key={key}
            href={links[key]}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
          >
            <ExternalLink size={12} />
            <span>{linkLabels[key] || key}</span>
          </a>
        ))}
      </div>
    );
  };

  const renderPubLinks = (links = {}) => {
    const keys = Object.keys(links || {}).filter((k) => links[k]);
    if (!keys.length) return null;
    const labelMap = {
      paper: lang === 'zh' ? 'DOI/链接' : 'DOI/Link',
      pdf: 'PDF',
      code: 'Code',
      project: lang === 'zh' ? '项目' : 'Project',
    };
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {keys.map((key) => (
          <a
            key={key}
            href={links[key]}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200 bg-white hover:border-indigo-200 hover:text-indigo-700 transition-colors"
          >
            <ExternalLink size={12} />
            <span>{labelMap[key] || key}</span>
          </a>
        ))}
      </div>
    );
  };

  const sortedPublications = useMemo(
    () => [...(SITE_DATA.publications || [])].sort((a, b) => b.year - a.year),
    []
  );
  const orcidLink = SITE_DATA.profile?.orcid || SITE_DATA.profile?.scholar || '#';
  const publicationYears = useMemo(
    () => Array.from(new Set(sortedPublications.map((p) => p.year))).sort((a, b) => b - a),
    [sortedPublications]
  );
  const visibleYears = showOlderPubYears ? publicationYears : publicationYears.slice(0, 5);
  const displayedPublications = sortedPublications.filter((pub) => pub.year === selectedPubYear);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <SectionHeader
          icon={<Brain size={20} />}
          title={lang === 'zh' ? '研究方向：生命历程健康不平等' : 'Research Interests: Life-Course Health Inequalities'}
        />

        <div className="card rounded-2xl p-6 md:p-10 bg-white/80 border border-slate-200 relative overflow-hidden">
          {/* 动态连接线 */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-16 -translate-x-1/2 w-px h-[calc(50%-4rem)] bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent animate-pulse"></div>
            <svg className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%]" style={{opacity: 0.3}}>
              <line x1="50%" y1="0" x2="16%" y2="100%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '0.2s'}} />
              <line x1="50%" y1="0" x2="84%" y2="100%" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '0.4s'}} />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#F9A8D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 核心节点 */}
          <div className="flex flex-col items-center text-center gap-4 relative z-10 mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center shadow-xl animate-pulse-slow">
              <GitBranch size={26} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {lang === 'zh' ? '生命历程健康不平等' : 'Life-Course Health Inequalities'}
              </h3>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed">
                {lang === 'zh'
                  ? '以童年逆境为切入，跨国比较制度与文化如何放大或缓冲风险，再衔接环境与社会风险的叠加效应，构建机制—情境—应用的研究闭环。从以下三个方面开展研究：'
                  : 'Using childhood adversity as the entry point, this research compares how institutions and cultures amplify or buffer risks across countries, then examines the interactive effects of environmental and social risks to construct a mechanism—context—application loop. Three research foci:'}
              </p>
            </div>
          </div>

          {/* 三分支卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: lang === 'zh' ? '童年逆境与健康轨迹' : 'Childhood Adversity & Health Trajectories',
                desc: lang === 'zh'
                  ? '分析ACEs如何在生命历程中导致多种健康结局的风险，并识别可介入节点。'
                  : 'Examine how ACEs generate risks for multiple health outcomes across the life course and identify critical intervention points.',
                gradient: 'from-indigo-50 to-purple-50',
                borderColor: 'border-indigo-200',
                iconColor: 'text-indigo-600',
                dotColor: 'bg-indigo-500'
              },
              {
                title: lang === 'zh' ? '跨国比较与制度调节' : 'Cross-national Comparisons & Institutional Contexts',
                desc: lang === 'zh'
                  ? '基于跨国数据，比较同一早期风险在不同制度与文化情境下如何转化为不同程度的健康不平等。'
                  : 'Leverage cross-national data to compare how the same early-life risks translate into varying degrees of health inequality across diverse institutional and cultural contexts.',
                gradient: 'from-purple-50 to-pink-50',
                borderColor: 'border-purple-200',
                iconColor: 'text-purple-600',
                dotColor: 'bg-purple-500'
              },
              {
                title: lang === 'zh' ? '环境与社会风险叠加' : 'Environmental & Social Risk Interactions',
                desc: lang === 'zh'
                  ? '在资源约束与全球南方情境中，评估环境与社会因素的交互作用，如何在生命历程中形成健康不平等。'
                  : 'In resource-constrained and Global South settings, evaluate how interactions between environmental and social factors compound to generate health inequalities across the life course.',
                gradient: 'from-pink-50 to-rose-50',
                borderColor: 'border-pink-200',
                iconColor: 'text-pink-600',
                dotColor: 'bg-pink-500'
              },
            ].map((node, idx) => (
              <div 
                key={idx} 
                className={`group bg-gradient-to-br ${node.gradient} border-2 ${node.borderColor} rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative cursor-pointer`}
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full ${node.dotColor} flex-shrink-0`}></div>
                    <h4 className="font-bold text-slate-900 text-base leading-tight">{node.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 研究逻辑流程 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-8 px-2">
          <div className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 shadow-sm">
            <p className="text-sm font-semibold text-slate-800 text-center">
              {lang === 'zh' ? '追踪早期暴露的生命历程效应' : 'Track life-course effects of early exposures'}
            </p>
          </div>
          <ArrowRight size={20} className="text-indigo-400 hidden md:block" />
          <div className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-sm">
            <p className="text-sm font-semibold text-slate-800 text-center">
              {lang === 'zh' ? '比较情境下的调节机制' : 'Compare contextual moderation'}
            </p>
          </div>
          <ArrowRight size={20} className="text-purple-400 hidden md:block" />
          <div className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 shadow-sm">
            <p className="text-sm font-semibold text-slate-800 text-center">
              {lang === 'zh' ? '评估风险叠加与干预优先级' : 'Assess risk interactions & intervention priorities'}
            </p>
          </div>
        </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>

        <SectionHeader
          icon={<FileText size={20} />}
          title={lang === 'zh' ? '发表论文' : 'Publications'}
          subtitle={lang === 'zh' ? '按年份浏览论文与链接。' : 'Browse papers by year with links.'}
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500">
              {lang === 'zh' ? '展示（发表年份）' : 'Show (Publication Year)'}
            </span>
            <div className="flex gap-2 flex-wrap">
              {visibleYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedPubYear(year)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                    selectedPubYear === year
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'border-slate-200 text-slate-500 hover:border-indigo-200'
                  }`}
                >
                  {year}
                </button>
              ))}
              {publicationYears.length > 5 && (
                <button
                  onClick={() => setShowOlderPubYears((v) => !v)}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-slate-200 text-slate-500 hover:border-indigo-200 transition-all"
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-700 transition-colors bg-white"
              >
                Scholar <ExternalLink size={12} />
              </a>
            )}
            {SITE_DATA.profile?.orcid && (
              <a
                href={SITE_DATA.profile.orcid}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors"
              >
                ORCID <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        <div className="grid gap-2">
          {displayedPublications.map((pub, idx) => {
            const isFirstAuthor = (pub.authors || '').trim().startsWith('Jiajia Li') || (pub.authors || '').trim().startsWith('李佳佳');
            return (
              <div
                key={idx}
                className={`card card-hover rounded-2xl p-5 md:p-6 border-l-4 ${isFirstAuthor ? 'border-l-purple-400 bg-gradient-to-r from-white via-purple-50/40 to-white' : 'border-l-slate-200'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug flex items-center gap-2">
                    {isFirstAuthor && <Award size={16} className="text-purple-600" />}
                    {pub.title}
                  </h4>
                  <span className="tag-ghost">{pub.year}</span>
                </div>
                <p className="text-slate-600 text-sm mb-2 leading-relaxed">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="tag-ghost flex items-center gap-1">
                    <Code size={12} className="text-indigo-500" />
                    {pub.venue}
                  </span>
                  {isFirstAuthor && (
                    <span className="tag-ghost bg-purple-50 text-purple-700 border-purple-200">
                      {lang === 'zh' ? '一作' : 'First author'}
                    </span>
                  )}
                </div>
                {renderPubLinks(pub.links)}
              </div>
            );
          })}
        </div>

        {/* Other sections removed per request; focusing on interests, projects, and publications */}
      </div>
    </div>
  );
}

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-500">
      {icon}
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);
