"use client";
import { Comment, User } from "@prisma/client";
import { useState } from "react";
import { Avatar } from "./Avatar";
type CommentProps = {
  user: User;
} & Comment;
const Comment = ({ user: { imageUrl, name }, comment, date }: CommentProps) => {
  const [commentState, setComment] = useState(comment);
  const handleComment = () => setComment("New comment");
  return (
    <li className="flex gap-4 items-center">
      <Avatar src={imageUrl} />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-bold text-xs">{name}</span>
          <span className="font-light text-gray-600 text-[10px] ">{date}</span>
        </div>
        <button
          title="Change Comment"
          className="text-gray-500"
          onClick={handleComment}
        >
          {commentState}
        </button>
      </div>
    </li>
  );
};
export default Comment;
