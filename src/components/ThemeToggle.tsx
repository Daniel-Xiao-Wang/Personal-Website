"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showMoon = mounted && theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {showMoon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M21.8 14.1A9 9 0 0 1 9.9 2.2 9.2 9.2 0 1 0 21.8 14.1Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56"
          />
        </svg>
      )}
    </button>
  );
}
