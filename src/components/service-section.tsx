import { Button } from "./ui/button";
import Link from "next/link";
import { servicesIcon } from "@/lib/constants";
import { getAllServices } from "@/sanity/actions/get-all-services";
import { ALL_SERVICES_QUERYResult } from "../../sanity.types";

export const ServiceSection = async () => {
  const services: ALL_SERVICES_QUERYResult = await getAllServices();

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex flex-col items-center md:justify-between md:flex-row gap-y-8 mb-16 ">
        <div className="text-center md:text-start">
          <p className="text-white text-lg font-semibold uppercase tracking-wider mb-4 text-center md:text-start">
            03. <span className="text-[#8A7FF8]">Services I Provide</span>
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text">
              Full Stack
              <br />
              Web Development{" "}
            </span>
            <span className="text-white">Services</span>
          </h2>
        </div>

        <Link href="/services">
          <Button
            size={"lg"}
            className="py-2 px-6 bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] text-white hover:opacity-80"
          >
            More About Services
          </Button>
        </Link>
      </div>

      {/* Services Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug?.current}`} key={service._id}>
            <div className="relative group rounded-2xl bg-gradient-to-b from-[#1A123E] to-[#0A051E] p-8 transition-all duration-300 hover:scale-105">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] opacity-0 group-hover:opacity-10 transition-opacity" />

              {/* Icon */}
              <div className="mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF]">
                {servicesIcon.map(
                  (icon) =>
                    icon.slug === service.slug?.current && (
                      <icon.icon
                        key={icon.slug}
                        className="w-6 h-6 text-white"
                      />
                    )
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.shortdescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.sys.id}
            className="relative group rounded-2xl bg-gradient-to-b from-[#1A123E] to-[#0A051E] p-8 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] opacity-0 group-hover:opacity-10 transition-opacity" />

            <div className="mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF]">
              {servicesIcon.map(
                (icon) =>
                  icon.slug === service.fields.slug && (
                    <icon.icon key={icon.slug} className="w-6 h-6 text-white" />
                  ),
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              {service.fields.title as string}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {service.fields.tagline as string}
            </p>
          </div>
        ))}
      </div> */
}
