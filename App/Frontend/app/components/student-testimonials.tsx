"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, PlayCircle, X } from "lucide-react";

const testimonials = [
  {
    name: "Ashish Saraf",
    outcome: "Boston University · Entrepreneurship & Innovation Management",
    summary: "With only four months before admission, Ashish received focused profile evaluation, university selection, application and visa guidance that helped him move forward with clarity.",
    trustLine: "A late start, turned into a Boston University admit",
    video: "https://youtu.be/UA9wYg2NrVQ?si=f-vmS0Sp6rfeaXya",
  },
  {
    name: "Ishaan Purey",
    outcome: "Northeastern University · MS Mechanical Engineering",
    summary: "After earlier rejections affected his confidence, Ishaan rebuilt his profile with honest, responsive and personalised guidance, including focused preparation for his visa interview.",
    trustLine: "From rejection to renewed confidence and Northeastern",
    video: "https://youtu.be/_yoR9kkPngA?si=D7dIjhEV_BcMSP8G",
  },
  {
    name: "Riya Sancheti",
    outcome: "Columbia University · Master’s degree",
    summary: "Riya balanced university applications with academics, internships and extracurriculars. One Window helped manage her shortlist, profile and deadlines, leading to five offers from eight applications.",
    trustLine: "Five offers, including two Ivy League admits",
    video: "https://youtu.be/4C9iXN3wYpg?si=D5VcMcIqqNgn7zy6",
  },
  {
    name: "Shivam Sibal",
    outcome: "Arizona State University · MS Computer Science",
    summary: "Shivam received patient, responsive support across university selection, applications, visa booking and mock interviews before choosing ASU for its machine learning and AI curriculum.",
    trustLine: "A smooth path from shortlisting to ASU",
    video: "https://youtu.be/IXO5DQy1tbU?si=j7ZNR9tuGOZcGFAi",
  },
  {
    name: "Prakshi",
    outcome: "UMass Boston",
    summary: "From choosing the right programme and universities to completing the visa process, Prakshi had a team available to explain each step and respond whenever the process felt uncertain.",
    trustLine: "Supported at every step of the journey to Boston",
    video: "https://youtu.be/NqQcJIdrm4M?si=NiPduuQ4dY5ZMiaQ",
  },
  {
    name: "Vyshnavi",
    outcome: "New York University · Transfer admission",
    summary: "Vyshnavi navigated credit-transfer concerns and an uncertain application journey with consistent guidance, ultimately transferring from UMass Boston to NYU for stronger finance and economics exposure.",
    trustLine: "A complex transfer journey, completed with confidence",
    video: "https://youtu.be/7mnbQ_u6BbI?si=OOjIuElAKTt234Ox",
  },
] as const;

export function StudentTestimonials() {
  const [selected, setSelected] = useState<(typeof testimonials)[number] | null>(null);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="glass reveal testimonial-card" key={testimonial.name}>
            <div>
              <p className="testimonial-name">{testimonial.name}</p>
              <span className="testimonial-outcome">{testimonial.outcome}</span>
            </div>
            <p className="testimonial-summary">{testimonial.summary}</p>
            <button type="button" onClick={() => setSelected(testimonial)}>
              <PlayCircle size={18} />
              <span>{testimonial.trustLine}</span>
              <ArrowUpRight size={17} />
            </button>
          </article>
        ))}
      </div>

      {selected ? (
        <div className="testimonial-modal" role="presentation" onMouseDown={() => setSelected(null)}>
          <div
            aria-labelledby="testimonial-modal-title"
            aria-modal="true"
            className="testimonial-modal-card"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button aria-label="Close video confirmation" className="testimonial-modal-close" onClick={() => setSelected(null)} type="button">
              <X size={19} />
            </button>
            <PlayCircle size={30} />
            <p className="eyebrow">Full student story</p>
            <h3 id="testimonial-modal-title">Watch {selected.name}&apos;s full video on YouTube?</h3>
            <p>You&apos;ll leave One Window and open the student&apos;s complete testimonial on YouTube.</p>
            <div className="testimonial-modal-actions">
              <button onClick={() => setSelected(null)} type="button">Stay here</button>
              <a href={selected.video} onClick={() => setSelected(null)} rel="noreferrer" target="_blank">
                Watch on YouTube <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
