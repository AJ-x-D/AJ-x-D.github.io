"use client";

import { useState } from "react";

type Language = "en" | "zh";

const content = {
  en: {
    nav: ["Research", "Publications", "Projects", "Background"],
    language: "中文",
    eyebrow: "Historical GIS · GeoAI · Digital Historical Geography",
    name: "Aojie Xu",
    role: "M.Sc. student in Cartography and Geographic Information Systems",
    intro:
      "I study how historical maps, spatial data and interpretable AI can reveal long-term human–environment relationships and support the digital transformation of historical geography.",
    email: "Email me",
    explore: "Explore my research",
    status: "Open to PhD opportunities",
    institution: "School of Geography, South China Normal University",
    location: "Guangzhou, China",
    stats: [
      ["1 / 19", "Programme rank"],
      ["4.02 / 5", "GPA"],
      ["2", "Research articles"],
    ],
    sectionResearch: "Research interests",
    researchLead:
      "My work sits at the intersection of historical geography, geographic information science and interpretable artificial intelligence.",
    interests: [
      {
        number: "01",
        title: "Historical GIS & historical maps",
        body: "Digitising, structuring and analysing historical maps to reconstruct long-term landscape and settlement change.",
      },
      {
        number: "02",
        title: "GeoAI & spatial non-stationarity",
        body: "Developing interpretable spatiotemporal workflows to identify heterogeneous drivers, thresholds and local mechanisms.",
      },
      {
        number: "03",
        title: "Rural memory & cultural revitalisation",
        body: "Connecting spatial evidence, field investigation and community memory to support place-based cultural revitalisation.",
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
        contribution:
          "Designed the workflow, collected and analysed data, validated results and led the manuscript writing.",
      },
      {
        status: "Published · Second author",
        title:
          "An interpretable agent integrating offline imitation and online reinforcement learning for data-efficient irrigation scheduling",
        journal: "European Journal of Agronomy",
        contribution:
          "Contributed to research on interpretable, data-efficient agricultural decision support.",
      },
    ],
    sectionProjects: "Selected projects",
    projects: [
      {
        year: "2026",
        tag: "Principal investigator · CNY 30,000",
        title:
          "Reconstructing Lingnan Rural Spatial Memory and Pathways for Cultural Revitalisation through Historical Maps",
        body:
          "Supported by the Guangdong Special Fund for Science and Technology Innovation Strategy. One of 15 university-wide selected projects.",
      },
      {
        year: "2025–",
        tag: "Lead student participant",
        title:
          "Historical Map Database Construction and Landscape Pattern Evolution in the Pearl River Delta since the Qing Dynasty",
        body:
          "Led proposal development, historical map feature recognition and database construction, field investigation and mechanism analysis.",
      },
      {
        year: "2021",
        tag: "Team leader · National second prize",
        title:
          "Geographical Field Study Design on the Wartime Migration of Universities in South China",
        body:
          "Designed a context-aware field-study programme around the history and geography of Pingshi. Competition organised by the Geographical Society of China.",
      },
    ],
    sectionBackground: "Background",
    education: "Education",
    degree: "M.Sc. in Cartography and Geographic Information Systems",
    school: "South China Normal University · School of Geography",
    direction: "Research focus",
    directionText:
      "Historical GIS and the digital-intelligent transformation of historical geography",
    coursework: "Selected coursework",
    courseList:
      "Machine Learning & Artificial Intelligence (97) · Geographical Research Methods (96) · Academic Writing & Research Ethics (93)",
    toolkit: "Methods & toolkit",
    tools: [
      "Python & R",
      "ArcGIS · ENVI · SuperMap",
      "Google Earth Engine",
      "Spatial statistics & GeoAI",
      "SPSS · Origin",
      "Zotero & research agents",
    ],
    honors: "Selected honours",
    honorList: [
      "First-class Graduate Scholarship, SCNU (2024–2025; 2025–2026)",
      "Undergraduate Academic Scholarship, four consecutive years",
      "Student Innovation Award, three consecutive years",
    ],
    contactTitle: "Let’s connect",
    contactBody:
      "I welcome conversations about PhD opportunities, historical GIS, historical maps and interpretable GeoAI.",
    contactButton: "xuaojie@m.scnu.edu.cn",
    privacy:
      "This public profile intentionally omits personal identifiers contained in the original CV.",
  },
  zh: {
    nav: ["研究方向", "科研成果", "项目经历", "教育背景"],
    language: "EN",
    eyebrow: "历史 GIS · 地理人工智能 · 历史地理数智转型",
    name: "徐鳌杰",
    role: "地图学与地理信息系统专业硕士研究生",
    intro:
      "我的研究关注如何利用历史地图、空间数据与可解释人工智能，揭示长期人地关系，并推动历史地理研究的数智化转型。",
    email: "邮件联系",
    explore: "了解我的研究",
    status: "期待博士研究机会",
    institution: "华南师范大学 地理科学学院",
    location: "中国 · 广州",
    stats: [
      ["1 / 19", "专业排名"],
      ["4.02 / 5", "平均绩点"],
      ["2", "科研论文"],
    ],
    sectionResearch: "研究方向",
    researchLead:
      "我的研究位于历史地理学、地理信息科学与可解释人工智能的交叉地带。",
    interests: [
      {
        number: "01",
        title: "历史 GIS 与历史地图",
        body: "通过历史地图数字化、结构化和空间分析，重建长期景观与聚落变化。",
      },
      {
        number: "02",
        title: "GeoAI 与空间非平稳性",
        body: "构建可解释时空分析流程，识别异质驱动因素、阈值效应及局地作用机制。",
      },
      {
        number: "03",
        title: "乡村记忆与文化振兴",
        body: "结合空间证据、实地调查与社区记忆，为地方文化振兴提供研究支撑。",
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
        contribution:
          "负责研究框架设计、数据收集与分析、结果验证和论文撰写。",
      },
      {
        status: "已发表 · 第二作者",
        title:
          "An interpretable agent integrating offline imitation and online reinforcement learning for data-efficient irrigation scheduling",
        journal: "European Journal of Agronomy",
        contribution: "参与可解释、数据高效的农业决策支持研究。",
      },
    ],
    sectionProjects: "代表项目",
    projects: [
      {
        year: "2026",
        tag: "项目负责人 · 资助 3 万元",
        title: "图见百千万：基于历史地图的岭南乡村空间记忆重构与文化振兴路径研究",
        body:
          "获广东省科技创新战略专项资金（大学生科技创新培育）支持，为全校 15 个立项项目之一。",
      },
      {
        year: "2025–",
        tag: "学生参与者排名第一",
        title: "清代以来珠江三角洲古地图数据库构建与景观格局演化研究",
        body:
          "主导申报书撰写、古地图要素识别与建库、实地考察及影响机制探究。",
      },
      {
        year: "2021",
        tag: "负责人 · 全国二等奖",
        title: "坪石烽火传情理，金鸡武水育新苗",
        body:
          "围绕抗战时期华南高校驻地迁移历史，设计情境感知地理研学方案；赛事由中国地理学会主办。",
      },
    ],
    sectionBackground: "教育与能力",
    education: "教育经历",
    degree: "地图学与地理信息系统 硕士研究生",
    school: "华南师范大学 · 地理科学学院",
    direction: "研究方向",
    directionText: "历史 GIS 与历史地理数智转型",
    coursework: "核心课程",
    courseList:
      "机器学习与人工智能（97）· 地理学研究方法（96）· 论文写作与学术规范（93）",
    toolkit: "方法与工具",
    tools: [
      "Python 与 R",
      "ArcGIS · ENVI · SuperMap",
      "Google Earth Engine",
      "空间统计与 GeoAI",
      "SPSS · Origin",
      "Zotero 与科研智能体",
    ],
    honors: "代表荣誉",
    honorList: [
      "华南师范大学研究生奖学金一等奖（2024–2025；2025–2026）",
      "本科连续四年获学业奖学金",
      "本科连续三年获学生创新奖",
    ],
    contactTitle: "欢迎交流",
    contactBody:
      "欢迎就博士研究机会、历史 GIS、历史地图与可解释 GeoAI 等方向与我联系。",
    contactButton: "xuaojie@m.scnu.edu.cn",
    privacy: "本公开主页已主动省略原始简历中的个人敏感信息。",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  const sectionIds = ["research", "publications", "projects", "background"];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span>AX</span>
          <div>
            <strong>{language === "en" ? "Aojie Xu" : "徐鳌杰"}</strong>
            <small>{language === "en" ? "Academic profile" : "学术主页"}</small>
          </div>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a href={`#${sectionIds[index]}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language-button"
          type="button"
          onClick={() => setLanguage(language === "en" ? "zh" : "en")}
          aria-label={language === "en" ? "切换到中文" : "Switch to English"}
        >
          {t.language}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.name}</h1>
          <p className="role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:xuaojie@m.scnu.edu.cn">
              {t.email} <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href="#research">
              {t.explore} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="stats" aria-label="Academic highlights">
            {t.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="profile-frame">
            <img src="/profile.png" alt={t.name} />
          </div>
          <div className="availability">
            <span className="pulse" aria-hidden="true" />
            {t.status}
          </div>
          <h2>{t.institution}</h2>
          <p>{t.location}</p>
          <div className="coordinates" aria-hidden="true">
            23.13° N <span /> 113.26° E
          </div>
        </aside>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="section-number">01</p>
          <div>
            <h2>{t.sectionResearch}</h2>
            <p>{t.researchLead}</p>
          </div>
        </div>
        <div className="interest-grid">
          {t.interests.map((interest) => (
            <article className="interest-card" key={interest.number}>
              <span>{interest.number}</span>
              <h3>{interest.title}</h3>
              <p>{interest.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section outputs-section" id="publications">
        <div className="section-heading">
          <p className="section-number">02</p>
          <div>
            <h2>{t.sectionPublications}</h2>
            <p>{t.publicationLead}</p>
          </div>
        </div>
        <div className="publication-list">
          {t.publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <div className="publication-index">0{index + 1}</div>
              <div>
                <p className="publication-status">{publication.status}</p>
                <h3>{publication.title}</h3>
                <p className="journal">{publication.journal}</p>
                <p className="contribution">{publication.contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="section-number">03</p>
          <div>
            <h2>{t.sectionProjects}</h2>
          </div>
        </div>
        <div className="timeline">
          {t.projects.map((project) => (
            <article className="timeline-item" key={project.title}>
              <div className="year">{project.year}</div>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="project-copy">
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section background-section" id="background">
        <div className="section-heading">
          <p className="section-number">04</p>
          <div>
            <h2>{t.sectionBackground}</h2>
          </div>
        </div>
        <div className="background-grid">
          <article className="education-card">
            <p className="card-label">{t.education}</p>
            <h3>{t.degree}</h3>
            <p className="school">{t.school}</p>
            <dl>
              <div>
                <dt>{t.direction}</dt>
                <dd>{t.directionText}</dd>
              </div>
              <div>
                <dt>{t.coursework}</dt>
                <dd>{t.courseList}</dd>
              </div>
            </dl>
          </article>
          <article className="toolkit-card">
            <p className="card-label">{t.toolkit}</p>
            <div className="tool-list">
              {t.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
          <article className="honors-card">
            <p className="card-label">{t.honors}</p>
            <ul>
              {t.honorList.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <a href="mailto:xuaojie@m.scnu.edu.cn">{t.contactButton} ↗</a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} {t.name}</span>
        <span>{t.privacy}</span>
      </footer>
    </main>
  );
}
