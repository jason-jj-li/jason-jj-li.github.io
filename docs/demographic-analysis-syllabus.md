# 人口统计分析系列课程大纲

## Demographic Analysis with Python — Full Curriculum Design (v4.0)

> 本大纲基于四份**原文核实**的一手资料交叉设计:
>
> 1. **UC Berkeley DEMOG 110/210 教学日历**(2017 秋,Prof. Robert Chung;[官方 PDF](https://www.demog.berkeley.edu/wp-content/uploads/2022/06/110_210_syllabus_2017.pdf))——摘录见附录 A
> 2. **LSHTM Demographic Methods 模块大纲**(2024–25,Module 2057,MSc Demography & Health 必修课)——摘录见附录 B
> 3. **Wachter (2014)** *Essential Demographic Methods*,Harvard UP —— Berkeley 指定教材,章节地图见附录 C
> 4. **Carmichael (2016)** *Fundamentals of Demographic Analysis*,Springer —— ANU 课程讲义成书,章节地图见附录 D
>
> **体例说明:** 课程按"讲"(Lesson)组织,每讲再拆为 1–3 **帖**(博客文章)——每帖聚焦一个核心概念 + 一段代码 + 一组可视化,15–20 分钟可读完。全系列共 **50 帖**(含已发布概览篇)。每帖给出核心内容与教材锚点(精确到节/页);大纲对照在讲一级给出。

---

## 一、课程简介与设计原则

- **规模**:1 篇概览 + 5 个模块,23 讲,50 帖——约相当于一学期研究生方法课(Berkeley 15 周 + LSHTM 10 周)的容量,但以博客节奏释放
- **知识序列**:采用 LSHTM 的"时期优先"路线(对零基础更平滑):概览 → 死亡率与生命表(7 讲 17 帖)→ 生育率(4 讲 10 帖)→ 迁移(3 讲 6 帖)→ 人口预测(3 讲 7 帖)→ 进阶专题(6 讲 9 帖)
- **双教材分工**:概念推导与数学严格性取 Wachter;逐步操作流程("recipe")与代码落地取 Carmichael
- **每帖体例**:公式推导 + Python 实现 + 真实数据可视化;篇首回收前帖钩子,篇末预告下帖;每讲末帖附 2–3 个练习(参照 Carmichael tutorial 与 Berkeley problem sets 风格)

## 二、先修要求

- 基础 Python(pandas、matplotlib)
- 高中代数(比率、加权平均、指数函数)
- 无需人口学与微积分背景(与 LSHTM 模块、Berkeley 110 一致)

## 三、总体学习目标

1. 区分率(rate)、概率(probability)、比率(ratio),熟练运用 Lexis 图与 person-years 概念
2. 用直接法与间接法做年龄标准化,计算并解释 SMR
3. 从零构建单岁与简略生命表,计算预期寿命并做国际/历史比较
4. 计算 TFR、GRR、NRR,区分时期与队列视角,理解 tempo 扭曲
5. 测量迁移流并估计净迁移,理解迁移的年龄模式
6. 用 Leslie 矩阵实现队列要素法投影,复现联合国 WPP 式情景分析
7. 了解稳定人口理论、模型生命表、多减因表、分解方法等进阶工具的用途与出处

## 四、课程总览

| 篇 | 主题 | 讲 | 帖 | Berkeley 对照 | LSHTM 对照 | 状态 |
| --- | --- | --- | --- | --- | --- | --- |
| 概览 | 人口结构与基本指标 | — | 1 | Weeks I–II | Week 1 | ✅ 已发布 |
| Module 1 | 死亡率分析与生命表 | 7 | 17 | Weeks II–III, VI–VII | Weeks 2–4 | 🔜 下一帖 |
| Module 2 | 生育率分析 | 4 | 10 | Weeks IV, VI, XI, XIII | Week 5 + Part 2 | 📋 |
| Module 3 | 迁移与人口流动 | 3 | 6 | (Wachter Ch11) | Part 2 | 📋 |
| Module 4 | 人口预测 | 3 | 7 | Week V | (后续模块 2429) | 📋 |
| Module 5 | 进阶专题 | 6 | 9 | Weeks VIII–XII | Part 2 | 📋 |

**博客发布规则:** `series: demographic`;概览篇 `series_order: 1`,此后按帖序递增。slug 建议:`demographic-m{模块}l{讲}{帖字母}-{英文短名}`,如 `demographic-m1l2a-direct-standardization`。

---

## 五、详细分帖设计

### 概览篇:人口结构与基本指标(已发布,series_order 1)

**学习目标:** 读懂人口金字塔;会算三大粗率与抚养比;理解人口平衡方程。

已覆盖:金字塔四种形态、年龄结构指标、平衡方程、CBR/CDR/NIR、多国比较。
**已知缺口(由帖 1.1a 回补):** Lexis 图与 person-years。
**教材对照:** Wachter §1.1–1.3、§1.7、§2.3;Carmichael Ch1。

---

### Module 1:死亡率分析与生命表(7 讲 17 帖)

死亡率是人口学方法的核心训练场:LSHTM 用 3 周、Berkeley 用 4 周以上覆盖本模块。前 3 讲解决"如何公平比较死亡率",后 4 讲解决"如何构建并使用生命表"。

#### Lesson 1.1 死亡率的测量:从粗率到分年龄率(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.1a | Lexis 图与 Person-Years:率的分母到底是什么 | **回补概览缺口**;时间×年龄平面上的队列线与时期截面;person-years 的图解;暴露的概念 | Wachter §2.1–2.2;Carmichael Ch3(Lexis 实例)、Ch1(p.36) |
| 1.1b | 粗死亡率为什么会撒谎 | CDR 的构成效应;老龄化国家 CDR 更高但每个年龄都更"安全"(Simpson 悖论数值案例);引出标准化需求 | Wachter §2.3;Carmichael Ch1(p.31) |
| 1.1c | 分年龄死亡率与其他死亡指标 | ASDR 的定义与图形(log 尺度死亡率曲线);IMR / U5MR / MMR 体系;各指标的分母陷阱 | Wachter §2.4;LSHTM Wk2 清单;Carmichael Ch1 |

#### Lesson 1.2 直接标准化(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.2a | 标准化的思想与标准人口 | 直接标准化公式推导;标准人口的选择惯例(Segi 世界标准、WHO World Standard);选择的影响 | Carmichael Ch2(p.49–56);Wachter §6.5 |
| 1.2b | 直接标准化实战:重排两国死亡率座次 | 完整 worked example:同一标准人口下两国比较;Python 实现 `standardize_direct()`;结果对标准人口选择的敏感性 | Carmichael Ch2(p.56 起);Wachter §6.5 |

#### Lesson 1.3 间接标准化与 SMR(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.3a | 间接标准化与标准化死亡比 | 何时不得不用间接法(年龄别死亡数太小);SMR 计算与解释;"期望死亡数"的思想 | Carmichael Ch2(p.68) |
| 1.3b | 直接 vs 间接:对比与标准化的局限 | 两种方法结果对比;标准化不是万能的(依赖标准人口);何时该直接看分年龄率 | Carmichael Ch2(p.72 Additional Points) |

#### Lesson 1.4 队列生命表(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.4a | 跟随一个队列走过一生 | 队列死亡率直觉;死亡概率 q 与死亡率 m 的本质区别;存活概率 | Wachter §3.1–3.2;Berkeley Wk III |
| 1.4b | 生命表各列的直觉:从 King Edward 的孩子们说起 | 历史案例引入生命表;lx、dx、qx 各列含义;队列生命表的局限(要等 100 年)引出时期表 | Wachter §3.3(§3.3.1 案例) |

#### Lesson 1.5 时期生命表(上):逐列构建(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.5a | 从死亡率到死亡概率:nmx → nqx | 换算公式推导;separation factors(平均存活时间)为何关键;婴儿组的特殊处理 | Carmichael Ch4(p.139);Wachter §7.1 |
| 1.5b | 生命表逐列构建:lx → dx → nLx → Tx → ex | 每列的递推关系与人口学含义;静止人口的引入 | Carmichael Ch4(p.145, p.148);Wachter §3.3.2 |
| 1.5c | `build_lifetable()`:完整实现与解读 | 单岁生命表完整 recipe 的 Python 实现;e₀ 的计算;结果解读框架 | Carmichael Ch4(p.157 recipe);Wachter §7.1 |

#### Lesson 1.6 时期生命表(下):简略生命表与验证(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.6a | 简略生命表:5 岁组的实践 | 5 岁组 nqx 估计;开尾组(85+)处理;与单岁表的对照 | Carmichael Ch4(p.158, p.161) |
| 1.6b | 验证:与 HMD 官方生命表逐列比对 | 拿真实国家数据跑 1.5c 的函数;与 Human Mortality Database 官方表逐列比对;误差来源分析 | 综合;HMD 数据 |

#### Lesson 1.7 生命表的扩展与应用(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 1.7a | 生命表即静止人口 | 静止人口恒等式;生命表人口的年龄结构;e₀ 作为静止人口的人均寿命 | Wachter §2.7;LSHTM Wk4 |
| 1.7b | 存活比:从生命表到人口投影 | survivorship ratios 的计算;用途预告(迁移估计、人口投影);本讲练习 | Carmichael Ch4(p.176);LSHTM Wk4 |
| 1.7c | 预期寿命的国际与历史比较 | 多国 e₀ 比较实战;1300s vs 2000s 的历史纵深;NRR 预告(生命表 × 生育率);Module 1 总结 | Wachter §3.7、§4.3 |

**模块实战与数据:** HMD 分年龄死亡数据(日本、瑞典 1950/2000)+ WPP(高死亡国家);WHO 世界标准人口。代码资产:`standardize_direct()` / `standardize_indirect()` / `build_lifetable()`(单岁与简略两版),后续模块复用。

---

### Module 2:生育率分析(4 讲 10 帖)

#### Lesson 2.1 生育指标的精细化(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 2.1a | 从 CBR 到 GFR 到 ASFR:分母的精细化之路 | 每步精细化解决了什么混淆;child/woman ratio(无登记数据时的替代) | Carmichael Ch6(p.249, p.256);Wachter §6.1–6.2 |
| 2.1b | TFR:一个"合成妇女"的一生 | TFR 的求和定义;合成队列解释;TFR = 2.1 更替水平的含义与前提 | Carmichael Ch6(p.249);Wachter §6.3;LSHTM Wk5 |

#### Lesson 2.2 再生产率(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 2.2a | GRR 与代际更新 | 从 TFR 到 GRR(女婴比例);代际长度;更新(generational renewal)的直觉 | Wachter §4.1–4.2;Carmichael Ch6(p.257, p.260) |
| 2.2b | NRR:生命表与生育率的交汇 | **回收 Module 1 生命表**;NRR 计算实战;NRR ≈ 1 的政策含义 | Wachter §4.3、§6.3;Carmichael Ch6(p.257);LSHTM Wk4 |

#### Lesson 2.3 生育的年龄模式与经典模型(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 2.3a | ASFR 曲线的形态学 | 早育 vs 晚育模式;平均生育年龄;log(GRR) 图;多国 ASFR 对比实战 | Carmichael Ch6(p.261–266);Wachter §6.4 |
| 2.3b | Coale-Trussell 模型与 Princeton 指数 | 自然生育率概念;M/m 参数;If/Ig/Im/Ih 指数 | Wachter §6.7–6.8、§4.5;Carmichael Ch6(p.268, p.270) |
| 2.3c | Bongaarts 近似决定因素 | 婚姻、避孕、流产、哺乳四因子框架;TFR 的分解式估计 | Carmichael Ch6(p.278) |

#### Lesson 2.4 队列生育与 tempo 问题(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 2.4a | 时期 vs 队列再访 | Lexis 图回收(帖 1.1a);同一批数据的两种读法;合成队列的夸大倾向 | Carmichael Ch3(p.115);Wachter §6.6 |
| 2.4b | 队列生育指标:CFS 与 PPR | Completed Family Size;Parity Progression Ratios 阶梯图;HFD 队列数据实战 | Wachter §4.4;Carmichael Ch6(p.287);LSHTM Part 2 |
| 2.4c | Tempo 扭曲:TFR 如何"说谎" | 推迟生育压低时期 TFR 的机制;tempo 调整的思想;本讲练习 | Wachter §6.6;LSHTM Part 2(tempo distortions) |

**模块实战与数据:** WPP 多国 TFR 长序列;HFD 分年龄生育率与队列数据。代码资产:`calc_tfr()` / `calc_nrr()`(调用 Module 1 生命表)/ `parity_progression()`。

---

### Module 3:迁移与人口流动(3 讲 6 帖)

Berkeley 110 几乎不讲迁移,LSHTM 与 Carmichael 是主要参照;Wachter Ch11 提供空间视角。

#### Lesson 3.1 迁移的概念、数据与测量(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 3.1a | 为什么迁移数据是人口学中最差的 | mover vs migrant;数据来源及固有局限;存量 vs 流量 | Carmichael Ch7(p.314–315) |
| 3.1b | 迁入率、迁出率与净迁移率 | 三大迁移率;国际 vs 国内迁移测量之别;UN 迁移存量数据实战 | Carmichael Ch7(p.318, p.327);LSHTM Part 2 |

#### Lesson 3.2 净迁移的间接估计(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 3.2a | 平衡方程残差法 | 回收概览篇平衡方程;净迁移 = 残差;两次普查间的估计 | Carmichael Ch7 |
| 3.2b | 生命表存活法估计迁移 | **回收帖 1.7b 存活比**;分年龄净迁移估计;与前法对照 | Carmichael Ch4(p.188);LSHTM Part 2 |

#### Lesson 3.3 迁移的年龄模式与空间格局(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 3.3a | Rogers 曲线:迁移的年龄选择性 | 模型迁移表(青年峰 + 退休小峰);迁移率年龄模式的拟合 | LSHTM Part 2;Wachter Ch11 |
| 3.3b | 迁移如何塑造金字塔 | 迁移扰动金字塔的模拟;城市化与人口分布测度;本讲练习 | Carmichael Ch7(p.299–313);Wachter §11.1–11.3 |

**模块实战与数据:** UN 国际迁移存量;某国两次普查分年龄人口(残差法实战)。讨论点:迁移是开放人口预测中最不确定的分量(为 Module 4 铺垫)。

---

### Module 4:人口预测(3 讲 7 帖)

全系列的"集大成者":存活比来自 Module 1,生育假设来自 Module 2,迁移假设来自 Module 3。

#### Lesson 4.1 预测的概念与趋势外推法(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 4.1a | Projection 还是 Forecast? | 概念之分;人口预测的制度史(WPP 的角色);评估预测误差 | Carmichael Ch9(p.353–355) |
| 4.1b | 趋势外推法及其失败 | 简单/复杂/ratio 外推;为什么外推在人口问题上失败(忽略结构)——引出队列要素法 | Carmichael Ch9(p.361–364) |

#### Lesson 4.2 队列要素法与 Leslie 矩阵(3 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 4.2a | 队列要素法原理 | 三要素假设设定;逐步推算的逻辑;与平衡方程的关系 | Wachter Ch5(§5.1);Carmichael Ch9 后半 |
| 4.2b | Leslie 矩阵:把人口学写成矩阵 | 次对角线 = 存活比,首行 = 生育项;矩阵乘法即一年推算 | Wachter Ch5(§5.2–5.3);Berkeley Wk V |
| 4.2c | NumPy 实现与长期行为 | `leslie_project()` 完整实现;矩阵幂;收敛到稳定年龄结构的观察(预告 Module 5) | Wachter Ch5 |

#### Lesson 4.3 情景分析与实战投影(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 4.3a | UN WPP 情景的逻辑 | 高/中/低变体的假设组合;不确定性的表达(扇形图) | 综合;WPP 方法论 |
| 4.3b | 50 年国家实战投影 | 对一个真实国家做完整投影;与 WPP 官方结果对照;人口惯性现象(预告 5.1) | 综合三模块 |

**模块实战与数据:** WPP 某国分年龄基年人口 + 官方投影结果(验证用)。可视化:金字塔随时间演化帧序列、总人口扇形情景图。

---

### Module 5:进阶专题(6 讲 9 帖)

#### Lesson 5.1 稳定人口理论(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.1a | 不变率的长期后果:Lotka's r | 稳定人口的概念;内在增长率;Module 4 矩阵幂现象的理论解释 | Wachter Ch10(§10.4);Carmichael Ch8;Berkeley Wk XI–XII |
| 5.1b | Euler-Lotka 方程与人口惯性 | 方程推导直觉;momentum:TFR 骤降到更替水平后人口为何还涨 | Wachter §10.5–10.8;Carmichael Ch8 |

#### Lesson 5.2 模型生命表(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.2a | 从 Graunt 到 Coale-Demeny | 1662 年的历史起点;区域模型生命表家族;何时该用模型表 | Wachter §7.4–7.5;Berkeley Wk VIII |
| 5.2b | Brass Logit 与 Lee-Carter | relational logit 变换;Lee-Carter 死亡预测方法简介 | Wachter §7.6–7.7 |

#### Lesson 5.3 多减因生命表与竞争风险(2 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.3a | 死因别死亡率与竞争风险 | 死因数据;竞争风险直觉;"死因被消灭"的反事实问题 | Wachter Ch8(§8.2);Carmichael Ch4(p.192) |
| 5.3b | 多减因与去死因生命表 | "治愈癌症能延长多少寿命"(Berkeley 110 经典问题);去死因表构建 | Wachter Ch8(§8.3);LSHTM Part 2 |

#### Lesson 5.4 分解方法(1 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.4a | 率效应还是结构效应? | 把总体变化拆成两部分;与标准化的对偶关系;reverse subtraction | Carmichael Ch2(p.73, p.78);LSHTM Part 2 |

#### Lesson 5.5 婚姻与家庭(1 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.5a | 初婚过程的测量:SMAM | SMAFM;SMAM 公式;粗/净婚姻表;marity | Wachter Ch9;Carmichael Ch5(p.240);Berkeley Wk X |

#### Lesson 5.6 健康预期寿命(1 帖)

| 帖 | 标题 | 核心内容 | 教材锚点 |
| --- | --- | --- | --- |
| 5.6a | 从"活多久"到"健康地活多久" | YPLL;Sullivan 法健康预期寿命;DALE;DALY 与疾病负担;**系列收官**:工具与数据生态导览(DemoTools、PAPP、HMD/HFD/WPP) | Carmichael Ch4(p.200–203);LSHTM Part 2 |

---

## 六、数据来源

| 来源 | 用途 | 篇 |
| --- | --- | --- |
| UN World Population Prospects (WPP) | 分年龄人口、生育/死亡指标、投影对照 | 全部 |
| Human Mortality Database (HMD) | 高质量分年龄死亡数据、官方生命表(验证用) | 1, 5 |
| Human Fertility Database (HFD) | 分年龄生育率、队列生育 | 2 |
| World Bank WDI | 多国粗指标、面板数据 | 概览, 2 |
| UN 国际迁移存量 / 各国普查 | 迁移存量、两次普查对照 | 3 |
| WHO World Standard Population | 直接标准化的标准人口 | 1 |

## 七、参考资源

### 核心教材(写作时手头对照)

- **Carmichael, G. A. (2016). *Fundamentals of Demographic Analysis*. Springer.** —— recipe 风格,代码落地第一参考(附录 D)
- **Wachter, K. W. (2014). *Essential Demographic Methods*. Harvard UP.** —— 概念推导第一参考,Berkeley 指定教材(附录 C)

### 补充读物(LSHTM 推荐)

- Palmore, J. A., & Gardner, R. W. (1994). *Measuring Mortality, Fertility, and Natural Increase*. East-West Center.([公开 PDF](http://scholarspace.manoa.hawaii.edu/),数学门槛最低)
- Rowland, D. T. (2003). *Demographic Methods and Concepts*. Oxford UP.(非技术化入门)
- Preston, S. H., Heuveline, P., & Guillot, M. (2001). *Demography: Measuring and Modeling Population Processes*. Blackwell.(研究生标准参考书)

### 免费在线资源

- [PAPP — Population Analysis for Policies and Programs](http://papp.iussp.org/):LSHTM 为 IUSSP 开发的官方免费讲义,概念讲解风格可参照

### 对标课程

- UC Berkeley DEMOG 110 / 210(附录 A)
- LSHTM Demographic Methods, Module 2057(附录 B)
- UPenn DEMG 6090 Basic Demographic Methods(Michel Guillot;仅有课程列表条目,无公开大纲)

---

## 附录 A:Berkeley DEMOG 110/210 教学日历(2017 秋季,原文核实)

> 来源:[Berkeley 人口学系官网 Sample Syllabus(PDF)](https://www.demog.berkeley.edu/wp-content/uploads/2022/06/110_210_syllabus_2017.pdf),任课教师 Prof. Robert Chung,指定教材 Wachter (2014)。

| 周 | 主题 |
| --- | --- |
| I | The balancing equation for populations |
| II | Geometric and exponential growth;Cohorts, periods, and Lexis diagrams;Cohort survival |
| III | **The cohort life table**;Probabilities of dying and surviving |
| IV | Annuities and insurance;Cohort fertility, parity, and the NRR |
| V | **Population projection;Leslie Matrices** |
| VI | Period fertility, NRR, GRR, TFR;**Age-Standardized Rates** |
| VII | (期中考试)**Period Lifetables** |
| VIII | **Model Lifetables**(两周) |
| IX | Parity-progression;Cause-Specific Mortality |
| X | Marriage, divorce, and remarriage;Singulate Mean Age at First Marriage |
| XI | Synthetic Cohorts;Consequences of Unchanging Rates |
| XII | Stable Age Pyramids and Lotka's r;Natural Fertility |
| XIII | Princeton Fertility Indices;Coale-Trussell M and m |
| XIV–XV | (感恩节)Project review;Review |

**注:** Berkeley 顺序为"队列优先"(Week III 队列生命表、Week V 投影,时期指标反而靠后);本系列采用 LSHTM 的"时期优先"序列,对零基础更平滑。

## 附录 B:LSHTM Demographic Methods 模块主题表(2024–25,原文核实)

> 来源:LSHTM Module Specification,Module 2057(Organisers: Georges Reniers & Julio Romero-Prieto),MSc Demography & Health 必修课。Part 1 每周 1 主题,Part 2 每周 2 主题;实操工具 Excel / Stata / R。

### Part 1(Weeks 1–5)

| 周 | 主题 | 内容 |
| --- | --- | --- |
| 1 | Population composition, basic rates and ratios | 比率/概率/率的区分;人口平衡方程;person-years;人口金字塔 |
| 2 | **Measuring mortality and standardization** | CDR;分年龄死亡率;直接/间接标准化;IMR、U5MR、MMR |
| 3 | **Life tables** | 队列与时期生命表;预期寿命 e₀ |
| 4 | **Life table extensions and applications** | 生命表作为静止人口;存活比;净再生产率 NRR |
| 5 | Fertility | child/woman ratio;CBR、GFR、ASFR、TFR;队列生育率 |

### Part 2(Weeks 7–11)

- Cohort fertility and parity progression(时期 vs 队列、tempo distortions、CFS、PPR)
- Birth intervals / **decomposition methods**
- Demographic data sources (1):普查、生命登记、抽样调查
- Demographic data sources (2):纵向研究、人口监测、死因数据
- Measures of morbidity and mortality(健康预期寿命 Sullivan 法、DALE、DALY)
- **Migration**:定义、数据来源、迁移率的年龄模式、净迁移估计
- **Multiple decrements**:多减因生命表、去死因生命表
- Nuptiality:结婚率、SMAM、婚姻表

## 附录 C:Wachter(2014)章节地图(原书目录核实)

> Kenneth W. Wachter, *Essential Demographic Methods* (Harvard UP, 2014)。Wachter 是 Berkeley 人口学系教授,章节顺序 ≈ Berkeley 课程顺序。★ 为原书标注的进阶节。

| 章 | 内容 | 对应帖 |
| --- | --- | --- |
| 1 Exponential Growth | 平衡方程;增长率 R;指数曲线;logistic;倍增时间 | 概览 |
| 2 Periods and Cohorts | Lexis 图;person-years;粗率模型;IMR;静止人口恒等式 | 1.1a–1.1c, 1.7a |
| 3 Cohort Mortality | 队列存活;死亡概率;队列生命表各列(§3.3 含 nLx→ex 推导);Gompertz;年金 | 1.4a–1.4b, 1.5b |
| 4 Cohort Fertility | 代际更新;ASFR;NRR;队列 parity;自然生育率 | 2.2a–2.2b, 2.3b, 2.4b |
| 5 Population Projection | 转移矩阵;Leslie 矩阵;多状态表 ★ | 4.2a–4.2c |
| 6 Period Fertility | 时期指标;TFR/GRR/NRR;§6.5 年龄标准化率;tempo;Princeton 指数;Coale-Trussell | 1.2(§6.5), 2.1–2.4 |
| 7 Period Mortality | §7.1 时期生命表;模型生命表(Graunt、Coale-Demeny、Brass、Lee-Carter ★) | 1.5–1.6(§7.1), 5.2 |
| 8 Heterogeneous Risks | 多减因;竞争风险;Cox ★;frailty ★ | 5.3 |
| 9 Marriage and Family | SMAFM;SMAM;marity | 5.5 |
| 10 Stable Age Structures | Lotka's r;Euler-Lotka ★;人口惯性 | 5.1 |
| 11 Migration and Location | 空间人口学;迁移流;集中度 | 3.3 |

## 附录 D:Carmichael(2016)章节地图(原书目录核实)

> Gordon A. Carmichael, *Fundamentals of Demographic Analysis: Concepts, Measures and Methods* (Springer, 2016),ANU "Principles of Population Analysis" 课程讲义成书,面向量化背景较弱的学生,方法均给出可照做的 recipe。

| 章 | 内容 | 对应帖 |
| --- | --- | --- |
| 1 Basic Sources, Concepts, Definitions and Types of Measures | 数据来源;平衡方程;率与概率;person-years;年龄结构对粗率的影响(p.31) | 概览, 1.1 |
| 2 **Comparison: Standardization and Decomposition** | 直接标准化(p.56);间接标准化(p.68);补充要点(p.72);分解(p.73);reverse subtraction(p.78) | 1.2, 1.3, 5.4 |
| 3 The Cohort and Period Approaches | Lexis 图实例;tempo 与 intensity;合成队列(p.115) | 1.1a, 2.4a |
| 4 **Analysis of Mortality: The Life Table and Survival**(约 80 页) | 单岁生命表 recipe(p.157);separation factors(p.139);简略表 nqx 估计(p.161);存活比(p.176);净迁移估计(p.188);死因(p.192);YPLL(p.200);健康预期寿命(p.201);DALY(p.203) | 1.5, 1.6, 1.7, 3.2b, 5.3, 5.6 |
| 5 Marriage, Marital Status and Relationships | 粗/净婚姻表;SMAM(p.240) | 5.5 |
| 6 Analysis of Fertility | 基本指标(p.249);CWR(p.256);GRR/NRR(p.257);生育年龄模式(p.261);Coale-Trussell(p.268);Princeton 指数(p.270);Brass Gompertz(p.274);Bongaarts(p.278);parity progression(p.287) | 2.1–2.4 |
| 7 Population Distribution, Urbanization and Migration | 分布与城市化(p.299–313);迁移概念与数据(p.314);国际迁移(p.318);国内迁移(p.327) | 3.1, 3.3 |
| 8 Stable Population Theory | 内在增长率;稳定年龄分布 | 5.1 |
| 9 Population Projections | 概念(p.353);趋势外推(p.361–364);队列要素法 | 4.1, 4.2 |

---

*版本:v4.0(2026-08-23)——按博客节奏细分:23 讲拆为 50 帖(概览 1 + 死亡率 17 + 生育 10 + 迁移 6 + 预测 7 + 进阶 9),每帖聚焦一个概念并给出双教材精确锚点。v3.0 为 23 讲讲次版。*
