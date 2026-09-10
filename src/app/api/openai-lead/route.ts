import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `https://bzr.openai.com/v1/events?pid=${process.env.OPENAI_PIXEL_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          validate_only: false,
          events: [
            {
              id: crypto.randomUUID(),
              type: "lead_created",
              timestamp_ms: Date.now(),
              source_url: body.source_url,
              action_source: "web",
              data: {
                type: "customer_action",
              },
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("OpenAI lead event error:", error);

    return NextResponse.json(
      { error: "Failed to send OpenAI lead event" },
      { status: 500 }
    );
  }
}