"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
export default function CountryStoriesPage() {
  const params = useParams<{ country: string }>();
  const router = useRouter();
  useEffect(() => { const country = decodeURIComponent(params.country).replace(/-/g, " "); router.replace(`/student-stories?country=${encodeURIComponent(country === "uk" ? "UK" : country.replace(/\b\w/g, (letter) => letter.toUpperCase()))}`); }, [params.country, router]);
  return <main className="stories-page" aria-busy="true" />;
}
