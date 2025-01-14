import React, { Suspense } from "react";
import { Metadata } from "next";
import PropertyList, {
  SkeletonPropertyList,
} from "@/components/client/PropertyList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Properties",
    description: "Browse all property listings.",
  };
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <Suspense fallback={<SkeletonPropertyList count={3} />}>
      <h1 className="text-2xl font-bold m-4">Property Listings</h1>
      <PropertyList filters={resolvedSearchParams} />
    </Suspense>
  );
}
