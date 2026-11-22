---
slug: demographic-m1l4a-cohort-survival
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 9
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Following a Cohort Through Life: Why Death Probabilities Are Not Death Rates"
title_en: "Following a Cohort Through Life: Why Death Probabilities Are Not Death Rates"
summary_zh: "Death rates and death probabilities count the same deaths but divide by different denominators: person-years versus lives at risk. This lesson derives the simplest conversion, follows Australia's 1988 schedule as a synthetic cohort of 100,000 births, and shows why survival compounds while probabilities do not add: 82,909 of the cohort reach 65 and 31,402 reach 85, while reading the five-year rate as a probability loses 17% of the cohort by 85."
summary_en: "Death rates and death probabilities count the same deaths but divide by different denominators: person-years versus lives at risk. This lesson derives the simplest conversion, follows Australia's 1988 schedule as a synthetic cohort of 100,000 births, and shows why survival compounds while probabilities do not add: 82,909 of the cohort reach 65 and 31,402 reach 85, while reading the five-year rate as a probability loses 17% of the cohort by 85."
date: 2026-11-22
tag: Demographic Methods
tags: [demographics, python, mortality, cohort, survival, life-table]
source: jupyter
notebook: demographic-m1l4a-cohort-survival.ipynb
html: demographic-m1l4a-cohort-survival.html
---

# Following a Cohort Through Life: Why Death Probabilities Are Not Death Rates

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.4a

Death rates and death probabilities count the same deaths but divide by different denominators: person-years versus lives at risk. This post derives the simplest conversion, follows Australia's 1988 schedule as a synthetic cohort of 100,000 births, and shows why survival compounds while probabilities do not add. Of the cohort, 82,909 reach age 65 and 31,402 reach 85; reading the five-year rate as a probability loses 17% of the cohort by 85.

## What You'll Learn

- Why the denominator of a death probability is lives at risk, not person-years
- The uniform-deaths conversion from rates to probabilities, and what it assumes
- How to follow a cohort from birth to 85 and read its survival curve
- Why death probabilities compound but do not add
- How much the naive rate-as-probability reading costs

## Why It Matters

The life table is a cohort device. Its survival column is built by multiplying probabilities, and its death probabilities are converted from rates. Confusing the two is not a small error: at the mortality levels of old age it changes the number of survivors by more than 15%. This lesson makes the distinction explicit before the table is built.

**View the full interactive notebook for the code, figures, and exercises.**
