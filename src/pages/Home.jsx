import React from 'react';
import { Mail, Github, BookOpen, Fingerprint, Linkedin, School, MapPin, Sparkles, ExternalLink, Award, BookOpenCheck, Users, GraduationCap, Briefcase } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Home({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj[lang] || obj['en']);
  const highlights = (SITE_DATA.highlights || []).slice(0, 3);

  const careerNodes = [
    ...SITE_DATA.education.map((item) => ({
      type: 'education',
      title: item.degree,
      place: item.institution,
      period: item.period,
      startYear: item.startYear,
      icon: GraduationCap,
    })),
    ...SITE_DATA.workExperience.map((item) => ({
      type: 'work',
      title: item.title,
      place: item.institution,
      period: item.period,
      startYear: item.startYear,
      icon: Briefcase,
    })),
    {
      type: 'current',
      title: SITE_DATA.currentPosition.title,
      place: SITE_DATA.currentPosition.institution,
      period: SITE_DATA.currentPosition.period,
      startYear: SITE_DATA.currentPosition.startYear,
      icon: School,
    },
  ].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-aurora opacity-50 mix-blend-screen"></div>
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute -top-10 -left-10 w-[320px] h-[320px] bg-cyan-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-[380px] h-[380px] bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-24 relative z-10">
        <section className="fade-in space-y-8">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-50 leading-[1.05] tracking-tight">
              {t(SITE_DATA.profile.name)}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {t(SITE_DATA.profile.title)}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5">
                <School size={15} /> {t(SITE_DATA.profile.university)}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} /> {t(SITE_DATA.profile.location)}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              {/* Compact career timeline */}
              <div className="timeline max-w-2xl mx-auto md:mx-0">
                <div className="space-y-2">
                  {careerNodes.map((node, idx) => {
                    const Icon = node.icon;
                    const isCurrent = node.type === 'current';
                    return (
                      <div
                        key={idx}
                        className={`timeline__node ${
                          isCurrent ? 'border-cyan-400/40 bg-cyan-500/[0.08]' : ''
                        }`}
                      >
                        <div
                          className={`timeline__dot timeline__dot--${
                            isCurrent ? 'current' : node.type
                          }`}
                        ></div>
                        <Icon size={14} className={isCurrent ? 'text-cyan-200' : 'text-slate-400'} />
                        <span className={`font-medium ${isCurrent ? 'text-cyan-50' : 'text-slate-200'}`}>
                          {t(node.title)}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 truncate">{t(node.place)}</span>
                        <span className="text-slate-500 ml-auto shrink-0">{t(node.period)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative shrink-0 flex flex-col items-center md:pt-1 mx-auto md:mx-0">
              <div className="w-56 h-56 md:w-64 md:h-64 relative z-10 mb-5">
                <img 
                  src={import.meta.env.BASE_URL + 'avatar.png'} 
                  alt="Profile" 
                  className="w-full h-full rounded-2xl object-cover shadow-[0_20px_60px_-24px_rgba(14,165,233,0.35)] border-2 border-white/10 hover:border-cyan-300/40 transition-all duration-500"
                />
                <div className="absolute -inset-3 rounded-[22px] bg-gradient-to-br from-cyan-400/20 via-transparent to-indigo-500/20 -z-10 blur-md"></div>
              </div>
              
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {[
                  { href: `mailto:${SITE_DATA.profile.email}`, icon: <Mail size={16} />, label: 'Email' },
                  { href: SITE_DATA.profile.github, icon: <Github size={16} />, label: 'GitHub' },
                  { href: SITE_DATA.profile.scholar, icon: <BookOpen size={16} />, label: 'Google Scholar' },
                  { href: SITE_DATA.profile.researchgate, icon: <span className="font-bold text-base leading-none">R</span>, label: 'ResearchGate' },
                  { href: SITE_DATA.profile.orcid, icon: <Fingerprint size={16} />, label: 'ORCID' },
                  { href: SITE_DATA.profile.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
                ]
                  .filter((s) => s.href)
                  .map((s) => (
                    <IconLink key={s.label} href={s.href} icon={s.icon} label={s.label} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {highlights.length > 0 && (
          <section className="mt-20 fade-in-up stagger-1">
            <div className="section-header">
              <div className="section-header__icon">
                <Sparkles size={16} />
              </div>
              <div>
                <h2 className="section-header__title">
                  {lang === 'zh' ? '最新动态' : 'Recent Highlights'}
                </h2>
                <p className="section-header__subtitle">
                  {lang === 'zh' ? '新闻、发布与演示' : 'News, releases, and demos'}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group card card-hover rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{new Date(item.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US')}</span>
                    <span className="tag">{t(item.tag)}</span>
                  </div>
                  <h3 className="font-semibold text-slate-100 text-lg group-hover:text-cyan-200 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-2">
                    {t(item.desc)}
                  </p>
                  <div className="text-xs text-cyan-200 inline-flex items-center gap-1 font-semibold mt-3">
                    {lang === 'zh' ? '查看' : 'View'} <ExternalLink size={12} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* 学术服务与活动区块 */}
        <section className="mt-20 fade-in-up stagger-2">
          <div className="section-header">
            <div className="section-header__icon">
              <Award size={16} />
            </div>
            <div>
              <h2 className="section-header__title">
                {lang === 'zh' ? '学术服务与活动' : 'Academic Services & Activities'}
              </h2>
              <p className="section-header__subtitle">
                {lang === 'zh' ? '期刊编辑、学会会员与学术贡献' : 'Journal Editing, Professional Membership & Academic Contributions'}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="card rounded-2xl p-5 space-y-3">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-sm">
                <BookOpenCheck size={16} className="text-cyan-200" />
                {lang === 'zh' ? '编辑与审稿' : 'Editorial & Review'}
              </h3>
              <div className="space-y-3">
                {SITE_DATA.academicServices.editorialBoards.map((item, idx) => (
                  <div key={idx} className="text-sm text-slate-200">
                    <div className="font-semibold text-slate-50">{t(item.role)} · {item.journal}</div>
                    <div className="text-slate-400">{t(item.description)}</div>
                    {item.researchTopic && (
                      <div className="mt-1 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[rgba(124,58,237,0.2)] text-cyan-100 text-[11px] font-semibold border border-[rgba(148,163,184,0.35)]">
                        {t(item.researchTopic)}
                      </div>
                    )}
                  </div>
                ))}
                <div className="text-sm text-slate-200 bg-[rgba(255,255,255,0.04)] rounded-lg p-2 border border-[rgba(148,163,184,0.25)]">
                  {t(SITE_DATA.academicServices.additionalServices)}
                </div>
              </div>
            </div>

            <div className="card rounded-2xl p-5 space-y-3">
              <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-sm">
                <Users size={16} className="text-cyan-200" />
                {lang === 'zh' ? '学会会员' : 'Memberships'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SITE_DATA.academicServices.memberships.map((item, idx) => (
                  <span key={idx} className="tag-ghost">
                    {item.name} · {t(item.fullName)}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        <footer className="pt-16 mt-16 border-t border-[rgba(148,163,184,0.25)] text-center pb-8">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {t(SITE_DATA.profile.name)}.<br/>
            Designed with <span className="text-cyan-200">React</span> & <span className="text-cyan-200">Tailwind</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}

const IconLink = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith('mailto:') ? '_self' : '_blank'}
    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
    className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(148,163,184,0.25)] bg-[rgba(255,255,255,0.03)] text-slate-300 hover:border-cyan-400/50 hover:text-cyan-100 hover:bg-cyan-400/10 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);
