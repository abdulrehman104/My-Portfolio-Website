import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllProjects = async () => {
  // Define the Groq query to fetch all products
  const ALL_PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(name asc)
  `);

  try {
    // Fetch products using the sanityFetch function
    const products = await sanityFetch({
      query: ALL_PROJECTS_QUERY,
    });

    // Return the fetched products or an empty array if there's an error
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
};
