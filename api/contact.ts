import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  category?: string;
  application?: string;
  quantity?: string;
  message?: string;
  honeypot?: string;
};

const isNonEmpty = (value: unknown) => String(value || "").trim().length > 0;

const sanitize = (value?: string) =>
  String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\r\n/g, "\n")
    .trim();

const parseBody = (req: VercelRequest): InquiryPayload => {
  if (req.body && typeof req.body === "object") {
    return req.body as InquiryPayload;
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as InquiryPayload;
    } catch {
      return {};
    }
  }

  return {};
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const payload = parseBody(req);

  if (payload.honeypot) {
    return res.status(200).json({ success: true });
  }

  const requiredFields = [
    payload.name,
    payload.company,
    payload.email,
    payload.country,
    payload.message,
  ];

  if (requiredFields.some((field) => !isNonEmpty(field))) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const normalizedEmail = sanitize(payload.email);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service not configured." });
  }

  const toEmail = process.env.INQUIRY_TO_EMAIL || "tatum.hongquan@gmail.com";
  const ccEmail = process.env.INQUIRY_CC_EMAIL || "sales.hongquan@gmail.com";
  const fromEmail = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev";

  const emailHtml = `
    <h2>New Inquiry from Website</h2>
    <p><strong>Name:</strong> ${sanitize(payload.name)}</p>
    <p><strong>Company:</strong> ${sanitize(payload.company)}</p>
    <p><strong>Email:</strong> ${sanitize(payload.email)}</p>
    <p><strong>Phone:</strong> ${sanitize(payload.phone) || "Not provided"}</p>
    <p><strong>Country:</strong> ${sanitize(payload.country)}</p>
    <p><strong>Product Category:</strong> ${sanitize(payload.category) || "Not specified"}</p>
    <p><strong>Application:</strong> ${sanitize(payload.application) || "Not provided"}</p>
    <p><strong>Quantity:</strong> ${sanitize(payload.quantity) || "Not specified"}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${sanitize(payload.message).replace(/\n/g, "<br />")}</p>
  `;

  const emailText = [
    "New Inquiry from Website",
    `Name: ${sanitize(payload.name)}`,
    `Company: ${sanitize(payload.company)}`,
    `Email: ${sanitize(payload.email)}`,
    `Phone: ${sanitize(payload.phone) || "Not provided"}`,
    `Country: ${sanitize(payload.country)}`,
    `Product Category: ${sanitize(payload.category) || "Not specified"}`,
    `Application: ${sanitize(payload.application) || "Not provided"}`,
    `Quantity: ${sanitize(payload.quantity) || "Not specified"}`,
    "",
    "Message:",
    sanitize(payload.message),
  ].join("\n");

  try {
    await resend.emails.send({
      from: `ShiChem Inquiries <${fromEmail}>`,
      to: toEmail,
      cc: ccEmail,
      replyTo: normalizedEmail,
      subject: `New Inquiry: ${sanitize(payload.company)}${
        sanitize(payload.category) ? ` - ${sanitize(payload.category)}` : ""
      }`,
      html: emailHtml,
      text: emailText,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send inquiry email:", error);
    return res.status(500).json({ error: "Failed to send inquiry." });
  }
}
