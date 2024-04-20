import { NextResponse } from "next/server";

export async function GET() {
  const jobListings: any[] = [];
  return NextResponse.json(jobListings);
}
