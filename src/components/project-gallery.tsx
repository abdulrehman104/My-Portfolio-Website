import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { getProjectsEntries } from "@/lib/contentful";

export const ProjectGallery = async () => {
  const projectsEntries = await getProjectsEntries();
  const all_projects = projectsEntries.items;

  return (
    <section className="py-12">
      <div className="flex items-center justify-center flex-col md:flex-row md:justify-between mb-12">
        <div className="space-y-4 text-center md:text-start">
          <p className="text-white text-lg font-semibold uppercase tracking-wider mb-4">
            04. <span className="text-[#8A7FF8]">My Recent Work</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            Crafting Excellence: <br />
            <span className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
              Explore Our Masterpieces
            </span>
          </h2>
        </div>
        <Link href="/my-work">
          <Button
            size={"lg"}
            className="mt-6 py-2 px-6 bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80"
          >
            Explore All Projects
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
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
};
