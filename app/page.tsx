"use client";
import Cards from "@/components/card/Cards";
import LeftSide from "@/components/leftSide/LeftSide";
import RightSide from "@/components/rightSide/RightSide";
import Slide from "@/components/slide/Slide";
import ErrorMessage from "@/components/ui/errorMsg/ErrorMessage";
import { useContextApp } from "@/context/Context";
import { IPost } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { postsSetter, Posts, CurrentPosts } = useContextApp();
  const [slides, setSlides] = useState<IPost[]>([]);

  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  useEffect(() => {
    setSlides(CurrentPosts.filter((item) => item.postType == 1));
  }, [CurrentPosts]);

  return (
    <main className="md:w-9/12 m-auto px-5 md:px-0">
      <div className="text-white md:block fixed hidden left-0 right-0  asides ">
        <div className="flex justify-between">
          <div className="ml-4   p-4">
            <LeftSide />
          </div>
          <div className="mr-4 ">
            <RightSide />
          </div>
        </div>
      </div>
      {errorMsg ? (
        <ErrorMessage errorMsg={errorMsg} />
      ) : (
        <div className="mt-4 ">
          {slides.length >= 1 ? (
            <Slide slides={slides} />
          ) : (
            <p className="title3 text-center">Slides ainda não adicionados</p>
          )}
        </div>
      )}

      <div className="my-5 min-h-screen justify-center items-center flex">
        {Posts.length >= 1 ? (
          <Cards />
        ) : (
          <p className="title3 text-center">Posts ainda não adicionados</p>
        )}
      </div>
    </main>
  );
}
