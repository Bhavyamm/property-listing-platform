import { NextResponse } from 'next/server';
import { properties } from '../../dummyData';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }

  return NextResponse.json(property);
}
