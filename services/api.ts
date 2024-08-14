import { IPost, IUser, PostTypes } from "../types/types";

export const fetchPosts = async (postType: PostTypes, lan = "pt") => {
  const fetchOptions = {
    method: "GET",
  };

  type FetchPostType =
    | { status: true; posts: IPost[] }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/posts/${lan}/${postType}`,
        fetchOptions
      );
      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, posts: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};

export const fetchOnPost = async (id: string, lan = "pt") => {
  const fetchOptions = {
    method: "GET",
  };

  type FetchPostType =
    | { status: true; posts: IPost }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/post/${id}/${lan}`,
        fetchOptions
      );

      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, posts: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};

export const fetchOnPostSlug = async (slug: string) => {
  const fetchOptions = {
    method: "GET",
  };

  type FetchPostType =
    | { status: true; posts: IPost }
    | { status: false; error: string };

  return new Promise<FetchPostType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/api/post-slug/${slug}`,
        fetchOptions
      );

      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, posts: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};

export const fetchOnUser = async (id: string) => {
  const fetchOptions = {
    method: "GET",
  };

  type FetchUserType =
    | { status: true; user: IUser }
    | { status: false; error: string };

  return new Promise<FetchUserType>(async (resolve, reject) => {
    try {
      const fetchResp = await fetch(
        `http://localhost:3210/auth/user/${id}`,
        fetchOptions
      );

      const postsResp = await fetchResp.json();

      if (postsResp.status) {
        resolve({ status: true, user: postsResp.content });
      } else {
        reject({ status: false, error: postsResp.error });
      }
    } catch (error: any) {
      reject({ status: false, error: error.message });
    }
  });
};
