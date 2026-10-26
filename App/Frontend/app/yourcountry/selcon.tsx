"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Globe2 } from "lucide-react";

const featuredCountries = [
  { name: "USA", flag: "usa", slug: "usa" },
  { name: "UK", flag: "uk", slug: "uk" },
  { name: "Ireland", flag: "ireland", slug: "ireland" },
  { name: "Germany", flag: "germany", slug: "germany" },
  { name: "Australia", flag: "australia", slug: "australia" },
  { name: "Canada", flag: "canada", slug: "canada" },
  { name: "New Zealand", flag: "new-zealand", slug: "new-zealand" },
  { name: "Dubai / UAE", flag: "uae", slug: "dubai" },
  { name: "Others", flag: "others", slug: "countries" },
];

export function Selcon() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const destination = selectedCountry;
  const selectedDestinationName = featuredCountries.find(
    (country) => country.slug === destination,
  )?.name;

  function continueToCountry() {
    if (destination) {
      router.push(
        destination === "countries" ? "/countries" : "/countries/" + destination,
      );
    }
  }

  return (
    <section
      className="your-country-panel"
      aria-labelledby="country-picker-title"
    >
      <div className="your-country-heading">
        <span className="your-country-kicker">
          <Globe2 size={15} aria-hidden="true" />
          Your next chapter starts here
        </span>
        <h2 id="country-picker-title">Choose your dream country</h2>
        <p>Select a destination to explore study options and your next steps.</p>
      </div>

      <div className="your-country-grid" aria-label="Featured destinations">
        {featuredCountries.map((country) => {
          const isSelected = selectedCountry === country.slug;

          return (
            <button
              aria-pressed={isSelected}
              className={
                "your-country-option" + (isSelected ? " is-selected" : "")
              }
              key={country.slug}
              onClick={() => {
                setSelectedCountry(country.slug);
              }}
              type="button"
            >
              <span
                className={"your-country-flag flag-" + country.flag}
                aria-hidden="true"
              />
              <span className="your-country-name">{country.name}</span>
              <span className="your-country-check" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="your-country-action">
        <button
          className="your-country-cta"
          disabled={!destination}
          onClick={continueToCountry}
          type="button"
        >
          <span>
            Explore {selectedDestinationName ?? "your destination"}
          </span>
          <ArrowRight size={19} aria-hidden="true" />
        </button>
        <p className="your-country-note">
          Not sure yet?{" "}
          <Link href="/#consultation">Talk to our counselling team</Link>.
        </p>
      </div>
    </section>
  );
}
