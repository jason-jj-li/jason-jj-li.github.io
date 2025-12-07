---
slug: charls-frailty-notebook
title_zh: "Jupyter 示例：CHARLS 衰弱状态微演示"
title_en: "Jupyter Example: CHARLS Frailty Mini Demo"
date: 2024-11-10
tag: Methods
source: notebook
notebook: notebook-demo.ipynb
html: notebook-demo.html
summary_zh: "用一个简单的 Jupyter 笔记本演示如何加载 CHARLS 风格数据并快速得到衰弱得分。"
summary_en: "A tiny Jupyter notebook showing how to load a CHARLS-style dataset and compute a frailty score."
---

# CHARLS Frailty Mini Demo

A short notebook showing how to calculate a simple frailty score from a CHARLS-style dataset.

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "id": [1, 2, 3],
    "weight_change": [-3.1, 0.2, -5.0],
    "gait_speed": [0.9, 1.1, 0.7],
    "self_rated_health": [3, 2, 4],   # 1=excellent, 5=poor
    "chronic_diseases": [1, 3, 2],
    "adl_limitations": [0, 1, 0],
})

def frailty_score(row):
    components = [
        row["weight_change"] <= -4,          # unintentional loss
        row["gait_speed"] < 0.8,             # slow gait
        row["self_rated_health"] >= 4,       # poor health
        row["chronic_diseases"] >= 2,        # multimorbidity
        row["adl_limitations"] > 0,          # ADL limitation
    ]
    return np.sum(components)

df["frailty_score"] = df.apply(frailty_score, axis=1)
df.to_csv("frailty_demo_output.csv", index=False)
df
```
