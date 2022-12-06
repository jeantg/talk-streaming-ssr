import { Post } from "@prisma/client";
import { ReactNode } from "react";
export type Children = { children: ReactNode };
export type PostProps = {
  post: Post;
};

export type PostValues = {
  id?: string;
  date?: string;
  tag?: string;
  title?: string;
  body?: string;
  image?: string;
  userName?: string;
};
export type PostsProps = {
  posts?: PostValues[];
};
