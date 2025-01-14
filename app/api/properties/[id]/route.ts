import { NextResponse, NextRequest } from "next/server";
import { properties } from "../../dummyData";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET(
  request: NextRequest,
  { params }: any
): Promise<NextResponse> {
  const { id } = params as { id: string };

  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }

  return NextResponse.json(property);
}
