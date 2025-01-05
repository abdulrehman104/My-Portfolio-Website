import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { getProjectBySlug } from "@/sanity/actions/get-single-project";
import { PROJECT_BY_ID_QUERYResult } from "../../../../sanity.types";

export async function generateStaticParams() {
  const query = `*[_type == "project"]{ "slug": slug.current }`;
  const projects = await client.fetch(query);
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project: PROJECT_BY_ID_QUERYResult = await getProjectBySlug(slug);

  return (
    <div className="min-h-screen py-8 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/web/banner.png"
          alt="Service Banner"
          width={1000}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            {project?.title}
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-lg lg:text-xl text-gray-200">
            {project?.tagLine}
          </p>
          <div className="flex items-center gap-x-2 mt-4">
            <Link href={(project?.projecturl as string) || ""}>
              <Button
                variant="ghost"
                className="border border-gray-300 hover:bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] hover:text-white"
              >
                Live Project!
              </Button>
            </Link>
            <Link href={(project?.githuburl as string) || ""}>
              <Button
                variant="ghost"
                className="border border-gray-300 hover:bg-gradient-to-br from-[#8A7FF8] to-[#FF3BFF] hover:text-white"
              >
                Project Code!
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 space-y-10 max-w-[1300px] md:mx-auto">
        <p className="text-center md:text-lg bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text font-bold">
          {project?.shortDescription}
        </p>
        <div className="space-y-4">
          <div className="prose prose-invert">
            <PortableText
              // @ts-ignore
              value={project?.content}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center space-y-4 max-w-[1300px] md:mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">
          {project?.cta}
        </h3>
        <Link href="https://calendly.com/abdulreehman/free-consultation-call?month=2025-01">
          <Button className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-white p-6 text-lg hover:opacity-90 font-bold">
            {project?.btn}
          </Button>
        </Link>
      </section>
    </div>
  );
}
