"use client";
import { useContextApp } from "@/context/Context";
import { fetchPosts } from "@/services/api";
import { IPost, PostTypes } from "@/types/types";
import React, { useEffect, useState } from "react";
function MainAppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { postsSetter, Posts } = useContextApp();
  const [slides, setIslides] = useState<IPost[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  useEffect(() => {
    const fetcDatas = async () => {
      const lan = localStorage.getItem("lan") || "pt";
      const resp = await fetchPosts(PostTypes.ALL, lan);

      if (resp.status) {
        postsSetter(resp.posts);
        const filterd = await resp.posts.filter((post) => {
          return post.postType == 1;
        });
        setIslides(filterd);
      } else {
        setErrorMsg(resp.error);
      }

      setIsLoading(false);
    };

    fetcDatas();
  }, []);
  return <div>{children}</div>;
}

export default MainAppWrapper;
