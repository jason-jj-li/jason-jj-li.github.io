import{c as n,u as m,r as x,j as e,L as r}from"./index-D9jHUoDp.js";import{b as h}from"./posts-BpIaAA_v.js";import{A as i,N as p}from"./notebook-U07iiDfa.js";import{C as f}from"./calendar-Bov8ft_o.js";import{F as u}from"./file-text-BDsGdXVk.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),j=(s,o)=>{const t=new Date(s);return Number.isNaN(t)?"":t.toLocaleDateString(o==="zh"?"zh-CN":"en-US",{year:"numeric",month:"long",day:"numeric"})};function z({lang:s}){const{slug:o}=m(),t=h(o,s);x.useEffect(()=>{var l;(l=window.MathJax)!=null&&l.typesetPromise&&window.MathJax.typesetPromise()},[t]);const d=`
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
  `;if(!t)return e.jsx("div",{className:"min-h-screen pt-24 pb-16",children:e.jsx("div",{className:"max-w-3xl mx-auto px-6",children:e.jsxs("div",{className:"card rounded-2xl p-8",children:[e.jsx("p",{className:"text-slate-200 mb-4",children:s==="zh"?"未找到文章。":"Post not found."}),e.jsxs(r,{to:"/blog",className:"inline-flex items-center gap-2 text-cyan-200 font-medium hover:text-cyan-100",children:[e.jsx(i,{size:16}),s==="zh"?"返回博客列表":"Back to blog"]})]})})});const a=j(t.date,s),c=t.source==="notebook"?s==="zh"?"来自 Jupyter Notebook（本地已编译 HTML）":"From Jupyter Notebook (precompiled HTML)":s==="zh"?"Markdown 文章":"Markdown Post";return e.jsx("div",{className:"min-h-screen pt-24 pb-20",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 md:px-8",children:[e.jsx("div",{className:"flex items-center gap-3 mb-5",children:e.jsxs(r,{to:"/blog",className:"inline-flex items-center gap-2 text-slate-300 hover:text-cyan-200 font-medium transition-colors",children:[e.jsx(i,{size:16}),s==="zh"?"返回":"Back"]})}),e.jsx("div",{className:"article-shell rounded-3xl p-2 md:p-3",children:e.jsxs("article",{className:"article-light rounded-2xl shadow-sm overflow-hidden border border-slate-200 bg-white text-slate-900",children:[e.jsx("div",{className:"h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500"}),e.jsxs("div",{className:"p-6 md:p-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4",children:[a&&e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx(f,{size:14}),a]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx(g,{size:14}),t.tag||(s==="zh"?"文章":"Article")]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[t.source==="notebook"?e.jsx(p,{size:14}):e.jsx(u,{size:14}),c]}),t.notebookUrl&&e.jsxs("a",{href:t.notebookUrl,className:"inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium",download:!0,children:[e.jsx(b,{size:14}),s==="zh"?"下载 notebook":"Download notebook"]})]}),e.jsx("h1",{className:"text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight",children:t.title}),t.htmlContent?e.jsxs("div",{className:"post-html space-y-4 leading-relaxed text-slate-800",style:{overflowX:"auto"},children:[e.jsxs("style",{children:[d,(t.htmlStyles||[]).join(`
`)]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t.htmlContent}})]}):t.htmlUrl?e.jsx("div",{className:"border border-slate-200 rounded-xl overflow-hidden",children:e.jsx("iframe",{src:t.htmlUrl,title:t.title,className:"w-full min-h-[600px] md:min-h-[800px] border-0",style:{height:"70vh"}})}):e.jsx("div",{className:"space-y-4 leading-relaxed text-slate-800",dangerouslySetInnerHTML:{__html:t.html}})]})]})})]})})}export{z as default};
