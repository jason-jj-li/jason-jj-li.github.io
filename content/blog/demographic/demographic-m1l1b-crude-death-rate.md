---
slug: demographic-m1l1b-crude-death-rate
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 3
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Why the Crude Death Rate Lies: Age Composition and Simpson's Paradox"
title_en: "Why the Crude Death Rate Lies: Age Composition and Simpson's Paradox"
date: 2026-08-30
tags: [demographics, python, mortality, simpsons-paradox, standardization]
source: jupyter
notebook: demographic-m1l1b-crude-death-rate.ipynb
html: demographic-m1l1b-crude-death-rate.html
---

# Why the Crude Death Rate Lies: Age Composition and Simpson's Paradox

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.1b

In 1988 Malaysia's crude death rate was 4.93 per 1,000 and Australia's was 7.25, yet Australians lived six years longer and had lower death rates at nearly every age. This post takes the comparison apart with Carmichael's own data, names the mechanism (Simpson's paradox), and previews the fix.

## What You'll Learn

- The master identity of crude rates: M = Σ m(c)·p(c), specific rates times composition
- How age structure alone can reverse a mortality ranking, rebuilt from real 1988 data
- The two-condition test for when a compositional variable confounds a comparison
- A first look at direct standardization: holding composition fixed inverts the ranking

## Why It Matters

Every ratio-type measure in demography mixes a rate schedule with a composition. Recognizing composition effects is the prerequisite for standardization (Lessons 1.2 and 1.3), decomposition (Lesson 5.4), and honest cross-country comparison in general.

**View the full interactive notebook for the code, figures, and exercises.**
