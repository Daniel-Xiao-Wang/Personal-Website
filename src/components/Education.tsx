import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          05 — Education
        </div>
        <h2>Education</h2>
        <p>Building a foundation in systems, software, and hardware together.</p>
      </div>

      <article className="education-panel reveal">
        <div className="education-main">
          <h3>{education.school}</h3>
          <p className="education-degree">{education.degree}</p>
          <p className="education-period">{education.period}</p>
          <p className="education-focus">
            <span>Focus</span> {education.focus}
          </p>
        </div>
        <div className="education-courses">
          <h4>Relevant coursework</h4>
          <ul>
            {education.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
