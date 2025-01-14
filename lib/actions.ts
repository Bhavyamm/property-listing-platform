'use server';

import { FilterParams, Property } from "./types";

export async function searchProperties(filters: FilterParams, data: Property[]): Promise<Property[]> {
  if (filters.query) {
    const query = filters.query.toLowerCase();
    data = data.filter(property => property.title.toLowerCase().includes(query));
  }

  return data;
}
