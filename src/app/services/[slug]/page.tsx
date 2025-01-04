import { PortableText } from "@portabletext/react"; // For rendering rich text
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/sanity/actions/get-single-service";
import { SERVICE_BY_ID_QUERYResult } from "../../../../sanity.types";
import { client } from "@/sanity/lib/client";

// Fetching the slugs for all services (Sanity equivalent of `generateStaticParams`)
export async function generateStaticParams() {
  const query = `*[_type == "services"]{ "slug": slug.current }`;
  const services = await client.fetch(query);
  return services.map((service: { slug: string }) => ({
    slug: service.slug,
  }));
}

// Main component for a single service page
export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const service: SERVICE_BY_ID_QUERYResult = await getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="text-center text-red-500">
        <p>Service not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8  overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[180px] md:h-[250px] lg:h-[380px]">
        <Image
          src="/web/banner.png"
          alt="Service Banner"
          width={1000}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-lg lg:text-xl text-gray-200">
            {service.tagLine}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 space-y-10 max-w-[1300px] md:mx-auto">
        <p className="text-center md:text-lg bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text font-bold">
          {service.shortdescription}
        </p>
        <div className="space-y-4">
          <div className="prose prose-invert">
            <PortableText
              // @ts-ignore
              value={service.content}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center space-y-2">
        <h2 className="text-lg md:text-2xl font-bold text-white mb-4">
          {service.cta}
        </h2>
        <Link href="https://calendly.com/abdulreehman/free-consultation-call?month=2025-01">
          <Button className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-white p-6 md:p-8 hover:opacity-90 md:text-lg font-bold">
            {service.btn}
          </Button>
        </Link>
      </section>
    </div>
  );
}
