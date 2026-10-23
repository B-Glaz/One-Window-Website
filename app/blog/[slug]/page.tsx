import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { articleBySlug, articles } from "../articles";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) notFound();
  return <main className="blog-page"><Navigation /><article className="blog-article"><div className="shell blog-article-shell"><Link className="blog-back-link" href="/blog"><ArrowLeft size={16} /> All guides</Link><p className="blog-tag">{article.tag} · {article.published}</p><h1>{article.title}</h1><p className="blog-article-intro">{article.intro}</p><div className="blog-article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}</div><Link className="button button-primary" href="/#consultation">Book free counselling <ArrowUpRight size={16} /></Link></div></article><Footer /></main>;
}
