import { getMatches } from "@/api";

export async function fetchMatchesData() {
  try {
    const response = await getMatches();
    return response?.matches || []; // Return matches array or empty array if undefined
  } catch (error) {
    console.error("Error fetching matches:", error);
    return []; // Return empty array in case of error
  }
}