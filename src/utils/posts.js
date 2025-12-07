const mdFiles = import.meta.glob('/content/blog/**/*.{md,markdown}', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const notebookAssets = import.meta.glob('/content/blog/**/*.ipynb', {
  query: '?url',
  import: 'default',
  eager: true,
});

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function markdownToHtml(md) {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let html = md.replace(codeBlockRegex, (_, lang = 'text', code) => {
    return `<pre class="bg-slate-900 text-slate-50 text-sm rounded-xl p-4 overflow-auto"><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  html = html.replace(/^### (.*)$/gm, '<h3 class="text-lg font-semibold text-slate-900 mb-2">$1</h3>');
  html = html.replace(/^## (.*)$/gm, '<h2 class="text-xl font-semibold text-slate-900 mt-6 mb-3">$1</h2>');
  html = html.replace(/^# (.*)$/gm, '<h1 class="text-2xl font-bold text-slate-900 mb-4">$1</h1>');

  html = html.replace(/^\s*[-*] (.*)/gm, '<li class="ml-5 list-disc text-slate-700 leading-relaxed">$1</li>');
  html = html.replace(/(?:<li[^>]*>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul class="space-y-1 mb-4">${match.replace(/\n/g, '')}</ul>`);

  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">$1</code>');

  const blocks = html
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (/^<h\d|^<pre|^<ul|^<blockquote/.test(trimmed)) return trimmed;
      return `<p class="text-slate-700 leading-relaxed mb-4">${trimmed.replace(/\n/g, '<br/>')}</p>`;
    })
    .filter(Boolean)
    .join('\n');

  return blocks;
}

function markdownToPlainText(md) {
  const withoutCode = md.replace(/```[\s\S]*?```/g, '');
  return withoutCode
    .replace(/[#>*_`-]/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { data: {}, body: raw.trim() };
  }

  const lines = raw.split('\n');
  let endIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {}, body: raw.trim() };
  }

  const frontmatterLines = lines.slice(1, endIndex);
  const data = {};

  frontmatterLines.forEach((line) => {
    if (!line.includes(':')) return;
    const [key, ...rest] = line.split(':');
    data[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
  });

  const body = lines.slice(endIndex + 1).join('\n').trim();
  return { data, body };
}

function resolveNotebookUrl(mdPath, notebookName) {
  if (!notebookName) return null;
  const dir = mdPath.slice(0, mdPath.lastIndexOf('/'));
  const key = `${dir}/${notebookName}`;
  return notebookAssets[key] || null;
}

function normalizePost(path, raw) {
  const { data, body } = parseFrontmatter(raw);
  const slug = data.slug || path.split('/').pop().replace(/\.md$/, '');
  const notebookUrl = resolveNotebookUrl(path, data.notebook);
  const plainText = markdownToPlainText(body);
  const shortSummary = plainText.length > 220 ? `${plainText.slice(0, 220)}...` : plainText;

  return {
    slug,
    date: data.date || '',
    tag: data.tag || 'Article',
    source: data.source || 'markdown',
    notebookUrl,
    title: { zh: data.title_zh || data.title, en: data.title_en || data.title },
    summary: {
      zh: data.summary_zh || shortSummary,
      en: data.summary_en || shortSummary,
    },
    content: body,
    html: markdownToHtml(body),
  };
}

const basePosts = Object.entries(mdFiles)
  .map(([path, raw]) => normalizePost(path, raw))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function pickLang(obj, lang) {
  if (!obj) return '';
  return obj[lang] || obj.zh || obj.en || '';
}

export function getPosts(lang = 'zh') {
  return basePosts.map((post) => ({
    ...post,
    title: pickLang(post.title, lang),
    summary: pickLang(post.summary, lang),
  }));
}

export function getPostBySlug(slug, lang = 'zh') {
  const found = basePosts.find((post) => post.slug === slug);
  if (!found) return null;
  return {
    ...found,
    title: pickLang(found.title, lang),
    summary: pickLang(found.summary, lang),
  };
}
