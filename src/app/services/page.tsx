import { servicesIcon } from "@/lib/constants";
import { getAllServices } from "@/sanity/actions/get-all-services";
import Link from "next/link";
import { ALL_SERVICES_QUERYResult } from "../../../sanity.types";

export default async function Services() {
  const services: ALL_SERVICES_QUERYResult = await getAllServices();

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mt-10 mb-28 ">
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
}
