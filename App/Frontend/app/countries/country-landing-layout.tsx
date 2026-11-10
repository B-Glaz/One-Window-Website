import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CountryProfile } from "../countries-content";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { CountryCounselling } from "./country-counselling";

function renderCountryBlock(block: string, sectionIndex: number) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  const heading = lines.length > 1 && (/:$/.test(lines[0]) || (lines[0].length < 90 && !/[.!?]$/.test(lines[0]))) ? lines.shift()?.replace(/:$/, "") : null;
  const listItems: string[] = [];
  const paragraphs: string[] = [];
  const facts: Array<[string, string]> = [];
  for (const line of lines) {
    if (/^[-•]\s/.test(line)) listItems.push(line.replace(/^[-•]\s*/, ""));
    else if (/\t/.test(line)) { const [label, ...value] = line.split("\t"); facts.push([label.trim(), value.join(" ").trim()]); }
    else paragraphs.push(line);
  }
  const sectionId = `country-section-${sectionIndex + 1}`;
  const isUniversityList = heading?.toLowerCase().includes("list of top") || heading?.toLowerCase().includes("top universities");
  return <section className="country-detail-section" aria-labelledby={heading ? sectionId : undefined}>
    {heading ? <h2 id={sectionId}>{heading}</h2> : null}
    {isUniversityList ? <div className="country-university-grid">{paragraphs.map((university, index) => <article key={university}><span>{String(index + 1).padStart(2, "0")}</span><strong>{university}</strong></article>)}</div> : null}
    {!isUniversityList && facts.length > 0 ? <dl className="country-facts">{facts.map(([label, value]) => <div key={`${label}-${value}`}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : null}
    {!isUniversityList && paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {listItems.length > 0 ? <ul>{listItems.map((item) => <li key={item}>{item}</li>)}</ul> : null}
  </section>;
}

export function CountryLandingLayout({ content }: { content: CountryProfile }) {
  const slug = content.slug ?? content.name.toLowerCase().replace(/\s+/g, "-");
  const blocks = content.rawContent.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const intro = blocks.slice(0, 2).join(" ");
  const sections = blocks.slice(2);
  const studentCountry = content.name.toUpperCase() === "NETHERLANDS" ? "Netherland" : content.name.toUpperCase() === "UNITED KINGDOM" ? "UK" : content.name.replace(/\b\w/g, (letter) => letter.toUpperCase());
  const artworkSlug = slug === "netherland" || slug === "europe" ? "netherlands" : slug;
  const countryArtwork = `/monuments/monument-${artworkSlug}.svg`;

  return <main className="country-detail-page">
    <Navigation />
    <section className="country-detail-hero"><div className="shell country-detail-hero-inner">
      <p className="eyebrow">Study abroad in</p>
      <h1>{content.name.replace(/^UNITED KINGDOM$/i, "United Kingdom")}</h1>
      <p>{intro}</p>
      <Image className="country-detail-hero-art" src={countryArtwork} alt={`${content.name} landmark illustration`} width={360} height={260} />
      <div className="country-detail-actions">
        <Link className="button button-primary" href={`/student-stories?country=${encodeURIComponent(studentCountry)}`}>View students <ArrowRight size={17} /></Link>
        <Link className="button button-secondary" href="#country-counselling">Get free counselling <ArrowRight size={17} /></Link>
      </div>
    </div></section>
    <section className="country-detail-stats" aria-label={`${content.name} study planning highlights`}><div className="shell country-detail-stats-grid">
      <div><strong>01</strong><span>Choose the right course</span></div><div><strong>02</strong><span>Compare universities</span></div><div><strong>03</strong><span>Plan costs and visas</span></div><div><strong>04</strong><span>Prepare for your next step</span></div>
    </div></section>
    <section className="country-detail-content"><div className="shell country-detail-layout"><article className="country-detail-copy">
      <div className="country-detail-flow-cta"><span>Plan your move</span><strong>{content.name}</strong><Link className="country-aside-link" href="#country-counselling">Get free counselling <ArrowRight size={15} /></Link></div>
      {sections.map((section, index) => <div key={`${section.slice(0, 24)}-${index}`}>{renderCountryBlock(section, index)}{(index + 1) % 3 === 0 ? <Link className="country-inline-cta" href="#country-counselling">Talk through your {content.name} options <ArrowRight size={16} /></Link> : null}</div>)}
    </article></div></section>
    <CountryCounselling country={content.name} />
    <Footer />
  </main>;
}
