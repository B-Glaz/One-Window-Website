"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Home, MapPin, Radio } from "lucide-react";

type Student = { name: string; country: string; university: string; program: string };
const years = ["2025–26", "2024–25"];
const pageSize = 24;

export default function StudentStoriesPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [country, setCountry] = useState("All countries");
  const [year, setYear] = useState(years[0]);
  const [page, setPage] = useState(1);
  const [liveCount, setLiveCount] = useState(750);
  const [countPulse, setCountPulse] = useState(0);

  useEffect(() => { const requested = new URLSearchParams(window.location.search).get("country")?.trim().toLowerCase(); fetch("/Data/students.json").then((response) => response.json() as Promise<Student[]>).then((data) => { setStudents(data); if (requested) { const match = data.find((student) => student.country.toLowerCase() === requested); if (match) setCountry(match.country); } }).catch(() => setStudents([])); }, []);
  useEffect(() => { if (!students.length) return; setLiveCount(students.length); }, [students.length]);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const now = new Date();
      const start = new Date(now);
      start.setHours(10, 0, 0, 0);
      const end = new Date(now);
      end.setHours(19, 0, 0, 0);
      if (now >= end) start.setDate(start.getDate() + 1);
      const windowStart = now < start ? start : now;
      const windowEnd = new Date(start);
      windowEnd.setHours(19, 0, 0, 0);
      const available = Math.max(60_000, windowEnd.getTime() - windowStart.getTime());
      const delay = now >= end ? (start.getTime() - now.getTime()) + Math.floor(Math.random() * 9 * 60 * 60 * 1000) : Math.floor(Math.random() * available);
      timer = setTimeout(() => { setLiveCount((value) => value + 1); setCountPulse((value) => value + 1); schedule(); }, delay);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  const availableCountries = useMemo(() => ["All countries", ...Array.from(new Set(students.map((student) => student.country))).sort()], [students]);
  const filtered = useMemo(() => country === "All countries" ? students : students.filter((student) => student.country === country), [country, students]);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const setFilter = (value: string) => { setCountry(value); setPage(1); };

  return <main className="stories-page"><header className="stories-header"><Link className="stories-logo" href="/" aria-label="One Window home"><img src="/one-window-logo.png" alt="One Window" /></Link><Link className="stories-home" href="/"><Home size={15} /> Home</Link></header>
    <section className="stories-hero"><div className="shell stories-hero-grid"><div className="stories-hero-copy"><p className="eyebrow stories-kicker">Our students</p><h1>Real students.<br /><span>Global dreams.</span></h1><p>Explore the journeys of students who choose One Window and are building their future abroad.</p><label className="stories-year-select"><span>Stories from</span><select value={year} onChange={(event) => { setYear(event.target.value); setPage(1); }}>{years.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div><div className="stories-counter" aria-live="polite" aria-label={`${liveCount} students counselled`}><span className="counter-live"><Radio size={13} /> Live today</span><strong key={countPulse} className="counter-number">{liveCount.toLocaleString()}</strong><span>students counselled</span><small>One new student is added throughout the day</small></div></div></section>
    <section className="stories-list"><div className="shell"><div className="stories-toolbar"><p><strong>{filtered.length.toLocaleString()} students</strong> from {country === "All countries" ? "every direction" : country}</p><label><MapPin size={15} /><span className="sr-only">Select country</span><select value={country} onChange={(event) => setFilter(event.target.value)}>{availableCountries.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div><div className="stories-grid">{visible.map((student, index) => { const avatar = (index + (page - 1) * pageSize) * 7 % 20; const style = { "--avatar-x": `${avatar % 5 * 25}%`, "--avatar-y": `${Math.floor(avatar / 5) * 33.333}%` } as CSSProperties; return <article className="story-card" key={`${student.name}-${student.country}-${student.university}-${index}`}><div className="story-avatar" style={style} aria-hidden="true" /><div className="story-meta"><h2>{student.name}</h2><p><span className="story-flag">✦</span>{student.country}</p><p className="story-university">{student.program}</p></div><p className="story-program">{student.university}</p><button className="story-arrow" type="button" aria-label={`View story for ${student.name}`}><ArrowRight size={20} /></button></article>; })}</div><div className="stories-pagination" aria-label="Story pages"><button aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>Previous</button>{Array.from({ length: Math.min(pageCount, 5) }, (_, index) => <button className={page === index + 1 ? "active" : ""} key={index + 1} onClick={() => setPage(index + 1)}>{index + 1}</button>)}{pageCount > 5 && <><span>…</span><button onClick={() => setPage(pageCount)}>{pageCount}</button></>}<button aria-label="Next page" disabled={page === pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))}>Next</button></div></div></section>
  </main>;
}


