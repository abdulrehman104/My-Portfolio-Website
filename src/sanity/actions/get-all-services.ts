import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllServices = async () => {
  // Define the Groq query to fetch all products
  const ALL_SERVICES_QUERY = defineQuery(`
    *[_type == "service"] | order(name asc)
  `);

  try {
    // Fetch products using the sanityFetch function
    const services = await sanityFetch({
      query: ALL_SERVICES_QUERY,
    });

    // Return the fetched products or an empty array if there's an error
    return services.data || [];
  } catch (error) {
    console.error("Error fetching all services:", error);
    return [];
  }
};
