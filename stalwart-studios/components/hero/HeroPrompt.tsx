"use client";

import { useState, useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const EXAMPLES = [
  "An AI agent that answers and qualifies our enquiries",
  "A training portal for 500 staff",
  "A mobile app for our customers",
  "A dashboard that replaces our spreadsheets",
];

const LABEL = "What do you want to build?";

/**
 * Plain GET form to /contact?message=… so it works without JavaScript. Nothing is sent to a server from here.
 * The typed placeholder is a decorative overlay; the static placeholder and the label stay for no-JS,
 * reduced motion and assistive tech.
 */
export function HeroPrompt() {
  const reduce = useReducedMotion();
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  // false on the server / before hydration, true afterwards.
  const enhanced = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const showTyping = enhanced && !reduce && value === "";

  return (
    <form action="/contact" method="get" className="hero-prompt w-full max-w-[640px]" role="search" aria-label={LABEL}>
      <label htmlFor="hero-prompt-input" className="sr-only">
        {LABEL}
      </label>
      <div className="hero-prompt-bar relative flex items-center gap-2 rounded-xl" data-focused={focused}>
        <input
          id="hero-prompt-input"
          name="message"
          type="text"
          autoComplete="off"
          maxLength={500}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={EXAMPLES[0]}
          className={`hero-prompt-input w-full bg-transparent px-4 py-3.5 text-[15px] text-brand-primary outline-none ${
            showTyping ? "placeholder:text-transparent" : "placeholder:text-brand-muted"
          }`}
        />
        {showTyping && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 right-14 truncate text-[15px] text-brand-muted"
          >
            <TypingAnimation words={EXAMPLES} />
          </span>
        )}
        <button
          type="submit"
          aria-label="Start the conversation"
          className="hero-prompt-send mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        >
          <ArrowUp size={16} />
        </button>
        {focused && !reduce && <BorderBeam size={90} duration={5} borderWidth={1} />}
      </div>
      <p className="mt-2 pl-1 text-[12px] text-brand-dim">{LABEL}</p>
    </form>
  );
}
