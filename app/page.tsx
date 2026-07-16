import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import {
  education,
  experiences,
  featuredCertifications,
  personalInfo,
  portfolioProjects,
} from "@/lib/data";

const principles = [
  {
    number: "01",
    title: "Production minded",
    text: "I design for the operating reality: failure modes, maintainability, security, and the people supporting the system after launch.",
  },
  {
    number: "02",
    title: "Automate the repeatable",
    text: "From release monitoring to regression testing and CI/CD, I turn recurring manual work into dependable engineering systems.",
  },
  {
    number: "03",
    title: "Outcome over output",
    text: "Good software should move a business metric—not just a ticket. I keep cost, speed, risk, and user impact in view.",
  },
];

const capabilityGroups = [
  {
    number: "01",
    title: "Enterprise engineering",
    summary: "Long-lived applications and operational systems built for real-world constraints.",
    technologies: ["C#", ".NET", "WPF", "DevExpress", "Java", "Xamarin"],
  },
  {
    number: "02",
    title: "Cloud & delivery",
    summary: "Repeatable delivery pipelines and cloud foundations that make shipping safer and faster.",
    technologies: ["Azure", "AWS", "Azure DevOps", "CI/CD", "Git", "Docker"],
  },
  {
    number: "03",
    title: "Data & automation",
    summary: "Automation that removes toil and data workflows that surface failures early.",
    technologies: ["Python", "SQL", "IBM DataStage", "AI automation", "REST APIs"],
  },
  {
    number: "04",
    title: "Quality & security",
    summary: "Engineering practices that harden systems and protect the pace of delivery.",
    technologies: ["WAPT", "SpecFlow", "TestStack.White", "BDD", "Root-cause analysis"],
  },
];

