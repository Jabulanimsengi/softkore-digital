import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_FROM = "SoftKore Digital <enquiries@softkoredigital.co.za>";
const FALLBACK_FROM = "SoftKore Digital <info@softkoredigital.co.za>";
const DEFAULT_TO = "info@softkoredigital.co.za";

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eqIndex = line.indexOf("=");
    if (eqIndex <= 0) continue;

    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readJsonBody(req, maxBytes = 64 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(new Error("Request body too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolve(text ? JSON.parse(text) : {});
      } catch {
        reject(new Error("Invalid JSON request body."));
      }
    });

    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

async function sendViaResend({ apiKey, from, to, replyTo, subject, text, html }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, data };
}

async function handleContactPost(req, res) {
  loadEnvFile();

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    sendJson(res, 500, {
      ok: false,
      error: "Email service is not configured (missing RESEND_API_KEY).",
    });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    sendJson(res, 400, {
      ok: false,
      error: error instanceof Error ? error.message : "Invalid request.",
    });
    return;
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const business = String(body.business ?? "").trim();
  const need = String(body.need ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const detail = String(body.detail ?? "").trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !business || detail.length < 10) {
    sendJson(res, 400, {
      ok: false,
      error: "Please complete all required enquiry fields with a valid email address.",
    });
    return;
  }

  const toEmail = process.env.RESEND_TO_EMAIL?.trim() || DEFAULT_TO;
  const configuredFrom = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
  const subject = `SoftKore Digital enquiry: ${need || "Website enquiry"} — ${business}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Business / Website: ${business}`,
    `Service of interest: ${need || "Not specified"}`,
    `Indicative budget: ${budget || "Not specified"}`,
    "",
    "Message:",
    detail,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #071116; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New SoftKore Digital Enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 6px 0; font-weight: bold;">Name:</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Business / Website:</td><td style="padding: 6px 0;">${escapeHtml(business)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Service of interest:</td><td style="padding: 6px 0;">${escapeHtml(need || "Not specified")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Indicative budget:</td><td style="padding: 6px 0;">${escapeHtml(budget || "Not specified")}</td></tr>
      </table>
      <hr style="margin: 18px 0; border: 0; border-top: 1px solid #d5e0e4;" />
      <p style="margin: 0 0 8px; font-weight: bold;">What they need help with:</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(detail)}</p>
    </div>
  `.trim();

  try {
    let result = await sendViaResend({
      apiKey,
      from: configuredFrom,
      to: toEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (
      !result.ok &&
      configuredFrom !== FALLBACK_FROM &&
      (result.status === 403 || result.status === 422)
    ) {
      result = await sendViaResend({
        apiKey,
        from: FALLBACK_FROM,
        to: toEmail,
        replyTo: email,
        subject,
        text,
        html,
      });
    }

    if (!result.ok) {
      const message =
        result.data?.message ||
        result.data?.error ||
        `Resend rejected the email request (status ${result.status}).`;
      sendJson(res, result.status >= 400 && result.status < 600 ? result.status : 502, {
        ok: false,
        error: message,
      });
      return;
    }

    sendJson(res, 200, { ok: true, id: result.data?.id ?? null });
  } catch (error) {
    sendJson(res, 502, {
      ok: false,
      error: error instanceof Error ? error.message : "Failed to reach Resend API.",
    });
  }
}

export function startContactApiServer(port = Number(process.env.CONTACT_API_PORT || 3099)) {
  if (globalThis.__softkoreContactApiServer) {
    return globalThis.__softkoreContactApiServer;
  }

  loadEnvFile();

  const server = http.createServer(async (req, res) => {
    const pathname = (req.url || "/").split("?")[0];

    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      if (req.method === "POST") {
        await handleContactPost(req, res);
        return;
      }
      if (req.method === "OPTIONS") {
        res.writeHead(204, {
          Allow: "POST, OPTIONS",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        });
        res.end();
        return;
      }
      sendJson(res, 405, { ok: false, error: "Method not allowed. Use POST." });
      return;
    }

    sendJson(res, 404, { ok: false, error: "Not found." });
  });

  server.on("error", (err) => {
    if (err && typeof err === "object" && "code" in err && err.code === "EADDRINUSE") {
      return;
    }
    console.error("Contact API server error:", err);
  });

  server.listen(port, "127.0.0.1");
  globalThis.__softkoreContactApiServer = server;
  return server;
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const port = Number(process.env.CONTACT_API_PORT || 3099);
  startContactApiServer(port);
  console.log(`SoftKore Contact API server listening on http://127.0.0.1:${port}/api/contact`);
}
