"use client";

import { useEffect, useRef } from "react";

const careerFormBaseUrl =
  "https://forms.zohopublic.in/onewindow/form/WebsiteCareerleads/formperma/1E9WksS-4dVNWhSPObEBktwkqv9bj93dcm-9xDouON4?zf_rszfm=1";

export function CareerForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const url = new URL(careerFormBaseUrl);
    url.searchParams.set("referrername", window.location.href.slice(0, 1800));
    if (iframeRef.current && iframeRef.current.src !== url.toString()) {
      iframeRef.current.src = url.toString();
    }

    function resizeForm(event: MessageEvent) {
      if (typeof event.data !== "string") return;
      const [perma, height] = event.data.split("|");
      if (!careerFormBaseUrl.includes(perma)) return;
      const nextHeight = Number.parseInt(height, 10);
      if (iframeRef.current && Number.isFinite(nextHeight)) {
        iframeRef.current.style.height = `${nextHeight + 15}px`;
      }
    }

    window.addEventListener("message", resizeForm);
    return () => window.removeEventListener("message", resizeForm);
  }, []);

  return (
    <div className="zoho-form-shell careers-form-shell">
      <iframe
        ref={iframeRef}
        title="One Window career leads form"
        src={careerFormBaseUrl}
        aria-label="Website - Career leads"
      />
    </div>
  );
}
