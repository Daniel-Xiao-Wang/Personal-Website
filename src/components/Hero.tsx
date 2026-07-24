import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="hero-copy">
        <div className="section-index" aria-hidden="true">
          01 — About
        </div>
        <h1>
          <span className="hero-name">{profile.name}</span>
          <span className="hero-role">{profile.tagline}</span>
        </h1>
        <div className="hero-bio-block">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Browse projects
            <span aria-hidden="true">→</span>
          </a>
          <a
            className="btn btn-ghost"
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume PDF
          </a>
        </div>
        <dl className="hero-facts">
          <div>
            <dt>School</dt>
            <dd>Carleton University</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Embedded &amp; software</dd>
          </div>
          <div>
            <dt>Based</dt>
            <dd>Ottawa, ON</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
