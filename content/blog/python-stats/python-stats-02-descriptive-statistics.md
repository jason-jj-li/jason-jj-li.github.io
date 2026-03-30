---
slug: python-stats-02-descriptive-statistics
series: python-stats
series_name_zh: "Python Statistical Analysis in Practice"
series_name_en: "Python Statistical Analysis in Practice"
series_order: 2
series_desc_zh: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
series_desc_en: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
title_zh: "Descriptive Statistics & EDA: Know Your Data Before Modelling"
title_en: "Descriptive Statistics & EDA: Know Your Data Before Modelling"
date: 2026-03-30
tags: [python, EDA, descriptive-statistics, visualization, outliers, correlation]
source: jupyter
notebook: python-stats-02-descriptive-statistics.ipynb
html: python-stats-02-descriptive-statistics.html
---

# Descriptive Statistics & EDA: Know Your Data Before Modelling

Before fitting any model, you must look at your data. This lecture builds a systematic toolkit for Exploratory Data Analysis (EDA).

## What You'll Learn

- **Central tendency:** mean, median, mode — and when they disagree (skewed data, bimodality)
- **Spread:** variance, standard deviation, IQR, coefficient of variation
- **Distribution shape:** skewness and kurtosis with simulation
- **EDA visualisation toolkit:** histogram, KDE, boxplot, violin, Q-Q plot
- **Outlier detection:** z-score method and IQR Tukey fences
- **Why you must always visualise:** Anscombe's Quartet demonstration
- **Bivariate EDA:** scatter plots, Pearson vs Spearman correlation
- **Multivariate overview:** pair plots and correlation heatmaps
- **The full EDA pipeline:** applied to a planted dataset with known structure

## Simulation Bridge

Every dataset in this lecture is generated with known parameters — so you always know what to expect, and can verify that EDA finds what was planted.

## Key Takeaways

| Rule | Detail |
|---|---|
| Report median + IQR for skewed data | Mean is pulled by extreme values |
| Std vs IQR | IQR is robust to outliers; std is not |
| Always visualise | Anscombe's Quartet: identical stats, completely different data |
| Pearson vs Spearman | Use Spearman when outliers are present or relationship is non-linear monotone |
| EDA checklist | shape → summary stats → univariate plots → outliers → bivariate → heatmap |

**View the full interactive notebook for 17 visualizations and complete annotated code.**
