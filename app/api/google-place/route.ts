import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const radius = searchParams.get("radius");

  const res = await fetch(
    BASE_URL +
      "/textsearch/json?query=schools&location=" +
      lat +
      "," +
      lng +
      "&radius=" +
      radius +
      "&key=AIzaSyCjW673RoO9Lan2do3badZaOMfdQcFxn84",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
