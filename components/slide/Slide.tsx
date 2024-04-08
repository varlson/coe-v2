"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SlideItem from "@/components/ui/slideItem/SlideItem";
import { fetchPosts } from "@/services/api";
import { IPost, ModalTypes, PostTypes } from "@/types/types";
import { useContextApp } from "@/context/Context";
import Modal from "../modal/Modal";
import Spiner from "../ui/Spiner";
import ErrorMessage from "../ui/errorMsg/ErrorMessage";

function Slide() {
  const [Slide, setSlide] = useState<IPost[]>([]);
  const [slideLoading, setSlideLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const closeModalHandle = () => {
    setIsOpen(false);
  };
  const { Posts, postsSetter, errorMsg, errorSetter } = useContextApp();
  useEffect(() => {
    // const loadPosts = async () => {
    //   const resp = await fetchPosts(PostTypes.ALL);

    //   if (resp.status) {
    //     postsSetter(resp.posts);
    //     const filtred = resp.posts.filter((post) => {
    //       return post.postType == PostTypes.SLIDE;
    //     });
    //     setSlide(filtred);
    //   } else {
    //     errorSetter(resp.error);
    //   }
    // };

    if (Posts.length >= 1) {
      const filtred = Posts.filter((post) => {
        return post.postType == PostTypes.SLIDE;
      });
      setSlide(filtred);
      setSlideLoading(false);
    }
  }, [Posts.length, errorMsg]);

  if (slideLoading)
    return (
      <div className="md:h-[calc(100vh-200px)] justify-center items-center flex">
        <Spiner />
      </div>
    );

  return (
    <div className="md:h-[calc(100vh-200px)] bg-slate-40 ">
      {!errorMsg ? (
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
              {Slide.map((slide, index) => (
                <SwiperSlide key={index}>
                  <SlideItem
                    text={slide.resumo}
                    link={slide.slug}
                    src={slide.img}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      ) : (
        <ErrorMessage errorMsg={errorMsg} />
      )}
    </div>
  );
}

export default Slide;
