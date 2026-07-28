"use client";

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
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card reveal">
            <div className={`project-media${project.video ? " has-video" : ""}`}>
              {project.video ? (
                <video
                  className="project-video"
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(event) => {
                    void event.currentTarget.play();
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.pause();
                    event.currentTarget.currentTime = 0;
                  }}
                  onFocus={(event) => {
                    void event.currentTarget.play();
                  }}
                  onBlur={(event) => {
                    event.currentTarget.pause();
                    event.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <>
                  <div className="project-media-glow" aria-hidden="true" />
                  <span>{project.subtitle}</span>
                </>
              )}
              {project.video ? (
                <span className="project-media-hint">Hover to play</span>
              ) : null}
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
                    Watch Demo
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
