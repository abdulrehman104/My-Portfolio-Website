import { defineField, defineType } from "sanity";

export const testimonialsType = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Author Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      type: "text",
      title: "Position",
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short Description",
    }),
    defineField({
      name: "images",
      type: "image",
      title: "Important Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
