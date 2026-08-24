# Jekyll 迁移计划（保留现有内容）

## 1. 目标

把当前 React + Vite + Tailwind 的学术个人主页迁移到 **Jekyll**，同时保留所有现有内容：

- 个人简介、教育/工作经历
- 研究方向、论文发表、学术服务
- 教学课程、开源工具、最新动态
- 博客文章与系列教程（含 `.ipynb` / `.html` 附件）

迁移后的站点继续通过 **GitHub Pages** 发布，使用 GitHub Actions 构建并推送到 `gh-pages` 分支。

## 2. 为什么要迁到 Jekyll

- **GitHub Pages 原生友好**：用户站点（`username.github.io`）只能用分支源发布，Jekyll 的静态文件结构天然适合 `gh-pages`。
- **路由无 404 问题**：每个页面都会生成真实 HTML（如 `/blog/index.html`），直接访问 `/blog` 不再依赖 `404.html` 的 SPA 回退脚本。
- **内容即 Markdown**：博客和页面直接用 Markdown + YAML frontmatter 维护，不需要自己写 Markdown 解析器。
- **学术主题生态成熟**：如 `al-folio`、`AcademicPages` 等主题已内置 publications、blog、projects 等模块。

## 3. 技术方案

| 项目 | 当前方案 | 迁移后方案 |
|------|----------|------------|
| 框架 | React 18 + Vite 5 | Jekyll 4.x + Ruby Bundler |
| 样式 | Tailwind CSS | 复刻现有样式（SCSS/CSS）或直接使用 Jekyll 学术主题 |
| 多语言 | React 状态切换 `zh/en` | Jekyll 生成双语言站点（`/` 中文，`/en/` 英文）+ 语言切换器 |
| 博客/系列 | 自定义 Markdown 解析 + `content/blog` | Jekyll `_posts` + `series` Collection |
| 数据 | `src/data/siteData.js` | Jekyll `_data/*.yml` |
| 部署 | Vite 构建 → GitHub Actions → `gh-pages` | Jekyll 构建 → GitHub Actions → `gh-pages` |

> 用户站点不能用 GitHub Actions 作为 Pages 发布源，因此仍然采用“Actions 构建后推送到 `gh-pages` 分支”的方式。

## 4. 内容迁移清单

### 4.1 结构化数据（`src/data/siteData.js`）

全部转为 `_data/` 下的 YAML 文件：

- `_data/profile.yml`：姓名、职位、联系方式、简介
- `_data/publications.yml`：论文列表
- `_data/teaching.yml`：教学课程
- `_data/tools.yml`：开源工具/平台
- `_data/services.yml`：编委、学会会员、审稿
- `_data/highlights.yml`：最新动态
- `_data/directions.yml`：研究方向
- `_data/experience.yml`：教育 + 工作经历

可以用一个脚本自动把 JS 对象导出成 YAML，减少手工复制粘贴。

### 4.2 博客文章（`content/blog/**/*.md`）

当前每篇文章 frontmatter 示例：

```yaml
---
slug: python-stats-01-simulation-basics
date: 2024-03-15
tag: Tutorial
series: python-stats
series_name_zh: Python 统计入门
series_name_en: Python Statistics Primer
series_order: 1
title_zh: 模拟基础
title_en: Simulation Basics
summary_zh: ...
summary_en: ...
---
```

迁移后改为 Jekyll 标准 frontmatter，并保留双语字段：

```yaml
---
layout: post
title: 模拟基础
title_en: Simulation Basics
lang: zh
date: 2024-03-15
categories: [tutorial]
series: python-stats
series_order: 1
tags: [python, statistics]
---
```

系列文章通过 `series` 字段聚合，系列描述放到 `_data/series.yml`。

附件（`.ipynb`、`.html`）移到 `assets/blog/{series}/{slug}/` 下，文章中链接同步更新。

### 4.3 页面路由映射

