---
slug: demographic-m1l3b-direct-vs-indirect
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 8
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Direct vs Indirect Standardization: What the Method Cannot Fix"
title_en: "Direct vs Indirect Standardization: What the Method Cannot Fix"
summary_zh: "Direct and indirect standardization are one operation with different weights: the SMR is the direct ratio computed on the study population's own structure. A deaths-weighted-average identity explains why five full-population standards agree here (1.46–1.52) while a change of age scope moves the answer from 1.41 to 2.01, and a controlled comparison shows two populations with identical age-specific rates receiving SMRs of 1.03 and 0.80."
summary_en: "Direct and indirect standardization are one operation with different weights: the SMR is the direct ratio computed on the study population's own structure. A deaths-weighted-average identity explains why five full-population standards agree here (1.46–1.52) while a change of age scope moves the answer from 1.41 to 2.01, and a controlled comparison shows two populations with identical age-specific rates receiving SMRs of 1.03 and 0.80."
date: 2026-11-07
tag: Demographic Methods
tags: [demographics, python, mortality, standardization]
source: jupyter
notebook: demographic-m1l3b-direct-vs-indirect.ipynb
html: demographic-m1l3b-direct-vs-indirect.html
---

# Direct vs Indirect Standardization: What the Method Cannot Fix

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.3b

Lesson 1.2b standardized directly; Lesson 1.3a standardized indirectly. This post proves that the two routes are one operation with different weights: the SMR is the direct ratio computed on the study population's own structure. A deaths-weighted-average identity then explains why five full-population standards agree (1.46–1.52) while a change of age scope moves the answer from 1.41 to 2.01, and a controlled comparison shows two populations with identical age-specific rates receiving SMRs of 1.03 and 0.80. The lesson closes with the limits of standardization and a rule for when to report age-specific rates directly.

## What You'll Learn

- The identity SMR = direct ratio on the study population's own structure
- Why every standardized ratio is a deaths-weighted average of age-specific rate ratios
- How the choice of standard and the choice of age scope change the answer
- Why SMRs from differently aged populations are not comparable
- When to stop summarizing and report age-specific rates

## Why It Matters

Standardized ratios travel well because they compress a schedule into one number. That same compression is what makes them easy to misread: the number carries a weighting that the reader cannot see. This lesson makes the weighting visible, so that a standardized comparison is reported with the weights that produced it.

**View the full interactive notebook for the code, figures, and exercises.**
