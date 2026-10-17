"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ChevronDown, Heart, MapPin, Plane } from "lucide-react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

const countries = ["All countries", "USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Netherlands"];
const stories = [
  ["Aarav Sharma", "USA", "University details pending", "Computer Science", "AS", "blue"], ["Rohan Mehta", "UK", "University details pending", "Business Analytics", "RM", "aqua"], ["Isha Patel", "Canada", "University details pending", "Data Science", "IP", "coral"], ["Karan Bansal", "Australia", "University details pending", "Mechanical Engineering", "KB", "lavender"], ["Neha Kapoor", "Germany", "University details pending", "Data Science", "NK", "peach"], ["Arjun Rao", "Ireland", "University details pending", "Computer Science", "AR", "teal"], ["Diya Singh", "France", "University details pending", "International Business", "DS", "blue"], ["Vikram Sethi", "Netherlands", "University details pending", "Aerospace Engineering", "VS", "aqua"],
];

export default function StudentStoriesPage() {
  const [country, setCountry] = useState("All countries");
  const filtered = useMemo(() => country === "All countries" ? stories : stories.filter((story) => story[1] === country), [country]);
  return <main className="stories-page"><Navigation />
    <section className="stories-hero"><div className="shell stories-hero-grid"><div className="stories-hero-copy"><p className="eyebrow">Our students</p><h1>Real students.<br /><span>Global dreams.</span></h1><p>Explore the journeys of students who choose One Window and are building their future abroad.</p><div className="stories-count"><span /> Showing 1–{stories.length} student stories</div></div><div className="stories-globe" aria-hidden="true"><div className="globe-ring ring-one" /><div className="globe-ring ring-two" /><div className="stories-orbit"><Plane size={22} /></div><div className="stories-globe-core"><img src="/monument-usa.webp" alt="" /></div><span className="stories-callout top">Different countries.<br />Same dream.</span><span className="stories-callout bottom">Real people.<br />Real journeys.</span></div></div></section>
    <section className="stories-list"><div className="shell"><div className="stories-toolbar"><p>Stories from every direction</p><label><MapPin size={15} /><span className="sr-only">Select country</span><select value={country} onChange={(event) => setCountry(event.target.value)}>{countries.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div><div className="stories-grid">{filtered.map(([name, place, university, programme, initials, tone]) => <article className="story-card" key={name}><div className={`story-avatar ${tone}`}><span>{initials}</span></div><button className="story-heart" aria-label={`Save ${name}'s story`}><Heart size={17} /></button><div className="story-meta"><h2>{name}</h2><p><span className="story-flag">✦</span>{place}</p><p className="story-university">{university}</p></div><p className="story-quote">Student story content will be added after final approval.</p><span className="story-tag">{programme}</span><a className="story-arrow" href="#stories-next" aria-label={`Open ${name}'s story`}><ArrowRight size={16} /></a></article>)}</div><div className="stories-pagination" aria-label="Story pages"><button aria-label="Previous page">‹</button><button className="active">1</button><button>2</button><button>3</button><button>4</button><span>…</span><button>›</button></div><div className="stories-next" id="stories-next"><ArrowDown size={16} /> More stories below</div></div></section><Footer />
  </main>;
}
