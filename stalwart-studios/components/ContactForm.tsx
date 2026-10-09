"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { submitContact, type ContactState } from "@/app/contact/actions";
import {
  BUDGET_OPTIONS,
  CONTACT_TOPICS,
  TIMELINE_OPTIONS,
  contactTopicFromParam,
} from "@/lib/contact-topics";

const initial: ContactState = { ok: false, message: "" };

const fieldClass =
  "w-full rounded-md border bg-transparent px-4 py-3 text-sm text-brand-primary outline-none focus:border-[var(--accent-gold)] transition-colors duration-200";
const labelClass = "block text-xs uppercase tracking-[0.14em] text-brand-muted mb-2";
const fieldStyle = { borderColor: "var(--border)" };
const optionClass = "bg-[var(--bg-elevated)]";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultTopic = contactTopicFromParam(searchParams.get("topic"));

  const [state, action, pending] = useActionState(submitContact, initial);

  useEffect(() => {
    if (state.ok && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input id="name" name="name" required className={fieldClass} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          Company <span className="normal-case tracking-normal text-brand-dim">(optional)</span>
        </label>
        <input id="company" name="company" className={fieldClass} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="topic" className={labelClass}>
          What can we help with?
        </label>
        <select
          key={defaultTopic}
          id="topic"
          name="topic"
          required
          defaultValue={defaultTopic}
          className={fieldClass}
          style={fieldStyle}
        >
          {CONTACT_TOPICS.map((t) => (
            <option key={t} value={t} className={optionClass}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Estimated budget <span className="normal-case tracking-normal text-brand-dim">(optional)</span>
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass} style={fieldStyle}>
            <option value="" className={optionClass}>
              Select
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className={optionClass}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline <span className="normal-case tracking-normal text-brand-dim">(optional)</span>
          </label>
          <select id="timeline" name="timeline" defaultValue="" className={fieldClass} style={fieldStyle}>
            <option value="" className={optionClass}>
              Select
            </option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t} className={optionClass}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          style={fieldStyle}
        />
      </div>
      <button type="submit" disabled={pending} className="btn-primary px-6 py-3 text-sm disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
      {state.message && (
        <p className={`text-sm ${state.ok ? "text-brand-teal" : "text-brand-gold"}`} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
