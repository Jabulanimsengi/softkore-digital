"use client";

import { useEffect, useRef, useState } from "react";
import { UiIcon, type UiIconName } from "@/components/UiIcon";

type DropdownOption = {
  label: string;
  icon?: UiIconName;
};

const serviceOptions: DropdownOption[] = [
  { label: "Website design & development", icon: "globe" },
  { label: "Free SEO audit", icon: "search" },
  { label: "SEO & Google visibility", icon: "search" },
  { label: "Website & cyber security", icon: "shield" },
  { label: "Hacked site recovery", icon: "code" },
  { label: "Not sure yet", icon: "layers" },
];

const serviceSlugToNeed: Record<string, string> = {
  "web-development": serviceOptions[0].label,
  "free-seo-audit": serviceOptions[1].label,
  "seo-services": serviceOptions[2].label,
  "website-security": serviceOptions[3].label,
  "hack-recovery": serviceOptions[4].label,
};

const budgets = [
  "Still exploring",
  "Under R25,000",
  "R25,000 - R75,000",
  "R75,000 - R150,000",
  "R150,000+",
];

const budgetOptions: DropdownOption[] = budgets.map((label) => ({ label }));

function FormDropdown({
  id,
  label,
  value,
  options,
  onChange,
  isOpen,
  onToggle,
  onClose,
}: {
  id: string;
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const activeOption = options.find((option) => option.label === value) ?? options[0];

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const currentIndex = options.findIndex((option) => option.label === value);
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + delta + options.length) % options.length;
    onChange(options[nextIndex].label);
  }

  return (
    <div ref={containerRef} className={`contact-dropdown${isOpen ? " is-open" : ""}`}>
      <span className="contact-field-label" id={`${id}-label`}>
        {label}
      </span>
      <button
        ref={triggerRef}
        id={id}
        type="button"
        className="contact-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-labelledby={`${id}-label ${id}`}
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="contact-dropdown-value">
          {activeOption?.icon ? <UiIcon name={activeOption.icon} /> : null}
          <span>{value}</span>
        </span>
        <svg
          className="contact-dropdown-chevron"
          viewBox="0 0 16 16"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>
      {isOpen ? (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={`${id}-label`}
          className="contact-dropdown-menu"
        >
          {options.map((option) => {
            const selected = option.label === value;
            return (
              <li key={option.label}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`contact-dropdown-option${selected ? " is-selected" : ""}`}
                  onClick={() => {
                    onChange(option.label);
                    onClose();
                    triggerRef.current?.focus();
                  }}
                >
                  <span className="contact-dropdown-option-main">
                    {option.icon ? <UiIcon name={option.icon} /> : null}
                    <span>{option.label}</span>
                  </span>
                  {selected ? (
                    <svg
                      className="contact-dropdown-check"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3.5 8.5 3 3 6-6.5" />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState(serviceOptions[0].label);
  const isFreeAudit = need === "Free SEO audit";
  const [business, setBusiness] = useState("");
  const [budget, setBudget] = useState(budgets[0]);
  const [openDropdown, setOpenDropdown] = useState<"service" | "budget" | null>(null);
  const [detail, setDetail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("service");
    if (param && serviceSlugToNeed[param]) {
      setNeed(serviceSlugToNeed[param]);
    }
  }, []);

  const rawBody = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nNeed: ${need}\nBudget: ${budget}\n\nWhat do you need help with?\n${detail}`;
  const emailBody = encodeURIComponent(rawBody);
  const whatsappHref = `https://wa.me/27738021196?text=${encodeURIComponent(`Hi SoftKore Digital, here is my project enquiry:\n\n${rawBody}`)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(rawBody);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Add your name.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Add a valid email address.";
    if (!business.trim()) next.business = "Add your business or website name.";
    if (detail.trim().length < 10) next.detail = "Tell us a little more about what you need.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      setSendError(null);
      return;
    }

    setSending(true);
    setSendError(null);
    setSubmitted(false);
    setCopied(false);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      business: business.trim(),
      need,
      budget,
      detail: detail.trim(),
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setSendError(
          result?.error ||
            "We could not send your enquiry automatically right now. Please use one of the direct options below.",
        );
        return;
      }

      setSubmittedEmail(payload.email);
      setSubmitted(true);
    } catch {
      setSendError(
        "We could not reach the email service right now. Please use one of the direct options below.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="contact-form-shell">
      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-note">
        <div className="contact-form-row">
          <FormDropdown
            id="contact-service"
            label="Service of interest"
            value={need}
            options={serviceOptions}
            onChange={setNeed}
            isOpen={openDropdown === "service"}
            onToggle={() => setOpenDropdown((current) => (current === "service" ? null : "service"))}
            onClose={() => setOpenDropdown(null)}
          />
          <FormDropdown
            id="contact-budget"
            label="Budget range"
            value={budget}
            options={budgetOptions}
            onChange={setBudget}
            isOpen={openDropdown === "budget"}
            onToggle={() => setOpenDropdown((current) => (current === "budget" ? null : "budget"))}
            onClose={() => setOpenDropdown(null)}
          />
        </div>

        <div className="contact-form-row">
          <label htmlFor="contact-name">
            Your name
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Thabo Mokoena"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name ? <span className="field-error" id="contact-name-error">{errors.name}</span> : null}
          </label>
          <label htmlFor="contact-email">
            Email address
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.co.za"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email ? <span className="field-error" id="contact-email-error">{errors.email}</span> : null}
          </label>
        </div>

        <label htmlFor="contact-business">
          Business name or website URL
          <input
            id="contact-business"
            name="business"
            autoComplete="organization"
            placeholder="e.g. Karoo Solar · https://karoosolar.co.za"
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "contact-business-error" : undefined}
          />
          {errors.business ? <span className="field-error" id="contact-business-error">{errors.business}</span> : null}
        </label>

        {isFreeAudit ? (
          <div className="contact-audit-note" role="note">
            <strong>Free SEO audit — reply within one business day</strong>
            <p>
              Share your website address below. Within one business day we&apos;ll check whether Google is showing your pages, how fast your site loads on phones, and what&apos;s holding back enquiries — free, with no sales pressure.
            </p>
          </div>
        ) : null}

        <label htmlFor="contact-detail">
          What do you need help with?
          <textarea
            id="contact-detail"
            name="detail"
            rows={5}
            placeholder={
              isFreeAudit
                ? "Share your website URL (e.g. https://yourdomain.co.za), target locations or services, and any ranking or traffic drops..."
                : "Tell us about your current website, what is not working, or what you want to achieve..."
            }
            value={detail}
            onChange={(event) => setDetail(event.target.value)}
            aria-invalid={Boolean(errors.detail)}
            aria-describedby={errors.detail ? "contact-detail-error" : undefined}
          />
          {errors.detail ? <span className="field-error" id="contact-detail-error">{errors.detail}</span> : null}
        </label>

        <div className="contact-submit-row">
          <button className="simple-button simple-button-dark" type="submit" disabled={sending}>
            {sending ? "Sending enquiry..." : (
              <>
                {isFreeAudit ? "Get my free SEO audit" : "Send enquiry"} <UiIcon name="arrow" />
              </>
            )}
          </button>
          <p className="form-note" id="contact-form-note">
            Sent directly to info@softkoredigital.co.za · Your details are handled under POPIA, as set out in our{" "}
            <a href="/privacy-policy/">privacy policy</a>.
          </p>
        </div>
      </form>

      {submitted ? (
        <div className="form-success" role="status">
          <strong>Your enquiry has been sent to SoftKore Digital.</strong>
          <p>We will reply to {submittedEmail} within one business day. Need an urgent response? You can also reach us directly on WhatsApp:</p>
          <div className="form-success-actions">
            <a className="form-action-btn form-action-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <UiIcon name="phone" /> Message on WhatsApp
            </a>
          </div>
        </div>
      ) : sendError ? (
        <div className="form-error-banner" role="alert">
          <strong>Unable to send automatically</strong>
          <p>{sendError}</p>
          <div className="form-success-actions">
            <a className="form-action-btn form-action-primary" href={`mailto:info@softkoredigital.co.za?subject=SoftKore Digital project enquiry&body=${emailBody}`}>
              <UiIcon name="mail" /> Open Email App
            </a>
            <a className="form-action-btn form-action-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <UiIcon name="phone" /> Send on WhatsApp
            </a>
            <button type="button" className="form-action-btn form-action-copy" onClick={handleCopy}>
              {copied ? "Copied to clipboard ✓" : "Copy enquiry text"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
