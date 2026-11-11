import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../events-directory.module.css";

export default function InPersonEventsPage() {
  return <main className={styles.page}><Navigation /><div className={`shell ${styles.inPersonContent}`}><section className={styles.hero}><p className={styles.eyebrow}>In-person events</p><h1>Nothing scheduled just yet.</h1><p>We are planning the next set of campus and city conversations. Check back soon for an event near you.</p></section><section className={styles.empty}><p className={styles.emptyLabel}>What happens next</p><h2>We will share every detail here.</h2><p>When the next session is ready, you will find its location, date, time and registration details on this page.</p></section></div><Footer /></main>;
}
