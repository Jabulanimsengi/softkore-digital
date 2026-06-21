"use client";

import { useState } from "react";

const projectTypes = [
  "Website review",
  "New website",
  "SEO growth",
  "Custom web application",
  "Enterprise system",
  "Cloud or hosting",
  "Automation workflow",
  "Website improvements",
  "Ongoing website care",
];

const aiAgentOptions = [
  "Not sure yet",
  "Yes, include an AI agent",
  "Maybe later",
  "No AI agent needed",
];

const timelines = [
  "Not sure yet",
  "This month",
  "1-3 months",
  "3+ months",
];

const investmentRanges = [
  "Not sure yet",
  "Under R15k",
  "R15k-R35k",
  "R35k-R75k",
  "R75k+",
];

export function ContactForm() {
  const [projectType, setProjectType] = useState("Website review");
  const [aiAgentNeed, setAiAgentNeed] = useState("Not sure yet");
  const [timeline, setTimeline] = useState("Not sure yet");
  const [investment, setInvestment] = useState("Not sure yet");
  const [businessName, setBusinessName] = useState("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: Record<string, string> = {};
    if (!businessName.trim()) {
      next.businessName = "Please enter your website or business name.";
    }
    if (!priority.trim()) {
      next.priority = "Let us know what should improve first.";
    } else if (priority.trim().length < 10) {
      next.priority = "A few more details will help us prepare better.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  const emailBody = encodeURIComponent(
    [
      `Project type: ${projectType}`,
      `Workflow support: ${aiAgentNeed}`,
      `Timeline: ${timeline}`,
      `Investment range: ${investment}`,
      `Website or business: ${businessName}`,
      "",
      "What should improve first?",
      priority,
    ].join("\n"),
  );

  return (
    <div className="contact-form-shell">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label>
          Project type
          <select
            name="project_type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          Workflow support
          <select
            name="ai_agent_support"
            value={aiAgentNeed}
            onChange={(e) => setAiAgentNeed(e.target.value)}
          >
            {aiAgentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <div className="form-row">
          <label>
            Timeline
            <select
              name="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              {timelines.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Investment range
            <select
              name="investment_range"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            >
              {investmentRanges.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Website or business name
          <input
            name="website_or_business"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          {errors.businessName ? (
            <span className="field-error">{errors.businessName}</span>
          ) : null}
        </label>
        <label>
          What should improve first?
          <textarea
            name="priority"
            rows={4}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          {errors.priority ? (
            <span className="field-error">{errors.priority}</span>
          ) : null}
        </label>
        <button className="button button-primary" type="submit">
          Prepare Project Brief
        </button>
      </form>
      {submitted ? (
        <div className="form-success" role="status">
          <strong>Brief prepared.</strong>
          <p>
            Send it to Softkore so we can review the structure, conversion path,
            and best next move.
          </p>
          <a
            className="button button-dark-secondary"
            href={`mailto:info@softkoredigital.co.za?subject=Softkore project brief&body=${emailBody}`}
          >
            Open email
          </a>
        </div>
      ) : (
        <p className="form-note">
          This prepares a clean project brief first. You can review it before
          sending anything to Softkore.
        </p>
      )}
    </div>
  );
}
