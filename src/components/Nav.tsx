"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

const linkIcons: Record<string, React.ReactNode> = {
  "#about": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.25c-3.6 0-6.75 1.8-6.75 4.05V20h13.5v-1.7c0-2.25-3.15-4.05-6.75-4.05Z"
      />
    </svg>
  ),
  "#skills": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h7v7H4Zm9 0h7v4h-7Zm0 6h7v8h-7ZM4 14h7v5H4Z"
      />
    </svg>
  ),
  "#work": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 4h6l1 2h4v14H4V6h4Zm2 2v0h2V6Zm-5 4v8h12v-8Z"
      />
    </svg>
  ),
  "#projects": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v3H4Zm0 5h10v7H4Zm12 0h4v7h-4Z"
      />
    </svg>
  ),
  "#education": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4 2 9l10 5 8-4v6h2V9Zm-6 8.2V15l6 3 6-3v-2.8l-6 3Z"
      />
    </svg>
  ),
  "#contact": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v12H4Zm2 2v1.2l6 3.6 6-3.6V8Zm12 8V11l-6 3.6L6 11v5Z"
      />
    </svg>
  ),
};

const resumeIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 3h7l5 5v13H7Zm7 1.5V9h4.5ZM9 12h8v1.5H9Zm0 3.5h8V17H9Zm0 3.5h5V22H9Z"
    />
  </svg>
);

export function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("nav-collapsed") === "true";
    setCollapsed(stored);
    document.documentElement.dataset.nav = stored ? "collapsed" : "expanded";
    setNavReady(true);
  }, []);

  useEffect(() => {
    if (!navReady) return;
    document.documentElement.dataset.nav = collapsed ? "collapsed" : "expanded";
    window.localStorage.setItem("nav-collapsed", String(collapsed));
  }, [collapsed, navReady]);

  useEffect(() => {
    const elements = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <button
        type="button"
        className="mobile-nav-trigger"
        aria-expanded={mobileOpen}
        aria-controls="side-nav"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {mobileOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close navigation"
          onClick={closeMobile}
        />
      ) : null}

      <aside
        id="side-nav"
        className={`side-nav ${collapsed ? "is-collapsed" : ""} ${mobileOpen ? "is-open" : ""}`}
      >
        <div className="side-nav-top">
          <a href="#about" className="nav-brand" onClick={closeMobile}>
            <span className="nav-mark">DW</span>
            <span className="nav-brand-text">
              {profile.firstName}
              <em>Wang</em>
            </span>
          </a>

          <button
            type="button"
            className="nav-collapse"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Expand navigation" : "Minimize navigation"}
            title={collapsed ? "Expand" : "Minimize"}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d={
                  collapsed
                    ? "M9.5 6.5 15 12l-5.5 5.5-1.4-1.4L12.2 12 8.1 7.9Z"
                    : "M14.5 6.5 9 12l5.5 5.5 1.4-1.4L11.8 12l4.1-4.1Z"
                }
              />
            </svg>
          </button>
        </div>

        <nav className="side-nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : ""}
              onClick={closeMobile}
              title={link.label}
            >
              <span className="nav-icon">{linkIcons[link.href]}</span>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
            onClick={closeMobile}
          >
            <span className="nav-icon">{resumeIcon}</span>
            <span className="nav-label">Resume</span>
          </a>
        </nav>

        <div className="side-nav-foot">
          <ThemeToggle />
          <p className="nav-footnote">Systems · Firmware · Software</p>
        </div>
      </aside>
    </>
  );
}
