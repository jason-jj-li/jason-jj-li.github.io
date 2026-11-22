import{c as u}from"./index-DvfqWV7k.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=u("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),y=`---
slug: demographic-analysis-tutorial
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 1
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Easy Demographic Analysis Tutorial with Python:101"
title_en: "Easy Demographic Analysis Tutorial with Python:101"
date: 2025-12-07
tags: [demographics, python, data-analysis, population-pyramids, statistics]
source: jupyter
notebook: demographic-analysis-tutorial.ipynb
html: demographic-analysis-tutorial.html
---

# Easy Demographic Analysis Tutorial with Python:101

This comprehensive tutorial covers demographic analysis using Python, from basic concepts to advanced techniques.

## What You'll Learn

- Population pyramids and age structure analysis
- Core demographic indicators (birth rates, death rates, growth rates)
- Dependency ratios and economic burden analysis
- Multi-country comparative analysis
- Data visualization best practices

## Topics Covered

1. Environment setup and library imports
2. Population pyramid types and interpretations
3. Calculating demographic rates
4. Real-world case studies with actual country data

**View the full interactive notebook for detailed code examples and visualizations.**
`,g=`---
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
`,b=`---
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
`,_=`---
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
`,f=`---
slug: demographic-m1l2a-direct-standardization
series: demographic
series_name_zh: "人口统计分析系列"
series_name_en: "Demographic Analysis Series"
series_order: 5
series_desc_zh: "使用 Python 进行人口统计分析的完整教程，从基础概念到高级技术"
series_desc_en: "Complete tutorials on demographic analysis using Python, from basics to advanced techniques"
title_zh: "Direct Standardization: The Idea and the Standard Population"
title_en: "Direct Standardization: The Idea and the Standard Population"
summary_zh: "Derive direct standardization, compare Segi and WHO population weights, and explore how the choice of standard affects rates and rankings."
summary_en: "Derive direct standardization, compare Segi and WHO population weights, and explore how the choice of standard affects rates and rankings."
date: 2026-09-12
tag: Demographic Methods
tags: [demographics, python, mortality, standardization]
source: jupyter
notebook: demographic-m1l2a-direct-standardization.ipynb
html: demographic-m1l2a-direct-standardization.html
---

# Direct Standardization: The Idea and the Standard Population

Demographic Analysis Series · Module 1 (Mortality) · Lesson 1.2a

Derive direct standardization from the weighted-average identity for crude rates, compare Segi and WHO population weights, and use executable Python examples to explore how the choice of standard affects rates and rankings.

The full notebook below includes the derivation, code, three figures, exercises, and references.
`,v=`---
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

Malaysia 1988 records the lower crude death rate and the higher mortality at almost every age. This worked example resolves the contradiction: implement \`standardize_direct()\`, apply both schedules to a common age structure, and watch the ranking reverse (ratio 0.68 becomes 1.46). Sensitivity across four standard populations shows levels moving several-fold while the comparative conclusion holds.

## What You'll Learn

- Compute crude death rates from age-specific rates and population distributions
- Implement and unit-test a validated \`standardize_direct()\` in Python
- Reproduce Carmichael's classic Malaysia-Australia reversal from the published tables
- Run a sensitivity analysis over own-structure, Segi, and WHO standards, and report it properly

## Why It Matters

A standardized level is meaningless without its standard; only the comparison carries meaning. This post builds the working habit: name the standard, check the self-standardization identity, and never report a level without a sensitivity check.

**View the full interactive notebook for the code, figures, and exercises.**
`,w=`---
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
- A validated \`standardize_indirect()\` in Python, unit-tested with the standard-population identity
- When small death counts force the indirect route, quantified with a seeded Poisson simulation
- Why each SMR carries its own implicit standard, and why SMRs cannot be finely ranked against each other

## Why It Matters

The SMR is the workhorse of occupational and small-area mortality studies precisely because it asks so little of the data. Its convenience hides a comparability trap: every SMR sits on its own private standard. This post builds the calculation and the caution together, so the shortcut never becomes a ranking error.

**View the full interactive notebook for the code, figures, and exercises.**
`,z=`---
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
`,k=`---
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
`,x=`---
slug: python-stats-00-environment-setup
series: python-stats
series_name_zh: "Python Statistical Analysis in Practice"
series_name_en: "Python Statistical Analysis in Practice"
series_order: 0
series_desc_zh: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
series_desc_en: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
title_zh: "Environment Setup: Installing Python and Required Packages"
title_en: "Environment Setup: Installing Python and Required Packages"
date: 2026-03-30
tags: [python, setup, jupyter, environment, installation]
source: jupyter
notebook: python-stats-00-environment-setup.ipynb
html: python-stats-00-environment-setup.html
---

# Environment Setup: Installing Python and Required Packages

Before the first lecture, every computer in the room needs to run the same code and produce the same results. This session gets you ready.

## What You'll Do

- Install Python 3.11+ directly from python.org
- Install all required packages with a single \`pip install\` command
- Launch JupyterLab and run your first notebook
- Verify that every package is correctly installed

## Required Packages

\`\`\`bash
pip install pandas numpy scipy matplotlib seaborn statsmodels pingouin jupyter jupyterlab watermark
\`\`\`

## Verification

By the end of this session, running every cell in this notebook should produce no errors, and you should see:

1. A table of package versions (Part 2)
2. A histogram with a fitted normal curve (Part 4)
3. A pandas summary table (Part 4)
4. An environment snapshot with your exact package versions (Part 5)

**Next lecture →** Lecture 01: Simulation Basics — random seeds, distributions, and the simulation toolkit we will use all semester.
`,S=`---
slug: python-stats-01-simulation-basics
series: python-stats
series_name_zh: "Python Statistical Analysis in Practice"
series_name_en: "Python Statistical Analysis in Practice"
series_order: 1
series_desc_zh: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
series_desc_en: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
title_zh: "Simulation Basics: The Foundation for Learning Statistics with Code"
title_en: "Simulation Basics: The Foundation for Learning Statistics with Code"
date: 2026-03-30
tags: [python, simulation, numpy, reproducibility, statistics]
source: jupyter
notebook: python-stats-01-simulation-basics.ipynb
html: python-stats-01-simulation-basics.html
---

# Simulation Basics: The Foundation for Learning Statistics with Code

This tutorial introduces the core idea behind this series: learning statistics by generating your own data, so you always know the "true answer" and can verify how well your methods work.

## What You'll Learn

- Why simulated data is a powerful teaching tool
- How to set random seeds for fully reproducible results
- Generating common distributions with \`numpy.random.default_rng\`
- Building a reusable \`simulation_toolkit\` used throughout the series
- Validating simulated data with descriptive statistics and plots

## The Core Teaching Loop

Every post in this series follows the same four steps:

1. **Simulate** — generate data with known parameters
2. **Estimate** — apply a statistical method
3. **Verify** — compare estimates against the known truth
4. **Explore** — vary conditions and observe how results change

## Topics Covered

1. Random seeds and reproducibility
2. Normal, uniform, binomial, Poisson, and exponential distributions
3. Three-step data validation: summary stats, histogram, Q-Q plot
4. Core toolkit functions: \`simulate_normal\`, \`simulate_two_groups\`, \`simulate_regression\`, \`simulate_logistic\`, \`verify_estimate\`
5. Parameter sweeps: how sample size affects estimation accuracy

**View the full interactive notebook for complete code examples and visualizations.**
`,D=`---
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
`,M=`---
slug: python-stats-03-probability-distributions
series: python-stats
series_name_zh: "Python Statistical Analysis in Practice"
series_name_en: "Python Statistical Analysis in Practice"
series_order: 3
series_desc_zh: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
series_desc_en: "Hands-on statistical analysis with Python using simulated data — from data generation to method validation, with full code, visualizations, and sensitivity analysis."
title_zh: "Probability Distributions: PDF, CDF, and Choosing the Right Distribution"
title_en: "Probability Distributions: PDF, CDF, and Choosing the Right Distribution"
date: 2026-03-30
tags: [python, probability, distributions, scipy, normal, binomial, poisson, qq-plot]
source: jupyter
notebook: python-stats-03-probability-distributions.ipynb
html: python-stats-03-probability-distributions.html
---
`,P="/assets/demographic-analysis-tutorial-0_R-Buoj.ipynb",A="/assets/demographic-m1l1a-lexis-diagram-DdBq6raD.ipynb",R="/assets/demographic-m1l1b-crude-death-rate-Crrb_v1h.ipynb",T="/assets/demographic-m1l1c-mortality-indicators-Byw6RTSB.ipynb",C="/assets/demographic-m1l2a-direct-standardization-BTyGCB0F.ipynb",W="/assets/demographic-m1l2b-standardization-worked-example-DCzC5r5G.ipynb",L="/assets/demographic-m1l3a-indirect-standardization-smr-BnussdMU.ipynb",I="/assets/demographic-m1l3b-direct-vs-indirect-BY4972M6.ipynb",E="/assets/demographic-m1l4a-cohort-survival-CuGa2XJC.ipynb",B="/assets/python-stats-00-environment-setup-DWuPkZJl.ipynb",q="/assets/python-stats-01-simulation-basics-D1t9iOxo.ipynb",H="/assets/python-stats-02-descriptive-statistics-DiKcfESf.ipynb",j="/assets/python-stats-03-probability-distributions-DPRwEsvK.ipynb",F="/assets/demographic-analysis-tutorial-C0NI3z7e.html",$="/assets/demographic-m1l1a-lexis-diagram-CDXP_KvU.html",O="/assets/demographic-m1l1b-crude-death-rate-BKKfmnjt.html",Y="/assets/demographic-m1l1c-mortality-indicators-Un4fDhek.html",V="/assets/demographic-m1l2a-direct-standardization-CyCG79lF.html",K="/assets/demographic-m1l2b-standardization-worked-example-CjSqU_TH.html",Q="/assets/demographic-m1l3a-indirect-standardization-smr-BNpodzab.html",N="/assets/demographic-m1l3b-direct-vs-indirect-oXGSUroT.html",U="/assets/demographic-m1l4a-cohort-survival-BKULFcBn.html",G="/assets/python-stats-00-environment-setup-CzW354kM.html",Z="/assets/python-stats-01-simulation-basics-Cqn6ZJh-.html",J="/assets/python-stats-02-descriptive-statistics-Ckwh5pwB.html",X="/assets/python-stats-03-probability-distributions-Dgyx1qyO.html",ee=Object.assign({"/content/blog/demographic/demographic-analysis-tutorial.md":y,"/content/blog/demographic/demographic-m1l1a-lexis-diagram.md":g,"/content/blog/demographic/demographic-m1l1b-crude-death-rate.md":b,"/content/blog/demographic/demographic-m1l1c-mortality-indicators.md":_,"/content/blog/demographic/demographic-m1l2a-direct-standardization.md":f,"/content/blog/demographic/demographic-m1l2b-standardization-worked-example.md":v,"/content/blog/demographic/demographic-m1l3a-indirect-standardization-smr.md":w,"/content/blog/demographic/demographic-m1l3b-direct-vs-indirect.md":z,"/content/blog/demographic/demographic-m1l4a-cohort-survival.md":k,"/content/blog/python-stats/python-stats-00-environment-setup.md":x,"/content/blog/python-stats/python-stats-01-simulation-basics.md":S,"/content/blog/python-stats/python-stats-02-descriptive-statistics.md":D,"/content/blog/python-stats/python-stats-03-probability-distributions.md":M}),te=Object.assign({"/content/blog/demographic/demographic-analysis-tutorial.ipynb":P,"/content/blog/demographic/demographic-m1l1a-lexis-diagram.ipynb":A,"/content/blog/demographic/demographic-m1l1b-crude-death-rate.ipynb":R,"/content/blog/demographic/demographic-m1l1c-mortality-indicators.ipynb":T,"/content/blog/demographic/demographic-m1l2a-direct-standardization.ipynb":C,"/content/blog/demographic/demographic-m1l2b-standardization-worked-example.ipynb":W,"/content/blog/demographic/demographic-m1l3a-indirect-standardization-smr.ipynb":L,"/content/blog/demographic/demographic-m1l3b-direct-vs-indirect.ipynb":I,"/content/blog/demographic/demographic-m1l4a-cohort-survival.ipynb":E,"/content/blog/python-stats/python-stats-00-environment-setup.ipynb":B,"/content/blog/python-stats/python-stats-01-simulation-basics.ipynb":q,"/content/blog/python-stats/python-stats-02-descriptive-statistics.ipynb":H,"/content/blog/python-stats/python-stats-03-probability-distributions.ipynb":j}),ae=Object.assign({"/content/blog/demographic/demographic-analysis-tutorial.html":F,"/content/blog/demographic/demographic-m1l1a-lexis-diagram.html":$,"/content/blog/demographic/demographic-m1l1b-crude-death-rate.html":O,"/content/blog/demographic/demographic-m1l1c-mortality-indicators.html":Y,"/content/blog/demographic/demographic-m1l2a-direct-standardization.html":V,"/content/blog/demographic/demographic-m1l2b-standardization-worked-example.html":K,"/content/blog/demographic/demographic-m1l3a-indirect-standardization-smr.html":Q,"/content/blog/demographic/demographic-m1l3b-direct-vs-indirect.html":N,"/content/blog/demographic/demographic-m1l4a-cohort-survival.html":U,"/content/blog/python-stats/python-stats-00-environment-setup.html":G,"/content/blog/python-stats/python-stats-01-simulation-basics.html":Z,"/content/blog/python-stats/python-stats-02-descriptive-statistics.html":J,"/content/blog/python-stats/python-stats-03-probability-distributions.html":X});function ne(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ie(t){const a=/```(\w+)?\n([\s\S]*?)```/g;let e=t.replace(a,(s,i="text",o)=>`<pre class="bg-slate-900 text-slate-50 text-sm rounded-xl p-4 overflow-auto"><code class="language-${i}">${ne(o.trim())}</code></pre>`);return e=e.replace(/^### (.*)$/gm,'<h3 class="text-lg font-semibold text-slate-900 mb-2">$1</h3>'),e=e.replace(/^## (.*)$/gm,'<h2 class="text-xl font-semibold text-slate-900 mt-6 mb-3">$1</h2>'),e=e.replace(/^# (.*)$/gm,'<h1 class="text-2xl font-bold text-slate-900 mb-4">$1</h1>'),e=e.replace(/^\s*[-*] (.*)/gm,'<li class="ml-5 list-disc text-slate-700 leading-relaxed">$1</li>'),e=e.replace(/(?:<li[^>]*>[\s\S]*?<\/li>\n?)+/g,s=>`<ul class="space-y-1 mb-4">${s.replace(/\n/g,"")}</ul>`),e=e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*(.*?)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-indigo-600 hover:underline" target="_blank" rel="noreferrer">$1</a>'),e=e.replace(/`([^`]+)`/g,'<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm">$1</code>'),e.split(/\n{2,}/).map(s=>{const i=s.trim();return i?/^<h\d|^<pre|^<ul|^<blockquote/.test(i)?i:`<p class="text-slate-700 leading-relaxed mb-4">${i.replace(/\n/g,"<br/>")}</p>`:""}).filter(Boolean).join(`
`)}function se(t){return t.replace(/```[\s\S]*?```/g,"").replace(/[#>*_`-]/g,"").split(`
`).map(e=>e.trim()).filter(Boolean).join(" ")}function oe(t){if(!t.startsWith("---"))return{data:{},body:t.trim()};const a=t.split(`
`);let e=-1;for(let o=1;o<a.length;o+=1)if(a[o].trim()==="---"){e=o;break}if(e===-1)return{data:{},body:t.trim()};const n=a.slice(1,e),s={};n.forEach(o=>{if(!o.includes(":"))return;const[d,...r]=o.split(":");s[d.trim()]=r.join(":").trim().replace(/^["']|["']$/g,"")});const i=a.slice(e+1).join(`
`).trim();return{data:s,body:i}}function re(t,a){if(!a)return null;const n=`${t.slice(0,t.lastIndexOf("/"))}/${a}`;return te[n]||null}function de(t,a){if(!a)return null;const n=`${t.slice(0,t.lastIndexOf("/"))}/${a}`;return ae[n]||null}function le(t){if(!t)return null;const a=[];t.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi,(s,i)=>(i&&i.trim()&&a.push(i.trim()),""));let e=t.replace(/<!doctype[^>]*>/gi,"");e=e.replace(/<head[^>]*>[\s\S]*?<\/head>/gi,"");const n=e.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return n&&(e=n[1]),e=e.replace(/<\/?html[^>]*>/gi,"").trim(),{content:e,styles:a}}const l=new Map;async function ue(t){if(!t)return null;if(l.has(t))return l.get(t);const a=(async()=>{const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load article HTML: ${e.status}`);return le(await e.text())})();return l.set(t,a),a.catch(()=>l.delete(t)),a}function ce(t,a){const{data:e,body:n}=oe(a),s=e.slug||t.split("/").pop().replace(/\.md$/,""),i=e.tag||(Array.isArray(e.tags)?e.tags[0]:void 0),o=e.source==="jupyter"?"notebook":e.source||"markdown",d=re(t,e.notebook),r=de(t,e.html||e.html_file),h=se(n),m=h.length>220?`${h.slice(0,220)}...`:h;return{slug:s,date:e.date||"",tag:i||"Article",source:o,notebookUrl:d,htmlUrl:r,series:e.series||null,seriesName:{zh:e.series_name_zh||e.series||"",en:e.series_name_en||e.series||""},seriesOrder:parseInt(e.series_order,10)||0,seriesDesc:{zh:e.series_desc_zh||"",en:e.series_desc_en||""},title:{zh:e.title_zh||e.title,en:e.title_en||e.title},summary:{zh:e.summary_zh||m,en:e.summary_en||m},content:n,html:ie(n)}}const p=Object.entries(ee).map(([t,a])=>ce(t,a)).sort((t,a)=>new Date(a.date)-new Date(t.date));function he(t="zh"){const a=new Map;return p.forEach(e=>{var s,i,o,d;if(!e.series){const r="uncategorized";a.has(r)||a.set(r,{id:r,name:{zh:"其他文章",en:"Other Articles"},description:{zh:"",en:""},posts:[]}),a.get(r).posts.push(e);return}const n=e.series;a.has(n)||a.set(n,{id:n,name:{zh:((s=e.seriesName)==null?void 0:s.zh)||n,en:((i=e.seriesName)==null?void 0:i.en)||n},description:{zh:((o=e.seriesDesc)==null?void 0:o.zh)||"",en:((d=e.seriesDesc)==null?void 0:d.en)||""},posts:[]}),a.get(n).posts.push(e)}),a.forEach(e=>{e.posts.sort((n,s)=>n.seriesOrder-s.seriesOrder)}),Array.from(a.values()).filter(e=>e.posts.length>0).map(e=>({...e,name:e.name[t]||e.name.en||e.name.zh||e.id,description:e.description[t]||e.description.en||e.description.zh||"",postCount:e.posts.length}))}function ye(t,a="zh"){const e=he(a).find(n=>n.id===t);return e?{...e,posts:e.posts.map(n=>({...n,title:c(n.title,a),summary:c(n.summary,a)}))}:null}function c(t,a){return t&&(t[a]||t.zh||t.en)||""}function ge(t,a="zh"){const e=p.find(n=>n.slug===t);return e?{...e,title:c(e.title,a),summary:c(e.summary,a)}:null}export{pe as F,ye as a,ge as b,he as g,ue as l};
