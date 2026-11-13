import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Article, WithContext } from "schema-dts";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
import { articleBySlug, articles } from "../articles";

const sopGuideSlug =
  "how-to-write-an-sop-in-2026-why-generic-and-ai-written-statements-fail-2";

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readingTime(article: (typeof articles)[number]) {
  const words = [
    article.title,
    article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      ...(section.subsections ?? []).flatMap((subsection) => [
        subsection.heading,
        ...subsection.paragraphs,
      ]),
    ]),
  ].join(" ").split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 220));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) return {};

  const url = `https://www.onewindow.co.in/blog/${slug}`;
  return {
    title: `${article.title} | One Window`,
    description: article.intro,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.intro,
      url,
      images: article.imageUrl ? [{ url: article.imageUrl }] : undefined,
    },
  };
}
export function generateStaticParams() {
  return articles.map(({ slug }) => ({
    slug,
  }));
}
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const article = articleBySlug[slug];
  if (!article) notFound();
  const isSopGuide = slug === sopGuideSlug;
  const visibleSections = isSopGuide
    ? article.sections.filter((section) => section.heading !== article.title)
    : article.sections;
  const minutes = readingTime(article);
  const articleUrl = `https://www.onewindow.co.in/blog/${slug}`;
  const structuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    image: article.imageUrl || undefined,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: "One Window" },
    publisher: { "@type": "Organization", name: "One Window" },
  };

  return (
    <main className="blog-page">
      <Navigation />
      <article className={`blog-article${isSopGuide ? " blog-article--sop" : ""}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="shell blog-article-shell">
          <Link className="blog-back-link" href="/blog">
            <ArrowLeft size={16} /> All guides
          </Link>
          <header className="blog-article-header">
            {isSopGuide && article.imageUrl ? (
              <figure className="blog-article-cover">
                <Image
                  fill
                  priority
                  unoptimized
                  sizes="100vw"
                  src={article.imageUrl}
                  alt=""
                />
              </figure>
            ) : null}
            <div className="blog-article-heading">
              <p className="blog-tag">
                {article.tag}{isSopGuide ? "" : ` · ${article.published}`}
              </p>
              <h1>{article.title}</h1>
              <p className="blog-article-intro">{article.intro}</p>
              {isSopGuide ? (
                <>
                  <div className="blog-article-meta" aria-label="Article details">
                    <span>
                      <Clock3 size={17} /> {minutes} min read
                    </span>
                    <span>
                      <CheckCircle2 size={17} /> Practical 2026 guide
                    </span>
                  </div>
                  <a className="blog-start-link" href={`#${sectionId(visibleSections[0].heading)}`}>
                    Start reading <ArrowDown size={17} />
                  </a>
                </>
              ) : null}
            </div>
          </header>

          <div className="blog-article-layout">
            {isSopGuide ? (
              <nav className="blog-article-toc" aria-label="On this page">
                <strong>On this page</strong>
                {visibleSections.map((section, index) => (
                  <a key={section.heading} href={`#${sectionId(section.heading)}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                ))}
              </nav>
            ) : null}
            <div className="blog-article-body">
              {visibleSections.map((section, index) => (
                  <section
                    id={sectionId(section.heading)}
                    className={isSopGuide ? "blog-story-section" : undefined}
                    key={section.heading}
                  >
                    {isSopGuide ? (
                      <div className="blog-section-title">
                        <span className="blog-section-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2>{section.heading}</h2>
                      </div>
                    ) : (
                      <h2>{section.heading}</h2>
                    )}
                    <div className="blog-section-copy">
                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p key={`${paragraphIndex}-${paragraph}`}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul>
                          {section.bullets.map((bullet, bulletIndex) => (
                            <li key={`${bulletIndex}-${bullet}`}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                      {section.subsections?.map((subsection, subsectionIndex) => (
                        <div className="blog-subsection" key={`${subsectionIndex}-${subsection.heading}`}>
                          <h3>{subsection.heading}</h3>
                          {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                            <p key={`${paragraphIndex}-${paragraph}`}>{paragraph}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </section>
              ))}
            </div>
          </div>
          {isSopGuide ? (
            <aside className="blog-article-cta">
              <div>
                <span>SOP review</span>
                <h2>Make the statement sound unmistakably like you.</h2>
                <p>Get a clear, honest review before you submit your 2026 application.</p>
              </div>
              <Link className="button button-primary" href="/#consultation">
                Book free counselling <ArrowUpRight size={16} />
              </Link>
            </aside>
          ) : (
            <Link className="button button-primary" href="/#consultation">
              Book free counselling <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </article>
      <Footer />
    </main>
  );
}
