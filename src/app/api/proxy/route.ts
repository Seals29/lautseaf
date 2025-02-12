import { NextResponse } from "next/server";

// Handles POST requests
export async function POST(request: Request) {
  // Extract `selectedOption` from the query parameters
  const { searchParams } = new URL(request.url);
  const selectedOption = searchParams.get("selectedOption");

  if (!selectedOption) {
    return NextResponse.json({ error: "Missing selectedOption" }, { status: 400 });
  }

  // Construct the external API URL
  const apiUrl = `http://91.108.111.225:8989/xgboost/${selectedOption}`;

  try {
    const payload = await request.json();
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if the external API response is successful
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: "External API returned an error", details: errorData },
        { status: response.status }
      );
    }

    // Parse the external API response
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error forwarding request to external API:", error);
    return NextResponse.json({ error: "Failed to fetch external API" }, { status: 500 });
  }
}
