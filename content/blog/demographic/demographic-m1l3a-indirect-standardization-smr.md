---
slug: demographic-m1l3a-indirect-standardization-smr
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 7
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Indirect Standardization and the SMR: Comparing Mortality When Rates Are Too Fragile"
title_en: "Indirect Standardization and the SMR: Comparing Mortality When Rates Are Too Fragile"
summary_zh: "When age-specific death counts are too small to standardize directly, borrow a standard schedule and compare observed with expected deaths. Implement standardize_indirect(), reproduce the Malaysia-Australia SMR of 1.52, and learn why a ratio of two SMRs is not itself a standardized ratio."
summary_en: "When age-specific death counts are too small to standardize directly, borrow a standard schedule and compare observed with expected deaths. Implement standardize_indirect(), reproduce the Malaysia-Australia SMR of 1.52, and learn why a ratio of two SMRs is not itself a standardized ratio."
date: 2026-09-26
tag: Demographic Methods
tags: [demographics, python, mortality, standardization]
source: jupyter
notebook: demographic-m1l3a-indirect-standardization-smr.ipynb
html: demographic-m1l3a-indirect-standardization-smr.html
---

# Indirect Standardization and the SMR: Comparing Mortality When Rates Are Too Fragile

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.3a

Direct standardization needs a full age-specific rate schedule for every population compared; small populations cannot supply one. This post develops the indirect route: apply one trusted standard schedule to your population's age structure, then compare observed with expected deaths. Malaysia 1988 scores SMR = 1.52 against the Australian schedule, numerically identical to Lesson 1.2b's Malaysia-structure direct ratio. A Poisson simulation shows when the indirect route is forced, and a final worked contrast shows why a ratio of two SMRs (2.21) answers no well-posed question.

## What You'll Learn

- The expected-deaths idea: one trusted standard schedule plus your population's age structure
- A validated `standardize_indirect()` in Python, unit-tested with the standard-population identity
- When small death counts force the indirect route, quantified with a seeded Poisson simulation
- Why each SMR carries its own implicit standard, and why SMRs cannot be finely ranked against each other

## Why It Matters

The SMR is the workhorse of occupational and small-area mortality studies precisely because it asks so little of the data. Its convenience hides a comparability trap: every SMR sits on its own private standard. This post builds the calculation and the caution together, so the shortcut never becomes a ranking error.

**View the full interactive notebook for the code, figures, and exercises.**
