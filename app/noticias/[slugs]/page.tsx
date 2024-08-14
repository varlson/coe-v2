"use client";
import Spiner from "@/components/ui/Spiner";
import { useContextApp } from "@/context/Context";
import { fetchOnPostSlug } from "@/services/api";
import { IPost } from "@/types/types";
import { dateFormater } from "@/util/util";
import Image from "next/image";
import React, { useEffect, useState } from "react";
function Page({ params }: { params: { slugs: string } }) {
  const { Posts, lan } = useContextApp();
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const findBySlug = async () => {
      const resp = await fetchOnPostSlug(params.slugs);
      if (resp.status) {
        if (lan == "en" || lan == "es") {
          const [title, resumo, body] = resp.posts[lan].split("=>");
          const currentPost = {
            ...resp.posts,
            title: title,
            resumo: resumo,
            body: body,
          };
          setPost(currentPost);
        } else {
          setPost(resp.posts);
        }
        setIsloading(false);
      } else {
        setIsloading(false);
      }
    };

    findBySlug();
  }, [lan]);
  return (
    <div className="md:w-9/12 m-auto p-2">
      {post ? (
        <div className="bg-white shadow px-3 py-2 rounded">
          <p className="title1 text-justify bg-red800 text-white p-2 mb-5 rounded">
            {post.title}
          </p>
          <Image
            className="object-cover h-60 md:h-96 w-full"
            height={800}
            width={1000}
            alt="post"
            src={post?.img}
            placeholder="blur"
            blurDataURL="/imgs/laoding.jpg"
          />
          <div className="">
            <p className="my-2 title3 text-red800 text-justify p-2">
              {post.resumo}
            </p>
            <p className="text-justify">{post.body}</p>
          </div>

          <div className=" flex justify-between text-sm mt-2 font-jura">
            <p>
              Por:{" "}
              <span className="ml-2 font-jura font-bold">
                {post.author_name}
              </span>
            </p>

            <p>{dateFormater(post.createdAt)}</p>
          </div>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
}

export default Page;
