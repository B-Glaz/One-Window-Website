export type BlogArticle = {
  slug: string;
  title: string;
  tag: string;
  published: string;
  sourceUrl: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs?: string[]; bullets?: string[] }>;
};

export const articles: BlogArticle[] = [
  {
    slug: "wichita-state-university-digital-badge-program-2026",
    title: "Wichita State University Digital Badge Program 2026",
    tag: "2026",
    published: "July 23, 2026",
    sourceUrl: "https://onewindow.co/wichita-state-university-digital-badge-program-2026/",
    intro: "In today’s competitive academic and professional environment, completing a degree is important, but it may not always be enough to help you stand out. Employers and universities increasingly value candidates who demonstrate continuous learning, practical skills, adaptability, and a genuine interest in professional development. The Wichita State University Digital Badge Program 2026 gives students, working professionals, and lifelong learners an opportunity to build focused skills through short, flexible online courses. Through the 2026 program, learners can choose from 30+ badge courses across areas such as Engineering, Business, Health Sciences, Professional Writing, Social Media, and other career-focused disciplines. Most of the courses available through this initiative are scholarship-funded, making international learning more accessible to eligible participants. Whether you are preparing for university, applying for an internship, beginning your career, considering a professional transition, or simply looking to learn something new, a Wichita State University badge can become a valuable addition to your profile.",
    sections: [
      { heading: "What Is the Wichita State University Digital Badge Program?", paragraphs: ["The Wichita State University Digital Badge Program is a collection of short, focused online courses designed to help learners develop practical knowledge in a specific subject area. Instead of requiring a long-term degree commitment, each badge allows you to concentrate on one skill or topic and complete it within a defined period.", "After successfully completing the course requirements, participants receive a digital badge that can be shared on LinkedIn, included in a resume, or added to a personal portfolio. The badge provides a verifiable way to show that you have completed structured learning through Wichita State University."] },
      { heading: "Wichita State University Digital Badge Program 2026: Key Highlights", bullets: ["30+ online badge courses across multiple disciplines", "Most courses are scholarship-funded for eligible participants", "Fully online and self-paced learning", "No TOEFL or IELTS requirement", "Approximately eight hours of learning per course", "A digital badge is issued after successful completion", "Badges can be added to LinkedIn, a resume, or a portfolio", "Access for students, professionals, and lifelong learners", "One badge course per participant", "Flexible commencement and completion schedule"] },
      { heading: "Why Digital Badges Matter in 2026", paragraphs: ["The way people demonstrate skills is changing. A degree remains valuable, but employers and universities also want evidence that a candidate can learn continuously and apply knowledge in a practical setting. Digital badges can help bridge the gap between broad academic study and a focused, demonstrable capability.", "A badge does not replace a degree or professional experience. Instead, it complements your existing profile by showing initiative and a willingness to build relevant skills."] },
      { heading: "How Can the WSU Digital Badge Program Help Your Career?", bullets: ["Demonstrate continuous learning beyond your main degree", "Add a focused skill to your résumé", "Strengthen your LinkedIn profile with a verifiable credential", "Give you a useful talking point during interviews", "Explore a possible career direction before committing to a longer programme", "Support internship and early-career applications", "Build an interdisciplinary profile with a second area of learning", "Experience a US university learning environment online", "Show a verifiable credential that can be shared digitally"] },
      { heading: "Who Should Consider the WSU Digital Badge Program?", bullets: ["School and undergraduate students", "Graduates and jobseekers", "Working professionals", "Career changers", "Lifelong learners"] },
      { heading: "What Types of Badge Courses Are Available?", bullets: ["Engineering", "Business and Management", "Professional Writing and Communication", "Health Sciences", "Behavioural and Social Sciences", "Social Media and Workforce Skills"] },
      { heading: "How to Choose the Right Badge for Your Career", paragraphs: ["Before choosing a course, consider the direction you want your profile to take. Ask yourself: What skill would strengthen my current profile? Does the topic connect to a course, internship, or job I am considering? Can I realistically complete the learning within the available timeframe? Will I be able to explain how I applied the learning after completion?"] },
      { heading: "Important Dates", bullets: ["Program Begins: 17 August 2026", "Registration Deadline: 11 September 2026", "Course Completion Deadline: 3 December 2026"] },
      { heading: "How to Make the Badge More Valuable After Completion", paragraphs: ["Add the badge to your LinkedIn profile and resume, describe the skills you developed in your own words, and prepare one or two examples of how the learning connects to your academic or career goals. A credential becomes more useful when you can clearly explain what you learned and why it matters."] },
      { heading: "Frequently Asked Questions", bullets: ["Do I need TOEFL or IELTS? No TOEFL or IELTS requirement is listed for this digital badge programme.", "How many courses can I take? Participants can take one badge course.", "Are the courses online? Yes, the programme is delivered online and is self-paced.", "Will I receive a certificate? A digital badge is issued after successful completion."] },
      { heading: "Final thoughts", paragraphs: ["The Wichita State University Digital Badge Program 2026 offers a focused way to learn a new subject, strengthen an existing profile, and show continued development. For students and professionals who want a practical learning opportunity without committing to a full degree, a digital badge can be a useful next step."] },
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
