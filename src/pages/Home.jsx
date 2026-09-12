import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Github, Fingerprint } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Home({ lang }) {
  const t = (obj) => typeof obj === 'string' ? obj : obj?.[lang] || obj?.en;
  const zh = lang === 'zh';
  const p = SITE_DATA.profile;
  const news = [...SITE_DATA.highlights].sort((a,b) => b.date.localeCompare(a.date)).slice(0,3);
  const career = [
    { ...SITE_DATA.currentPosition, current: true },
    ...[...SITE_DATA.workExperience].sort((a,b) => b.startYear-a.startYear),
    ...[...SITE_DATA.education].sort((a,b) => b.startYear-a.startYear).map(e => ({...e,title:e.degree})),
  ];
  return (
    <main className="home-shell" id="main-content">
      <section className="hero editorial-enter">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"/> {zh ? '北京师范大学 · 社会学院' : 'BEIJING NORMAL UNIVERSITY · SOCIOLOGY'}</p>
          <h1>{t(p.name)}<span className="hero-name-secondary">{zh ? 'Jiajia Li' : '李佳佳'}</span></h1>
          <p className="hero-role">{zh ? '讲师 · 健康社会学' : 'Lecturer · Sociology of Health'}</p>
          <div className="hero-question"><span className="question-label">{zh ? '健康社会学 · 研究关切' : 'SOCIOLOGY OF HEALTH'}</span><h2>{zh ? <>疾病与健康的<br/><span>社会生产。</span></> : <>The social production<br/>of <span>illness & health.</span></>}</h2><p>{zh ? '关注疾病与健康在生命历程中的社会生产过程。' : 'Examining how illness and health are socially produced across the life course.'}</p></div>
          <div className="hero-buttons"><Link to="/research" className="btn-primary">{zh ? '了解我的研究' : 'Explore my research'}<ArrowUpRight size={17}/></Link><a href={p.scholar} target="_blank" rel="noreferrer" className="text-link">Google Scholar <ArrowUpRight size={15}/></a></div>
        </div>
        <aside className="hero-aside">
          <div className="portrait-frame"><span className="portrait-index">SOCIOLOGY / LIFE COURSE / HEALTH</span><img src={import.meta.env.BASE_URL + 'avatar.png'} alt={t(p.name)} width="360" height="420" fetchPriority="high"/><div className="portrait-caption"><span>{zh ? '李佳佳 · Jiajia Li' : 'Jiajia Li · 李佳佳'}</span><span>BEIJING, CN</span></div></div>
          <div className="profile-links"><a href={`mailto:${p.email}`} aria-label="Email"><Mail size={17}/><span>Email</span></a><a href={p.orcid} target="_blank" rel="noreferrer"><Fingerprint size={17}/><span>ORCID</span></a><a href={p.github} target="_blank" rel="noreferrer"><Github size={17}/><span>GitHub</span></a></div>
        </aside>
      </section>
      <div className="discipline-strip"><span className="eyebrow">RESEARCH AT A GLANCE</span><span>{zh ? '健康社会学' : 'Sociology of health'}</span><i/><span>{zh ? '生命历程' : 'Life course'}</span><i/><span>{zh ? '健康不平等' : 'Health inequalities'}</span><span className="strip-end">{zh ? '纵向研究 · 跨国比较' : 'Longitudinal · Comparative'}</span></div>

      <section className="home-section"><SectionLabel number="01" title={zh ? '近期动态' : 'Latest updates'} english="NOTES & NEWS"/><div className="news-list">{news.map(item => <a href={item.link} key={item.title.en} target="_blank" rel="noreferrer" className="news-entry"><time dateTime={item.date}>{item.date.replaceAll('-','.')}</time><div><span className="news-tag">{t(item.tag)}</span><h3>{t(item.title)}</h3><p>{t(item.desc)}</p></div><ArrowUpRight size={18}/></a>)}</div></section>

      <section className="home-section"><SectionLabel number="02" title={zh ? '学术足迹' : 'Academic journey'} english="EDUCATION & APPOINTMENTS"/><div className="career-list">{career.map((item,i) => <div className={`career-entry ${item.current ? 'current' : ''}`} key={i}><span className="career-dot"/><p className="career-period">{t(item.period)}</p><div><h3>{t(item.title)}{item.current && <span className="current-tag">{zh ? '现任' : 'CURRENT'}</span>}</h3><p>{t(item.institution)}</p></div></div>)}</div></section>

      <section className="home-section"><SectionLabel number="03" title={zh ? '学术共同体' : 'Academic service'} english="SERVICE & MEMBERSHIPS"/><div><div className="service-list">{SITE_DATA.academicServices.editorialBoards.map(item => <div key={item.journal}><span className="eyebrow">{t(item.role)}</span><h3>{item.journal}</h3><p>{t(item.description)}</p>{item.researchTopic && <p className="service-topic">{t(item.researchTopic)}</p>}</div>)}</div><p className="service-note">{t(SITE_DATA.academicServices.additionalServices)}</p><div className="membership-list">{SITE_DATA.academicServices.memberships.map(item => <span key={item.name} title={t(item.fullName)}>{item.name}<small>{t(item.fullName)}</small></span>)}</div></div></section>
      <section className="contact-panel"><div><p className="eyebrow">LET’S CONNECT</p><h2>{zh ? '让研究与想法，在交流中生长。' : 'Good research begins with a conversation.'}</h2><p>{zh ? '学术交流、研究合作与教学讨论，欢迎来信。' : 'For research collaborations, academic exchange, or teaching enquiries.'}</p></div><a href={`mailto:${p.email}`}>{p.email}<ArrowUpRight size={21}/></a></section>
    </main>
  );
}
function SectionLabel({number,title,english}) { return <header className="section-label"><span className="section-number">{number} —</span><h2>{title}</h2><p>{english}</p></header>; }
