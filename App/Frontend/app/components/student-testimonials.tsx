"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import { getYoutubeEmbed, getYoutubeThumbnail } from "../content/media";
import { testimonials } from "../content/testimonials";
import { MediaImage } from "./media-image";

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
            <button
              aria-label={`Play ${testimonial.name}'s student story`}
              className="testimonial-thumbnail"
              onClick={() => setSelected(testimonial)}
              type="button"
            >
              <MediaImage
                src={getYoutubeThumbnail(testimonial.video)}
                alt={`${testimonial.name} student story thumbnail`}
                loading="lazy"
              />
              <span className="testimonial-play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
            </button>
            <div>
              <p className="testimonial-name">{testimonial.name}</p>
              <span className="testimonial-outcome">{testimonial.outcome}</span>
            </div>
            <p className="testimonial-summary">{testimonial.summary}</p>
            <button className="testimonial-watch" type="button" onClick={() => setSelected(testimonial)}>
              <Play size={17} fill="currentColor" />
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
            <h3 id="testimonial-modal-title">{selected.name}&apos;s student story</h3>
            <div className="testimonial-video-frame">
              <iframe
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title={`${selected.name} student story`}
                src={getYoutubeEmbed(selected.video)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
