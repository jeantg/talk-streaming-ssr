import { PostProps } from "types";
import { Avatar } from "./Avatar";

export const Post = ({ post }: PostProps) => (
  <li>
    <article className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{post.date}</span>
        <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
          {post.tag}
        </span>
      </div>
      <div className="mt-2">
        <h1 className="text-2xl text-gray-700 font-bold ">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.body}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a className="text-blue-500 hover:underline" href="#">
          Read more
        </a>
        <div className="flex gap-4 items-center">
          <Avatar src={post.image} />
          <span className="text-gray-700 font-bold hover:underline">
            {post.userName}
          </span>
        </div>
      </div>
    </article>
  </li>
);
