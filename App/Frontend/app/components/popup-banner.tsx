import { CalendarDays } from "lucide-react";
import styles from "./popup-banner.module.css";

export function PopupBanner() {
  return (
    <aside className={styles.root} aria-label="Events">
      <span className={styles.confetti} aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
      </span>
      <a className={styles.eventButton} href="/events/virtual">
        <CalendarDays aria-hidden="true" size={18} strokeWidth={2.2} />
        <span>Event</span>
      </a>
    </aside>
  );
}
