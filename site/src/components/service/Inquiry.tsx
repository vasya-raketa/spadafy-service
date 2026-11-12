"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import styles from "./ServicePage.module.css";

// The one inquiry form, shared by every service page. The service field starts on
// the page's own service, so the inquiry keeps the visitor's interest. The submit
// button lives in the next block (v3 CTA row), linked by the form id.
// Prototype: nothing is sent yet.
export const inquiryFormId = "inquiry-form";

export function InquiryForm({ slug }: { slug: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form id={inquiryFormId} className={styles.form} onSubmit={onSubmit} aria-label="Inquiry">
      <label className={styles.field}>
        <span className="t-small">Name</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label className={styles.field}>
        <span className="t-small">Work email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className={styles.field}>
        <span className="t-small">Company</span>
        <input name="company" autoComplete="organization" />
      </label>
      <label className={styles.field}>
        <span className="t-small">Service</span>
        <select name="service" defaultValue={slug}>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </label>
      <label className={`${styles.field} ${styles.fieldWide}`}>
        <span className="t-small">Message</span>
        <textarea name="message" rows={3} />
      </label>
      <p className={`t-small ${styles.formStatus}`} role="status">
        {sent ? "[PLACEHOLDER: form destination] Prototype only: nothing was sent." : ""}
      </p>
    </form>
  );
}
