import { NextResponse } from "next/server";
import { properties } from "../dummyData";

export async function GET() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  return NextResponse.json(properties, { headers: corsHeaders });
}
