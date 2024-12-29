import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Service Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagLine",
      type: "text",
      title: "TagLine",
      description: "A brief summary of the Service.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "shortdescription",
      type: "text",
      title: "Short Description",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cta",
      type: "text",
      title: "Call To Action",
      description: "A brief summary of the project.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "btn",
      type: "text",
      title: "Button Text",
      description: "A brief summary of the project.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
