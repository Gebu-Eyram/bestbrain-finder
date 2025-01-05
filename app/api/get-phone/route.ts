import { NextResponse } from "next/server";
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const place_id = searchParams.get("place_id");
  const res = await fetch(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
      place_id +
      "&key=" +
      GOOGLE_MAPS_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
