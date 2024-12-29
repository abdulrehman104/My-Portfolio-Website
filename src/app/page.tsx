import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServiceSection } from "@/components/service-section";
import { ProjectGallery } from "@/components/project-gallery";
import { TestimonialsSection } from "@/components/testimonials";
import { FooterCard } from "@/components/footer-card";
import { getAllProjects } from "@/sanity/actions/get-all-projects";

export default async function Home() {
  const projects = await getAllProjects();
  console.log("Project Data", projects);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectGallery />
      <TestimonialsSection />
      <FooterCard />
    </>
  );
}
