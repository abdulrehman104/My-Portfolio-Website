import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllTestonimals = async () => {
  // Define the Groq query to fetch all products
  const ALL_TESTONIMALS_QUERY = defineQuery(`
    *[_type == "testimonials"] | order(name asc)
  `);

  try {
    // Fetch products using the sanityFetch function
    const products = await sanityFetch({
      query: ALL_TESTONIMALS_QUERY,
    });

    // Return the fetched products or an empty array if there's an error
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all testonimals:", error);
    return [];
  }
};
