"use client";
import React, { useEffect, useState } from "react";
import CardItems from "../ui/news-cards/CardItems";
import { useContextApp } from "@/context/Context";
import Spiner from "../ui/Spiner";
import { fetchPosts } from "@/services/api";
import { PostTypes } from "@/types/types";
import ErrorMessage from "../ui/errorMsg/ErrorMessage";

function Cards() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const datas = ["1.jpg", "2.jpg", "3.png", "4.jpeg"];
  const { errorMsg, Posts, lanInitializer, errorSetter, postsSetter } =
    useContextApp();

  useEffect(() => {
    const fetching = async () => {
      try {
        const resp = await fetchPosts(PostTypes.ALL);

        if (resp.status) {
          postsSetter(resp.posts);
        } else {
          errorSetter(resp.error);
        }
        setIsLoading(false);
      } catch (error: any) {
        errorSetter(error.error || error.message);
        setIsLoading(false);
      }
    };

    if (!errorMsg || Posts.length == 0) {
      fetching();
    } else {
      setIsLoading(false);
      console.log("set time:");
      console.log(errorMsg);
      console.log(Posts);
    }
  }, [lanInitializer, Posts, errorMsg, errorSetter, postsSetter]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[calc(50vh)]">
        <Spiner />
      </div>
    );
  return (
    <div className="">
      <p className=" bg-red900 text-white p-2 title1 my-2 border-b  rounded">
        Notícias
      </p>

      {!errorMsg ? (
        <div className=" grid grid-cols-2  justify-items-center">
          {Posts.map((item, index) => (
            <div className="px-5" key={index}>
              <CardItems {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          <ErrorMessage errorMsg={errorMsg} />
        </div>
      )}
    </div>
  );
}

export default Cards;
