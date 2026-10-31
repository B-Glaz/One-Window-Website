"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
const countries = [
  {
    name: "USA",
    image: "/monument-usa.webp",
    href: "/countries/usa",
    accent: "coral",
  },
  {
    name: "UK",
    image: "/monuments/monument-uk.svg",
    href: "/countries/uk",
    accent: "aqua",
  },
  {
    name: "Australia",
    image: "/monuments/monument-australia.svg",
    href: "/countries/australia",
    accent: "periwinkle",
  },
  {
    name: "Ireland",
    image: "/monuments/monument-ireland.svg",
    href: "/countries/ireland",
    accent: "orange",
  },
  {
    name: "More",
    image: "/monument-germany.webp",
    href: "/countries",
    accent: "aqua",
  },
];
const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));
export function CountryOrbit() {
  const section = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = section.current;
      if (!node) return;
      const range = node.offsetHeight - window.innerHeight;
      const progress =
        clamp(-node.getBoundingClientRect().top / Math.max(range, 1)) *
        (countries.length - 1);
      cards.current.forEach((card, index) => {
        if (!card) return;
        const phase = progress - index;
        const distance = Math.abs(phase);
        const visible = distance <= 1.08;
        card.style.setProperty("--phase", `${phase}`);
        card.style.setProperty("--y", `${Math.pow(distance, 1.6) * 92}px`);
        card.style.setProperty("--r", `${phase * 16}deg`);
        card.style.setProperty("--s", `${1 - Math.min(distance * 0.12, 0.24)}`);
        card.style.setProperty("--opacity", `${visible ? clamp(1.22 - distance) : 0}`);
        card.style.setProperty("--z", `${Math.round(10 - distance * 2)}`);
        card.style.pointerEvents = visible ? "auto" : "none";
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section ref={section} id="destinations" className="orbit-scroll">
      <div className="orbit-sticky">
        <div className="particle-field" aria-hidden="true">
          {Array.from(
            {
              length: 22,
            },
            (_, index) => (
              <i
                key={index}
                style={
                  {
                    "--i": index,
                    "--px": `${(index * 43) % 97}%`,
                    "--py": `${12 + ((index * 31) % 74)}%`,
                  } as CSSProperties
                }
              />
            ),
          )}
        </div>
        <div className="shell orbit-heading">
          <p className="eyebrow">Choose your next chapter</p>
          <h1>
            Study abroad, with your <span>whole future</span> in view.
          </h1>
          <p>
            Explore best-fit destinations, programmes and pathways with expert guidance at every decision.
          </p>
        </div>
        <div className="orbit-stage" aria-label="Study destinations">
          {countries.map((country, index) => {
            const phase = -index;
            const distance = Math.abs(phase);
            const visible = distance <= 1.08;
            const opacity = visible ? clamp(1.22 - distance) : 0;
            const style = {
              "--phase": phase,
              "--y": `${Math.pow(distance, 1.6) * 92}px`,
              "--r": `${phase * 16}deg`,
              "--s": `${1 - Math.min(distance * 0.12, 0.24)}`,
              "--opacity": opacity,
              "--z": Math.round(10 - distance * 2),
              pointerEvents: visible ? "auto" : "none",
            } as CSSProperties;
            return (
              <a
                className={`orbit-card ${country.accent} ${country.name === "More" ? "orbit-more" : ""}`}
                href={country.href}
                key={country.name}
                ref={(card) => { cards.current[index] = card; }}
                style={style}
                aria-label={
                  country.name === "More"
                    ? "See all countries"
                    : `Explore study options in ${country.name}`
                }
              >
                <span className="country-index">0{index + 1}</span>
                <span className="country-count">
                  <small>{country.name === "More" ? "Browse every" : "Student journeys"}</small>
                </span>
                <img
                  src={country.image}
                  alt={`Stylised landmark representing ${country.name}`}
                />
                <span className="country-name">{country.name}</span>
                <span className="card-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            );
          })}
        </div>
        <div className="scroll-cue">
          <span /> Scroll to explore
        </div>
      </div>
    </section>
  );
}
