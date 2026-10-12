"use server";

import { site } from "@/lib/site";
import { CONTACT_TOPICS, TIMELINE_OPTIONS } from "@/lib/contact-topics";

export type ContactState = {
  ok: boolean;
  message: string;
  mailto?: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  topic: (typeof CONTACT_TOPICS)[number];
  timeline: (typeof TIMELINE_OPTIONS)[number] | "";
  message: string;
};

function field(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function isOneOf<T extends string>(value: string, options: readonly T[]): value is T {
  return (options as readonly string[]).includes(value);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const topic = field(formData, "topic");
  const timeline = field(formData, "timeline");
  const message = field(formData, "message");

  if (!name || !email || !message || !topic) {
    return { ok: false, message: "Please fill in name, email, what we can help with, and message." };
  }
  if (!isOneOf(topic, CONTACT_TOPICS)) {
    return { ok: false, message: "Please choose what we can help with." };
  }
  if (timeline && !isOneOf(timeline, TIMELINE_OPTIONS)) {
    return { ok: false, message: "Please choose a valid timeline." };
  }

  const submission: ContactSubmission = {
    name,
    email,
    company,
    topic,
    timeline: timeline as ContactSubmission["timeline"],
    message,
  };

  const lines = [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "—"}`,
    `What can we help with: ${submission.topic}`,
    `Timeline: ${submission.timeline || "—"}`,
    "",
    submission.message,
  ];

  const subject = encodeURIComponent(`[${submission.topic}] Contact from ${submission.name}`);
  const body = encodeURIComponent(lines.join("\n"));
  const mailto = `mailto:${site.supportEmail}?subject=${subject}&body=${body}`;

  return {
    ok: true,
    message: "Opening your email client to send the message…",
    mailto,
  };
}
