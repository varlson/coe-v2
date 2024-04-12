"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SlideItem from "@/components/ui/slideItem/SlideItem";
import { IPost } from "@/types/types";

function Slide({ slides }: { slides: IPost[] }) {
  return (
    <div className="md:h-[calc(100vh-200px)] bg-slate-40 ">
      <div className=" ">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-full"
        >
          <div className=" h-[calc(50vh)] md:h-[calc(100vh-200px)] bg-slate-700 ">
            {slides.length ? (
              slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <SlideItem
                    text={slide.resumo}
                    link={slide.slug}
                    src={slide.img}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p className="title2 text-red900 ">
                Ainda não foram adicionados slides
              </p>
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Slide;