| 当前页面 | 当前路径 | Jekyll 路径/布局 |
|----------|----------|------------------|
| 主页 | `/` | `index.md` + `home` layout |
| 研究 | `/research` | `research.md` + `page` layout |
| 工具 | `/tools` | `tools.md` + `page` layout |
| 教学 | `/teaching` | `teaching.md` + `page` layout |
| 博客列表 | `/blog` | `blog.md` + `blog` layout |
| 系列详情 | `/blog/series/:id` | `series.md` + `series` layout，通过 `series` URL 参数读取 |
| 博客文章 | `/blog/:slug` | `_posts/YYYY-MM-DD-slug.md` + `post` layout |

Jekyll 默认 permalink 是 `/YYYY/MM/DD/slug/`，可以在 `_config.yml` 里自定义为 `/blog/:title/` 以匹配现有 slug。

## 5. 多语言方案

推荐方案：**生成双语言站点**。

- 中文内容放在根路径 `/`，英文内容放在 `/en/`。
- 每篇双语博客生成两个 URL：
  - `/blog/python-stats-01-simulation-basics/`
  - `/en/blog/python-stats-01-simulation-basics/`
- 语言切换器根据当前 URL 跳转到对应语言版本。
- 翻译文本统一放在 `_data/i18n.yml`：

```yaml
nav:
  home:
    zh: 主页
    en: Home
  research:
    zh: 研究
    en: Research
  ...
```

如果需要保留“同一 URL 内切换语言”的体验，则要用 JS 在浏览器端切换，实现成本更高，且不利于 SEO。建议采用 `/en/` 前缀方案。

## 6. 部署方案

替换现有 `.github/workflows/deploy.yml`：

```yaml
name: Build and Deploy Jekyll to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - run: bundle exec jekyll build -d ./_site
      - uses: peaceiris/actions-gh-pages@v4
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
          publish_branch: gh-pages
          force_orphan: true
```

GitHub Pages 发布源保持为 `gh-pages` 分支根目录。

## 7. 实施步骤（建议顺序）

1. **创建迁移分支**：`jekyll-migration`，不影响现有 `main`。
2. **初始化 Jekyll**：`Gemfile`、`_config.yml`、目录结构。
3. **数据迁移脚本**：把 `siteData.js` 转成 `_data/*.yml`。
4. **博客迁移脚本**：把 `content/blog/**/*.md` 转成 `_posts/`，修正 frontmatter 和附件路径。
5. **实现布局和 Includes**：
   - `default.html`（头部、导航、语言切换、页脚）
   - `home.html`、`page.html`、`blog.html`、`post.html`、`series.html`
6. **样式复刻**：把当前 Tailwind 样式转换成 SCSS/CSS，保留深色主题、卡片、时间线等。
7. **本地验证**：`bundle exec jekyll serve`，检查所有页面和语言切换。
8. **更新 GitHub Actions**：替换为 Jekyll 构建工作流。
9. **合并到 main**：触发自动部署到 `gh-pages`。
10. **验证线上**：确认 `jason-jj-li.github.io` 及 `/blog` 可访问。

## 8. 工作量与风险

| 方案 | 预估时间 | 风险 |
|------|----------|------|
| **A. 使用现成学术主题（如 al-folio）** | 2–4 天 | 外观变化大，但功能稳定 |
| **B. 自定义 Jekyll 主题，复刻现有设计** | 5–10 天 | 工作量大，但能保留当前风格 |
| **C. 最小改动：只把内容迁到 Jekyll，默认 Minima 主题** | 1–2 天 | 最快速，但视觉效果差 |

**主要风险**：
- URL 结构会变化（尤其是英文版加上 `/en/` 前缀），旧链接可能失效。
- 系列详情页和博客附件链接需要仔细处理。
- 如果希望保留 React 的复杂交互动效，Jekyll 实现成本较高。

## 9. 建议

如果主要是为了**解决 `/blog` 直接访问 404 的问题**，其实不需要迁移到 Jekyll，只需要确保 `gh-pages` 分支根目录有正确的 `404.html` 和构建产物即可（现在已经修复）。

如果确实想**长期用 Markdown 管理内容、减少前端维护成本**，那么方案 **A（al-folio 等学术主题）** 性价比最高；如果**非常在意现在的视觉设计**，则选方案 **B**。
