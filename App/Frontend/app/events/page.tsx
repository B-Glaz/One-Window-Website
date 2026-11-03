import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MessageCircleQuestion,
} from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import styles from "./events.module.css";

const registrationUrl = "https://meet.zoho.in/mwqd-dbi-ajk";

const sessionTopics = [
  {
    title: "The real cost of a year in Malta",
    description:
      "Build a realistic view of tuition and monthly living costs before deciding whether the destination fits your budget.",
  },
  {
    title: "The visa timeline that matters",
    description:
      "Understand how the student visa process works, what takes time and where students commonly misjudge the sequence.",
  },
  {
    title: "Institutions worth shortlisting",
    description:
      "Learn how to compare courses and verify that an institution is genuine before paying fees or signing an agreement.",
  },
  {
    title: "Work during and after study",
    description:
      "Look at part time work, the nine month post study permit and the sectors where graduates realistically search for roles.",
  },
  {
    title: "The Get Qualified tax credit",
    description:
      "See how the scheme can cover up to 70% of eligible costs, who may qualify and why it is not an upfront fee discount.",
  },
  {
    title: "A clear Malta fit check",
    description:
      "Work out who can benefit from Malta and when another destination may offer a stronger academic, career or financial fit.",
  },
] as const;

export const metadata: Metadata = {
  title: "Malta Webinar | One Window Events",
  description:
    "Join One Window for a practical live session on studying in Malta, including costs, visas, institutions, work and career planning.",
};

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>One Window live webinar</p>
            <h1>
              Studying in Malta:
              <span> Dream destination or expensive detour?</span>
            </h1>
            <p className={styles.lead}>
              Malta looks perfect on Instagram. Let&apos;s see how it holds up on paper.
            </p>
            <p className={styles.intro}>
              Sunshine, English taught degrees and an EU base make Malta easy to notice.
              This live session looks past the brochure and examines what the fees, visa
              rules and job market actually mean for Indian students.
            </p>

            <div className={styles.eventMeta} aria-label="Webinar schedule">
              <span>
                <CalendarDays aria-hidden="true" size={19} />
                5 November
              </span>
              <span>
                <Clock3 aria-hidden="true" size={19} />
                6:30 PM IST
              </span>
            </div>

            <a className={styles.primaryButton} href={registrationUrl}>
              Register now
              <ArrowRight aria-hidden="true" size={19} />
            </a>
          </div>

          <a
            className={styles.posterLink}
            href={registrationUrl}
            aria-label="Register for the Malta webinar"
          >
            <Image
              className={styles.poster}
              src="/campaigns/malta-webinar-event-page.png"
              alt="Malta Dream Destination or Expensive Detour live webinar poster"
              width={1122}
              height={1402}
              sizes="(max-width: 760px) calc(100vw - 36px), 500px"
              priority
            />
            <span className={styles.posterAction}>
              Reserve your place
              <ArrowRight aria-hidden="true" size={17} />
            </span>
          </a>
        </div>
      </section>

      <section className={styles.topicsSection}>
        <div className="shell">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>What we will cover</p>
            <h2>Real numbers. Clear rules. Better questions.</h2>
            <p>
              The One Window team will break down the decisions that matter before
              you shortlist a course, pay a deposit or start a visa application.
            </p>
          </div>

          <div className={styles.topicGrid}>
            {sessionTopics.map((topic, index) => (
              <article className={styles.topicCard} key={topic.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.qaSection}>
        <div className={`shell ${styles.qaPanel}`}>
          <div className={styles.qaIcon}>
            <MessageCircleQuestion aria-hidden="true" size={30} />
          </div>
          <div>
            <p className={styles.eyebrow}>Live Q&amp;A included</p>
            <h2>Bring the awkward questions.</h2>
            <p>
              Ask the One Window team about costs, college credibility, visa timing,
              jobs or anything else you need to understand before making the move.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className={`shell ${styles.audiencePanel}`}>
          <div>
            <p className={styles.eyebrow}>Who should join</p>
            <h2>For students and families making a real decision.</h2>
          </div>
          <ul>
            <li>
              <Check aria-hidden="true" size={18} />
              Class XII students planning for the 2026 to 2027 intakes
            </li>
            <li>
              <Check aria-hidden="true" size={18} />
              Graduates comparing Malta with other European destinations
            </li>
            <li>
              <Check aria-hidden="true" size={18} />
              Parents who want straight answers before committing money
            </li>
          </ul>
          <a className={styles.secondaryButton} href={registrationUrl}>
            Register for the webinar
            <ArrowRight aria-hidden="true" size={19} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
