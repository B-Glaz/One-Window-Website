"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ZohoContactForm } from "../../components/zoho-contact-form";

export function CountryCounselling({ country }: { country: string }) {
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let unlocked = true;

    try {
      unlocked = !sessionStorage.getItem("ow-counselling-unlocked");
      if (unlocked) sessionStorage.setItem("ow-counselling-unlocked", "1");
    } catch {
      // The notice remains non-essential when storage is unavailable.
    }

    if (!unlocked) return;

    const showTimer = window.setTimeout(() => setNoticeVisible(true), 0);
    const hideTimer = window.setTimeout(() => setNoticeVisible(false), 5200);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {noticeVisible ? (
        <div className="counselling-unlocked" role="status">
          <span className="counselling-confetti" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Unlocked</strong>
            <small>Free counselling session</small>
          </span>
          <button
            aria-label="Dismiss counselling notice"
            onClick={() => setNoticeVisible(false)}
            type="button"
          >
            <X size={15} />
          </button>
        </div>
      ) : null}

      <section className="country-counselling" id="country-counselling">
        <div className="country-counselling-copy">
          <p className="eyebrow">Your next step</p>
          <h2>Book free counselling session</h2>
          <p>
            Tell us where you want to go and our team will help you make the
            next move with clarity.
          </p>
          <button
            className="country-counselling-modal-button"
            onClick={() => setModalOpen(true)}
            type="button"
          >
            Open in a larger window <ArrowRight size={16} />
          </button>
        </div>
        <div className="country-counselling-form">
          <ZohoContactForm country={country} />
        </div>
      </section>

      {modalOpen ? (
        <div className="country-form-modal" role="presentation">
          <button
            aria-label="Close counselling form"
            className="country-form-modal-backdrop"
            onClick={() => setModalOpen(false)}
            type="button"
          />
          <div
            aria-modal="true"
            className="country-form-modal-card"
            role="dialog"
          >
            <button
              aria-label="Close counselling form"
              className="country-form-modal-close"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              <X size={19} />
            </button>
            <ZohoContactForm country={country} />
          </div>
        </div>
      ) : null}
    </>
  );
}
