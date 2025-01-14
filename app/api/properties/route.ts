import { NextResponse } from 'next/server';
import { properties } from '../dummyData';

export async function GET() {
  return NextResponse.json(properties);
}
