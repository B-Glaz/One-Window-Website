"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const formUrl =
  "https://forms.zohopublic.in/onewindow/form/OneWindowContactform/formperma/4n9nj4fNP6XVi5nF9cYdZsGOZeVLOOfwaSoIJ-tud2k?zf_rszfm=1";

type ZohoContactFormProps = { country?: string; autoOpen?: boolean };

export function ZohoContactForm({ country = "", autoOpen = true }: ZohoContactFormProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const title = country ? `One Window ${country} counselling form` : "One Window Contact form";

  useEffect(() => {
    if (!autoOpen) return;
    const timer = window.setTimeout(() => setPopupOpen(true), 25_000);
    return () => window.clearTimeout(timer);
  }, [autoOpen]);

  return (
    <>
      <div className="zoho-form-shell">
        <iframe aria-label={title} frameBorder="0" loading="lazy" src={formUrl} title={title} />
      </div>
      <button className="zoho-form-open-button" onClick={() => setPopupOpen(true)} type="button">
        Open counselling form <ArrowRight size={16} />
      </button>
      {popupOpen ? (
        <div className="zoho-form-popup" role="presentation">
          <button aria-label="Close counselling form" className="zoho-form-popup-backdrop" onClick={() => setPopupOpen(false)} type="button" />
          <div aria-label={title} aria-modal="true" className="zoho-form-popup-card" role="dialog">
            <button aria-label="Close counselling form" className="zoho-form-popup-close" onClick={() => setPopupOpen(false)} type="button">
              <X size={18} />
            </button>
            <iframe aria-label={title} frameBorder="0" src={formUrl} title={title} />
          </div>
        </div>
      ) : null}
    </>
  );
}
