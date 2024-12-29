import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllCaregories = async () => {
  // Define the Groq query to fetch all products
  const ALL_CATEGORY_QUERY = defineQuery(`
    *[_type == "category"] | order(name asc)
  `);

  try {
    // Fetch products using the sanityFetch function
    const category = await sanityFetch({
      query: ALL_CATEGORY_QUERY,
    });

    // Return the fetched products or an empty array if there's an error
    return category.data || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};
