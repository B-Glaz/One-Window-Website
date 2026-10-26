import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

// ─── Navigation Configuration ───

type NavLink = [string, string];
const serviceLinks: NavLink[] = [
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
function Menu({ label, links }: { label: string; links: NavLink[] }) {
  return (
    <details className="nav-menu">
      <summary>
        {label}
        <span aria-hidden="true">⌄</span>
      </summary>
      <div className="nav-menu-panel">
        {links.map(([text, href]) => (
          <Link href={href} key={href}>
            {text}
          </Link>
        ))}
      </div>
    </details>
  );
}

// ─── Primary Navigation ───

export function Navigation() {
  const mobileLinks: NavLink[] = [
    ["About Us", "/about"],
    ...serviceLinks,
    ...resourceLinks,
    ["Premium", "/premium"],
  ];
  return (
    <header className="site-header">
      <nav className="shell nav-pill" aria-label="Primary navigation">
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
          <Menu label="Services" links={serviceLinks} />
          <Menu label="Resources" links={resourceLinks} />
          <Link className="nav-premium" href="/premium">
            Premium
          </Link>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link className="nav-cta" href="/#consultation">
            Free counselling
          </Link>
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
