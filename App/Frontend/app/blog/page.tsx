import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { articles } from "./articles";

const posts = articles;

export default function BlogPage() {
  return <main className="blog-page"><Navigation /><section className="blog-hero"><div className="shell blog-hero-inner"><h1>Guides for your <span>next step.</span></h1><p>Explore practical guidance from the One Window archive, organised to help you find the next useful answer.</p></div></section><section className="blog-list"><div className="shell"><div className="blog-grid">{posts.map((article) => <article className="blog-card" key={article.slug}><div className="blog-image-slot" aria-label="Featured image placeholder">Image coming soon</div><div className="blog-card-body"><span className="blog-tag">{article.tag}</span><h2>{article.title}</h2><p>{article.intro.slice(0, 190)}{article.intro.length > 190 ? "…" : ""}</p><Link className="blog-read-label" href={`/blog/${article.slug}`}>Read article <ArrowUpRight size={16} /></Link></div></article>)}</div><div className="blog-cta"><div><p className="eyebrow">Need a clearer starting point?</p><h2>Talk through your options with a counsellor.</h2></div><Link className="button button-primary" href="/#consultation">Book free counselling <ArrowUpRight size={16} /></Link></div></div></section><Footer /></main>;
}
