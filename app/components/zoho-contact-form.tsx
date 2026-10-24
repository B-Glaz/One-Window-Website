"use client";

const formUrl = "https://forms.zohopublic.in/onewindow/form/OneWindowContactform/formperma/4n9nj4fNP6XVi5nF9cYdZsGOZeVLOOfwaSoIJ-tud2k";

export function ZohoContactForm() {
  const pageUrl = typeof window !== "undefined" ? (window.top === window.self ? window.location.href : document.referrer) : "";
  const queryIndex = pageUrl.indexOf("?");
  const trimmed = pageUrl.length > 1800 ? pageUrl.slice(0, queryIndex > -1 ? queryIndex : 1800).slice(0, 1800) : pageUrl;
  const src = trimmed ? `${formUrl}?referrername=${encodeURIComponent(trimmed)}` : formUrl;
  return <div className="zoho-form-shell"><iframe id="ziframe_52380" title="One Window Contact form" aria-label="One Window Contact form" frameBorder="0" loading="lazy" src={src} /></div>;
}
