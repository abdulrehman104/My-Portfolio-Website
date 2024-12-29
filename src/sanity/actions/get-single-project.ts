import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

// Fetch a single blog by slug
export const getServiceBySlug = async (slug: string) => {
  // Define the query as a plain string
  const SERVICE_BY_ID_QUERY = defineQuery(`
    *[_type == "service" && slug.current == $slug] | order(name asc) [0]`);

  try {
    // Execute the query using sanityFetch
    const blogs = await sanityFetch({
      query: SERVICE_BY_ID_QUERY,
      params: { slug },
    });

    // Return the blog data or null if not found
    return blogs.data || null;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    return null;
  }
};
