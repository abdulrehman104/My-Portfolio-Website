import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllTestimonials = async () => {
  // Define the Groq query to fetch all products
  const ALL_TESTIMONIALS_QUERY = defineQuery(`
    *[_type == "testimonials"] | order(name asc)
  `);

  try {
    // Fetch products using the sanityFetch function
    const testimonials = await sanityFetch({
      query: ALL_TESTIMONIALS_QUERY,
    });

    // Return the fetched products or an empty array if there's an error
    return testimonials.data || [];
  } catch (error) {
    console.error("Error fetching all Testimonials:", error);
    return [];
  }
};
