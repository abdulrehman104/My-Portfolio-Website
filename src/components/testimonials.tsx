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
import { testimonials } from "@/lib/constants";

export const TestimonialsSection = () => {
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

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <Card className="relative group rounded-2xl bg-gradient-to-b from-[#1A123E] to-[#0A051E] p-8 transition-all duration-300 border-none">
                  <CardContent className="p-0 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-white font-semibold">
                          {testimonial.author}
                        </h4>
                        <p className="text-[#8b5cf6] text-sm">
                          {testimonial.role} at {testimonial.company}
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
    </section>
  );
};
