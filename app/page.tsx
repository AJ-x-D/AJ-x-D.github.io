"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { EMAIL, SECTION_IDS, content, type Language } from "./content";

type Theme = "light" | "dark";

// The theme lives on <html>, where the pre-hydration script in layout.tsx
// already set it. Reading it as an external store keeps that script the single
// source of truth and avoids a hydration mismatch on the toggle icon.
const THEME_EVENT = "themechange";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private-mode browsers can reject storage; the theme still applies.
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const revealRoot = useRef<HTMLElement>(null);

  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => "light");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  // Scroll progress for the hairline under the header.
  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the upper half of the viewport.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Progressive reveal. Elements start hidden only once JS confirms support,
  // so the no-JS render stays fully readable.
  useEffect(() => {
    const root = revealRoot.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-enabled");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    // Failsafe: content must never stay hidden. If nothing above the fold has
    // been revealed shortly after mount, the observer is not firing — drop the
    // effect entirely rather than leaving the page blank.
    const failsafe = window.setTimeout(() => {
      if (!root.querySelector("[data-reveal].is-visible")) {
        observer.disconnect();
        root.classList.remove("reveal-enabled");
      }
    }, 1200);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [language]);

  return (
    <main ref={revealRoot}>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              AX
            </span>
            <span className="brand-text">
              <strong>{t.name}</strong>
              <small>{t.brandRole}</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            {t.nav.map((item, index) => {
              const id = SECTION_IDS[index];
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "is-active" : undefined}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button"
              onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? t.themeAria.toLight : t.themeAria.toDark}
              title={theme === "dark" ? t.themeAria.toLight : t.themeAria.toDark}
            >
              <ThemeIcon theme={theme} />
            </button>
            <button
              type="button"
              className="language-button"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              aria-label={t.languageAria}
            >
              {t.languageLabel}
            </button>
          </div>
        </div>
        <div
          className="scroll-progress"
          aria-hidden="true"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <section className="hero" id="top">
        <Graticule />
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            {t.eyebrow}
          </p>
          <h1 data-reveal style={{ "--delay": "60ms" } as React.CSSProperties}>
            {t.name}
          </h1>
          {language === "zh" ? (
            <p className="latin-name" data-reveal style={{ "--delay": "90ms" } as React.CSSProperties}>
              {t.latinName}
            </p>
          ) : null}
          <p className="role" data-reveal style={{ "--delay": "120ms" } as React.CSSProperties}>
            {t.role}
          </p>
          <p className="hero-intro" data-reveal style={{ "--delay": "180ms" } as React.CSSProperties}>
            {t.intro}
          </p>
          <div className="hero-actions" data-reveal style={{ "--delay": "240ms" } as React.CSSProperties}>
            <a className="button primary" href={`mailto:${EMAIL}`}>
              {t.email}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button ghost" href="#research">
              {t.explore}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <dl className="stats" data-reveal style={{ "--delay": "300ms" } as React.CSSProperties}>
            {t.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="profile-card" aria-label={t.institution} data-reveal>
          <div className="profile-frame">
            <img src="/profile.png" alt={t.name} width={480} height={560} />
          </div>
          <p className="availability">
            <span className="pulse" aria-hidden="true" />
            {t.status}
          </p>
          <h2>{t.institution}</h2>
          <p className="profile-location">{t.location}</p>
          <p className="coordinates" aria-hidden="true">
            <span>23.13° N</span>
            <span className="rule" />
            <span>113.26° E</span>
          </p>
        </aside>
      </section>

      <section className="section" id="research">
        <SectionHeading number="01" title={t.sectionResearch} lead={t.researchLead} />
        <div className="interest-grid">
          {t.interests.map((interest, index) => (
            <article
              className="interest-card"
              key={interest.number}
              data-reveal
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <span className="card-index">{interest.number}</span>
              <h3>{interest.title}</h3>
              <p>{interest.body}</p>
              <ul className="tag-list">
                {interest.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section band" id="publications">
        <SectionHeading
          number="02"
          title={t.sectionPublications}
          lead={t.publicationLead}
        />
        <ol className="publication-list">
          {t.publications.map((publication, index) => (
            <li
              className="publication"
              key={publication.title}
              data-reveal
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <p className="micro-label accent">{publication.status}</p>
              <h3>{publication.title}</h3>
              <p className="journal">
                <em>{publication.journal}</em>
                <span className="venue-note">{publication.venueNote}</span>
              </p>
              <p className="contribution">
                <span className="micro-label">{t.contributionLabel}</span>
                {publication.contribution}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="projects">
        <SectionHeading number="03" title={t.sectionProjects} lead={t.projectLead} />
        <ol className="timeline">
          {t.projects.map((project, index) => (
            <li
              className="timeline-item"
              key={project.title}
              data-reveal
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <div className="timeline-year">{project.year}</div>
              <div className="timeline-track" aria-hidden="true">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-body">
                <p className="micro-label accent">{project.tag}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.body}</p>
                <p className="project-meta">
                  <span className="micro-label">{project.metaLabel}</span>
                  {project.meta}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section band" id="background">
        <SectionHeading
          number="04"
          title={t.sectionBackground}
          lead={t.backgroundLead}
        />
        <div className="background-grid">
          <article className="panel education-panel" data-reveal>
            <p className="micro-label accent">{t.education}</p>
            <h3>{t.degree}</h3>
            <p className="school">{t.school}</p>
            <p className="standing">{t.standing}</p>
            <dl className="detail-list">
              <div>
                <dt>{t.direction}</dt>
                <dd>{t.directionText}</dd>
              </div>
              <div>
                <dt>{t.gpa}</dt>
                <dd>{t.gpaText}</dd>
              </div>
            </dl>
            <div className="courses">
              <p className="micro-label">{t.coursework}</p>
              <ul>
                {t.courses.map((course) => (
                  <li key={course.name}>
                    <span>{course.name}</span>
                    <b>{course.score}</b>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            className="panel toolkit-panel"
            data-reveal
            style={{ "--delay": "90ms" } as React.CSSProperties}
          >
            <p className="micro-label accent">{t.toolkit}</p>
            <div className="tool-groups">
              {t.toolGroups.map((group) => (
                <div className="tool-group" key={group.label}>
                  <p className="micro-label">{group.label}</p>
                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article
            className="panel honors-panel"
            data-reveal
            style={{ "--delay": "150ms" } as React.CSSProperties}
          >
            <p className="micro-label accent">{t.honors}</p>
            <ul className="honor-list">
              {t.honorList.map((honor) => (
                <li key={honor.title}>
                  <strong>{honor.title}</strong>
                  <span>{honor.note}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <Graticule />
        <div className="contact-inner" data-reveal>
          <p className="micro-label">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p className="contact-body">{t.contactBody}</p>
          <a className="contact-link" href={`mailto:${EMAIL}`}>
            {t.contactButton}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <span>
          © {new Date().getFullYear()} {t.name}
        </span>
        <span className="privacy-note">{t.privacy}</span>
        <a className="to-top" href="#top">
          {t.backToTop} <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}

function SectionHeading({
  number,
  title,
  lead,
}: {
  number: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-number">{number}</p>
      <div>
        <h2>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
    </div>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return (
    <span className="theme-glyph" aria-hidden="true">
      {theme === "dark" ? "☀" : "☾"}
    </span>
  );
}

/** CSS-rendered cartographic grid used behind the hero and contact band. */
function Graticule() {
  return <div className="graticule" aria-hidden="true" />;
}
