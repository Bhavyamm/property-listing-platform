"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Property } from "@/lib/types";
import {
  PropertyCard,
  PropertyCardSkeleton,
} from "@/components/client/PropertyCard";
import FilterPanel from "./FilterPanel";
import { searchProperties } from "@/lib/actions";

interface PropertyListProps {
  filters?: { [key: string]: string | undefined };
}

interface SkeletonPropertyListProps {
  count?: number;
}

export function SkeletonPropertyList({ count = 6 }: SkeletonPropertyListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, idx) => (
        <PropertyCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export default function PropertyList({ filters = {} }: PropertyListProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`);
        const res = await fetch(url.toString(), {
          next: { revalidate: 60 },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data: Property[] = await res.json();
        setProperties(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]);

  const handlePropertySearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchProperties({query: searchQuery}, properties);
      setProperties(data);
    } catch (err) {
      console.error(err);
      setError("Failed to search properties");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FilterPanel
        onPropertySearch={handlePropertySearch}
        query={searchQuery}
        setQuery={setSearchQuery}
      />
      {loading ? (
        <SkeletonPropertyList />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="block"
            >
              <PropertyCard data={property} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
