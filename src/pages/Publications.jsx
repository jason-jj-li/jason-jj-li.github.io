import React, { useState } from 'react';
import { FileText, Award, Code, Sparkles, Loader2, Bot, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const apiKey = "";

async function callGemini(prompt, systemInstruction = "") {
  if (!apiKey) {
    return "Please add your Gemini API key to enable AI features.";
  }
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
        }),
      }
    );
    if (!response.ok) throw new Error("API call failed");
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Service temporarily unavailable.";
  }
}

export default function Publications({ lang }) {
  const [paperInsights, setPaperInsights] = useState({});
  const [loadingPaper, setLoadingPaper] = useState(null);

  const sortedPublications = [...SITE_DATA.publications].sort((a, b) => b.year - a.year);

  const handleExplainPaper = async (paper, index) => {
    if (paperInsights[index]) return;
    setLoadingPaper(index);
    const prompt = `Summarize the key contribution of the paper "${paper.title}" (${paper.venue}) in one sentence. Then list 2 key bullet points. Output in ${lang === 'zh' ? 'Chinese' : 'English'}.`;
    const insight = await callGemini(prompt);
    setPaperInsights(prev => ({ ...prev, [index]: insight }));
    setLoadingPaper(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 pb-4 mb-12">
          <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-indigo-500">
            <FileText size={20} />
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {lang === 'zh' ? '发表论文' : 'Publications'}
          </h1>
        </div>
        
        <div className="space-y-0 relative border-l-2 border-slate-200 ml-3 md:ml-6">
          {sortedPublications.map((pub, idx) => (
            <div key={idx} className="relative pl-8 pb-10 group">
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-colors ${pub.highlight ? 'bg-indigo-500' : 'bg-slate-300 group-hover:bg-indigo-400'}`}></div>
              
              <div className={`p-5 rounded-xl border transition-all duration-300 ${
                pub.highlight 
                  ? 'bg-white border-indigo-100 shadow-md ring-1 ring-indigo-50' 
                  : 'bg-white/50 border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200'
              }`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">
                    {pub.title}
                  </h4>
                  <span className="shrink-0 px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-mono rounded border border-slate-200">
                    {pub.year}
                  </span>
                </div>
                
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {pub.authors}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded">
                    <Award size={14} className="text-indigo-500" />
                    {pub.venue}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      {pub.links.paper && (
                        <a href={pub.links.paper} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded transition-colors border border-slate-200">
                          <ExternalLink size={12} /> <span>{lang === 'zh' ? 'DOI/原文' : 'DOI/Link'}</span>
                        </a>
                      )}
                      {pub.links.pdf && (
                        <a href={pub.links.pdf} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded transition-colors border border-slate-200">
                          <FileText size={12} /> <span>PDF</span>
                        </a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded transition-colors border border-slate-200">
                          <Code size={12} /> <span>Code</span>
                        </a>
                      )}
                    </div>

                    {apiKey && (
                      <button 
                        onClick={() => handleExplainPaper(pub, idx)}
                        disabled={loadingPaper === idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 text-xs font-bold hover:shadow-sm hover:from-violet-200 transition-all disabled:opacity-70"
                      >
                        {loadingPaper === idx ? <Loader2 className="animate-spin" size={12} /> : <Sparkles size={12} />}
                        {lang === 'zh' ? 'AI 解读' : 'AI Insight'}
                      </button>
                    )}
                  </div>
                </div>

                {(paperInsights[idx] || loadingPaper === idx) && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-indigo-100 text-sm text-slate-700 animate-in fade-in slide-in-from-top-2 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-indigo-400"></div>
                    <div className="flex gap-3">
                      <div className="p-1.5 bg-white rounded shadow-sm h-fit"><Bot size={16} className="text-indigo-600" /></div>
                      <div className="prose prose-sm max-w-none text-slate-600">
                        {loadingPaper === idx 
                          ? (lang === 'zh' ? '分析中...' : 'Analyzing...') 
                          : <div dangerouslySetInnerHTML={{__html: paperInsights[idx].replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br/>')}} />
                        }
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
