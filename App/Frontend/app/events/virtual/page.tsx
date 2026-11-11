import { ArrowRight } from "lucide-react";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import styles from "../events-directory.module.css";

const events = [
  {
    title: "Malta: Dream destination or expensive detour?",
    description: "A live breakdown of tuition, living costs, visa rules, work options and the questions Indian students should ask before choosing Malta.",
    href: "/events",
    visual: "malta",
    tag: "18 November · 6:00 PM IST",
  },
  {
    title: "Europe, with the whole picture in view",
    description: "A practical virtual session on comparing European destinations by course fit, affordability, application timelines and post-study direction.",
    href: "/events/europe",
    visual: "europe",
    tag: "Virtual session · Coming soon",
  },
] as const;

export default function VirtualEventsPage() {
  return <main className={styles.page}><Navigation /><span className={styles.flightMark} aria-hidden="true">✈</span><div className="shell"><section className={styles.grid} aria-label="Virtual events">{events.map((event) => <a className={styles.card} href={event.href} key={event.title}><div className={styles.thumbnail}><img src={`/events/${event.visual === "malta" ? "malta-webinar-thumbnail.webp" : "europe-webinar-thumbnail.webp"}`} alt="" /></div><div className={styles.body}><span className={styles.tag}>{event.tag}</span><h2>{event.title}</h2><p>{event.description}</p><span className={styles.action}>View event <ArrowRight size={17} /></span></div></a>)}</section></div><Footer /></main>;
}
