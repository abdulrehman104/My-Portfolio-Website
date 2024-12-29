import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./category";
import { projectType } from "./project";
import { serviceType } from "./services";
import { testimonialsType } from "./testimonials";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, projectType, serviceType, testimonialsType],
};
