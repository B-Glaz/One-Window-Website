"use client";

import { useEffect, useRef } from "react";

const formUrl =
  "https://forms.zohopublic.in/onewindow/form/OneWindowContactform/formperma/4n9nj4fNP6XVi5nF9cYdZsGOZeVLOOfwaSoIJ-tud2k";

type ZohoContactFormProps = { country?: string; loading?: "eager" | "lazy" };

export function ZohoContactForm({ country = "", loading = "lazy" }: ZohoContactFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const title = country ? `One Window ${country} counselling form` : "One Window Contact form";

  useEffect(() => {
    let referrer = window.location.href;

    if (referrer.length > 1800) {
      const queryIndex = referrer.indexOf("?");
      if (queryIndex > -1) referrer = referrer.slice(0, queryIndex);
      referrer = referrer.slice(0, 1800);
    }

    const iframeUrl = new URL(formUrl);
    iframeUrl.searchParams.set("referrername", referrer);

    if (iframeRef.current && iframeRef.current.src !== iframeUrl.toString()) {
      iframeRef.current.src = iframeUrl.toString();
    }
  }, []);

  return (
    <div className="zoho-form-shell">
      <iframe
        ref={iframeRef}
        aria-label={title}
        frameBorder="0"
        loading={loading}
        src={formUrl}
        title={title}
      />
    </div>
  );
}
