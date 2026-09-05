---
slug: demographic-m1l1c-mortality-indicators
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 4
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Age-Specific Death Rates and the Mortality Indicator Zoo"
title_en: "Age-Specific Death Rates and the Mortality Indicator Zoo"
date: 2026-09-05
tags: [demographics, python, mortality, asdr, infant-mortality]
source: jupyter
notebook: demographic-m1l1c-mortality-indicators.ipynb
html: demographic-m1l1c-mortality-indicators.html
---

# Age-Specific Death Rates and the Mortality Indicator Zoo

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.1c

The age-specific death rate has a stable anatomy: high in infancy, safest at 10-14, an accident hump for young men, then a near-geometric rise. This post reads that curve on a log scale, then tours IMR, U5MR, and MMR, each with a definition that looks obvious and a denominator that is not.

## What You'll Learn

- Why mortality schedules belong on a log scale, with the 1988 Malaysia-Australia data
- The Gompertz regularity: adult mortality doubling roughly every 7 to 8 years
- Why IMR and U5MR are probabilities, not rates, and when the IMR's period mismatch bites
- Why MMR is a ratio per 100,000 births, and how to classify any indicator before trusting it

## Why It Matters

Most public blunders in mortality reporting are measure-type confusions or denominator mismatches. This post builds the classifier: count, true rate, probability, or ratio. It also sets up the separation factors of Lesson 1.5a and the standardization machinery of Lesson 1.2.

**View the full interactive notebook for the code, figures, and exercises.**
