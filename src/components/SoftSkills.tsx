import { softSkills } from "@/data/content";

export function SoftSkills() {
  return (
    <section id="strengths" className="section">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          06 — Approach
        </div>
        <h2>How I work</h2>
        <p>Soft skills that show up as much as the technical ones.</p>
      </div>

      <div className="soft-list">
        {softSkills.map((skill, index) => (
          <article key={skill.title} className="soft-item reveal">
            <span className="soft-index">0{index + 1}</span>
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
