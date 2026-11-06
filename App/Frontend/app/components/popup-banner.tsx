"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { popupBanner } from "./popup-banner.config";
import styles from "./popup-banner.module.css";

export function PopupBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const isCollapsed =
        window.sessionStorage.getItem(popupBanner.storageKey) === "true";

      setIsExpanded(!isCollapsed);
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!popupBanner.enabled) {
    return null;
  }

  function collapseBanner() {
    window.sessionStorage.setItem(popupBanner.storageKey, "true");
    setIsExpanded(false);
  }

  function expandBanner() {
    window.sessionStorage.removeItem(popupBanner.storageKey);
    setIsExpanded(true);
  }

  return (
    <aside
      className={styles.root}
      aria-label={popupBanner.title}
      aria-hidden={!isReady}
    >
      <button
        className={`${styles.mobileBackdrop} ${isReady && isExpanded ? styles.mobileBackdropVisible : ""}`}
        type="button"
        aria-label={`Dismiss ${popupBanner.title}`}
        onClick={collapseBanner}
      />

      <div
        className={`${styles.panel} ${isReady && isExpanded ? styles.panelOpen : ""}`}
      >
        <a
          className={styles.bannerLink}
          href={popupBanner.href}
          aria-label={`Register for ${popupBanner.title}`}
        >
          <Image
            className={styles.bannerImage}
            src={popupBanner.image}
            alt={popupBanner.imageAlt}
            width={1686}
            height={933}
            sizes="(max-width: 620px) calc(100vw - 32px), 470px"
            priority
          />
        </a>

        <button
          className={styles.closeButton}
          type="button"
          aria-label={`Close ${popupBanner.title}`}
          onClick={collapseBanner}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3 3l10 10M13 3L3 13"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>

      <button
        className={`${styles.bubble} ${isReady && !isExpanded ? styles.bubbleVisible : ""}`}
        type="button"
        aria-label={`Open ${popupBanner.title}`}
        onClick={expandBanner}
      >
        <span className={styles.bubbleDate} aria-hidden="true">
          <small>NOV</small>
          <strong>18</strong>
        </span>
        <span>{popupBanner.bubbleLabel}</span>
      </button>
    </aside>
  );
}
