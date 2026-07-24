import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { GradientBackground } from "@/components/GradientBackground";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Skills } from "@/components/Skills";
import { SoftSkills } from "@/components/SoftSkills";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <div className="site-shell">
      <GradientBackground />
      <Nav />
      <div className="site-main">
        <main className="main-content">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <SoftSkills />
          <Contact />
        </main>
        <footer className="site-footer">
          <p>© 2026 {profile.name}. Built with Next.js.</p>
        </footer>
      </div>
      <RevealOnScroll />
    </div>
  );
}
