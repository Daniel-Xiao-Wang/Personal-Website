import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          02 — Skills
        </div>
        <h2>Technical toolkit</h2>
        <p>Languages, tools, and concepts I use across firmware and software work.</p>
      </div>

      <div className="skills-table">
        {skills.map((group) => (
          <div key={group.category} className="skill-row reveal">
            <h3>{group.category}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
