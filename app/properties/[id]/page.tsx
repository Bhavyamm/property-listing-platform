import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Property } from "@/lib/types";

async function fetchPropertyFromApi(id: string): Promise<Property | null> {
  console.log(id, "id")
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseUrl, "baseUrl")
  const response = await fetch(`${baseUrl}/api/properties/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    return null;
  }
  const property: Property = await response.json();
  console.log(property, "property")
  return property;
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await fetchPropertyFromApi(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      {property.images[0] && (
        <Image
          src={property.images[0]}
          alt={property.title}
          width={800}
          height={600}
          className="w-full h-auto mb-4 rounded-md"
        />
      )}
      <p className="text-xl font-semibold">
        Price: ${property.price?.toLocaleString()}
      </p>
      {property.location && (
        <p className="text-lg text-gray-700">
          <span className="font-medium">Location:</span> {property.location}
        </p>
      )}
      {property.status && (
        <p
          className={`text-lg font-medium ${
            property.status === "available"
              ? "text-green-600"
              : property.status === "pending"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          Status:{" "}
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </p>
      )}
      {property.specs && (
        <div className="text-lg text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Beds:</span> {property.specs.beds}
          </p>
          <p>
            <span className="font-medium">Baths:</span> {property.specs.baths}
          </p>
          <p>
            <span className="font-medium">Area:</span> {property.specs.area} sqft
          </p>
        </div>
      )}
    </div>
  );
}
