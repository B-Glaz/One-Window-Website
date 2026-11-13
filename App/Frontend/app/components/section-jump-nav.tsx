"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { List } from "lucide-react";
import styles from "./section-jump-nav.module.css";

type SectionItem = readonly [label: string, id: string];

export function SectionJumpNav({
  activeSection,
  ariaLabel,
  items,
}: {
  activeSection: string;
  ariaLabel: string;
  items: readonly SectionItem[];
}) {
  const [expanded, setExpanded] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCollapseTimer = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  const scheduleCollapse = useCallback(() => {
    clearCollapseTimer();
    timer.current = setTimeout(() => setExpanded(false), 5000);
  }, [clearCollapseTimer]);

  const open = useCallback(() => {
    setExpanded(true);
    scheduleCollapse();
  }, [scheduleCollapse]);

  useEffect(() => clearCollapseTimer, [clearCollapseTimer]);

  useEffect(() => {
    if (expanded) scheduleCollapse();
  }, [expanded, scheduleCollapse]);

  useEffect(() => {
    const collapseOnScroll = () => {
      clearCollapseTimer();
      setExpanded(false);
    };

    window.addEventListener("scroll", collapseOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", collapseOnScroll);
  }, [clearCollapseTimer]);

  return (
    <nav
      aria-label={ariaLabel}
      className={styles.nav}
      data-expanded={expanded}
      onFocus={open}
      onMouseEnter={open}
      onMouseLeave={scheduleCollapse}
      onPointerMove={expanded ? scheduleCollapse : undefined}
    >
      <button
        aria-expanded={expanded}
        className={styles.trigger}
        onClick={() => (expanded ? scheduleCollapse() : open())}
        type="button"
      >
        <List aria-hidden="true" size={17} />
        <span>Go To Section</span>
      </button>

      <button
        aria-label={expanded ? "Collapse section navigation" : "Expand section navigation"}
        className={styles.toggle}
        onClick={() => {
          if (expanded) {
            clearCollapseTimer();
            setExpanded(false);
          } else {
            open();
          }
        }}
        type="button"
      >
        <span
          aria-hidden="true"
          className={styles.chevronCascade}
          data-direction={expanded ? "in" : "out"}
        >
          <i />
          <i />
          <i />
        </span>
      </button>

      <div className={styles.links} aria-hidden={!expanded}>
        {items.map(([label, id]) => (
          <a
            aria-current={activeSection === id ? "location" : undefined}
            data-active={activeSection === id ? "true" : undefined}
            href={`#${id}`}
            key={id}
            onClick={scheduleCollapse}
            tabIndex={expanded ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </div>

    </nav>
  );
}
