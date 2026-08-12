"use server";

import { site } from "@/lib/site";

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
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in name, email, and message." };
  }

  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  const mailto = `mailto:${site.supportEmail}?subject=${subject}&body=${body}`;

  // When SMTP / transactional email is configured, send here.
  // Until then, return a mailto fallback the client can open.
  return {
    ok: true,
    message: "Opening your email client to send the message…",
    mailto,
  };
}
