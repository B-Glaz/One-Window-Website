/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { ArrowRight, Check, Globe2, Sparkles } from "lucide-react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

// ─── Page Model ───

export type InstitutionPage = {
  audience: string;
  title: string;
  intro: string;
  visual: string;
  offers: Array<[string, string]>;
  initiatives: Array<[string, string]>;
  related?: Array<[string, string]>;
  destinations?: Array<[string, string, string]>;
  programmes?: Array<[string, string[], string[]]>;
  journey?: Array<[string, string, string]>;
  testimonials?: Array<[string, string, string]>;
  faqs?: Array<[string, string]>;
};

// ─── Institution Content ───

export const institutionPages: Record<string, InstitutionPage> = {
  foreign: {
    audience: "For foreign universities",
    title: "Build a stronger bridge to ambitious students.",
    intro:
      "Empowering futures with seamless student recruitment, bridging aspirations to world-class educational opportunities.",
    visual: "/monument-usa.webp",
    offers: [
      [
        "Bachelor recruitment",
        "Empower undergraduate programmes with thoughtful recruitment strategies, personalised outreach, and meaningful student connections.",
      ],
      [
        "Masters recruitment",
        "Attract high-potential postgraduate candidates through focused campaigns, AI-informed insights, and strategic outreach.",
      ],
      [
        "2+2 twinning programmes",
        "Create clear pathways between institutions with aligned curricula, student readiness, and global collaboration.",
      ],
      [
        "Summer programmes",
        "Connect short-term global programmes with students seeking academic enrichment, cultural immersion, and real-world exposure.",
      ],
    ],
    initiatives: [
      [
        "Targeted student campaigns",
        "Reach the right student communities through focused digital and campus-led initiatives.",
      ],
      [
        "University showcases",
        "Give prospective students a clear, memorable view of your curriculum, campus, and opportunities.",
      ],
      [
        "Parent and student sessions",
        "Answer practical questions around affordability, transition, culture, and academic fit.",
      ],
      [
        "Readiness workshops",
        "Prepare students for the academic expectations and cultural context of studying abroad.",
      ],
    ],
    related: [
      ["bachelors-recruitment", "Bachelor recruitment"],
      ["masters-recruitment", "Masters recruitment"],
      ["two-plus-two-twinning-program", "2+2 twinning programme"],
      ["summer-program", "Summer programme"],
    ],
  },
  indian: {
    audience: "For Indian universities",
    title: "Turn international ambition into lasting partnerships.",
    intro:
      "We set up and manage your International Relations Office, connecting your university to leading institutions across the US, UK, Australia, Germany, and the EU.",
    visual: "/monuments/monument-germany.svg",
    offers: [
      [
        "Twinning programmes",
        "Create 2+2, 3+1, and 4+1 pathways that give students meaningful exposure to Indian and international campuses.",
      ],
      [
        "Semester abroad",
        "Design immersive one-semester experiences that broaden perspective and strengthen academic credentials.",
      ],
      [
        "Short programmes",
        "Build specialised summer and short-term programmes for skill-building and cross-cultural learning.",
      ],
      [
        "International language centre & test prep",
        "Prepare students for IELTS, TOEFL, GRE, and other language and admissions requirements.",
      ],
      [
        "Higher education abroad",
        "Use AI-powered guidance and matching to help students pursue masters and PhD opportunities worldwide.",
      ],
      [
        "International faculty visits",
        "Bring global expertise to campus through lectures, workshops, and academic collaborations.",
      ],
    ],
    initiatives: [
      [
        "Global networking",
        "Build stronger connections with universities, counsellors, and stakeholders across borders.",
      ],
      [
        "A centre of transformation",
        "Position your campus as a hub for international learning, collaboration, and cultural exchange.",
      ],
      [
        "Strengthened capabilities",
        "Grow global readiness through new programmes, resources, and expertise.",
      ],
      [
        "Innovation and empowerment",
        "Give students and faculty the confidence to thrive in a connected academic landscape.",
      ],
    ],
  },
  schools: {
    audience: "For schools",
    title: "Give every learner a clearer next chapter.",
    intro:
      "We partner with progressive institutions to deliver a 360° student-first ecosystem for academic, career, and personal guidance across students, parents, and educators.",
    visual: "/monuments/monument-uk.svg",
    offers: [
      [
        "Psychometric testing",
        "Understand interests, skills, aptitude, personality, and learning preferences before planning the next step.",
      ],
      [
        "1-on-1 student counselling",
        "Give each learner dedicated guidance for academic and personal choices, career uncertainty, and confidence.",
      ],
      [
        "Career assessment tools",
        "Use interest inventories, stream selectors, and future-focused career maps aligned with global benchmarks.",
      ],
      [
        "International test preparation",
        "Prepare students for SAT, IELTS, TOEFL, and AP through expert-led sessions, mocks, and tailored plans.",
      ],
      [
        "Profile-building support",
        "Help students build portfolios that reflect leadership, creativity, initiative, research, and community impact.",
      ],
      [
        "Indian and international guidance",
        "Navigate Indian institutions and global destinations with clear comparisons of costs, scholarships, and outcomes.",
      ],
      [
        "Research publication programmes",
        "Introduce students to academic writing and research methodology with PhD holders and scholars.",
      ],
      [
        "Project-based learning",
        "Build practical problem-solving, collaboration, and creative execution through guided real-world projects.",
      ],
    ],
    initiatives: [
      [
        "Scholarship drives",
        "Create opportunities that attract talented students seeking financial support.",
      ],
      [
        "Student-parent sessions",
        "Make affordability, academic transition, and cultural adaptation easier to understand.",
      ],
      [
        "Seminar series",
        "Bring focused exposure to students through engaging sessions across schools and colleges.",
      ],
      [
        "On-campus counselling days",
        "Give learners direct access to expert guidance and individual conversations.",
      ],
    ],
  },
};
export const servicePages: Record<string, InstitutionPage> = {
  "bachelors-recruitment": {
    audience: "Bachelor recruitment",
    title: "Make your first degree a launchpad, not a leap.",
    intro:
      "The right bachelor’s choice can shape your confidence, career and world. We help you turn a big ambition into a course, country and application plan you can actually move on.",
    visual: "/monument-australia.webp",
    offers: [
      [
        "Profile-first planning",
        "Understand strengths, interests and goals before shortlisting a country, course or university.",
      ],
      [
        "Course and university fit",
        "Compare entry requirements, teaching style, outcomes and budget across the routes that fit.",
      ],
      [
        "Application readiness",
        "Build the documents, tests, timeline and profile evidence needed for a confident application.",
      ],
    ],
    initiatives: [
      [
        "Counselling and profile review",
        "Start with a free conversation that turns uncertainty into a realistic study plan.",
      ],
      [
        "Course and university selection",
        "Shortlist by academic fit, entry requirements, career relevance and budget.",
      ],
      [
        "Milestone planning",
        "Coordinate tests, documents, deadlines, essays, applications, offers and visa preparation.",
      ],
    ],
    destinations: [
      ["US", "USA", "Flexible degrees, a strong research culture and a wide choice of majors."],
      ["GB", "United Kingdom", "Focused, specialised degrees with a global academic reputation."],
      ["CA", "Canada", "Welcoming campuses and clear pathways for international students."],
      ["AU", "Australia", "Practical learning, vibrant cities and strong industry links."],
      ["SG", "Singapore", "An Asian education and business hub with top-ranked universities."],
      ["CH", "Switzerland and Italy", "Leading European science, engineering and business schools."],
    ],
    programmes: [
      ["Business and management", ["Business administration", "International business", "Marketing"], ["Business analyst", "Marketing manager", "Entrepreneur"]],
      ["Finance and economics", ["Economics", "Finance", "Accounting"], ["Financial analyst", "Investment banker", "Policy economist"]],
      ["Computing and data", ["Computer science", "Data science", "AI and machine learning"], ["Software engineer", "Data scientist", "AI specialist"]],
      ["Engineering", ["Mechanical", "Electrical", "Civil", "Robotics"], ["Design engineer", "Project engineer", "Robotics engineer"]],
      ["Health and life sciences", ["Biomedical science", "Nursing", "Psychology"], ["Clinical researcher", "Nurse", "Psychologist"]],
      ["Design, law and social sciences", ["Design", "Architecture", "Law", "International relations"], ["UX designer", "Architect", "Lawyer", "Diplomat"]],
    ],
    journey: [
      ["Discover your direction", "Free counselling and a profile assessment to understand your strengths and goals.", "Counselling, profile review"],
      ["Shortlist courses and universities", "Compare by academic fit, entry requirements, career relevance and budget.", "Course and university selection"],
      ["Prepare your application", "Plan documents, tests and deadlines, and strengthen your profile with purposeful activities.", "Milestone planning, profile development"],
      ["Submit with confidence", "Bring essays, CVs, portfolios and recommendations together, then apply on time.", "Essay guidance, application coordination"],
      ["Offers, scholarships and interviews", "Evaluate offers, prepare for interviews and plan the cost before you decide.", "Interview preparation, scholarship planning"],
      ["Enrol and fly", "Accept your offer, then prepare for visa, accommodation and departure.", "Enrolment, pre-departure support"],
    ],
    testimonials: [
      ["Ananya Sharma", "UK", "One Window made my study abroad dream feel possible. Today, I am studying at a university that fits me."],
      ["Rohan Patel", "USA", "Their guidance was there from applications to visa. Highly recommend the support."],
      ["Diya Mehta", "Canada", "Professional, supportive and always there when the next decision felt difficult."],
    ],
    faqs: [
      ["How early should I start planning my bachelor’s degree abroad?", "Starting 12 to 18 months before intake gives you time for profile building, tests, applications, funding and visa preparation."],
      ["Can you help me choose between countries and courses?", "Yes. We compare academic fit, costs, entry requirements, student experience and career direction before building a shortlist."],
      ["Do you help with scholarships and affordability?", "We help you map scholarships, funding routes and a realistic cost plan alongside the university shortlist."],
      ["Is the first counselling session free?", "The first conversation is designed to understand your goals and identify the most useful next step."],
    ],
  },
  "masters-recruitment": {
    audience: "Masters recruitment",
    title: "Attract postgraduate talent with intent.",
    intro:
      "Collaborate with One Window to attract top talent for your Master’s programmes through innovative campaigns, AI-informed insights, and strategic outreach.",
    visual: "/monument-germany.webp",
    offers: [
      [
        "Profile-led matching",
        "Connect programme strengths with students’ academic backgrounds and aspirations.",
      ],
      [
        "Focused digital campaigns",
        "Build high-intent awareness around the right programmes and intakes.",
      ],
      [
        "Decision support",
        "Give candidates the information needed to compare fit, cost, and next steps.",
      ],
    ],
    initiatives: [
      [
        "Graduate information sessions",
        "Turn complex programme questions into useful conversations.",
      ],
      [
        "Faculty and alumni touchpoints",
        "Show the academic and career experience behind the course.",
      ],
      [
        "Application momentum",
        "Keep prospective candidates moving from curiosity to action.",
      ],
    ],
  },
  "two-plus-two-twinning-program": {
    audience: "2+2 twinning programme",
    title: "Make international degree pathways easier to enter.",
    intro:
      "Foster global collaboration and student success through aligned curricula, readiness support, and clear transitions between institutions.",
    visual: "/monument-france.webp",
    offers: [
      [
        "Course mapping and articulation",
        "Support seamless credit transfer and academic alignment between institutions.",
      ],
      [
        "Pathway subjects and pre-training",
        "Build foundational knowledge so students can transition with confidence.",
      ],
      [
        "Education loan assistance",
        "Help students understand funding options and reduce financial barriers.",
      ],
      [
        "Cultural and academic readiness",
        "Prepare learners for academic expectations and cultural nuances abroad.",
      ],
      [
        "AI-powered university matching",
        "Use AI-informed guidance to connect students with suitable programmes.",
      ],
      [
        "Badge programmes",
        "Recognise the preparation students complete before a twinning opportunity.",
      ],
    ],
    initiatives: [
      [
        "Curriculum showcases",
        "Let partner universities highlight distinctive curriculum and learning experiences.",
      ],
      [
        "Student-parent sessions",
        "Address affordability, academic transition, and cultural adaptation.",
      ],
      [
        "Global readiness boot camps",
        "Build academic, cultural, and practical confidence before departure.",
      ],
      [
        "On-campus counselling days",
        "Offer one-to-one guidance around pathway choices.",
      ],
    ],
  },
  "summer-program": {
    audience: "Summer programme",
    title: "Turn a summer into a global advantage.",
    intro:
      "Connect ambitious students with short-term global exposure, academic enrichment, and cultural immersion.",
    visual: "/monument-italy.webp",
    offers: [
      [
        "Curated academic experiences",
        "Highlight summer programmes across STEM, business, arts, and humanities.",
      ],
      [
        "Experiential learning",
        "Showcase internships, industry visits, research projects, and practical exposure.",
      ],
      [
        "Global cultural immersion",
        "Bring together cultural tours, language learning, and local experiences.",
      ],
      [
        "Application support",
        "Guide students through applications, documents, visas, finances, and travel planning.",
      ],
      [
        "AI-powered recommendations",
        "Match programmes to aspirations and eligibility with intelligent guidance.",
      ],
      [
        "Pre-departure orientation",
        "Prepare students for academic expectations, safety, and soft skills.",
      ],
    ],
    initiatives: [
      [
        "Summer programme awareness weeks",
        "Create targeted events in schools and colleges.",
      ],
      [
        "Interactive information sessions",
        "Bring alumni and university representatives into the conversation.",
      ],
      [
        "Profile-building workshops",
        "Help students strengthen competitive summer applications.",
      ],
      [
        "Faculty networking events",
        "Create meaningful connections with visiting university faculty.",
      ],
    ],
  },
};
export function InstitutionalPage({
  page,
  related,
}: {
  page: InstitutionPage;
  related?: Array<[string, string]>;
}) {
  const isBachelors = page.audience === "Bachelor recruitment";

  return (
    <main className={isBachelors ? "institution-page bachelors-page" : "institution-page"}>
      <Navigation />
      <section className="institution-hero">
        <div className="institution-hero-orb" />
        <div className="shell institution-hero-grid">
          <div>
            <p className="eyebrow">
              <Globe2 size={15} /> {page.audience}
            </p>
            <h1>{page.title}</h1>
            <p className="institution-intro">{page.intro}</p>
            <div className="institution-actions">
              <a className="button button-primary" href="/#consultation">
                Start a conversation <ArrowRight size={17} />
              </a>
              <Link className="text-link" href="/">
                Back to One Window <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="institution-hero-art">
            <img src={page.visual} alt="" />
            <span>
              <Sparkles size={15} /> Built around people, pathways, and
              possibility
            </span>
          </div>
        </div>
      </section>
      {isBachelors && (
        <section className="bachelors-signal-strip" aria-label="Bachelor planning signals">
          <div className="shell bachelors-signal-grid">
            <div><strong>01</strong><span>Start with fit</span><small>Course, country and profile before applications.</small></div>
            <div><strong>02</strong><span>See the whole route</span><small>Tests, deadlines, funding and visa in one view.</small></div>
            <div><strong>03</strong><span>Move with clarity</span><small>One practical next step after every conversation.</small></div>
          </div>
        </section>
      )}
      <section className="section-pad institution-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What we bring together</p>
            <h2>Support that makes the opportunity clearer.</h2>
          </div>
          <div className="institution-card-grid">
            {page.offers.map(([title, text], i) => (
              <article className="institution-card" key={title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad institution-section institution-section-tinted">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Ways to create momentum</p>
            <h2>Turn interest into meaningful engagement.</h2>
          </div>
          <div className="institution-initiative-grid">
            {page.initiatives.map(([title, text]) => (
              <article key={title}>
                <Check size={18} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {page.destinations && (
        <section className="section-pad institution-section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Destinations</p>
              <h2>One goal, many world-class routes.</h2>
              <p>Each destination offers something different. We help you compare them honestly.</p>
            </div>
            <div className="institution-destination-grid">
              {page.destinations.map(([code, name, text]) => (
                <article className="institution-destination-card" key={name}>
                  <span>{code}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {isBachelors && (
        <section className="bachelors-cta-band">
          <div className="shell">
            <div><p className="eyebrow">Your first move</p><h2>Not sure where to begin? Start with the questions.</h2></div>
            <a className="button button-primary" href="/#consultation">Find my path <ArrowRight size={17} /></a>
          </div>
        </section>
      )}
      {page.programmes && (
        <section className="section-pad institution-section institution-section-tinted">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Programmes and careers</p>
              <h2>Find the degree that leads where you want to go.</h2>
            </div>
            <div className="institution-programme-grid">
              {page.programmes.map(([title, programmes, careers]) => (
                <article className="institution-programme-card" key={title}>
                  <h3>{title}</h3>
                  <span>Programmes</span>
                  <div className="institution-pills">
                    {programmes.map((item) => <em key={item}>{item}</em>)}
                  </div>
                  <span>Careers</span>
                  <div className="institution-pills institution-pills-muted">
                    {careers.map((item) => <em key={item}>{item}</em>)}
                  </div>
                  <a className="text-link" href="/#consultation">Talk to a counsellor <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {page.journey && (
        <section className="section-pad institution-section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Your journey</p>
              <h2>Six clear steps from interest to enrolment.</h2>
            </div>
            <div className="institution-journey-list">
              {page.journey.map(([title, text, label], index) => (
                <article key={title}>
                  <strong>{index + 1}</strong>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span>{label}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {page.testimonials && (
        <section className="section-pad institution-section institution-section-tinted">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Student stories</p>
              <h2>Real students. Real journeys.</h2>
            </div>
            <div className="institution-testimonial-grid">
              {page.testimonials.map(([name, destination, quote]) => (
                <article className="institution-testimonial-card" key={name}>
                  <span>“</span>
                  <p>{quote}</p>
                  <strong>{name}</strong>
                  <small>{destination}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {page.faqs && (
        <section className="section-pad institution-section">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Honest answers</p>
              <h2>The questions every family asks.</h2>
            </div>
            <div className="institution-faq-list">
              {page.faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      {(related ?? page.related) && (
        <section className="section-pad institution-related">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Explore the pathways</p>
              <h2>Choose the programme conversation you want to start.</h2>
            </div>
            <div className="institution-related-grid">
              {(related ?? page.related)!.map(([slug, label]) => (
                <Link href={`/for-foreign-universities/${slug}`} key={slug}>
                  {label}
                  <ArrowRight size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="institution-end">
        <div className="shell institution-end-inner">
          <div>
            <p className="eyebrow">A clearer next step</p>
            <h2>Let’s shape the right route together.</h2>
          </div>
          <a className="button button-light" href="/#consultation">
            Connect with One Window <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
