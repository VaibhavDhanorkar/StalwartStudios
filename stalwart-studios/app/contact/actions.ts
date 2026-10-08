"use server";

import { site } from "@/lib/site";
import { CONTACT_TOPICS, type ContactTopic } from "@/lib/contact-topics";

export type ContactState = {
  ok: boolean;
  message: string;
  mailto?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const topic = String(formData.get("topic") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message || !topic) {
    return { ok: false, message: "Please fill in name, email, topic, and message." };
  }

  if (!CONTACT_TOPICS.includes(topic as ContactTopic)) {
    return { ok: false, message: "Please choose a valid topic." };
  }

  const subject = encodeURIComponent(`[${topic}] Contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
  );
  const mailto = `mailto:${site.supportEmail}?subject=${subject}&body=${body}`;

  return {
    ok: true,
    message: "Opening your email client to send the message…",
    mailto,
  };
}
