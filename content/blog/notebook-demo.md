---
slug: charls-frailty-notebook
title_zh: "Jupyter 示例：CHARLS 衰弱状态微演示"
title_en: "Jupyter Example: CHARLS Frailty Mini Demo"
date: 2024-11-10
tag: Methods
source: notebook
notebook: notebook-demo.ipynb
summary_zh: "用一个简单的 Jupyter 笔记本演示如何加载 CHARLS 风格数据并快速得到衰弱得分。"
summary_en: "A tiny Jupyter notebook showing how to load a CHARLS-style dataset and compute a frailty score."
---

### Notebook 思路 / Notebook Outline
- 读入 CSV（或 Stata）数据并保留关键变量
- 计算衰弱指标：体重变化、步速、自评健康、慢性病数量、ADL
- 合成一个 0-5 的 `frailty_score`，并导出结果
- 需要更多展示时，可在 notebook 里加入可视化与模型输出

### 关键代码片段
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
```

### 如何发布
- 把原始 `.ipynb` 放在同一目录（见 `notebook-demo.ipynb`），便于下载或在线查看。
- 发布前可用 `jupyter nbconvert --to markdown notebook-demo.ipynb` 生成同名 `.md`，站点会自动渲染。
- 如果想直接挂载 notebook，可把 `.ipynb` 路径写在 frontmatter 的 `notebook` 字段，前端会显示下载按钮。
