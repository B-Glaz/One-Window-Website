import { ArrowRight } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../events-directory.module.css";

export default function EuropeEventPage() {
  return <main className={styles.page}><Navigation /><div className="shell"><section className={styles.hero}><p className={styles.eyebrow}>Europe webinar · Coming soon</p><h1>Compare Europe with more confidence.</h1><p>We are preparing a practical virtual session on choosing a European destination, course and application route. Registration details will be announced soon.</p></section><section className={styles.empty}><h2>Europe webinar is coming soon.</h2><p>Save this space for a focused conversation on destinations, costs, admissions and the decisions that shape your next move.</p><a className={styles.action} href="/events/virtual">Back to virtual events <ArrowRight size={17} /></a></section></div><Footer /></main>;
}
