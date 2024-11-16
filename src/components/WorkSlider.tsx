"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { workSliderData } from "@/lib/constants";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSliderData.slides.map((slide, slideIndex) => (
        <SwiperSlide key={`slide-${slideIndex}`}>
          {/* =========== Slider Grid =========== */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
            {slide.items.map((item, itemIndex) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={`item-${slideIndex}-${itemIndex}`}
              >
                {/* =========== Project Link & Image =========== */}
                <Link
                  href={item.href}
                  target="_blank"
                  aria-label={`View ${item.title}`}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-full object-contain"
                  />

                  {/* =========== Overlay Gradient =========== */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* =========== Title =========== */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                      <div className="transition-transform duration-300 delay-100">
                        LIVE
                      </div>
                      <div className="transition-transform duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl transition-transform duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
