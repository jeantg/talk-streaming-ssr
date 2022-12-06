"use client";
import { Comment } from "@prisma/client";
import { useState } from "react";
import { Avatar } from "./Avatar";

const Comment = ({ srcImage, userName, comment, date }: Comment) => {
  const [commentState, setComment] = useState(comment);
  const handleComment = () => setComment("New comment");
  return (
    <li>
      <div className="flex gap-4 items-center">
        <Avatar src={srcImage} />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-bold text-xs">{userName}</span>
            <span className="font-light text-gray-600 text-[10px] ">
              {date}
            </span>
          </div>
          <button
            title="Change Comment"
            className="text-gray-500"
            onClick={handleComment}
          >
            {commentState}
          </button>
        </div>
      </div>
    </li>
  );
};
export default Comment;
