import { getAllProjects } from "@/sanity/actions/get-all-projects";
import { getAllCaregories } from "@/sanity/actions/get-all-categories";
import {
  ALL_CATEGORY_QUERYResult,
  ALL_PROJECTS_QUERYResult,
} from "../../../sanity.types";
import { FeaturedTabs } from "@/components/feature-tabs";

export default async function MyWork() {
  const projectData: ALL_PROJECTS_QUERYResult = await getAllProjects();
  const categories: ALL_CATEGORY_QUERYResult = await getAllCaregories();

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

      <FeaturedTabs projectData={projectData} categories={categories} />
    </section>
  );
}
