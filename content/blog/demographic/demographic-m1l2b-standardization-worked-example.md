---
slug: demographic-m1l2b-standardization-worked-example
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 6
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Direct Standardization in Practice: Re-Ranking Two Countries' Mortality"
title_en: "Direct Standardization in Practice: Re-Ranking Two Countries' Mortality"
summary_zh: "Apply direct standardization to Malaysia and Australia (1988), implement standardize_direct() in Python, and test how sensitive the reversed ranking is to the choice of standard population."
summary_en: "Apply direct standardization to Malaysia and Australia (1988), implement standardize_direct() in Python, and test how sensitive the reversed ranking is to the choice of standard population."
date: 2026-09-19
tag: Demographic Methods
tags: [demographics, python, mortality, standardization]
source: jupyter
notebook: demographic-m1l2b-standardization-worked-example.ipynb
html: demographic-m1l2b-standardization-worked-example.html
---

# Direct Standardization in Practice: Re-Ranking Two Countries' Mortality

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.2b

Malaysia 1988 records the lower crude death rate and the higher mortality at almost every age. This worked example resolves the contradiction: implement `standardize_direct()`, apply both schedules to a common age structure, and watch the ranking reverse (ratio 0.68 becomes 1.46). Sensitivity across four standard populations shows levels moving several-fold while the comparative conclusion holds.

## What You'll Learn

- Compute crude death rates from age-specific rates and population distributions
- Implement and unit-test a validated `standardize_direct()` in Python
- Reproduce Carmichael's classic Malaysia-Australia reversal from the published tables
- Run a sensitivity analysis over own-structure, Segi, and WHO standards, and report it properly

## Why It Matters

A standardized level is meaningless without its standard; only the comparison carries meaning. This post builds the working habit: name the standard, check the self-standardization identity, and never report a level without a sensitivity check.

**View the full interactive notebook for the code, figures, and exercises.**
