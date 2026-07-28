export type Language = "en" | "zh";

export const EMAIL = "xuaojie@m.scnu.edu.cn";

export const SECTION_IDS = [
  "research",
  "publications",
  "projects",
  "background",
] as const;

type Content = {
  htmlLang: string;
  nav: string[];
  languageLabel: string;
  languageAria: string;
  themeAria: { toLight: string; toDark: string };
  brandRole: string;
  eyebrow: string;
  name: string;
  latinName: string;
  role: string;
  intro: string;
  email: string;
  explore: string;
  status: string;
  institution: string;
  location: string;
  stats: { value: string; label: string }[];
  sectionResearch: string;
  researchLead: string;
  interests: { number: string; title: string; body: string; tags: string[] }[];
  sectionPublications: string;
  publicationLead: string;
  publications: {
    status: string;
    title: string;
    journal: string;
    venueNote: string;
    contribution: string;
  }[];
  contributionLabel: string;
  sectionProjects: string;
  projectLead: string;
  projects: {
    year: string;
    tag: string;
    title: string;
    body: string;
    metaLabel: string;
    meta: string;
  }[];
  sectionBackground: string;
  backgroundLead: string;
  education: string;
  degree: string;
  school: string;
  standing: string;
  direction: string;
  directionText: string;
  gpa: string;
  gpaText: string;
  coursework: string;
  courses: { name: string; score: string }[];
  toolkit: string;
  toolGroups: { label: string; items: string[] }[];
  honors: string;
  honorList: { title: string; note: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactBody: string;
  contactButton: string;
  privacy: string;
  backToTop: string;
};

export const content: Record<Language, Content> = {
  en: {
    htmlLang: "en",
    nav: ["Research", "Publications", "Projects", "Background"],
    languageLabel: "中文",
    languageAria: "切换到中文",
    themeAria: { toLight: "Switch to light theme", toDark: "Switch to dark theme" },
    brandRole: "Academic profile",
    eyebrow: "Historical GIS · GeoAI · Digital historical geography",
    name: "Aojie Xu",
    latinName: "Aojie Xu",
    role: "M.Sc. student in Cartography and Geographic Information Systems",
    intro:
      "I study how historical maps, spatial data and interpretable AI can reveal long-term human–environment relationships, and how these methods can support the digital-intelligent transformation of historical geography.",
    email: "Email me",
    explore: "Explore my research",
    status: "Open to PhD opportunities",
    institution: "School of Geography, South China Normal University",
    location: "Guangzhou, China",
    stats: [
      { value: "1 / 19", label: "Programme rank" },
      { value: "4.02 / 5", label: "GPA" },
      { value: "2", label: "Research articles" },
      { value: "2", label: "Funded projects" },
    ],
    sectionResearch: "Research interests",
    researchLead:
      "My work sits at the intersection of historical geography, geographic information science and interpretable artificial intelligence.",
    interests: [
      {
        number: "01",
        title: "Historical GIS & historical maps",
        body: "Digitising, georeferencing and structuring historical maps into analysable spatial databases, then using them to reconstruct long-term landscape, settlement and land-use change.",
        tags: ["Map georeferencing", "Spatial databases", "Landscape evolution"],
      },
      {
        number: "02",
        title: "GeoAI & spatial non-stationarity",
        body: "Building interpretable spatiotemporal workflows — geographically and temporally weighted regression combined with explainable machine learning — to identify heterogeneous drivers, threshold effects and local mechanisms.",
        tags: ["GTWR", "Explainable AI", "Threshold effects"],
      },
      {
        number: "03",
        title: "Rural memory & cultural revitalisation",
        body: "Connecting spatial evidence, field investigation and community memory, so that reconstructed historical geographies can inform place-based cultural revitalisation in Lingnan villages.",
        tags: ["Field investigation", "Spatial memory", "Lingnan studies"],
      },
    ],
    sectionPublications: "Research outputs",
    publicationLead:
      "Current work spans interpretable GeoAI, cropland abandonment and data-efficient agricultural decision-making.",
    publications: [
      {
        status: "In revision · First author",
        title:
          "Characterising Spatiotemporal Non-stationarity and Threshold Responses in Cropland Abandonment Using a GTWR–GeoXAI Workflow",
        journal: "Transactions in GIS",
        venueNote: "Long-standing journal in geographic information science",
        contribution:
          "Built an AI framework grounded in the digital-intelligent transformation of geography to uncover the multi-factor drivers and threshold effects of cropland abandonment in Guangdong. Responsible for data collection, method design, analysis, validation and manuscript writing.",
      },
      {
        status: "Published · Second author",
        title:
          "An interpretable agent integrating offline imitation and online reinforcement learning for data-efficient irrigation scheduling",
        journal: "European Journal of Agronomy",
        venueNote: "CAS Tier 1, TOP journal",
        contribution:
          "Contributed to research on interpretable, data-efficient decision support for agricultural water management.",
      },
    ],
    contributionLabel: "My contribution",
    sectionProjects: "Selected projects",
    projectLead:
      "Provincially funded research and national competition work, mostly built around historical maps of the Pearl River Delta and Lingnan.",
    projects: [
      {
        year: "2026",
        tag: "Principal investigator · CNY 30,000",
        title:
          "Reconstructing Lingnan Rural Spatial Memory and Pathways for Cultural Revitalisation through Historical Maps",
        body: "One of only 15 projects approved university-wide. Uses historical maps as the primary evidence base for reconstructing rural spatial memory and proposing cultural revitalisation pathways.",
        metaLabel: "Funder",
        meta: "Guangdong Special Fund for Science and Technology Innovation Strategy (Undergraduate Science and Technology Innovation Cultivation) · Department of Science and Technology of Guangdong Province and the Guangdong Provincial Committee of the Communist Youth League",
      },
      {
        year: "2025–",
        tag: "Lead student participant",
        title:
          "Historical Map Database Construction and Landscape Pattern Evolution in the Pearl River Delta since the Qing Dynasty",
        body: "Led the writing of the funding proposal, historical map feature recognition and database construction, field investigation, and analysis of the mechanisms driving landscape change.",
        metaLabel: "Programme",
        meta: "Guangdong Philosophy and Social Sciences Planning, 2025 Special Programme for Rare and Endangered Disciplines",
      },
      {
        year: "2021",
        tag: "Team leader · National second prize",
        title:
          "Geographical Field-Study Design on the Wartime Migration of Universities in South China",
        body: "A context-aware field-study programme built around the history and geography of Pingshi, where universities in South China relocated during the War of Resistance.",
        metaLabel: "Organiser",
        meta: "National Geographical Field-Study Design Competition & Field-Study Social Survey Competition, Geographical Society of China",
      },
    ],
    sectionBackground: "Background",
    backgroundLead:
      "Education, methodological toolkit and selected academic honours.",
    education: "Education",
    degree: "M.Sc. in Cartography and Geographic Information Systems",
    school: "South China Normal University · School of Geography",
    standing: "Second-year master's student",
    direction: "Research focus",
    directionText:
      "Historical GIS and the digital-intelligent transformation of historical geography",
    gpa: "Academic standing",
    gpaText: "GPA 4.02 / 5 — ranked 1st of 19 in the programme",
    coursework: "Selected coursework",
    courses: [
      { name: "Machine Learning & Artificial Intelligence", score: "97" },
      { name: "Geographical Research Methods", score: "96" },
      { name: "Academic Writing & Research Ethics", score: "93" },
      { name: "Advances in Geographic Information Science & Technology", score: "91" },
      { name: "Advances in Geoscience Remote Sensing", score: "90" },
    ],
    toolkit: "Methods & toolkit",
    toolGroups: [
      {
        label: "Programming",
        items: ["Python", "R", "Google Earth Engine"],
      },
      {
        label: "Geospatial software",
        items: ["ArcGIS", "ENVI", "SuperMap"],
      },
      {
        label: "Analysis & modelling",
        items: ["Spatial statistics", "GTWR", "Explainable AI", "SPSS", "Origin"],
      },
      {
        label: "Research agents",
        items: ["Claude Code", "Codex", "Zotero"],
      },
    ],
    honors: "Selected honours",
    honorList: [
      {
        title: "First-class Graduate Scholarship, SCNU",
        note: "2024–2025 and 2025–2026 · top 10% of the programme",
      },
      {
        title: "Undergraduate Academic Scholarship, SCNU",
        note: "Four consecutive years",
      },
      {
        title: "Student Innovation Award, SCNU",
        note: "Three consecutive years",
      },
    ],
    contactEyebrow: "Get in touch",
    contactTitle: "Let’s connect",
    contactBody:
      "I welcome conversations about PhD opportunities, historical GIS, historical maps and interpretable GeoAI.",
    contactButton: EMAIL,
    privacy:
      "This public profile intentionally omits the personal identifiers contained in the original CV.",
    backToTop: "Back to top",
  },
  zh: {
    htmlLang: "zh-Hans",
    nav: ["研究方向", "科研成果", "项目经历", "教育背景"],
    languageLabel: "EN",
    languageAria: "Switch to English",
    themeAria: { toLight: "切换到浅色主题", toDark: "切换到深色主题" },
    brandRole: "学术主页",
    eyebrow: "历史 GIS · 地理人工智能 · 历史地理数智转型",
    name: "徐鳌杰",
    latinName: "Aojie Xu",
    role: "地图学与地理信息系统专业 硕士研究生",
    intro:
      "我的研究关注如何利用历史地图、空间数据与可解释人工智能揭示长期人地关系，并以此推动历史地理研究的数智化转型。",
    email: "邮件联系",
    explore: "了解我的研究",
    status: "期待博士研究机会",
    institution: "华南师范大学 地理科学学院",
    location: "中国 · 广州",
    stats: [
      { value: "1 / 19", label: "专业排名" },
      { value: "4.02 / 5", label: "平均绩点" },
      { value: "2", label: "科研论文" },
      { value: "2", label: "在研项目" },
    ],
    sectionResearch: "研究方向",
    researchLead:
      "我的研究位于历史地理学、地理信息科学与可解释人工智能的交叉地带。",
    interests: [
      {
        number: "01",
        title: "历史 GIS 与历史地图",
        body: "对历史地图进行数字化、地理配准与结构化建库，并以此重建长时段的景观、聚落与土地利用变化。",
        tags: ["地图配准", "空间数据库", "景观演化"],
      },
      {
        number: "02",
        title: "GeoAI 与空间非平稳性",
        body: "构建可解释的时空分析流程——将时空地理加权回归与可解释机器学习相结合，识别异质驱动因素、阈值效应与局地作用机制。",
        tags: ["GTWR", "可解释 AI", "阈值效应"],
      },
      {
        number: "03",
        title: "乡村记忆与文化振兴",
        body: "结合空间证据、实地调查与社区记忆，让重建后的历史地理认知能够服务于岭南乡村的在地文化振兴。",
        tags: ["实地考察", "空间记忆", "岭南研究"],
      },
    ],
    sectionPublications: "科研成果",
    publicationLead:
      "现有工作涉及可解释 GeoAI、耕地撂荒与数据高效的农业决策支持。",
    publications: [
      {
        status: "返修中 · 第一作者",
        title:
          "Characterising Spatiotemporal Non-stationarity and Threshold Responses in Cropland Abandonment Using a GTWR–GeoXAI Workflow",
        journal: "Transactions in GIS",
        venueNote: "GIS 领域影响力大的老牌期刊",
        contribution:
          "构建了一个基于地理数智转型的人工智能框架，揭示广东省耕地撂荒的多因素驱动机制与阈值效应。负责数据收集、方法提出、数据分析、结果验证与论文撰写。",
      },
      {
        status: "已发表 · 第二作者",
        title:
          "An interpretable agent integrating offline imitation and online reinforcement learning for data-efficient irrigation scheduling",
        journal: "European Journal of Agronomy",
        venueNote: "中科院一区 TOP 期刊",
        contribution: "参与可解释、数据高效的农业灌溉决策支持研究。",
      },
    ],
    contributionLabel: "主要贡献",
    sectionProjects: "代表项目",
    projectLead:
      "省级科研项目与国家级学科竞赛，多数围绕珠江三角洲与岭南地区的历史地图展开。",
    projects: [
      {
        year: "2026",
        tag: "项目负责人 · 资助 3 万元",
        title: "图见百千万：基于历史地图的岭南乡村空间记忆重构与文化振兴路径研究",
        body: "全校仅 15 个立项项目之一。以历史地图为核心证据，重构岭南乡村空间记忆，并探索文化振兴的实现路径。",
        metaLabel: "立项部门",
        meta: "广东省科技创新战略专项资金（大学生科技创新培育）· 广东省科技厅、共青团广东省委员会",
      },
      {
        year: "2025–",
        tag: "学生参与者排名第一",
        title: "清代以来珠江三角洲古地图数据库构建与景观格局演化研究",
        body: "主导申报书撰写、古地图要素识别与建库、实地考察，以及景观格局演化的影响机制探究。",
        metaLabel: "项目类别",
        meta: "广东省哲学社会科学规划 2025 年度冷门绝学研究专项",
      },
      {
        year: "2021",
        tag: "负责人 · 全国二等奖",
        title: "坪石烽火传情理，金鸡武水育新苗——情境感知视域下坪石地理研学方案",
        body: "以抗战时期华南高校驻地迁移历史为主题，围绕坪石的历史与地理设计情境感知研学方案。",
        metaLabel: "主办单位",
        meta: "全国地理研学方案设计大赛 & 地理研学社会调研大赛 · 中国地理学会",
      },
    ],
    sectionBackground: "教育背景",
    backgroundLead: "教育经历、方法与工具体系，以及代表性荣誉。",
    education: "教育经历",
    degree: "地图学与地理信息系统 硕士研究生",
    school: "华南师范大学 · 地理科学学院",
    standing: "硕士二年级",
    direction: "研究方向",
    directionText: "历史 GIS 与历史地理数智转型",
    gpa: "学业表现",
    gpaText: "绩点 4.02 / 5 —— 专业排名 1 / 19",
    coursework: "主要课程",
    courses: [
      { name: "机器学习与人工智能", score: "97" },
      { name: "地理学研究方法", score: "96" },
      { name: "论文写作与学术规范", score: "93" },
      { name: "地理信息科学与技术研究进展", score: "91" },
      { name: "地学遥感研究进展", score: "90" },
    ],
    toolkit: "方法与工具",
    toolGroups: [
      {
        label: "编程与平台",
        items: ["Python", "R", "Google Earth Engine"],
      },
      {
        label: "地理信息软件",
        items: ["ArcGIS", "ENVI", "SuperMap"],
      },
      {
        label: "分析与建模",
        items: ["空间统计", "GTWR", "可解释 AI", "SPSS", "Origin"],
      },
      {
        label: "科研智能体",
        items: ["Claude Code", "Codex", "Zotero"],
      },
    ],
    honors: "代表荣誉",
    honorList: [
      {
        title: "华南师范大学研究生奖学金一等奖",
        note: "2024–2025、2025–2026 学年 · 专业前 10%",
      },
      {
        title: "华南师范大学本科学业奖学金",
        note: "连续四年获得",
      },
      {
        title: "华南师范大学学生创新奖",
        note: "连续三年获得",
      },
    ],
    contactEyebrow: "联系方式",
    contactTitle: "欢迎交流",
    contactBody:
      "欢迎就博士研究机会、历史 GIS、历史地图与可解释 GeoAI 等方向与我联系。",
    contactButton: EMAIL,
    privacy: "本公开主页已主动省略原始简历中的个人敏感信息。",
    backToTop: "返回顶部",
  },
};