const profileRows = [
  { label: "Primary", value: "C# / .NET" },
  { label: "Systems", value: "Enterprise + industrial" },
  { label: "Cloud", value: "Azure + AWS" },
  { label: "Edge", value: "AI-assisted automation" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="site-shell">
            <div className="hero-frame">
              <div className="hero-copy">
                <div className="hero-kicker">
                  <span className="status-dot" aria-hidden="true" />
                  <span>Software engineer · Singapore</span>
                </div>

                <h1 id="hero-title">
                  Building reliable software for enterprise and industrial operations.
                </h1>

                <p className="hero-summary">
                  I&apos;m <strong>Tan Jia Chin</strong>, a software engineer with 9 years
                  across enterprise applications, industrial systems, cloud delivery,
                  security, and intelligent automation.
                </p>

                <div className="hero-actions" aria-label="Primary links">
                  <a className="button button-primary" href="#work">
                    Explore selected work
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                  <a
                    className="button button-secondary"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>

                <div className="hero-meta" aria-label="Location and focus">
                  <span>
                    <MapPin size={15} aria-hidden="true" />
                    Singapore
                  </span>
                  <span>Build · harden · automate · ship</span>
                </div>
              </div>

              <aside className="profile-panel" aria-label="Engineering profile">
                <div className="profile-panel-header">
                  <span>engineering.profile</span>
                  <span className="profile-status">
                    <span aria-hidden="true" />
                    Active
                  </span>
                </div>

                <div className="profile-panel-body">
                  <p className="profile-comment">
                    {"// systems built to hold up in production"}
                  </p>
                  <dl className="profile-list">
                    {profileRows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="profile-stack">
                  <p>Core stack</p>
                  <div>
                    {[".NET", "Azure", "Python", "SQL", "CI/CD", "AWS", "Xamarin", "Java"].map(
                      (technology, index) => (
                        <span key={technology}>
                          <b>{String(index + 1).padStart(2, "0")}</b>
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <div className="site-shell section-layout">
            <div className="section-intro">
              <p className="section-index">01 / About</p>
              <h2 id="about-title">Engineering with the business outcome in frame.</h2>
            </div>

            <div className="section-body about-body">
              <p className="lead-copy">
                I work where software meets operations: modernising enterprise systems,
                improving delivery pipelines, resolving production issues, and building
                automation that gives teams back meaningful time.
              </p>
              <p>
                My background spans technology consulting, industrial automation, and
                product engineering. That range has shaped a pragmatic approach—understand
                the constraint, make the system observable, and ship the smallest robust
                solution that creates measurable value.
              </p>

              <div className="principles-grid">
                {principles.map((principle) => (
                  <article className="principle" key={principle.number}>
                    <span>{principle.number}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section section-tinted"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="site-shell">
            <div className="section-heading-row">
              <div>
                <p className="section-index">02 / Career journey</p>
                <h2 id="experience-title">Nine years of systems, delivery, and impact.</h2>
              </div>
              <p>
                From regional product teams to enterprise consulting—building software,
                automating delivery, and solving the operational problems around it.
              </p>
            </div>

            <div className="career-list">
              {experiences.map((experience, experienceIndex) => (
                <article className="career-entry" key={experience.id}>
                  <div className="career-meta">
                    <span className="career-number">
                      {String(experienceIndex + 1).padStart(2, "0")}
                    </span>
                    <p>{experience.location}</p>
                    <div className="career-roles">
                      {experience.roles.map((role) => (
                        <div key={`${experience.id}-${role.title}`}>
                          <strong>{role.title}</strong>
                          <span>{role.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="career-content">
                    <h3>{experience.company}</h3>
                    <p className="career-description">{experience.description}</p>
                    <ul className="achievement-list">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement.text}>
                          <Check size={17} aria-hidden="true" />
                          <div>
                            <p>{achievement.text}</p>
                            <span>{achievement.metric}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="technology-line" aria-label="Technologies used">
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="capabilities-section"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="site-shell">
            <div className="capabilities-heading">
              <div>
                <p className="section-index section-index-inverse">03 / Expertise</p>
                <h2 id="expertise-title">A practical toolkit for dependable delivery.</h2>
              </div>
              <p>
                Broad enough to move across the system. Deepest where enterprise software,
                automation, and operational reliability meet.
              </p>
            </div>

            <div className="capability-grid">
              {capabilityGroups.map((group) => (
                <article className="capability-card" key={group.number}>
                  <span className="capability-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                  <ul>
                    {group.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="work" aria-labelledby="work-title">
          <div className="site-shell">
            <div className="section-heading-row work-heading">
              <div>
                <p className="section-index">04 / Selected work</p>
                <h2 id="work-title">Building beyond the day job.</h2>
              </div>
              <div className="work-heading-action">
                <p>
                  A growing portfolio of experiments in AI, developer tools, and full-stack
                  product engineering.
                </p>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  <GitHubIcon size={17} />
                  View GitHub profile
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="work-grid">
              {portfolioProjects.map((project, index) => (
                <article className="work-card" key={project.repo}>
                  <div className="work-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>Independent build</span>
                  </div>
                  <div className="work-card-content">
                    <p className="work-repo">{project.repo}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="work-tech">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View source
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section section-tinted"
          id="credentials"
          aria-labelledby="credentials-title"
        >
          <div className="site-shell credentials-layout">
            <div className="education-panel">
              <p className="section-index">05 / Credentials</p>
              <h2 id="credentials-title">Grounded in engineering. Always learning.</h2>

              <div className="education-card">
                <span>Education</span>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
                <div>
                  <span>{education.period}</span>
                  <strong>GPA {education.gpa}</strong>
                </div>
              </div>
            </div>

            <div className="certification-list">
              {featuredCertifications.map((certification, index) => (
                <a
                  href={certification.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="certification-row"
                  key={`${certification.name}-${certification.issued}`}
                >
                  <span className="certification-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{certification.name}</h3>
                    <p>
                      {certification.issuer} · {certification.issued}
                    </p>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
              <p className="certification-note">
                Featured certifications across AWS, Azure, MongoDB, and Java. Additional
                credentials are available on LinkedIn.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell">
            <div className="contact-panel">
              <div>
                <p className="section-index section-index-inverse">06 / Let&apos;s talk</p>
                <h2 id="contact-title">Have a hard engineering problem?</h2>
                <p>
                  I&apos;m open to conversations about software engineering opportunities,
                  ambitious products, and systems that need to become more reliable.
                </p>
              </div>
              <div className="contact-actions">
                <a className="button button-light" href={`mailto:${personalInfo.email}`}>
                  <Mail size={17} aria-hidden="true" />
                  Start a conversation
                </a>
                <div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon size={18} />
                    LinkedIn
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer">
                    <GitHubIcon size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
