"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { urlFor } from "@/sanity/lib/image";
import { ALL_TESTIMONIALS_QUERYResult } from "../../sanity.types";

type Props = {
  testimonial: ALL_TESTIMONIALS_QUERYResult;
};

export const CarouselSection = ({ testimonial }: Props) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonial.map((testimonial) => (
            <CarouselItem
              key={testimonial._id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <Card className="relative group rounded-2xl bg-gradient-to-b from-[#1A123E] to-[#0A051E] p-8 transition-all duration-300 border-none">
                <CardContent className="p-0 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {testimonial.shortDescription}
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        // @ts-ignore
                        src={urlFor(testimonial.images.asset).url()}
                        alt={testimonial.title}
                      />
                      <AvatarFallback>{testimonial?.title}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.title}
                      </h4>
                      <p className="text-[#8b5cf6] text-sm">
                        {testimonial?.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="hidden md:flex justify-center mt-8 gap-2">
        <CarouselPrevious className=" bg-[#110a2f]  text-white hover:bg-white hover:text-[#1c1544]" />
        <CarouselNext className=" bg-[#110a2f]  text-white hover:bg-white hover:text-[#1c1544]" />
      </div> */}
      </Carousel>
    </div>
  );
};
