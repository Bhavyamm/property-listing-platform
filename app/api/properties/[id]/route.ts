import { NextResponse, NextRequest } from "next/server";
import { properties } from "../../dummyData";

/* eslint-disable @typescript-eslint/no-explicit-any */
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<NextResponse> {
  const { id } = params as { id: string };
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return NextResponse.json(
      { error: "Property not found" },
      {
        status: 404,
        headers: corsHeaders,
      }
    );
  }

  return NextResponse.json(property, { headers: corsHeaders });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
