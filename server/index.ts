import express from "express";
import { Resend } from "resend";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/contact", async (req, res) => {
    const {
      name,
      company,
      email,
      phone,
      country,
      category,
      application,
      quantity,
      message,
      honeypot,
    } = req.body || {};

    if (honeypot) {
      return res.status(200).json({ success: true });
    }

    const requiredFields = [name, company, email, country, message].map((field) =>
      String(field || "").trim()
    );

    if (requiredFields.some((field) => !field)) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const normalizedEmail = String(email || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalizedEmail)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: "Email service not configured." });
    }

    const toEmail = process.env.INQUIRY_TO_EMAIL || "tatum.hongquan@gmail.com";
    const ccEmail = process.env.INQUIRY_CC_EMAIL || "sales.hongquan@gmail.com";
    const fromEmail = process.env.INQUIRY_FROM_EMAIL || "onboarding@resend.dev";

    const safeText = (value?: string) =>
      String(value || "")
        .replace(/[<>]/g, "")
        .replace(/\r\n/g, "\n")
        .trim();

    const emailHtml = `
      <h2>New Inquiry from Website</h2>
      <p><strong>Name:</strong> ${safeText(name)}</p>
      <p><strong>Company:</strong> ${safeText(company)}</p>
      <p><strong>Email:</strong> ${safeText(email)}</p>
      <p><strong>Phone:</strong> ${safeText(phone) || "Not provided"}</p>
      <p><strong>Country:</strong> ${safeText(country)}</p>
      <p><strong>Product Category:</strong> ${safeText(category) || "Not specified"}</p>
      <p><strong>Application:</strong> ${safeText(application) || "Not provided"}</p>
      <p><strong>Quantity:</strong> ${safeText(quantity) || "Not specified"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${safeText(message).replace(/\n/g, "<br />")}</p>
    `;

    const emailText = [
      "New Inquiry from Website",
      `Name: ${safeText(name)}`,
      `Company: ${safeText(company)}`,
      `Email: ${safeText(email)}`,
      `Phone: ${safeText(phone) || "Not provided"}`,
      `Country: ${safeText(country)}`,
      `Product Category: ${safeText(category) || "Not specified"}`,
      `Application: ${safeText(application) || "Not provided"}`,
      `Quantity: ${safeText(quantity) || "Not specified"}`,
      "",
      "Message:",
      safeText(message),
    ].join("\n");

    try {
      await resend.emails.send({
        from: `ShiChem Inquiries <${fromEmail}>`,
        to: toEmail,
        cc: ccEmail,
        replyTo: normalizedEmail,
        subject: `New Inquiry: ${safeText(company)}${safeText(category) ? ` - ${safeText(category)}` : ""}`,
        html: emailHtml,
        text: emailText,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to send inquiry email:", error);
      return res.status(500).json({ error: "Failed to send inquiry." });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
