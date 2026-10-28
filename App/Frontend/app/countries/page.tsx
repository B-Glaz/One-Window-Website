"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "../components/navigation";
const countryOrder = [
  "USA",
  "UK",
  "Australia",
  "Ireland",
  "Singapore",
  "France",
  "Italy",
  "Germany",
  "Canada",
  "Dubai",
  "Netherland",
  "New Zealand",
  "Spain",
  "Switzerland",
  "Hong Kong",
  "Sweden",
];
const monumentPath = (country: string) =>
  country === "Japan"
    ? "/monument-japan.webp"
    : `/monuments/monument-${country === "Netherland" ? "netherlands" : country.toLowerCase().replace(/\s+/g, "-")}.svg`;
export default function CountriesPage() {
  const [countries, setCountries] = useState<string[]>([]);
  useEffect(() => {
    fetch("/Data/students.json")
      .then(
        (response) =>
          response.json() as Promise<
            {
              country: string;
            }[]
          >,
      )
      .then((data) =>
        setCountries(
          Array.from(new Set(data.map((item) => item.country))).sort(
            (a, b) => countryOrder.indexOf(a) - countryOrder.indexOf(b),
          ),
        ),
      )
      .catch(() => setCountries([]));
  }, []);
  const items = useMemo(
    () =>
      countries.map((country) => ({
        country,
        image: monumentPath(country),
      })),
    [countries],
  );
  return (
    <main className="story-countries-page">
      <Navigation />
      <section className="country-tabs">
        <div className="country-tabs-grid">
          {items.map(({ country, image }, index) => (
            <Link
              className={`country-tab country-tab-${index % 4}`}
              href={`/countries/${encodeURIComponent(country.toLowerCase().replace(/\s+/g, "-"))}`}
              key={country}
            >
              <span
                className="country-tab-art"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              <span className="country-tab-name">{country}</span>
              <ArrowRight size={20} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
