"use client";
import { useContextApp } from "@/context/Context";
import { fetchPosts } from "@/services/api";
import { PostSrvices } from "@/services/postServices/post.services";
import { IPost, PostTypes } from "@/types/types";
import React, { useEffect, useState } from "react";
function MainAppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { postsSetter } = useContextApp();
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    const fetcDatas = async () => {
      const posts = await PostSrvices.getAllPosts<IPost[]>("/api/posts");
      postsSetter(posts);
      setIsLoading(false);
    };

    // if(!Posts.length)

    fetcDatas();
  }, []);
  return <div>{children}</div>;
}

export default MainAppWrapper;
