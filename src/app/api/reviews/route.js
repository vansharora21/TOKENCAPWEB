import { NextResponse } from "next/server";

export const revalidate = 3600;

// ── GET — fetch approved reviews ────────────────────────────
export async function GET() {
  const url = process.env.REVIEWS_SCRIPT_URL;
  if (!url) return NextResponse.json([]);

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Script fetch failed");
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([]);
  }
}

// ── POST — submit a new review ───────────────────────────────
export async function POST(req) {
  const url = process.env.REVIEWS_SCRIPT_URL;

  if (!url) {
    // Dev mode — no script configured, pretend success
    return NextResponse.json({ success: true, dev: true });
  }

  try {
    const body = await req.json();

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Apps Script sometimes returns HTML on errors — guard against it
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const text = await res.text();
      console.error("Apps Script non-JSON response:", text.slice(0, 200));
      return NextResponse.json({ error: "Script returned invalid response" }, { status: 502 });
    }

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json({ error: data.error || "Script error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Review POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
