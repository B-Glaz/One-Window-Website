import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Compass,
  HeartHandshake,
  MessageCircleMore,
  Route,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { ZohoContactForm } from "../components/zoho-contact-form";
import styles from "./premium.module.css";

export const metadata: Metadata = {
  title: "Premium Career Counselling & Personalised Mentorship | One Window",
  description:
    "Personalised career counselling and one-to-one mentorship that helps students build clarity, confidence and a practical roadmap for the future.",
};

const pillars = [
  {
    number: "01",
    icon: Compass,
    title: "Discover their strengths",
    subtitle: "Deeper assessments and personalised career discovery",
    intro:
      "Every student has a unique combination of abilities, interests and personality traits. Understanding these dimensions is the first step towards meaningful career planning.",
    items: [
      "Personality traits, interests and behavioural preferences",
      "Academic strengths, learning styles and natural aptitudes",
      "Career interests, motivations and emerging aspirations",
      "Communication, leadership and interpersonal capabilities",
      "Decision-making approaches, confidence and developmental needs",
    ],
    outcome:
      "A personalised student profile highlighting strengths, development opportunities and potential career directions.",
    note:
      "Rather than relying on academic grades alone, we build a more complete understanding of your child’s potential.",
  },
  {
    number: "02",
    icon: MessageCircleMore,
    title: "Build confidence beyond the classroom",
    subtitle: "Personality development and essential life skills",
    intro:
      "Academic success can open doors. The ability to communicate, adapt and make thoughtful decisions helps students make the most of those opportunities.",
    items: [
      "Communication: expressing ideas clearly, presenting confidently and engaging with different audiences",
      "Personality development: building self-awareness, positive interpersonal habits and individual identity",
      "Decision-making and critical thinking: evaluating options, consequences and independent judgement",
      "Stress management and resilience: managing pressure, uncertainty and setbacks",
      "Leadership and collaboration: developing initiative, teamwork and accountability",
      "Time management and self-discipline: strengthening organisation, goal-setting and responsibility",
    ],
    outcome:
      "A structured personal development roadmap that strengthens confidence, independence and readiness for future challenges.",
    note:
      "Our mentoring places meaningful emphasis on the capabilities students need in university, professional environments and everyday life.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "One student. One mentorship journey.",
    subtitle: "Dedicated one-to-one guidance from seasoned career coaches",
    intro:
      "No two children think, learn or grow in exactly the same way. Their guidance should reflect that.",
    items: [
      "Building trust and understanding the individual beyond grades",
      "Exploring personal aspirations and possible career pathways",
      "Developing confidence and independent thinking",
      "Identifying skills requiring focused improvement",
      "Establishing achievable milestones and reviewing progress",
      "Guiding parents and students through important education and career decisions",
    ],
    outcome:
      "A personalised mentorship experience centred on the student’s individual growth, supported by clear goals and ongoing guidance.",
    note:
      "Our coaches take time to understand each student’s personality, aspirations, concerns and developmental needs before helping them set realistic growth goals.",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "Explore careers before committing",
    subtitle: "Career navigation, exposure and informed choices",
    intro:
      "The future of work is changing, and students are being introduced to opportunities that may not have existed a few years ago.",
    items: [
      "Emerging and traditional career pathways",
      "Interdisciplinary education and transferable skills",
      "Industry expectations and future skill requirements",
      "Career exploration activities and relevant experiential opportunities",
      "Academic and professional pathways in India and internationally",
      "University and programme choices aligned with long-term goals",
    ],
    outcome:
      "Greater clarity about potential careers and the education, experiences and capabilities required to pursue them.",
    note:
      "Making the right choice requires more than knowing the names of popular courses. We connect strengths and interests with disciplines, industries and future opportunities.",
  },
  {
    number: "05",
    icon: Route,
    title: "Turn potential into an actionable plan",
    subtitle: "A personalised roadmap for your child’s future",
    intro:
      "Insight matters only when it leads to action. The roadmap is tailored to your child’s interests, capabilities, aspirations and stage of education.",
    items: [
      "Academic and career exploration priorities",
      "Personality and communication development goals",
      "Relevant extracurricular activities and skill-building opportunities",
      "Recommendations for projects, competitions and experiential learning",
      "Short-term milestones and longer-term educational objectives",
      "Progress reviews and adjustments as interests and aspirations evolve",
    ],
    outcome:
      "A clear, practical action plan that helps parents and students understand what to prioritise, why it matters and what comes next.",
    note:
      "The intention is not to overwhelm students with activities. It is to identify what will genuinely contribute to their development.",
  },
];

