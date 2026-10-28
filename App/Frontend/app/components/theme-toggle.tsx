"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const themeEvent = "ow-theme-change";

function subscribe(onChange: () => void) {
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getTheme() {
  return window.localStorage.getItem("ow-theme") === "dark";
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getTheme, () => false);
  function toggle() {
    const next = !dark;
    const update = () => {
      window.localStorage.setItem("ow-theme", next ? "dark" : "light");
      document.documentElement.dataset.theme = next ? "dark" : "light";
      window.dispatchEvent(new Event(themeEvent));
    };
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    if (doc.startViewTransition) doc.startViewTransition(update);
    else update();
  }
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun className="theme-icon theme-icon-sun" size={16} />
      <Moon className="theme-icon theme-icon-moon" size={16} />
    </button>
  );
}
