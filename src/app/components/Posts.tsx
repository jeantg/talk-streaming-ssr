import "server-only";
import { Post } from "./Post";
const data = [
  {
    id: 1,
    date: "Jan 1, 2020",
    tag: "React",
    title: "Build Your New Idea with React Framework.",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    image: "/01.avif",
    userName: "Alex John",
  },
];
export const Posts = () => {
  return (
    <ul className="flex  gap-4 flex-col mt-4">
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
};