const comparison = [
  ["Programme focus", "Course and university selection", "Complete student development"],
  ["Understanding the student", "Guidance primarily based on grades", "Deeper personality, interest and capability assessments"],
  ["Career planning", "Generalised career recommendations", "Individualised career exploration and planning"],
  ["Guidance model", "Admission-oriented interactions", "Focused one-to-one mentorship with seasoned coaches"],
  ["Capabilities", "Limited attention to soft skills", "Communication, leadership, resilience and decision-making development"],
  ["Progress", "Advice at important admission stages", "Personalised milestones and structured progress reviews"],
  ["How success is viewed", "Admissions", "Clarity, confidence, capability and educational progression"],
];

export default function PremiumPage() {
  return (
    <main className={styles.page}>
      <Navigation counsellingHref="#premium-enquiry" />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1>Every child has potential. The right guidance helps them discover it.</h1>
            <p className={styles.heroLead}>
              Beyond choosing a university. Beyond choosing a career. Building confidence,
              clarity and capabilities for life.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#premium-enquiry">
                Book a career discovery session <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className={styles.secondaryAction} href="#five-pillars">
                Explore the programme <ArrowDown aria-hidden="true" size={17} />
              </a>
            </div>
            <div className={styles.heroPromises} aria-label="Programme focus">
              <span>Understand deeply</span>
              <span>Mentor personally</span>
              <span>Develop holistically</span>
            </div>
            <div className={styles.privateSignal}>
              <span>Private mentorship</span>
              <span>Student-led. Parent-supported.</span>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <Image
              alt="A student in a focused one-to-one conversation with a mentor"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              src="/premium/premium-mentorship-hero.jpg"
            />
            <figcaption>
              <Sparkles aria-hidden="true" size={18} />
              Guidance built around the individual, not a template.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.parentQuestions} aria-labelledby="parent-questions-title">
        <div className={`shell ${styles.parentQuestionsGrid}`}>
          <div>
            <h2 id="parent-questions-title">Are we preparing them for admission, or for the future?</h2>
          </div>
          <div className={styles.questionList}>
            <p>Should they pursue engineering, business, design or an emerging career?</p>
            <p>Are their choices driven by genuine interests or external expectations?</p>
            <p>Are they developing the confidence and judgement needed beyond academics?</p>
          </div>
        </div>
        <div className={`shell ${styles.parentQuestionsNote}`}>
          <p>
            Every parent wants their child to succeed. But as careers, industries and required
            skills evolve, knowing what is right is not always easy. For students, that uncertainty
            can create pressure. For parents, it raises a deeper concern about readiness for the future.
          </p>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={`shell ${styles.philosophyGrid}`}>
          <div className={styles.philosophyStatement}>
            <span aria-hidden="true">“</span>
            <h2>A career is a journey. Not a one-time decision.</h2>
          </div>
          <div className={styles.philosophyCopy}>
            <p>
              A student may excel academically but struggle to identify their interests. Another may
              have remarkable creativity and leadership potential but lack the confidence to express
              ideas. Some know what they want to pursue but are uncertain about the pathway.
            </p>
            <p>
              Traditional counselling often focuses on where a student should study. We begin with a
              more important question: <strong>Who is your child becoming, and how can we help them grow?</strong>
            </p>
            <p>
              We consider the complete individual, including their personality, interests, strengths, aspirations,
              emotional readiness, learning preferences and emerging capabilities, to move from uncertainty
              to informed choices and from scattered ambitions to a clear direction.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.profilePreview} aria-labelledby="profile-title">
        <div className={`shell ${styles.profileGrid}`}>
          <div className={styles.profileCopy}>
            <h2 id="profile-title">Every conversation should leave you with something useful.</h2>
            <p>
              The journey builds a personalised student profile, highlighting strengths, development
              opportunities and potential career directions, so the next decision feels considered rather than rushed.
            </p>
            <a className={styles.inlineAction} href="#five-pillars">
              See how the journey works <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className={styles.profileCard} aria-label="Illustrative student profile view">
            <div className={styles.profileCardTop}>
              <div><span>Student profile</span><strong>Working view</strong></div>
              <Sparkles aria-hidden="true" size={18} />
            </div>
            <div className={styles.profilePills}>
              <span>Curiosity</span><span>Communication</span><span>Initiative</span>
            </div>
            <div className={styles.profileRows}>
              {[["Decision confidence", "Building", "72%"], ["Time ownership", "Emerging", "58%"], ["Career exposure", "Next focus", "44%"]].map(([label, status, value]) => (
                <div className={styles.profileRow} key={label}>
                  <div className={styles.profileRowLabel}><span>{label}</span><strong>{status}</strong></div>
                  <div className={styles.profileBar}><span style={{ width: value }} /></div>
                </div>
              ))}
            </div>
            <div className={styles.profileFooter}><MessageCircleMore aria-hidden="true" size={17} /> Next conversation: turn insight into action</div>
          </div>
        </div>
        <div className={`shell ${styles.journeyTrack}`} aria-label="Mentorship journey">
          {[['01', 'Discover', 'Understand the individual'], ['02', 'Develop', 'Build confidence and capability'], ['03', 'Explore', 'Test possible directions'], ['04', 'Plan', 'Turn insight into next steps']].map(([number, title, description]) => (
            <div className={styles.journeyStep} key={number}><span className={styles.journeyNumber}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>
          ))}
        </div>
      </section>

      <section className={styles.pillars} id="five-pillars" aria-labelledby="pillars-title">
        <div className={`shell ${styles.pillarsIntro}`}>
          <h2 id="pillars-title">Five pillars. One deeply personal journey.</h2>
          <p>
            Career guidance should begin long before university applications and continue beyond
            admission decisions. This journey helps students understand themselves, explore their
            potential and build the capabilities to make informed decisions about education, careers and life.
          </p>
        </div>

        <div className={`shell ${styles.pillarList}`}>
          {pillars.map(({ number, icon: Icon, title, subtitle, intro, items, outcome, note }) => (
            <article className={styles.pillar} key={number}>
              <div className={styles.pillarRail} aria-hidden="true">
                <span>{number}</span>
                <Icon size={30} strokeWidth={1.7} />
              </div>
              <div className={styles.pillarBody}>
                <div className={styles.pillarHeading}>
                  <p>{subtitle}</p>
                  <h3>{title}</h3>
                  <p className={styles.pillarIntro}>{intro}</p>
                </div>
                <div className={styles.pillarDetails}>
                  <p className={styles.pillarNote}>{note}</p>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className={styles.outcome}>
                  <Target aria-hidden="true" size={20} />
                  <p><strong>What this creates</strong>{outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.anywhere}>
        <div className={`shell ${styles.anywhereGrid}`}>
          <div className={styles.anywhereImage}>
            <Image
              alt="A mentor and student discussing future plans across a table"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
              src="/premium/premium-mentorship-conversation.jpg"
            />
          </div>
          <div className={styles.anywhereCopy}>
            <h2>The right guidance matters, even if your child does not study abroad.</h2>
            <p>
              A meaningful career journey is not defined by geography. Your child may choose a
              university in India, pursue an international education or explore a pathway that combines both.
            </p>
            <div className={styles.questionCloud} aria-label="Questions the programme explores">
              <span>What am I good at?</span>
              <span>What work interests me?</span>
              <span>How do I build confidence?</span>
              <span>How do I make better decisions?</span>
            </div>
            <p>
              Study abroad is one possible destination. Developing your child’s potential is our larger
              purpose: helping students become better prepared for higher education, more confident in
              their abilities and more capable of navigating a changing world.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.comparison} aria-labelledby="comparison-title">
        <div className={`shell ${styles.comparisonHeader}`}>
          <h2 id="comparison-title">What makes the premium experience different?</h2>
          <p>Not more advice. A more complete understanding of the student and a clearer path forward.</p>
        </div>
        <div className={`shell ${styles.tableWrap}`} tabIndex={0} aria-label="Counselling approach comparison; scroll horizontally on smaller screens">
          <table>
            <thead>
              <tr>
                <th scope="col">What changes</th>
                <th scope="col">General study-abroad counselling</th>
                <th scope="col">One Window premium counselling</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, general, premium]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{general}</td>
                  <td>{premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.parentMessage}>
        <div className={`shell ${styles.parentMessageGrid}`}>
          <div className={styles.parentPhoto}>
            <Image
              alt="A career mentor listening during a planning conversation"
              fill
              sizes="(max-width: 800px) 100vw, 42vw"
              src="/premium/premium-mentorship-planning.jpg"
            />
          </div>
          <div className={styles.parentMessageCopy}>
            <UsersRound aria-hidden="true" size={30} strokeWidth={1.6} />
            <h2>For parents, it is more than a career decision. It is their future.</h2>
            <p className={styles.parentCadence}>
              Ambitious, but not overwhelmed.<br />
              Independent, but supported.<br />
              Confident, but grounded.
            </p>
            <p>
              You want your child to discover what makes them different rather than simply follow
              the path everyone else is choosing. Our premium mentoring brings together professional
              guidance, individual attention and purposeful development to help them grow with confidence.
            </p>
            <blockquote>
              The best investment in your child’s future is not just choosing the right university.
              It is helping them become ready for the opportunities ahead.
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.fitSection} aria-labelledby="fit-title">
        <div className={`shell ${styles.fitGrid}`}>
          <div><h2 id="fit-title">The right support creates room for better decisions.</h2></div>
          <div className={styles.fitColumns}>
            <div className={styles.fitColumn}><h3>For families who want</h3><ul><li>Direction before deadlines start driving the conversation</li><li>Space for reflection, exploration and honest questions</li><li>A plan that can evolve as the student learns more about themselves</li></ul></div>
            <div className={`${styles.fitColumn} ${styles.fitBoundary}`}><h3>Not built for</h3><ul><li>Instant course recommendations without context</li><li>Guaranteed outcomes or pressure to choose quickly</li><li>A one-size-fits-all process that overlooks the individual</li></ul></div>
          </div>
        </div>
      </section>

      <section className={styles.enquiry} id="premium-enquiry" aria-labelledby="premium-enquiry-title">
        <div className={`shell ${styles.enquiryGrid}`}>
          <div className={styles.enquiryCopy}>
            <h2 id="premium-enquiry-title">Give them direction.</h2>
            <p>
              Discover how One Window’s Premium Career Counselling &amp; Personalised Mentorship can
              help your child build clarity, confidence and a practical roadmap for the future.
            </p>
            <p className={styles.privateInvitation}>A private, no-pressure conversation for parents and students who want more clarity before committing to a path.</p>
            <div className={styles.enquirySteps}>
              <span><strong>01</strong> Tell us where your child is today</span>
              <span><strong>02</strong> Speak with the One Window team</span>
              <span><strong>03</strong> Explore the right next step</span>
            </div>
          </div>
          <div className={styles.enquiryForm}>
            <ZohoContactForm country="Premium Career Counselling" loading="eager" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
