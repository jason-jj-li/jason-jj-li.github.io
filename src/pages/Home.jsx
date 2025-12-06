import React from 'react';
import { Mail, Github, BookOpen, Fingerprint, School, MapPin, Sparkles, ExternalLink, Award, BookOpenCheck, Users } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Home({ lang }) {
  const t = (obj) => (typeof obj === 'string' ? obj : obj[lang] || obj['en']);
  const highlights = (SITE_DATA.highlights || []).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-aurora opacity-80 mix-blend-screen"></div>
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute -top-10 -left-10 w-[320px] h-[320px] bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-[380px] h-[380px] bg-indigo-200/40 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <section className="fade-in">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                  {t(SITE_DATA.profile.name)}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-light">
                  {t(SITE_DATA.profile.title)}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <School size={16} /> {t(SITE_DATA.profile.university)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} /> {t(SITE_DATA.profile.location)}
                  </span>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t(SITE_DATA.profile.bio)}
              </p>

            </div>

            <div className="relative order-1 md:order-2 shrink-0 flex flex-col items-center">
              <div className="w-64 h-64 md:w-72 md:h-72 relative z-10 mb-6">
                <img 
                  src={import.meta.env.BASE_URL + 'avatar.png'} 
                  alt="Profile" 
                  className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex gap-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
                  {SITE_DATA.stats.map((stat, i) => (
                    <div key={i} className={i !== 0 ? "pl-4 border-l border-slate-100" : ""}>
                      <div className="text-xl font-bold text-indigo-600">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">{t(stat.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-full h-full bg-slate-200/50 rounded-2xl -z-10"></div>
              
              <div className="flex items-center justify-center gap-2 mt-2">
                <IconLink href={`mailto:${SITE_DATA.profile.email}`} icon={<Mail size={18} />} label="Email" />
                <IconLink href={SITE_DATA.profile.github} icon={<Github size={18} />} label="GitHub" />
                <IconLink href={SITE_DATA.profile.scholar} icon={<BookOpen size={18} />} label="Google Scholar" />
                <IconLink href={SITE_DATA.profile.researchgate} icon={<span className="font-bold text-lg leading-none">R</span>} label="ResearchGate" />
                <IconLink href={SITE_DATA.profile.orcid} icon={<Fingerprint size={18} />} label="ORCID" />
              </div>
            </div>
          </div>
        </section>

        {highlights.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 pb-4 mb-6">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-500">
                <Sparkles size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900">
                  {lang === 'zh' ? '最新动态' : 'Recent Highlights'}
                </h2>
                <p className="text-sm text-slate-500">
                  {lang === 'zh' ? '新闻、发布与演示' : 'News, releases, and demos'}
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group card card-hover rounded-xl p-5"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>{new Date(item.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US')}</span>
                    <span className="tag">{t(item.tag)}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg group-hover:text-indigo-700 transition-colors">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {t(item.desc)}
                  </p>
                  <div className="text-xs text-indigo-600 inline-flex items-center gap-1 font-semibold mt-3">
                    {lang === 'zh' ? '查看' : 'View'} <ExternalLink size={12} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* 学术服务与活动区块 */}
        <section className="mt-16">
          <div className="flex items-center gap-3 pb-3 mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-500">
              <Award size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                {lang === 'zh' ? '学术服务与活动' : 'Academic Services & Activities'}
              </h2>
              <p className="text-sm text-slate-500">
                {lang === 'zh' ? '期刊编辑、学会会员与学术贡献' : 'Journal Editing, Professional Membership & Academic Contributions'}
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="card rounded-xl p-4 bg-white/80 border border-slate-200 space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <BookOpenCheck size={18} className="text-indigo-600" />
                {lang === 'zh' ? '编辑与审稿' : 'Editorial & Review'}
              </h3>
              <div className="space-y-3">
                {SITE_DATA.academicServices.editorialBoards.map((item, idx) => (
                  <div key={idx} className="text-sm text-slate-700">
                    <div className="font-semibold">{t(item.role)} · {item.journal}</div>
                    <div className="text-slate-500">{t(item.description)}</div>
                    {item.researchTopic && (
                      <div className="mt-1 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-semibold">
                        {t(item.researchTopic)}
                      </div>
                    )}
                  </div>
                ))}
                <div className="text-sm text-slate-600 bg-slate-50 rounded-lg p-2">
                  {t(SITE_DATA.academicServices.additionalServices)}
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-4 bg-white/80 border border-slate-200 space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Users size={18} className="text-indigo-600" />
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

        <footer className="pt-16 mt-16 border-t border-slate-200 text-center pb-8">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {t(SITE_DATA.profile.name)}.<br/>
            Designed with <span className="text-indigo-400">React</span> & <span className="text-indigo-400">Tailwind</span>.
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
    className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-500 hover:border-indigo-200 hover:text-indigo-700 transition-all shadow-[0_10px_30px_-24px_rgba(79,70,229,0.5)]"
    aria-label={label}
  >
    {icon}
  </a>
);
