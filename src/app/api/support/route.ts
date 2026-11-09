import { NextResponse } from "next/server";

export const runtime = "edge";

interface SupportRequestBody {
  name: string;
  email: string;
  category: "Bug Report" | "Feature Request" | "App Store & Billing" | "How-To / Help";
  message: string;
  macosVersion?: string;
  hardwareModel?: string;
  honeypot?: string; // Hidden spam-trap field
}

// In-memory sliding-window token bucket for Edge rate-limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "anonymous-ip";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequestsPerWindow = 5;

    // Rate limiter check
    const currentRate = rateLimitMap.get(ip);
    if (currentRate && now - currentRate.timestamp < windowMs) {
      if (currentRate.count >= maxRequestsPerWindow) {
        return NextResponse.json(
          { error: "Too many support requests. Please try again in a few moments." },
          { status: 429 }
        );
      }
      currentRate.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body: SupportRequestBody = await request.json();

    // 1. Honeypot check (Blocks bot crawlers automatically)
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: true, ticketId: "MDS-BOT-FILTERED" }, { status: 200 });
    }

    // 2. Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Please fill out all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Priority and category tagging
    const ticketId = `MDS-${Math.floor(100000 + Math.random() * 900000)}`;
    const urgency =
      body.category === "Bug Report" || body.category === "App Store & Billing" ? "High" : "Normal";

    const ticketSummary = {
      ticketId,
      status: "RECEIVED",
      category: body.category || "General",
      urgency,
      sender: {
        name: body.name.trim(),
        email: body.email.trim(),
      },
      clientEnvironment: {
        macosVersion: body.macosVersion || "macOS 13.0+ detected",
        hardwareModel: body.hardwareModel || "Apple Silicon / Intel Universal",
      },
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
      expectedResolutionHours: 24,
    };

    // Log structured markdown for serverless collectors
    console.log(`[Support Ticket Created] ${JSON.stringify(ticketSummary)}`);

    return NextResponse.json({
      success: true,
      ticketId,
      message: `Your ticket has been received (Ref: ${ticketId}). Our engineering team will respond within 24 hours.`,
    });
  } catch (error) {
    console.error("Support API route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
