import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { countryProfiles } from "../content";
import { supplementalProfiles } from "../supplemental";
import { CountryCounselling } from "./country-counselling";
export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{
    country: string;
  }>;
}) {
  const { country } = await params;
  const slug = decodeURIComponent(country).toLowerCase();
  const profile =
    countryProfiles[slug] ??
    countryProfiles[slug === "netherland" ? "netherlands" : slug] ??
    supplementalProfiles[slug];
  if (!profile) notFound();
  const blocks = profile.rawContent
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const intro = blocks.slice(0, 2).join(" ");
  const sections = blocks.slice(2);
  const studentCountry =
    profile.name.toUpperCase() === "NETHERLANDS"
      ? "Netherland"
      : profile.name.toUpperCase() === "UNITED KINGDOM"
        ? "UK"
        : profile.name.replace(/\b\w/g, (letter) => letter.toUpperCase());
  return (
    <main className="country-detail-page">
      <Navigation />
      <section className="country-detail-hero">
        <div className="shell country-detail-hero-inner">
          <p className="eyebrow">Study abroad in</p>
          <h1>{profile.name.replace(/^UNITED KINGDOM$/i, "United Kingdom")}</h1>
          <p>{intro}</p>
          <div className="country-detail-actions">
            <Link
              className="button button-primary"
              href={`/student-stories?country=${encodeURIComponent(studentCountry)}`}
            >
              View students <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <CountryCounselling country={profile.name} />
      <section className="country-detail-content">
        <div className="shell country-detail-layout">
          <aside className="country-detail-aside">
            <span>Plan your move</span>
            <strong>{profile.name}</strong>
            <Link className="country-aside-link" href="/#consultation">
              Get free counselling <ArrowRight size={15} />
            </Link>
          </aside>
          <article className="country-detail-copy">
            {sections.map((section, index) => {
              const lines = section
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);
              const heading =
                lines.length > 1 &&
                (/:$/.test(lines[0]) || lines[0].length < 90)
                  ? lines.shift()
                  : null;
              return (
                <section key={`${section.slice(0, 24)}-${index}`}>
                  {heading ? <h2>{heading.replace(/:$/, "")}</h2> : null}
                  {lines.map((line) =>
                    /^[-•]\s/.test(line) ? (
                      <li key={line}>{line.replace(/^[-•]\s*/, "")}</li>
                    ) : (
                      <p key={line}>{line}</p>
                    ),
                  )}
                </section>
              );
            })}
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
