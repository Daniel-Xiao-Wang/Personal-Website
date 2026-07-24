import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-heading reveal">
        <div className="section-index" aria-hidden="true">
          07 — Contact
        </div>
        <h2>Let&apos;s connect</h2>
        <p>Open to internships, collaborations, and interesting systems problems.</p>
      </div>

      <div className="contact-list reveal">
        <a className="contact-row" href={`mailto:${profile.email}`}>
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a
          className="contact-row"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
          <strong>daniel-wang</strong>
        </a>
        <a
          className="contact-row"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
          <strong>Daniel-Xiao-Wang</strong>
        </a>
        <a
          className="contact-row"
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <strong>Download PDF →</strong>
        </a>
      </div>
    </section>
  );
}
