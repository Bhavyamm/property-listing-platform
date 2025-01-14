"use client";

import { useDebounce } from "@/hooks/useDebounceHook";
import React from "react";

export default function FilterPanel({
  onPropertySearch,
  query,
  setQuery,
}: {
  onPropertySearch: () => void;
  query: string;
  setQuery: (query: string) => void;
}) {
  const handlePropertySearch = useDebounce(() => {
    onPropertySearch();
  }, 1000);

  return (
    <form className="mb-4 ml-4">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handlePropertySearch();
        }}
        placeholder="Search properties..."
        className="px-4 py-2 border rounded-md"
      />
    </form>
  );
}
