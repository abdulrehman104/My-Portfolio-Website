import { Button } from "@/components/ui/button";
import { getProjectsEntries } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyWork() {
  const projectsEntries = await getProjectsEntries();
  const all_projects = projectsEntries.items;

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mt-10 mb-28 ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          From Concept to Creation:
          <span className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text block">
            My Development <br className="sm:hidden" /> Journey{" "}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {all_projects.map((project) => {
          // @ts-ignore
          const imageUrl = project.fields.image.fields.file.url;
          // @ts-ignore
          const imageTitle = project.fields.image.fields.title;

          return (
            <div
              key={project.sys.id}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={`https:${imageUrl}`} // Prefix with 'https:'
                alt={imageTitle}
                width={500}
                height={500}
                className="object-cover"
              />
              <div className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.fields.title as string}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.fields.shortDescription as string}
                </p>
                <p className="mb-6 leading-5">
                  <span className="font-medium text-white">
                    Technology used:
                  </span>{" "}
                  <span className="text-sm text-[#8A7FF8]">
                    {project.fields.technology as string}
                  </span>
                </p>
                <Link href={`/my-work/${project.fields.slug}`}>
                  <Button
                    variant="ghost"
                    className="border border-white hover:bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] hover:text-white"
                  >
                    Learn More About Project!
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
