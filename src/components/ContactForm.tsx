"use client";

import { useState } from "react";

const needs = [
  "A better website",
  "More visibility",
  "Bookings or payments",
  "An internal system",
  "Not sure yet",
];

const budgets = ["Still exploring", "Under R25,000", "R25,000 - R75,000", "R75,000 - R150,000", "R150,000+"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState(needs[0]);
  const [business, setBusiness] = useState("");
  const [budget, setBudget] = useState(budgets[0]);
  const [detail, setDetail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Add your name.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Add a valid email address.";
    if (!business.trim()) next.business = "Add your business or website name.";
    if (detail.trim().length < 10) next.detail = "Tell us a little more about the friction.";
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nNeed: ${need}\nBudget: ${budget}\n\nWhat should move better?\n${detail}`);

  return (
    <div className="contact-form-shell">
      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-note">
        <div className="contact-form-row">
          <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name ? <span className="field-error" id="contact-name-error">{errors.name}</span> : null}</label>
          <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email ? <span className="field-error" id="contact-email-error">{errors.email}</span> : null}</label>
        </div>
        <div className="contact-form-row">
          <label htmlFor="contact-business">Business or website<input id="contact-business" name="business" autoComplete="organization" value={business} onChange={(event) => setBusiness(event.target.value)} aria-invalid={Boolean(errors.business)} aria-describedby={errors.business ? "contact-business-error" : undefined} />{errors.business ? <span className="field-error" id="contact-business-error">{errors.business}</span> : null}</label>
          <label htmlFor="contact-need">Service of interest<select id="contact-need" name="need" value={need} onChange={(event) => setNeed(event.target.value)}>{needs.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <label htmlFor="contact-budget">Indicative budget range<select id="contact-budget" name="budget" value={budget} onChange={(event) => setBudget(event.target.value)}>{budgets.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label htmlFor="contact-detail">What should move better?<textarea id="contact-detail" name="detail" rows={5} value={detail} onChange={(event) => setDetail(event.target.value)} aria-invalid={Boolean(errors.detail)} aria-describedby={errors.detail ? "contact-detail-error" : undefined} />{errors.detail ? <span className="field-error" id="contact-detail-error">{errors.detail}</span> : null}</label>
        <button className="simple-button simple-button-dark" type="submit">Review message <span aria-hidden="true">→</span></button>
      </form>
      {submitted ? <div className="form-success" role="status"><strong>Your message is ready to send.</strong><p>We have prepared it in your email app so you can review everything first.</p><a className="simple-link" href={`mailto:info@softkoredigital.co.za?subject=Softkore project enquiry&body=${emailBody}`}>Open email <span>→</span></a></div> : <p className="form-note" id="contact-form-note">Nothing is sent until you review the prepared email.</p>}
    </div>
  );
}
