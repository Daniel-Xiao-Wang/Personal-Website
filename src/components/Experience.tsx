import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="work" className="section">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          03 — Experience
        </div>
        <h2>Work experience</h2>
        <p>Where I&apos;ve applied embedded systems, data analysis, and software craft.</p>
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <article key={`${job.company}-${job.title}`} className="timeline-item reveal">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-meta">
              <p className="experience-period">{job.period}</p>
              {job.location ? (
                <p className="experience-location">{job.location}</p>
              ) : null}
            </div>
            <div className="experience-body">
              <h3>{job.title}</h3>
              <p className="experience-company">{job.company}</p>
              <ul>
                {job.description.map((line, index) => (
                  <li key={`${job.title}-${index}`}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
