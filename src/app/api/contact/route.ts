import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  type?: "consultation" | "support";
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  helpWith?: string;
  engagement?: string;
  timeline?: string;
  details?: string;
  role?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateMap = new Map<string, { count: number; reset: number }>();

function clientIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimit(ip: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count += 1;
  return true;
}

function clean(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const contentType = req.headers.get("content-type") || "";
    let body: ContactPayload = {};
    if (contentType.includes("application/json")) {
      body = (await req.json()) as ContactPayload;
    } else if (contentType.includes("form")) {
      const form = await req.formData();
      body = Object.fromEntries(form.entries()) as ContactPayload;
    } else {
      return NextResponse.json({ ok: false, error: "Unsupported media type." }, { status: 415 });
    }

    // Honeypot — bots fill hidden "website" field
    if (clean(body.website, 100)) {
      return NextResponse.json({ ok: true });
    }

    const email = clean(body.email, 254).toLowerCase();
    if (!email || !emailRe.test(email)) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const type = body.type === "support" ? "support" : "consultation";
    const payload = {
      type,
      email,
      firstName: clean(body.firstName, 80),
      lastName: clean(body.lastName, 80),
      company: clean(body.company, 120),
      helpWith: clean(body.helpWith, 120),
      engagement: clean(body.engagement, 120),
      timeline: clean(body.timeline, 80),
      details: clean(body.details, 5000),
      role: clean(body.role, 120),
      topic: clean(body.topic, 120),
      message: clean(body.message, 5000),
      receivedAt: new Date().toISOString(),
      ip,
    };

    if (type === "support" && !payload.message) {
      return NextResponse.json({ ok: false, error: "Message is required." }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json(
          { ok: false, error: "Unable to deliver your request right now." },
          { status: 502 },
        );
      }
    } else if (process.env.NODE_ENV !== "production") {
      console.info("[contact]", payload);
    }

    return NextResponse.json({
      ok: true,
      message: "Request received. Our team will follow up shortly.",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
