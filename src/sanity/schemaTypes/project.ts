import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Project Title",
      validation: (Rule) => Rule.required().max(100),
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
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description: "A brief summary of the project.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "images",
      type: "image",
      title: "Important Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "technologiesused",
      type: "text",
      title: "Technologies Used",
    }),
    defineField({
      name: "tagLine",
      type: "text",
      title: "TagLine",
      description: "A brief summary of the Service.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "projecturl",
      type: "string",
      title: "Project URL",
      description:
        "The country or region where this project was created or implemented.",
    }),
    defineField({
      name: "githuburl",
      type: "string",
      title: "Github URL",
      description:
        "The country or region where this project was created or implemented.",
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
    defineField({
      name: "categories",
      type: "array",
      title: "Categories",
      description: "Select one or more categories related to this project.",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
