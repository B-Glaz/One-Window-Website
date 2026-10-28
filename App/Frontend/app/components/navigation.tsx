"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

// ─── Navigation Configuration ───

type NavLink = [string, string];
const serviceLinks: NavLink[] = [
  ["For Schools", "/for-schools"],
  ["For Foreign Universities", "/for-foreign-universities"],
  ["For Indian Universities", "/for-indian-universities"],
  ["Undergraduate preparation", "/undergraduate-preparation"],
  ["Undergraduate admissions", "/undergraduate-admissions"],
  ["Postgraduate admissions", "/postgraduate-admissions"],
  ["Education counselling", "/#consultation"],
];
const resourceLinks: NavLink[] = [
  ["Blogs", "/blog"],
  ["Free resources", "/free-resources"],
  ["Student stories", "/student-stories"],
];
function Menu({
  label,
  links,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className={`nav-menu${open ? " is-open" : ""}`}>
      <button
        aria-expanded={open}
        className="nav-menu-trigger"
        onClick={onToggle}
        type="button"
      >
        {label}
        <ChevronDown aria-hidden="true" size={14} strokeWidth={2.2} />
      </button>
      <div aria-hidden={!open} className="nav-menu-panel">
        {links.map(([text, href]) => (
          <Link href={href} key={href} onClick={onClose} tabIndex={open ? 0 : -1}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Primary Navigation ───

export function Navigation({ disableThemeToggle = false, counsellingHref = "/#consultation" }: { disableThemeToggle?: boolean; counsellingHref?: string } = {}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigation = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = () => setOpenMenu(null);
    const onPointerDown = (event: PointerEvent) => {
      if (!navigation.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 2) close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const mobileLinks: NavLink[] = [
    ["About Us", "/about"],
    ...serviceLinks,
    ...resourceLinks,
    ["Premium", "/premium"],
  ];
  return (
    <header className="site-header">
      <nav className="shell nav-pill" aria-label="Primary navigation" ref={navigation}>
        <Link className="brand" href="/">
          <img
            className="brand-logo brand-logo-light logo-desktop"
            src="/Logos/OW%20web%20desktop%20logos%20(200%20x%2040%20px)/OW%20Blue%20Logo%20desktop.png"
            alt="One Window"
          />
          <img
            className="brand-logo brand-logo-dark logo-desktop"
            src="/Logos/OW%20web%20desktop%20logos%20(200%20x%2040%20px)/OW%20White%20Logo%20desktop.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="brand-logo brand-logo-light logo-mobile"
            src="/Logos/OW%20web%20mobile%20logos%20(160%20x%2040%20px)/OW%20Blue%20Logo%20mobile.png"
            alt="One Window"
          />
          <img
            className="brand-logo brand-logo-dark logo-mobile"
            src="/Logos/OW%20web%20mobile%20logos%20(160%20x%2040%20px)/OW%20White%20Logo%20mobile.png"
            alt=""
            aria-hidden="true"
          />
        </Link>
        <div className="nav-links">
          <Link href="/about">About Us</Link>
          <Menu
            label="Services"
            links={serviceLinks}
            open={openMenu === "services"}
            onToggle={() => setOpenMenu((current) => current === "services" ? null : "services")}
            onClose={() => setOpenMenu(null)}
          />
          <Menu
            label="Resources"
            links={resourceLinks}
            open={openMenu === "resources"}
            onToggle={() => setOpenMenu((current) => current === "resources" ? null : "resources")}
            onClose={() => setOpenMenu(null)}
          />
          <Link className="nav-premium" href="/premium">
            Premium
          </Link>
        </div>
        <div className="nav-actions">
          {!disableThemeToggle ? <ThemeToggle /> : null}
          <Link className="nav-cta" href={counsellingHref}>Free counselling</Link>
        </div>
        <details className="nav-mobile-menu">
          <summary aria-label="Open navigation menu">
            <span className="sr-only">Menu</span>
            <span aria-hidden="true">☰</span>
          </summary>
          <div className="nav-mobile-panel">
            {mobileLinks.map(([text, href]) => (
              <Link href={href} key={`${text}-${href}`}>
                {text}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
