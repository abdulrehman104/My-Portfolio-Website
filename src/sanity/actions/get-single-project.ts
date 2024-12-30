import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

// Fetch a single blog by slug
export const getProjectBySlug = async (slug: string) => {
  // Define the query as a plain string
  const PROJECT_BY_ID_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug] | order(name asc) [0]`);

  try {
    // Execute the query using sanityFetch
    const blogs = await sanityFetch({
      query: PROJECT_BY_ID_QUERY,
      params: { slug },
    });

    // Return the blog data or null if not found
    return blogs.data || null;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
};
