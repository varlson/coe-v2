"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SlideItem from "@/components/ui/slideItem/SlideItem";

function Slide() {
  return (
    <div className="h-[calc(100vh-162px)] bg-slate-400">
      <div className="bg-orange-300 h-full">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <SlideItem src="1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem src="2.jpg" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem src="3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem src="1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem src="2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slide;
