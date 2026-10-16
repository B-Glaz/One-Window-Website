"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const countries = [
  { name: "USA", value: 234, image: "/monument-usa.webp", href: "https://onewindow.co/countries/study-abroad-usa/", accent: "coral" },
  { name: "Australia", value: 40, image: "/monument-australia.webp", href: "https://onewindow.co/countries/study-abroad-australia/", accent: "aqua" },
  { name: "Japan", value: 5, image: "/monument-japan.webp", href: "#consultation", accent: "periwinkle" },
  { name: "Germany", value: 146, image: "/monument-germany.webp", href: "/study-in-germany", accent: "orange" },
];

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function CountryOrbit() {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = section.current;
      if (!node) return;
      const range = node.offsetHeight - window.innerHeight;
      setProgress(clamp(-node.getBoundingClientRect().top / Math.max(range, 1)) * (countries.length - 1));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <section ref={section} id="destinations" className="orbit-scroll">
    <div className="orbit-sticky">
      <div className="particle-field" aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <i key={index} style={{ "--i": index, "--px": `${(index * 43) % 97}%`, "--py": `${12 + ((index * 31) % 74)}%` } as React.CSSProperties} />)}</div>
      <div className="shell orbit-heading"><p className="eyebrow">Choose your next chapter</p><h1>Study abroad, with your <span>whole future</span> in view.</h1><p>Move through destinations. Pause where ambition feels most at home.</p></div>
      <div className="orbit-stage" aria-label="Study destinations">
        {countries.map((country, index) => {
          const phase = progress - index;
          const distance = Math.abs(phase);
          const count = Math.round(country.value * clamp(phase + 1));
          const visible = distance <= 1.08;
          const opacity = visible ? clamp(1.22 - distance) : 0;
          const style = {
            "--phase": phase,
            "--y": `${Math.pow(distance, 1.6) * 92}px`,
            "--r": `${phase * 16}deg`,
            "--s": `${1 - Math.min(distance * .12, .24)}`,
            "--opacity": opacity,
            "--z": Math.round(10 - distance * 2),
            pointerEvents: visible ? "auto" : "none",
          } as React.CSSProperties;
          return <a className={`orbit-card ${country.accent}`} href={country.href} key={country.name} style={style} aria-label={`Explore study options in ${country.name}`}>
            <span className="country-index">0{index + 1}</span>
            <span className="country-count"><strong>{count}</strong><small>student journeys</small></span>
            <img src={country.image} alt={`Stylised landmark representing ${country.name}`} />
            <span className="country-name">{country.name}</span>
            <span className="card-arrow"><ArrowUpRight size={18} /></span>
          </a>;
        })}
      </div>
      <div className="scroll-cue"><span /> Scroll to explore</div>
    </div>
  </section>;
}
