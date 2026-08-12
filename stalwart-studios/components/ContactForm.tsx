"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  useEffect(() => {
    if (state.ok && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.14em] text-brand-muted mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border bg-transparent px-4 py-3 text-sm text-brand-primary outline-none focus:border-[var(--accent-gold)] transition-colors duration-200"
          style={{ borderColor: "var(--border)" }}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.14em] text-brand-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border bg-transparent px-4 py-3 text-sm text-brand-primary outline-none focus:border-[var(--accent-gold)] transition-colors duration-200"
          style={{ borderColor: "var(--border)" }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.14em] text-brand-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border bg-transparent px-4 py-3 text-sm text-brand-primary outline-none focus:border-[var(--accent-gold)] transition-colors duration-200 resize-y"
          style={{ borderColor: "var(--border)" }}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="btn-primary px-6 py-3 text-sm disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
      {state.message && (
        <p className={`text-sm ${state.ok ? "text-brand-teal" : "text-brand-gold"}`}>{state.message}</p>
      )}
    </form>
  );
}
