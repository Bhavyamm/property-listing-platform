"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  data: Property;
}

export function PropertyCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-md shadow transition duration-200 overflow-hidden animate-pulse">
      <div className="relative h-48 w-full bg-gray-300" />

      <div className="p-4 space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-10 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );
}

export function PropertyCard({ data }: PropertyCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFavorite = async () => {
    setLoading(true);
    setError(null);
    try {
      // Placeholder for favorite functionality
    } catch (err) {
      setError("Failed to update favorite status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-md shadow hover:shadow-lg transition duration-200 overflow-hidden">
      {data.images[0] && (
        <div className="relative h-48 w-full">
          <Image
            src={data.images[0]}
            alt={data.title}
            fill
            style={{ objectFit: "cover" }}
            className="transform hover:scale-105 transition duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>

        {data.price && (
          <p className="text-lg font-bold text-green-600 mb-2">
            ${data.price.toLocaleString()}
          </p>
        )}

        {data.location && <p className="text-gray-600 mb-2">{data.location}</p>}
        {data.status && (
          <p
            className={`mb-2 font-medium ${
              data.status === "available"
                ? "text-green-600"
                : data.status === "pending"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </p>
        )}
        {data.specs && (
          <div className="flex space-x-4 text-sm text-gray-700 mb-4">
            <span>{data.specs.beds} beds</span>
            <span>{data.specs.baths} baths</span>
            <span>{data.specs.area} sqft</span>
          </div>
        )}

        <button
          onClick={handleFavorite}
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50 mb-2"
        >
          {loading ? "Updating..." : "Favorite"}
        </button>
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  );
}
