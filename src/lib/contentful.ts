import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });
};

export const client = createContentClient();

// ===================== Get All Services Data In Contentful =====================
export const getServicesEntries = async () => {
  const entries = await client.getEntries({ content_type: "services" });
  return entries;
};

// ===================== Get Single Services Data In Contentful =====================
export const getServiceEntryBySlug = async (slug: string, type: string) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

// ===================== Get Projects Data In Contentful =====================
export const getProjectsEntries = async () => {
  const entries = await client.getEntries({ content_type: "projects" });
  return entries;
};

// ===================== Get Single Data In Contentful =====================
export const getProjectEntryBySlug = async (slug: string, type: string) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};
