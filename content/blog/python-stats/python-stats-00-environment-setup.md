---
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
- Install all required packages with a single `pip install` command
- Launch JupyterLab and run your first notebook
- Verify that every package is correctly installed

## Required Packages

```bash
pip install pandas numpy scipy matplotlib seaborn statsmodels pingouin jupyter jupyterlab watermark
```

## Verification

By the end of this session, running every cell in this notebook should produce no errors, and you should see:

1. A table of package versions (Part 2)
2. A histogram with a fitted normal curve (Part 4)
3. A pandas summary table (Part 4)
4. An environment snapshot with your exact package versions (Part 5)

**Next lecture →** Lecture 01: Simulation Basics — random seeds, distributions, and the simulation toolkit we will use all semester.
