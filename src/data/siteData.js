import { Activity, Database, Globe2, Layers, ListOrdered, Route, Sprout } from 'lucide-react';

export const SITE_DATA = {
  profile: {
    name: { zh: "李佳佳", en: "Jiajia Li" },
    title: { zh: "北京师范大学社会学院讲师", en: "Lecturer, School of Sociology, Beijing Normal University" },
    university: { zh: "北京师范大学社会学院", en: "School of Sociology, Beijing Normal University" },
    email: "lijiajia95@hotmail.com",
    location: { zh: "北京市海淀区新街口外大街19号，北京师范大学", en: "Beijing Normal University, 19 Xinjiekouwai Street, Haidian, Beijing" },
    avatar: "/avatar.png",
    github: "https://github.com/jason-jj-li",
    linkedin: null,
    scholar: "https://scholar.google.com/citations?user=W4ZFySoAAAAJ&hl=zh-CN&authuser=1",
    researchgate: "https://www.researchgate.net/profile/Jiajia-Li-35",
    orcid: "https://orcid.org/0000-0003-3302-5063",
    cvLink: null,
    identity: {
      zh: "健康社会学 · 疾病与健康的社会生产",
      en: "Sociology of Health · The Social Production of Illness and Health"
    },
    researchQuestion: {
      zh: "疾病与健康如何在生命历程中被社会性地生产？",
      en: "How are illness and health socially produced across the life course?"
    },
    researchProfile: {
      zh: "我的研究立足健康社会学，关注疾病与健康在生命历程中的社会生产过程。具体考察早期社会环境、成年工作—家庭—生育经历如何在不同生命阶段累积、传递或得到补偿，并进一步形成中老年健康及健康不平等。研究主要依托中国及国际大型纵向调查和出生队列，运用生命史分析、纵向分析和跨国比较等方法。",
      en: "My research in the sociology of health examines the social production of illness and health across the life course. I study how early-life social conditions and adult work, family, and reproductive experiences accumulate, transmit, or offset social disadvantage, and how these processes shape later-life health and health inequalities. My work draws primarily on longitudinal surveys and birth cohorts from China and other countries, using life-history analysis, longitudinal methods, and cross-national comparisons."
    },
    bio: {
      zh: "我目前在北京师范大学社会学院任教，主要从事健康社会学与生命历程健康研究。我的研究关注疾病与健康在生命历程中的社会生产过程，重点考察早期社会环境、成年工作—家庭—生育经历如何在不同生命阶段累积、传递或得到补偿，并进一步形成中老年健康及健康不平等。研究主要依托中国及国际大型纵向调查和出生队列，开展生命史分析、纵向研究与跨国比较。",
      en: "I am a Lecturer at the School of Sociology, Beijing Normal University. My research lies at the intersection of the sociology of health and life-course research. I study the social production of illness and health across the life course, with particular attention to early-life social conditions, adult work-family-reproductive trajectories, and the accumulation, transmission, and compensation of social risks and resources in shaping later-life health and health inequalities. My work draws on longitudinal surveys and birth cohorts from China and other countries."
    }
  },

  publicationStats: {
    sciTotal: 29,
    sciFirstAuthor: 10,
    cnCoreTotal: 15,
    cnFirstAuthor: 3
  },

  researchDirections: [
    {
      key: "early-life-health",
      number: "01",
      stage: { zh: "早期", en: "Early Life" },
      title: { zh: "早期社会经历与远期健康", en: "Early-Life Social Experiences & Later-Life Health" },
      icon: Sprout,
      desc: {
        zh: "研究童年逆境、家庭社会经济条件、家庭结构与早期社会关系如何影响后续健康，并关注早期经历的测量、共现模式及其长期健康后果。",
        en: "How childhood adversity, family socioeconomic conditions, family structure, and early social relationships shape subsequent health, with attention to the measurement of early-life experiences, their co-occurrence patterns, and their long-term health consequences."
      },
      keywords: {
        zh: ["童年逆境", "家庭背景", "社会出身"],
        en: ["Childhood adversity", "Family background", "Social origins"]
      },
      datasets: ["CHARLS", "NCDS", "BCS70", "HRS", "ELSA", "SHARE"]
    },
    {
      key: "adult-trajectories",
      number: "02",
      stage: { zh: "成年", en: "Adulthood" },
      title: { zh: "成年生活轨迹与健康", en: "Adult Life Trajectories & Health" },
      icon: Route,
      desc: {
        zh: "研究工作、婚姻、家庭形成、生育和照护等社会角色在成年阶段的长期组合与转换，以及不同生活轨迹如何延续、强化或缓冲早期社会差异，并影响中老年健康。",
        en: "How social roles in work, marriage, family formation, fertility, and caregiving combine and shift across adulthood, and how different life trajectories perpetuate, amplify, or buffer early social differences to shape mid- and later-life health."
      },
      keywords: {
        zh: ["工作", "家庭", "生育", "照护"],
        en: ["Work", "Family", "Fertility", "Care"]
      },
      scope: {
        zh: ["工作—家庭轨迹", "就业史", "婚姻与家庭形成", "生育时机", "孩次", "妊娠丢失", "照护", "退休"],
        en: ["Work-family trajectories", "Employment histories", "Marriage & family formation", "Fertility timing", "Parity", "Pregnancy loss", "Caregiving", "Retirement"]
      },
      datasets: ["CHARLS", "HRS", "ELSA", "SHARE"]
    },
    {
      key: "healthy-aging",
      number: "03",
      stage: { zh: "中老年", en: "Later Life" },
      title: { zh: "健康老龄化与社会分化", en: "Healthy Aging & Social Differentiation" },
      icon: Activity,
      desc: {
        zh: "研究不同生命历程经历如何形成中老年身体、心理、功能、认知和生物健康差异，并考察这些差异在不同性别、社会经济群体、出生队列及社会制度环境中的变化。",
        en: "How different life-course experiences produce differences in physical, psychological, functional, cognitive, and biological health in middle and later life, and how these differences vary across gender, socioeconomic groups, birth cohorts, and institutional contexts."
      },
      keywords: {
        zh: ["健康老龄化", "健康不平等", "出生队列", "社会分层"],
        en: ["Healthy aging", "Health inequalities", "Cohort", "Social stratification"]
      },
      datasets: ["CHARLS", "HRS", "ELSA", "SHARE"]
    }
  ],

  researchFramework: {
    title: { zh: "生命历程中疾病与健康的社会生产", en: "The Social Production of Illness and Health Across the Life Course" },
    subtitle: {
      zh: "社会结构、社会环境与生活经历如何在不同生命阶段持续作用，并通过累积、传递、强化和补偿形成健康及健康不平等。",
      en: "How social structures, conditions, and experiences operate across different stages of life through accumulation, transmission, amplification, and compensation to shape health and health inequalities."
    },
    context: { zh: "社会结构与制度环境", en: "Social Structure & Institutional Context" },
    stages: [
      {
        key: "early-life",
        label: { zh: "早期社会经历", en: "Early-Life Social Experiences" },
        tags: {
          zh: ["家庭社会经济条件", "家庭结构", "童年逆境", "社会关系"],
          en: ["Family socioeconomic conditions", "Family structure", "Childhood adversity", "Social relationships"]
        }
      },
      {
        key: "adulthood",
        label: { zh: "成年生活轨迹", en: "Adult Life Trajectories" },
        tags: {
          zh: ["工作与职业", "婚姻与家庭", "生育历程", "照护与角色转换"],
          en: ["Work & occupation", "Marriage & family", "Fertility histories", "Caregiving & role transitions"]
        }
      },
      {
        key: "later-life",
        label: { zh: "中老年健康", en: "Health & Healthy Aging" },
        tags: {
          zh: ["身体健康", "心理健康", "功能与衰弱", "认知", "生物老化"],
          en: ["Physical health", "Mental health", "Function & frailty", "Cognition", "Biological aging"]
        }
      }
    ],
    mechanisms: {
      zh: "累积 · 传递 · 强化 · 补偿",
      en: "Accumulation · Transmission · Amplification · Compensation"
    },
    outcome: { zh: "健康不平等与社会分化", en: "Health Inequalities & Social Differentiation" }
  },

  researchApproach: [
    {
      key: "longitudinal-cohorts",
      title: { zh: "纵向队列", en: "Longitudinal Cohorts" },
      icon: Database
    },
    {
      key: "life-history-sequence",
      title: { zh: "生命史与序列分析", en: "Life-History & Sequence Analysis" },
      icon: ListOrdered
    },
    {
      key: "cross-cohort-harmonization",
      title: { zh: "跨队列协调", en: "Cross-Cohort Harmonization" },
      icon: Layers
    },
    {
      key: "cross-national-comparison",
      title: { zh: "跨国比较", en: "Cross-National Comparison" },
      icon: Globe2
    }
  ],

  datasets: ["CHARLS", "HRS", "ELSA", "SHARE", "NCDS", "BCS70"],

  workExperience: [
    {
      title: { zh: "博雅博士后", en: "Boya Postdoctoral Fellow" },
      institution: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
      period: { zh: "2024.07—2026.06", en: "2024.07–2026.06" },
      startYear: 2024,
      location: { zh: "北京", en: "Beijing, China" }
    },
    {
      title: { zh: "访问学者", en: "Visiting Scholar" },
      institution: { zh: "牛津大学老龄研究所", en: "Institute of Population Ageing, University of Oxford" },
      period: { zh: "2024.09—2025.03", en: "2024.09–2025.03" },
      startYear: 2024,
      location: { zh: "牛津", en: "Oxford, UK" }
    }
  ],

  currentPosition: {
    title: { zh: "讲师", en: "Lecturer" },
    institution: { zh: "北京师范大学社会学院", en: "School of Sociology, Beijing Normal University" },
    period: { zh: "2026年6月至今", en: "June 2026–present" },
    startYear: 2026
  },

  education: [
    {
      degree: { zh: "人口学博士", en: "Ph.D. in Demography" },
      institution: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
      period: { zh: "2020.09—2024.07", en: "2020.09–2024.07" },
      startYear: 2020,
      location: { zh: "北京", en: "Beijing, China" }
    },
    {
      degree: { zh: "人口学硕士", en: "M.A. in Demography" },
      institution: { zh: "北京大学人口研究所", en: "Institute of Population Research, Peking University" },
      period: { zh: "2017.09—2020.07", en: "2017.09–2020.07" },
      startYear: 2017,
      location: { zh: "北京", en: "Beijing, China" }
    },
    {
      degree: { zh: "社会学本科", en: "B.A. in Sociology" },
      institution: { zh: "兰州大学哲学社会学院", en: "School of Philosophy and Sociology, Lanzhou University" },
      period: { zh: "2013.09—2017.07", en: "2013.09–2017.07" },
      startYear: 2013,
      location: { zh: "兰州", en: "Lanzhou, China" }
    }
  ],

  openResources: [
    {
      name: { zh: "QualInsight", en: "QualInsight" },
      type: { zh: "工具", en: "Tooling" },
      desc: {
        zh: "AI 辅助定性研究平台，支持编码分析、主题识别、情感分析、话语分析、叙事分析等，无需数据库，保护数据隐私。",
        en: "AI-assisted qualitative research platform supporting coding analysis, theme identification, sentiment analysis, discourse analysis, and narrative analysis. No database required, data privacy assured."
      },
      link: "https://github.com/jason-jj-li/AI_quali",
      version: "v4.1",
      updated: "2025-01-16",
      stack: ["Python", "Streamlit", "Plotly"],
      useCases: {
        zh: [
          "🏷️ AI 编码：演绎/归纳编码，分层结构，智能缓存",
          "🎯 主题分析：AI 主题识别，层次关系，跨案例比较",
          "📊 可视化：10+ 种图表类型（热力图、网络图等）",
          "🔬 高级分析：情感、话语、叙事分析，编码信度",
          "📝 报告生成：IMRAD 结构，双语支持",
          "💾 导出系统：多格式导出，项目打包"
        ],
        en: [
          "🏷️ AI Coding: Deductive/Inductive coding, hierarchical structure, smart caching",
          "🎯 Theme Analysis: AI theme identification, hierarchical relationships, cross-case analysis",
          "📊 Visualization: 10+ chart types (heatmaps, network graphs)",
          "🔬 Advanced Analysis: Sentiment, discourse, narrative analysis, coding reliability",
          "📝 Report Generation: IMRAD structure, bilingual support",
          "💾 Export System: Multi-format export, project packaging"
        ]
      },
      advantages: {
        zh: [
          "✅ 单会话分析：上传 → 分析 → 下载",
          "✅ 无需数据库：数据存储在浏览器会话中",
          "✅ 隐私保护：本地运行或可选云端 LLM",
          "✅ 多 LLM 支持：OpenAI、Anthropic、Deepseek、LM Studio",
          "✅ 开箱即用：pip install + streamlit run 即可启动",
          "✅ MIT 许可：开源免费，欢迎贡献"
        ],
        en: [
          "✅ Single-session workflow: Upload → Analyze → Download",
          "✅ No database: Data stored in browser session",
          "✅ Privacy: Run locally or optional cloud LLMs",
          "✅ Multiple LLMs: OpenAI, Anthropic, Deepseek, LM Studio",
          "✅ Ready to use: pip install + streamlit run",
          "✅ MIT License: Open source, contributions welcome"
        ]
      }
    },
    {
      name: { zh: "auto_sim_ai", en: "auto_sim_ai" },
      type: { zh: "工具", en: "Tooling" },
      desc: {
        zh: "LLM 驱动的虚拟受访者仿真系统，可生成多样化画像，模拟问卷与干预响应。",
        en: "LLM Simulation Survey System that generates virtual personas to emulate human responses to surveys and interventions."
      },
      link: "https://github.com/jason-jj-li/auto_sim_ai",
      version: "v0.3.1",
      updated: "2024-05-12",
      stack: ["Python", "Gym-style APIs", "CLI"],
      useCases: {
        zh: [
          "🏥 健康干预：测试健康信息在不同人群的影响",
          "📊 市场调研：快速评估产品/服务反馈",
          "🎓 教育研究：检验教学效果与学习者画像",
          "💡 政策分析：预判政策对多元群体的影响",
          "🧪 A/B 测试：上线前比较多种方案",
          "📈 原型验证：低成本迭代研究设计"
        ],
        en: [
          "🏥 Health interventions: test messaging across populations",
          "📊 Market research: rapid feedback on products/services",
          "🎓 Educational research: assess teaching effectiveness by learner profile",
          "💡 Policy analysis: anticipate impacts on diverse communities",
          "🧪 A/B testing: compare approaches before rollout",
          "📈 Prototype validation: iterate study designs cheaply"
        ]
      },
      advantages: {
        zh: [
          "✅ 快速迭代：分钟级完成数百条仿真响应",
          "✅ 成本友好：免招募受试者成本",
          "✅ 可复现：精准控制变量便于重复实验",
          "✅ 多样性：覆盖不同背景、年龄与文化的画像",
          "✅ 深度洞察：生成定性 + 定量输出",
          "✅ 灵活部署：本地或云 API 运行"
        ],
        en: [
          "✅ Fast iteration: hundreds of simulated responses in minutes",
          "✅ Cost-effective: no participant recruitment overhead",
          "✅ Reproducible: controlled variables for repeatable experiments",
          "✅ Diverse: personas across backgrounds, ages, cultures",
          "✅ Deep insights: qualitative + quantitative outputs",
          "✅ Flexible deployment: run locally or via cloud APIs"
        ]
      }
    }
  ],

  highlights: [
    {
      date: "2026-01-16",
      title: {
        zh: "QualInsight v4.1 发布",
        en: "QualInsight v4.1 Released"
      },
      desc: {
        zh: "AI 辅助定性研究平台发布，支持编码分析、主题识别、情感/话语/叙事分析、可视化与报告生成。",
        en: "AI-assisted qualitative research platform released with coding, theme analysis, sentiment/discourse/narrative analysis, visualization, and report generation."
      },
      tag: { zh: "工具", en: "Tool" },
      link: "https://github.com/jason-jj-li/AI_quali"
    },
    {
      date: "2026-01-01",
      title: {
        zh: "疼痛发生率与多部位轨迹研究发表",
        en: "Pain Incidence and Trajectories Study Published"
      },
      desc: {
        zh: "PAIN Reports 发表我们关于童年逆境与中老年疼痛轨迹的研究成果。",
        en: "Our study on adverse childhood experiences and pain trajectories published in PAIN Reports."
      },
      tag: { zh: "论文", en: "Publication" },
      link: "https://doi.org/10.1097/PR9.0000000000001389"
    },
    {
      date: "2025-11-10",
      title: {
        zh: "心血管疾病跨国比较研究发表",
        en: "Cross-Country CVD Study Published"
      },
      desc: {
        zh: "Journal of Global Health 发表基于 HRS/ELSA/SHARE/CHARLS 的年龄-时期-队列分析。",
        en: "Age-period-cohort analysis across HRS, ELSA, SHARE, and CHARLS published in Journal of Global Health."
      },
      tag: { zh: "论文", en: "Publication" },
      link: "https://doi.org/10.7189/jogh.15.04260"
    },
    {
      date: "2025-11-01",
      title: {
        zh: "auto_sim_ai 工具包发布",
        en: "auto_sim_ai Toolkit Released"
      },
      desc: {
        zh: "开源 LLM 驱动的虚拟受访者仿真系统，可用于健康干预测试与问卷模拟。",
        en: "Open-source LLM-driven virtual respondent simulation system for health intervention testing and survey simulation."
      },
      tag: { zh: "工具", en: "Tool" },
      link: "https://github.com/jason-jj-li/auto_sim_ai"
    }
  ],

  academicServices: {
    editorialBoards: [
      {
        role: { zh: "编委", en: "Editorial Board Member" },
        journal: "BMC Public Health",
        description: {
          zh: "负责公共卫生领域的稿件评审与筛选",
          en: "Managing peer review and manuscript selection in public health"
        }
      },
      {
        role: { zh: "编委", en: "Editorial Board Member" },
        journal: "Discover Public Health",
        description: {
          zh: "负责公共卫生研究领域的稿件评审",
          en: "Managing peer review in public health research"
        }
      },
      {
        role: { zh: "主题编辑", en: "Topic Editor" },
        journal: "Frontiers in Epidemiology",
        description: {
          zh: "衰老与生命历程流行病学专栏",
          en: "Aging and Life-course Epidemiology Section"
        },
        researchTopic: {
          zh: "全球视角下的生命历程策略应对健康不平等",
          en: "Global Perspectives on Implementing Life-course Strategies to Address Health Disparities"
        }
      }
    ],
    memberships: [
      {
        name: "SLLS",
        fullName: {
          zh: "纵向与生命历程研究学会",
          en: "Society for Longitudinal and Lifecourse Studies"
        }
      },
      {
        name: "IUSSP",
        fullName: {
          zh: "国际人口科学研究联盟",
          en: "International Union for Scientific Study of Population"
        }
      }
    ],
    additionalServices: {
      zh: "受邀为多本SCI期刊匿名审稿",
      en: "Invited to provide anonymous peer review for multiple SCI journals"
    }
  },

  teaching: [
    {
      code: "STA101",
      year: "2026 Spring",
      name: { zh: "应用统计分析", en: "Applied Statistical Analysis" },
      role: { zh: "讲师", en: "Instructor" },
      description: {
        zh: "基于 Python 的统计分析课程，涵盖描述性统计、假设检验、回归分析、数据可视化等内容，结合公共卫生与人口健康实际案例。",
        en: "Python-based statistical analysis course covering descriptive statistics, hypothesis testing, regression analysis, and data visualization with public health and population health case studies."
      }
    },
    {
      code: "PH401",
      year: "2025 Fall",
      name: { zh: "人口健康流行病学", en: "Population Health Epidemiology" },
      role: { zh: "讲师", en: "Instructor" },
      description: {
        zh: "从生命历程视角讲授人口健康测量、疾病负担评估与社会决定因素分析方法，结合纵向数据案例。",
        en: "Life-course approach to measuring population health, disease burden, and social determinants, with longitudinal data case studies."
      }
    },
    {
      code: "HN201",
      year: "2025 Spring",
      name: { zh: "运动、营养与健康", en: "Exercise, Nutrition & Health" },
      role: { zh: "讲师", en: "Instructor" },
      description: {
        zh: "讨论体力活动与营养在健康促进中的作用，覆盖评估工具、干预设计与效果评估。",
        en: "Covers roles of physical activity and nutrition in health promotion, including assessment tools, intervention design, and evaluation."
      }
    },
    {
      code: "HN201",
      year: "2020 Fall",
      name: { zh: "运动、营养与健康", en: "Exercise, Nutrition & Health" },
      role: { zh: "助教", en: "Teaching Assistant" },
      description: {
        zh: "协助课堂教学、作业批改与课程项目指导，支持学生完成健康行为分析。",
        en: "Supported instruction, grading, and projects to help students complete health behavior analyses."
      }
    },
    {
      code: "RSW101",
      year: "2021 Spring",
      name: { zh: "科学研究与学术写作", en: "Research Methods & Academic Writing" },
      role: { zh: "助教", en: "Teaching Assistant" },
      description: {
        zh: "辅导研究设计、数据分析与学术写作基础，组织讨论与作业反馈。",
        en: "Assisted with study design, data analysis basics, and academic writing; led discussions and assignment feedback."
      }
    }
  ],

  posts: [],

  publications: [
    {
      year: 2026,
      title: "Association of Socioeconomic Status Transition with Arthritis: A Life-Course Study",
      authors: "Guilan Xie; Chiara Natalie Focacci; Jiajia Li; et al.",
      venue: "BMC Musculoskeletal Disorders (SCI/Q2)",
      links: { paper: "https://doi.org/10.1186/s12891-026-10410-1" },
      highlight: false
    },
    {
      year: 2026,
      title: "Adverse Childhood Experiences and Pain Incidence and Multisite Trajectories among Middle-Aged and Older Chinese Adults",
      authors: "Jiajia Li; Heming Pei; Guilan Xie; Gong Chen; Lijun Pei",
      venue: "PAIN Reports 11(1):e1389 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1097/PR9.0000000000001389" },
      highlight: true
    },
    {
      year: 2025,
      title: "Age-Period-Cohort Analysis of Cardiovascular Disease Trends in Middle-Aged and Older Adults: Cross-Country Comparison across HRS, ELSA, SHARE, and CHARLS",
      authors: "Jiajia Li; Shiqi Lin; Heming Pei; Guilan Xie; Lijun Pei; Gong Chen",
      venue: "Journal of Global Health 15:04260 (SCI/Q1)",
      links: { paper: "https://doi.org/10.7189/jogh.15.04260" },
      highlight: true
    },
    {
      year: 2024,
      title: "Adverse Childhood Experiences and Social Participation on Frailty State Transitions among middle-aged and older adults: evidence from a 10-year prospective study in China",
      authors: "Jiajia Li; Heming Pei; Xiaojin Yan; Yue Wei; Gong Chen; Lijun Pei",
      venue: "The Journal of Nutrition, Health & Aging 26(12):1034–41 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1016/j.jnha.2024.100400" },
      highlight: true
    },
    {
      year: 2023,
      title: "Cross-Country Comparison of Income-Related Inequality in Physical Functional Disability among Middle-Aged and Older Adults: Evidence from 33 Countries",
      authors: "Jiajia Li; Shiqi Lin; Xiaojin Yan; Yue Wei; Fan Yang; Lijun Pei",
      venue: "Journal of Global Health 13:04053 (SCI/Q1)",
      links: { paper: "https://doi.org/10.7189/jogh.13.04053" },
      highlight: false
    },
    {
      year: 2022,
      title: "Adverse Childhood Experiences and Depressive Symptoms Trajectories Among Middle-Aged and Elderly - China, 2011-2018",
      authors: "Jiajia Li; Shiqi Lin; Lijun Pei",
      venue: "China CDC Weekly 4(27):588–92 (SCI/Q2)",
      links: { paper: "https://doi.org/10.46234/ccdcw2022.129" },
      highlight: false
    },
    {
      year: 2022,
      title: "Adverse Childhood Experiences and Trajectories of ADL Disability among Middle-Aged and Older Adults in China: Findings from the CHARLS Cohort Study",
      authors: "Jiajia Li; Shiqi Lin; Xiaojin Yan; Lijun Pei; Zengwu Wang",
      venue: "The Journal of Nutrition, Health & Aging 26(12):1034–41 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1007/s12603-022-1863-z" },
      highlight: false
    },
    {
      year: 2022,
      title: "Spatial Variation and Association between Maternal Chemical Fertilizer Exposure and Preterm Birth in a Rural Area in Northern China",
      authors: "Jiajia Li; Shiqi Lin; Jilei Wu; Yu Li; Xuejun Shang; Lijun Pei",
      venue: "Environmental Science and Pollution Research 29(13):19460–72 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1007/s11356-021-17124-y" },
      highlight: false
    },
    {
      year: 2023,
      title: "Cross-Level Interaction between Individual Education and Regional Chemical Fertilizer Consumption on the Risk of Hypertension: Evidence from the China Hypertension Survey",
      authors: "Jiajia Li; Zengwu Wang; Shiqi Lin; Lijun Pei; Linfeng Zhang; Xin Wang; Zuo Chen; Congyi Zheng; Yuting Kang; Lu Chen; Haoqi Zhou; Runlin Gao",
      venue: "Environmental Science and Pollution Research 30(3):6390–6400 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1007/s11356-022-22441-x" },
      highlight: false
    },
    {
      year: 2023,
      title: "Association between Maternal Exposure to Chemical Fertilizer and the Risk of Birth Defects in a Rural Population in Northern China: A Population-Based Study",
      authors: "Jiajia Li; Shiqi Lin; Jilei Wu; Lijun Pei; Xuejun Shang",
      venue: "International Health 15(3):299–308 (SCI/Q3)",
      links: { paper: "https://doi.org/10.1093/inthealth/ihac027" },
      highlight: false
    },
    {
      year: 2022,
      title: "Interactive Effects of Maternal Exposure to Chemical Fertilizer and Socio-Economic Status on the Risk of Low Birth Weight",
      authors: "Shiqi Lin; Jiajia Li; Jilei Wu; Fan Yang; Lijun Pei; Xuejun Shang",
      venue: "BMC Public Health 22(1):1206 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1186/s12889-022-13604-z" },
      highlight: false
    },
    {
      year: 2025,
      title: "Childhood Socioeconomic Status and Depressive Symptoms in Mid- and Late Life: Parenting Styles as Mediators",
      authors: "Shiqi Lin; Jiajia Li; Xiaojin Yan; Sheng Lin",
      venue: "The Journals of Gerontology, Series B: Psychological Sciences and Social Sciences (SCI/Q1)",
      links: { paper: "https://doi.org/10.1093/geronb/gbaf078" },
      highlight: false
    },
    {
      year: 2025,
      title: "Adverse Childhood Experiences and Trajectories of Chronic Diseases: A Population-Base Longitudinal Study",
      authors: "Guilan Xie; Jiajia Li; Ruiqi Wang; Lijun Pei; Xinming Song; Gong Chen",
      venue: "Public Health 242:256–63 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1016/j.puhe.2025.03.014" },
      highlight: false
    },
    {
      year: 2024,
      title: "Association between short-term daily temperature variability and blood pressure in the Chinese population: From the China hypertension survey",
      authors: "Xiaojin Yan; Jiajia Li; Jilei Wu; Shiqi Lin; Zengwu Wang; Lijun Pei; Congyi Zheng; Xin Wang; Xue Cao; Zhen Hu; Yixin Tian",
      venue: "Environment International 184:108463 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1016/j.envint.108463" },
      highlight: false
    },
    {
      year: 2023,
      title: "Maternal Pesticide Exposure and Risk of Preterm Birth: A Systematic Review and Meta-Analysis",
      authors: "Shiqi Lin; Jiajia Li; Xiaojin Yan; Lijun Pei; Xuejun Shang",
      venue: "Environment International 178:108043 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1016/j.envint.2023.108043" },
      highlight: false
    },
    {
      year: 2022,
      title: "Maternal Passive Smoking, Vitamin D Deficiency and Risk of Spontaneous Abortion",
      authors: "Shiqi Lin; Jiajia Li; Yuan Zhang; Xinming Song; Gong Chen; Lijun Pei",
      venue: "Nutrients 14(18):3674 (SCI/Q1)",
      links: { paper: "https://doi.org/10.3390/nu14183674" },
      highlight: false
    },
    {
      year: 2025,
      title: "Association of Social Participation with Progression and Reversion of Intrinsic Capacity in Older Adults: Based on Multistate Model",
      authors: "Guilan Xie; Chiara Natalie Focacci; Jiajia Li; Ruiqi Wang; Gong Chen",
      venue: "The Journal of Nutrition, Health and Aging 29(12):100719 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1016/j.jnha.2025.100719" },
      highlight: false
    },
    {
      year: 2023,
      title: "Temporal Trends in the Incidence of Depressive Disorders Across China, Japan, and South Korea: an Age-Period-Cohort Analysis for the Global Burden of Disease Study 2019",
      authors: "Xiaojin Yan; Shiqi Lin; Jiajia Li; Yue Wei; Lijun Pei",
      venue: "International Journal of Mental Health and Addiction (SCI/Q1)",
      links: { paper: "https://doi.org/10.1007/s11469-023-01220-w" },
      highlight: false
    },
    {
      year: 2025,
      title: "Sarcopenia and Sleep Duration with the Likelihood of Successful Aging among Older Adults in China: A Prospective Cohort Study",
      authors: "Bo Liang; Dingchun Hou; Jiajia Li; Gong Chen; Lijun Pei",
      venue: "BMC Geriatrics 25(1):679 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1186/s12877-025-06360-3" },
      highlight: false
    },
    {
      year: 2024,
      title: "Dentition status and risk of frailty in older Chinese people: a 16-year prospective cohort study",
      authors: "Shiqi Lin; Qi Yu; Jiajia Li; Xiaojin Yan",
      venue: "Archives of Gerontology and Geriatrics 121:105367 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1016/j.archger.2024.105367" },
      highlight: false
    },
    {
      year: 2022,
      title: "Trends in the Prevalence of Cognitive Impairment Among Older Adults Aged 65 to 105 Years — China, 2002–2018",
      authors: "Xiaojin Yan; Shiqi Lin; Jiajia Li; Hao Cheng; Xiangguo Liu; Lijun Pei",
      venue: "China CDC Weekly 4(42):945–49 (SCI/Q2)",
      links: { paper: "https://doi.org/10.46234/ccdcw2022.194" },
      highlight: false
    },
    {
      year: 2022,
      title: "Interaction of Passive Smoking and Diet Habits on Vitamin D Deficiency among Women of Reproductive Age in Rural Central China",
      authors: "Yuan Zhang; Shiqi Lin; Jiajia Li; Xinming Song; Gong Chen; Lijun Pei",
      venue: "Nutrients 15(1):126 (SCI/Q1)",
      links: { paper: "https://doi.org/10.3390/nu15010126" },
      highlight: false
    },
    {
      year: 2021,
      title: "Incidence of Macrosomia in Rural Areas - Henan Province, China, 2013-2017",
      authors: "Shiqi Lin; Jian Chai; Jiajia Li; Xuejun Shang; Lijun Pei; Lifang Jiang; Junxi Zhang; Panpan Sun; Wei Dong; Yuhong Wang; Dezhuan Zhou",
      venue: "China CDC Weekly 3(37):788–92 (SCI/Q2)",
      links: { paper: "https://doi.org/10.46234/ccdcw2021.196" },
      highlight: false
    },
    {
      year: 2021,
      title: "Trends of Adverse Pregnancy Outcomes in a High Prevalence Region of Birth Defects - Shanxi Province, China, 2007-2019",
      authors: "Shiqi Lin; Yuan Zhang; Jiajia Li; Jilei Wu; Lijun Pei",
      venue: "China CDC Weekly 3(31):661–64 (SCI/Q2)",
      links: { paper: "https://doi.org/10.46234/ccdcw2021.167" },
      highlight: false
    },
    {
      year: 2019,
      title: "Effect of Periconceptional Folic Acid Supplementation on the Risk of Neural Tube Defects Associated with a Previous Spontaneous Abortion or Maternal First-Trimester Fever",
      authors: "Lijun Pei; Jilei Wu; Jiajia Li; Xin Mi; Xiaofen Zhang; Zhengyu Li; Yuan Zhang",
      venue: "Human Reproduction 34(8):1587–94 (SCI/Q1)",
      links: { paper: "https://doi.org/10.1093/humrep/dez112" },
      highlight: false
    },
    {
      year: 2022,
      title: "Interactive Effects of Maternal Vitamin D Status and Socio-Economic Status on the Risk of Spontaneous Abortion: Evidence from Henan Province, China",
      authors: "Shiqi Lin; Lifang Jiang; Yuan Zhang; Jian Chai; Jiajia Li; Xuejun Shang; Lijun Pei",
      venue: "Nutrients 14(2):291 (SCI/Q1)",
      links: { paper: "https://doi.org/10.3390/nu14020291" },
      highlight: false
    },
    {
      year: 2022,
      title: "Maternal Perfluorinated Compound Exposure and Risk of Early Pregnancy Loss: A Nested Case-Control Study",
      authors: "Xin Mi; Shi Qi Lin; Xiao Fen Zhang; Jia Jia Li; Li Jun Pei; Feng Jin; Qi Liao; Li Min Xie; Li Cong Wei; Chan Juan Hao; Ya Wei Zhang; Wei Li",
      venue: "Biomedical and Environmental Sciences 35(2):174–79 (SCI/Q2)",
      links: { paper: "https://doi.org/10.3967/bes2022.026" },
      highlight: false
    },
    {
      year: 2021,
      title: "Socioeconomic Status and Vitamin D Deficiency among Women of Childbearing Age: A Population-Based, Case-Control Study in Rural Northern China",
      authors: "Shiqi Lin; Yuan Zhang; Jiajia Li; Jilei Wu; Lijun Pei",
      venue: "BMJ Open 11(3):e042227 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1136/bmjopen-2020-042227" },
      highlight: false
    },
    {
      year: 2020,
      title: "Geographic Variations and Potential Macro-Environmental Exposure of Hypertension: From the China Hypertension Survey",
      authors: "Lijun Pei; Jilei Wu; Zengwu Wang; Xin Wang; Zuo Chen; Jiajia Li; Linfeng Zhang; Rujing Fan; Zugui Zhang; Ying Dong; Congyi Zheng; Yuting Kang; Runlin Gao",
      venue: "Journal of Hypertension 38(5):829–38 (SCI/Q2)",
      links: { paper: "https://doi.org/10.1097/HJH.0000000000002352" },
      highlight: false
    },
    {
      year: 2021,
      title: "童年期不良经历对中老年人患慢性病影响的回顾性队列研究",
      authors: "李佳佳; 林是琦; 武继磊; 等",
      venue: "中华流行病学杂志 42(10):1804-1808",
      links: { paper: "https://doi.org/10.3760/cma.j.cn112338-20201223-01435" },
      highlight: false
    },
    {
      year: 2019,
      title: "山西农村地区低出生体重与化肥施用的空间分布及关联研究",
      authors: "李佳佳; 王妮; 武继磊; 等",
      venue: "中华流行病学杂志 40(11):1414-1419",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2019,
      title: "父母社会经济地位及子女数量对儿童户口转换的影响研究",
      authors: "李佳佳; 武继磊; 李正禹; 等",
      venue: "人口与发展 25(3):27-37",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2022,
      title: "孕期化肥暴露和未经处理饮水交互作用与出生缺陷发生风险的关联研究",
      authors: "林是琦; 李佳佳; 商学军; 等",
      venue: "中华男科学杂志 28(12):1059-1064",
      links: { paper: "https://doi.org/10.13263/j.cnki.nja.2022.12.001" },
      highlight: false
    },
    {
      year: 2022,
      title: "北京市老年康复机构及康复医学人力资源现状研究",
      authors: "刘向国; 李佳佳; 武继磊; 等",
      venue: "中国康复医学杂志 37(7):937-940",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2021,
      title: "妇女孕期磷肥暴露与早产发生风险的关联",
      authors: "张远; 李佳佳; 林是琦; 等",
      venue: "中华疾病控制杂志 25(10):1214-1219",
      links: { paper: "https://doi.org/10.16462/j.cnki.zhjbkz.2021.10.018" },
      highlight: false
    },
    {
      year: 2020,
      title: "不良妊娠结局与农药化肥暴露关联的研究进展",
      authors: "林是琦; 李佳佳; 裴丽君",
      venue: "环境与健康杂志 37(9):832-837",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2020,
      title: "妇女孕期化肥暴露与子代高出生体重发生风险关系",
      authors: "林是琦; 李佳佳; 武继磊; 等",
      venue: "中国计划生育学杂志 28(11):1742-1747",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2019,
      title: "高血压对老年人日常活动能力影响的队列研究",
      authors: "李正禹; 李佳佳; 陈功; 等",
      venue: "中华高血压杂志 27(10):958-963",
      links: { paper: "https://doi.org/10.16439/j.cnki.1673-7245.2019.10.015" },
      highlight: false
    },
    {
      year: 2024,
      title: "1982—2021年中国60~94岁老年人痴呆症死亡趋势的年龄-时期-队列分析",
      authors: "魏玥; 梁博; 李佳佳; 等",
      venue: "中华预防医学杂志 58(08):1177-1183",
      links: { paper: "https://doi.org/10.3760/cma.j.cn112150-20231204-00395" },
      highlight: false
    },
    {
      year: 2023,
      title: "1990-2019年中国早产患病率及疾病负担变化趋势研究",
      authors: "林是琦; 闫晓晋; 李佳佳; 等",
      venue: "中华流行病学杂志 44(2):229-234",
      links: { paper: "https://doi.org/10.3760/cma.j.cn112338-20220602-00498" },
      highlight: false
    },
    {
      year: 2022,
      title: "1990-2019年中国儿童青少年智力残疾疾病负担变化趋势研究",
      authors: "闫晓晋; 林是琦; 李佳佳; 等",
      venue: "中华流行病学杂志 43(8):1262-1268",
      links: { paper: "https://doi.org/10.3760/cma.j.cn112338-20220303-00165" },
      highlight: false
    },
    {
      year: 2022,
      title: "代谢综合征对中国中老年人日常生活活动能力影响的前瞻性队列研究",
      authors: "裴赫铭; 张雅璐; 李佳佳; 等",
      venue: "中华流行病学杂志 43(1):65-71",
      links: { paper: "https://doi.org/10.3760/cma.j.cn112338-20210401-00265" },
      highlight: false
    },
    {
      year: 2019,
      title: "慢性病对中国65岁及以上老年人日常活动能力影响的队列研究",
      authors: "李正禹; 武继磊; 李佳佳; 等",
      venue: "中华流行病学杂志 40(1):33-40",
      links: { paper: "#" },
      highlight: false
    },
    {
      year: 2019,
      title: "山西省农村地区高出生体重危险因素研究",
      authors: "林是琦; 武继磊; 王妮; 张远; 李佳佳; 裴丽君",
      venue: "中华疾病控制杂志 23(1):19-23+49",
      links: { paper: "https://doi.org/10.16462/j.cnki.zhjbkz.2019.01.005" },
      highlight: false
    }
  ]
};
