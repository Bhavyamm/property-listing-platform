import React, { Suspense } from 'react';
import { Metadata } from 'next';
import PropertyList, { SkeletonPropertyList } from '@/components/client/PropertyList';

export async function generateMetadata({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}): Promise<Metadata> {
  const query = searchParams.query || '';
  return {
    title: query ? `Properties matching "${query}"` : 'All Properties',
    description: query 
      ? `Listings for properties that match "${query}"`
      : 'Browse all property listings.'
  };
}

export default async function PropertiesPage({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  return (
    <Suspense fallback={<SkeletonPropertyList count={3} />}>
      <h1 className="text-2xl font-bold m-4">Property Listings</h1>
      <PropertyList filters={searchParams} />
    </Suspense>
  );
}
