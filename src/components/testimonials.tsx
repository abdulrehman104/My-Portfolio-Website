import { getAllTestonimals } from "@/sanity/actions/get-all-testonimals";
import { ALL_TESTIMONIALS_QUERYResult } from "../../sanity.types";
import { CarouselSection } from "./carousel";

export const TestimonialsSection = async () => {
  const testimonial: ALL_TESTIMONIALS_QUERYResult = await getAllTestonimals();

  return (
    <section className="py-12 space-y-6">
      <div className="space-y-4 text-center md:text-start">
        <p className="text-white text-lg font-semibold uppercase tracking-wider mb-4">
          05. <span className="text-[#8A7FF8]">Testimonials</span>
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
          What{" "}
          <span className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
            Our Clients Say
          </span>
        </h2>
      </div>

      <CarouselSection testimonial={testimonial} />
    </section>
  );
};
