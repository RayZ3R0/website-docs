"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="theme-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-button"
        aria-label="Theme settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="icon"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          <div className="theme-options">
            <h3 className="text-small">Select Theme</h3>
            <div className="theme-options-list">
              {["light", "dark", "system"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setTheme(mode);
                    setIsOpen(false);
                  }}
                  className={`theme-option ${theme === mode ? "active" : ""}`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
