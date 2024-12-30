import { Button } from "./ui/button";
import Link from "next/link";
import { FeaturedTabs } from "./feature-tabs";
import { getAllProjects } from "@/sanity/actions/get-all-projects";
import { getAllCaregories } from "@/sanity/actions/get-all-categories";
import {
  ALL_CATEGORY_QUERYResult,
  ALL_PROJECTS_QUERYResult,
} from "../../sanity.types";

export const ProjectGallery = async () => {
  const projectData: ALL_PROJECTS_QUERYResult = await getAllProjects();
  const categories: ALL_CATEGORY_QUERYResult = await getAllCaregories();

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

      <FeaturedTabs projectData={projectData} categories={categories} />
    </section>
  );
};
