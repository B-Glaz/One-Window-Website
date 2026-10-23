import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { articles } from "./articles";

const posts: Array<[string, string, string, string?]> = [
  ["Wichita State University Digital Badge Program 2026", "2026", "Applications, eligibility and what the digital badge route means for international students."],
  ["How to Write an SOP in 2026: Why Generic and AI-Written Statements Fail", "2026", "A clearer way to write a statement that sounds like you and supports your application."],
  ["Study in Europe: How to Compare Germany, Ireland, France, the Netherlands, Finland, Spain, Italy, and Luxembourg by Career Fit", "2026", "Compare destinations by course fit, career direction and the kind of future you want to build."],
  ["Study Abroad Is Becoming Employment-Led: What Indian Students Must Understand", "2026", "Why course and country decisions need to connect to the career pathway beyond graduation."],
  ["Is Your Degree AI-Proof? What Students Should Know Before Choosing a Course Abroad", "2026", "Questions to ask before choosing a programme in a changing world of work."],
  ["Beyond the CV: How Studying in Luxembourg Can Change the Way Employers See You", "2026", "A closer look at the value of an international learning experience."],
  ["Study in Poland for Indian Students: Cost, Career Scope, Benefits and Why It Makes Sense in 2026", "2026", "A practical starting point for students considering Poland as a study destination."],
  ["Is Your MBA Actually Worth It? The ROI Question Nobody Asks", "2026", "How to think about the return on an MBA before committing time and money."],
  ["Study in Europe for Indian Students", "Guide", "A broad guide to choosing a European destination with more clarity."],
  ["Why Choosing the Right Master’s Program Matters More Than Ever", "Guide", "Go beyond rankings and shortlist a programme that fits your long-term direction."],
  ["Europe Is Quietly Becoming the Smartest Place to Study Abroad", "Guide", "The questions to ask when comparing Europe with more familiar destinations."],
  ["How to Prepare for your English Proficiency Test", "Guide", "Simple preparation principles for planning your language test with confidence."],
  ["Steps to Select University", "Guide", "A practical framework for comparing universities before you apply."],
  ["Top 5 Academic Success Strategies For Study Abroad", "Guide", "Build habits that help you get more from your international education."],
  ["Scholarship Vs. Student Loan: Understanding The Pros And Cons", "Guide", "Understand the two most common ways students plan their education budget."],
  ["Is Study Gap Accepted in the UK", "Guide", "What students should prepare when their academic journey includes a gap."],
  ["07 Tips to Make Friends While You Study Abroad", "Life abroad", "Small, practical ways to build community in a new country."],
  ["Summer Programs & Short-Term Opportunities", "Opportunities", "Explore shorter international learning experiences and how to plan for them."],
  ["5 Easy Steps to Apply for Admission For Abroad Education", "Admissions", "A clear starting sequence for organising an overseas application."],
  ["How To Deal With Cultural Shock", "Life abroad", "Prepare emotionally and practically for your first weeks abroad."],
  ["Will Backlogs Affect Your Study Abroad Dream", "Admissions", "The documents and context that can help explain your academic record."],
  ["Tips and Tricks to Crack Exams", "Exams", "Plan focused preparation for the tests that support your application."],
  ["Manage Your Finances Abroad", "Life abroad", "Build a realistic budget before you leave home."],
  ["Is Study Gap Acceptable in Canada", "Guide", "Questions to answer when preparing a Canadian application with a gap."],
  ["GRE and GMAT", "Exams", "Understand where graduate admissions tests may fit in your plan."],
  ["Accommodation", "Life abroad", "What to consider when choosing where to live as an international student."],
  ["6 Things to Do After Your Visa Is Approved", "Visa", "A practical checklist for the time between approval and departure."],
];

export default function BlogPage() {
  return <main className="blog-page"><Navigation /><section className="blog-hero"><div className="shell blog-hero-inner"><h1>Guides for your <span>next step.</span></h1></div></section><section className="blog-list"><div className="shell"><div className="blog-grid">{posts.map(([title, tag, excerpt]) => { const article = articles.find((item) => item.title === title); return <article className="blog-card" key={title}><div className="blog-image-slot" aria-label="Featured image placeholder">Image coming soon</div><div className="blog-card-body"><span className="blog-tag">{tag}</span><h2>{title}</h2><p>{excerpt}</p>{article ? <Link className="blog-read-label" href={`/blog/${article.slug}`}>Read article <ArrowUpRight size={16} /></Link> : <span className="blog-read-label">Article preview <ArrowUpRight size={16} /></span>}</div></article>; })}</div><div className="blog-cta"><div><p className="eyebrow">Need a clearer starting point?</p><h2>Talk through your options with a counsellor.</h2></div><Link className="button button-primary" href="/#consultation">Book free counselling <ArrowUpRight size={16} /></Link></div></div></section><Footer /></main>;
}
