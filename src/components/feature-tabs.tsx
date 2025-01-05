import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { urlFor } from "@/sanity/lib/image";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  ALL_CATEGORY_QUERYResult,
  ALL_PROJECTS_QUERYResult,
} from "../../sanity.types";

type Props = {
  projectData: ALL_PROJECTS_QUERYResult;
  categories: ALL_CATEGORY_QUERYResult;
};

export const FeaturedTabs = ({ projectData, categories }: Props) => {
  return (
    <Tabs defaultValue={categories[0]?.title} className="w-full mb-12">
      {/* Tabs List */}
      <div className="flex justify-center mb-12 overflow-x-auto">
        <TabsList className="h-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <TabsTrigger
              key={category._id}
              value={category.title as string}
              className="px-6 py-3 rounded-md data-[state=active]:bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] data-[state=active]:text-white font-semibold transition-all"
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tabs Content */}
      {categories.map((category) => (
        <TabsContent key={category._id} value={category.title as string}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData
              .filter((project) =>
                // @ts-ignore
                project.categories.some((cat) => cat._ref === category._id)
              )
              .map((project) => (
                <div
                  key={project._id}
                  className="group relative flex flex-col space-y-4 rounded-lg p-4 w-full"
                >
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      // @ts-ignore
                      src={urlFor(project.images.asset).url()}
                      alt={project.title || "Project Image"}
                      width={700}
                      height={400}
                      className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm break-words">
                      {
                        // @ts-ignore

                        project.shortDescription.length > 100
                          ? // @ts-ignore
                            `${project.shortDescription.slice(0, 200)}...`
                          : project.shortDescription
                      }
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap items-center space-x-4 text-xs text-gray-400">
                    {project.projecturl && (
                      <Button
                        asChild
                        variant="link"
                        className="h-auto p-0 text-[#8A7FF8]"
                      >
                        <Link href={project.projecturl} target="_blank">
                          <span className="flex items-center gap-x-2">
                            Visit Website <ExternalLink className="h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    )}
                    {project.githuburl && (
                      <Button
                        asChild
                        variant="link"
                        className="hidden md:flex h-auto p-0 text-[#8A7FF8]"
                      >
                        <Link href={project.githuburl} target="_blank">
                          <span className="flex items-center gap-x-2">
                            GitHub URL <ExternalLink className="h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    )}
                    {project.slug && (
                      <Button
                        asChild
                        variant="link"
                        className="h-auto p-0 text-[#8A7FF8]"
                      >
                        <Link href={`/my-work/${project.slug?.current}`}>
                          <span className="flex items-center gap-x-2">
                            Learn More!
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}

            {/* No Projects Message */}
            {projectData.filter((project) =>
              // @ts-ignore
              project.categories.some((cat) => cat._ref === category._id)
            ).length === 0 && (
              <p className="text-gray-300 text-lg font-bold text-center">
                No projects available in this category.
              </p>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
