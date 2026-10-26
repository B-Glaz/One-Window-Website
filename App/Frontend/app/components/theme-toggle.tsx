"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  // Keep the server and first client render identical; the inline layout
  // initializer handles the background before this client state hydrates.
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("ow-theme") === "dark";
    // Restore persisted browser state after the server/client markup matches.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(stored);
    document.documentElement.dataset.theme = stored ? "dark" : "light";
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  function toggle() {
    const next = !dark;
    const update = () => {
      setDark(next);
      window.localStorage.setItem("ow-theme", next ? "dark" : "light");
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
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
