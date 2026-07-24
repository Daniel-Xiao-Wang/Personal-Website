import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          04 — Projects
        </div>
        <h2>Selected projects</h2>
        <p>
          Builds across AI tooling, full-stack apps, and applied machine learning.
          Demo and repo links can be plugged in later.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card reveal">
            <div className="project-media" aria-hidden="true">
              <div className="project-media-glow" />
              <span>{project.subtitle}</span>
            </div>

            <div className="project-content">
              <div className="project-top">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
              </div>
              <p>{project.description}</p>
              <ul className="tech-row">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <span className="link-placeholder">Demo soon</span>
                )}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                ) : (
                  <span className="link-placeholder">Repo soon</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
