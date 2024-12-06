import { client, getServiceEntryBySlug } from "@/lib/contentful";
import { BLOCKS, Document } from "@contentful/rich-text-types";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "services",
    select: "fields.slug",
  };
  const services = await client.getEntries(queryOptions);
  return services.items.map((service) => ({
    slug: service.fields.slug,
  }));
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = params;

  const service = await getServiceEntryBySlug(slug, "services");
  const {
    title,
    tagline,
    shortDescription,
    description,
    callToAction,
    buttonText,
  } = service.fields;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-2xl font-semibold mb-3">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-gray-400 mb-2">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="mb-1">{children}</li>
      ),
    },
  };

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
            {title as string}
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-lg lg:text-xl text-gray-200">
            {tagline as string}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 space-y-10">
        <p className="text-center md:text-lg bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-transparent bg-clip-text font-bold md:max-w-[1200px] md:mx-auto">
          {shortDescription as string}
        </p>
        <div className="space-y-4">
          {documentToReactComponents(description as Document, options)}
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-lg md:text-2xl font-bold text-white mb-4">
          {callToAction as string}
        </h2>
        <Link href="/contact-us">
          <Button className="bg-gradient-to-r from-[#8A7FF8] to-[#FF3BFF] text-white p-6 md:p-8 hover:opacity-90 md:text-lg font-bold">
            {buttonText as string}
          </Button>
        </Link>
      </section>
    </div>
  );
}
