"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ZohoContactForm } from "../../components/zoho-contact-form";

export function CountryCounselling({ country }: { country: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
