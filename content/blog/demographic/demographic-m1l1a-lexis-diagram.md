---
slug: demographic-m1l1a-lexis-diagram
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 2
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Lexis Diagrams and Person-Years: What Exactly Is the Denominator of a Rate?"
title_en: "Lexis Diagrams and Person-Years: What Exactly Is the Denominator of a Rate?"
date: 2026-08-24
tags: [demographics, python, lexis-diagram, person-years, mortality]
source: jupyter
notebook: demographic-m1l1a-lexis-diagram.ipynb
html: demographic-m1l1a-lexis-diagram.html
---

# Lexis Diagrams and Person-Years: What Exactly Is the Denominator of a Rate?

## Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.1a

A rate is events divided by exposure, but what exactly is "exposure"? This post unpacks the two ideas behind every rate in this series: the Lexis diagram (the time × age coordinate system) and person-years (time lived, not head counts).

## What You'll Learn

- How to read and draw a Lexis diagram: lifelines, period slices, cohort bands, Lexis triangles
- Why demographers distinguish period from cohort views of the same data
- How person-years are computed from individual lifelines, with a worked example
- Why the mid-year population is a good approximation of person-years, and when it breaks

## Why It Matters

Everything in Module 1 builds on these concepts: Lexis triangles return in infant mortality separation factors (Lesson 1.5a), the rate-vs-probability distinction drives life-table construction (Lessons 1.4–1.5), and the period-vs-cohort tension explains why period fertility rates can "lie" (Lesson 2.4).

**View the full interactive notebook for the code, figures, and exercises.**
